import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import cors from 'cors';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());
  app.use(cors());

  // Initialize Gemini
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

  // API Routes
  app.post('/api/chat', async (req, res) => {
    try {
      const { message } = req.body;
      const response = await ai.models.generateContent({
        model: 'gemini-3.5-flash',
        contents: message,
        config: {
          systemInstruction: "You are the Wanderer's Guide for Bodh Gaya, answering questions about the city, Cafe, and things to do. Keep it brief and charming.",
          tools: [{ googleSearch: {} }, { googleMaps: {} }],
        }
      });
      res.json({ reply: response.text });
    } catch (error: any) {
      console.error("Chat Error:", error);
      res.status(500).json({ error: error.message || "Failed to get AI response" });
    }
  });

  app.post('/api/generate-image', async (req, res) => {
    try {
      const { prompt, size } = req.body;
      
      // Default size parsing if needed, but the model supports standard ratios. 
      // We'll pass the resolution info in the prompt or use aspect ratio.
      // Wait, standard `gemini-3-pro-image-preview` doesn't strictly have a size config for 1K/2K/4K via the generic JS SDK unless specifically typed. 
      // Let's rely on standard image generation call.
      
      let width = 1024, height = 1024;
      if (size === '2K') { width = 2048; height = 2048; }
      else if (size === '4K') { width = 4096; height = 4096; }

      // We'll use the new image generation API format
      const response = await ai.models.generateImages({
        model: 'gemini-3-pro-image-preview',
        prompt: `High quality ${size} resolution. In the style of a whimsical travel postcard from Bodh Gaya: ${prompt}`,
        config: {
            numberOfImages: 1,
            outputMimeType: "image/jpeg",
        }
      });
      
      if (response.generatedImages && response.generatedImages.length > 0) {
        // Return base64 string
        res.json({ image: `data:image/jpeg;base64,${response.generatedImages[0].image.imageBytes}` });
      } else {
         throw new Error("No image generated");
      }
    } catch (error: any) {
      console.error("Image Gen Error:", error);
      res.status(500).json({ error: error.message || "Failed to generate image" });
    }
  });


  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    // For Express 4
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

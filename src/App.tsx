/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Story from './components/Story';
import Vibe from './components/Vibe';
import Gallery from './components/Gallery';
import Whispers from './components/Whispers';
import FindUs from './components/FindUs';

export default function App() {
  return (
    <div className="relative w-full min-h-screen bg-[var(--color-charcoal-base)] text-[var(--color-parchment)] selection:bg-[var(--color-amber)] selection:text-[var(--color-charcoal-base)]">
      <Navigation />
      
      <main>
        <Hero />
        <Story />
        <Vibe />
        <Gallery />
        <Whispers />
      </main>

      <FindUs />
    </div>
  );
}

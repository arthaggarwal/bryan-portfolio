
"use client";

import React from 'react';
import NavigationBar from './navigation-bar';
import { cn } from '@/lib/utils';

// Updated SVG for more "evenly aligned" triple hexagons, s=80 (scaled from s=60), pointy-topped
// Arranged in a small downward-pointing triangle with spacing.
// ViewBox adjusted for new coordinates.
// Display size: width="545" height="550" (Corrected for aspect ratio and made much larger)
const TripleHexagonClusterSVG = () => (
  <svg
    viewBox="-6.67 0 290.46 293.34"
    width="545"
    height="550"
    xmlns="http://www.w3.org/2000/svg"
    fill="hsl(var(--primary))" // Changed back to fill with primary color
    aria-hidden="true"
  >
    {/* Hexagon 1 (Top of the cluster) s=80 */}
    <path d="M 138.56,0 L 207.84,40 L 207.84,120 L 138.56,160 L 69.28,120 L 69.28,40 Z" />
    {/* Hexagon 2 (Bottom-left of the cluster) s=80 */}
    <path d="M 62.613,133.333 L 131.893,173.333 L 131.893,253.333 L 62.613,293.333 L -6.667,253.333 L -6.667,173.333 Z" />
    {/* Hexagon 3 (Bottom-right of the cluster) s=80 */}
    <path d="M 214.507,133.333 L 283.787,173.333 L 283.787,253.333 L 214.507,293.333 L 145.227,253.333 L 145.227,173.333 Z" />
  </svg>
);

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={cn("flex flex-col min-h-screen overflow-x-hidden")}>
      <div className="corner-hexagon-cluster-tr">
        <TripleHexagonClusterSVG />
      </div>
      <div className="corner-hexagon-cluster-bl">
        <TripleHexagonClusterSVG />
      </div>
      
      <NavigationBar />
      <main className="flex-grow px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <footer className="text-center py-6 text-sm text-muted-foreground">
        {/* Copyright removed as requested */}
      </footer>
    </div>
  );
}

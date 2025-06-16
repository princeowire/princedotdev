'use client';
import { useEffect } from 'react';
import Blobity from 'blobity';

export default function BlobityCursor() {
  useEffect(() => {
    const blobity = new Blobity({
      licenseKey: 'opensource',

      // Cursor appearance
      color: '#E3D3BE',     // Blob color
      dotColor: '#fbbf24',  // Center dot
      opacity: .4, // Opacity of the blob
      mode: 'bouncy',

      // Size
      dotSize: 20,    // default is 4
      blobSize: 80,   // default is 40

      // Smoothness
      radius: 12,     // Higher = smoother, slower turning

      // Magnetic effect on hover targets
      magnetic: true,

      // Font interaction
      font: "'Kumbh Sans', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif",
      fontSize: 16,
      fontWeight: 500,
      fontColor: '#08233b',

      // Focus behavior
      focusableElements:
        "[data-blobity], button:not([data-no-blobity]), [data-blobity-tooltip]",
      focusableElementsOffsetX: 4,
      focusableElementsOffsetY: 4,

      // Z-index to stay above everything
      zIndex: 1000,
    });

    return () => {
      blobity.destroy();
    };
  }, []);

  return null;
}

# Support Documentation Assets

This directory contains images and videos used in the support documentation MDX files.

## File Structure

Place your images and videos here with descriptive filenames:

- `microsd-card.jpg` - Example image showing a microSD card
- `insert-microsd.mp4` - Example video showing how to insert a microSD card

## Usage in MDX

Reference these files in your MDX content using the `Figure` and `VideoFigure` components:

```mdx
import { Figure, VideoFigure } from '@/components/docs'

<Figure 
  src="/content/public/support/microsd-card.jpg" 
  alt="A microSD card showing the gold contacts"
  caption="Figure 1 - This is what a microSD card looks like"
/>

<VideoFigure 
  src="/content/public/support/insert-microsd.mp4"
  caption="Figure 2 - How to properly insert a microSD card into the Raspberry Pi 5"
/>
```

**Important:** Always use the `/content/public/` prefix when referencing files from this directory.

## Image Guidelines

- **Format**: JPG or PNG for images, MP4 for videos
- **Naming**: Use kebab-case (e.g., `microsd-card.jpg`)
- **Size**: Optimize images before uploading (recommended max 2MB per image)
- **Dimensions**: Images will be responsive, but aim for 1200px width for best quality

## Video Guidelines

- **Format**: MP4 (H.264 codec recommended for best browser compatibility)
- **Resolution**: 1080p (1920x1080) or 720p (1280x720)
- **Duration**: Keep videos concise (under 2 minutes for best UX)

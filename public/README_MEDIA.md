# Media Setup Guide for Bright & Beauty Website

Save Jiya Vadhwani's client photos and videos in the following organized folders inside `public/`:

## Folder Structure

```
public/
├── images/
│   ├── hero/          <- Hero banner background images
│   ├── about/         <- Jiya's artist portrait & studio photos
│   ├── services/      <- Service card images (Bridal, Party, HD, Destination)
│   └── portfolio/     <- Portfolio gallery photos (Look 1, Look 2, etc.)
└── videos/
    └── hero-reel.mp4  <- Video reels / background videos
```

## Important Note on WhatsApp Formats (.HEIC & .MOV)

- **Photos (.HEIC from iPhone)**: Web browsers (Chrome, Edge, Firefox) do NOT support iPhone `.HEIC` photos directly. Convert `.HEIC` photos to `.jpg` or `.webp` before placing them in `public/images/`.
  - *Tip on Mac*: Select `.HEIC` photos in Finder -> Right click -> Quick Actions -> **Convert Image** -> Format: **JPEG** or **WebP**.
- **Videos (.MOV from iPhone)**: Convert `.MOV` videos to compressed `.mp4` format for smooth web streaming.

## Updating Content Data

Once you drop your converted photos/videos into `public/`, simply update the image paths in `src/data/content.ts`, for example:
```ts
image: "/images/portfolio/bridal-look-1.jpg"
```

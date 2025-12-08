import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

/**
 * Route handler to serve static files from content/public
 * This allows MDX files to reference images/videos in content/public
 * Usage: /content/public/support/image.jpg
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path: pathSegments } = await params;
  const filePath = pathSegments.join('/');
  
  // Security: Prevent directory traversal
  if (filePath.includes('..') || filePath.includes('~')) {
    return new NextResponse('Forbidden', { status: 403 });
  }

  const fullPath = path.join(process.cwd(), 'content', 'public', filePath);
  
  // Check if file exists
  if (!fs.existsSync(fullPath)) {
    return new NextResponse('Not Found', { status: 404 });
  }

  // Check if it's actually a file (not a directory)
  const stats = fs.statSync(fullPath);
  if (!stats.isFile()) {
    return new NextResponse('Not Found', { status: 404 });
  }

  // Read file and determine content type
  const fileBuffer = fs.readFileSync(fullPath);
  const ext = path.extname(fullPath).toLowerCase();
  
  const contentTypeMap: Record<string, string> = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml',
    '.mp4': 'video/mp4',
    '.webm': 'video/webm',
    '.mov': 'video/quicktime',
    '.pdf': 'application/pdf',
  };

  const contentType = contentTypeMap[ext] || 'application/octet-stream';

  return new NextResponse(fileBuffer, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}

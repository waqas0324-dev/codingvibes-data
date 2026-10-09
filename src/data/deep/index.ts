// Deep lesson content for all paths — Roman Urdu, beginner-friendly.
// Each array is 0-indexed: index 0 = lesson 1.
import { htmlDeepLessons } from './html';
import { cssDeepLessons } from './css';
import { jsDeepLessons } from './js';
import { reactDeepLessons } from './react';
import { nodeDeepLessons } from './node';
import { fullstackDeepLessons } from './fullstack';

export const deepLessons: Record<string, any[]> = {
  html: htmlDeepLessons as unknown as any[],
  css: cssDeepLessons as unknown as any[],
  javascript: jsDeepLessons as unknown as any[],
  react: reactDeepLessons as unknown as any[],
  node: nodeDeepLessons as unknown as any[],
  fullstack: fullstackDeepLessons as unknown as any[],
};

export { htmlDeepLessons, cssDeepLessons, jsDeepLessons, reactDeepLessons, nodeDeepLessons, fullstackDeepLessons };


import React from 'react';
import { Layout, Palette, Image, Sparkles, BookOpen } from 'lucide-react';

export const COLORS = {
  primary: '#2d4d44',
  secondary: '#0d1a16',
  accent: '#a8d5ba',
  text: '#d1c7b7',
  highlight: '#ffffff',
};

export const NAVIGATION_ICONS = [
  { id: 'hero', icon: <Layout className="w-5 h-5" />, label: 'Home' },
  { id: 'portfolio', icon: <Palette className="w-5 h-5" />, label: 'Portfolio' },
  { id: 'gallery', icon: <Image className="w-5 h-5" />, label: 'Gallery' },
  { id: 'oracle', icon: <BookOpen className="w-5 h-5" />, label: 'Oracle' },
];

export const PROJECTS = [
  {
    title: "Verdant Dreams",
    category: "Botanical Design",
    description: "A deep dive into mossy textures and ancient ferns.",
    image: "https://images.unsplash.com/photo-1501004318641-72ee5fdee2c1?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Cerulean Whispers",
    category: "Floral Installation",
    description: "High-contrast blue flora in minimalist spaces.",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Amber Glow",
    category: "Digital Art",
    description: "The warmth of sunset captured in organic layers.",
    image: "https://images.unsplash.com/photo-1507290439931-a861b5a38200?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Midnight Flora",
    category: "Conceptual Art",
    description: "Bioluminescent plants of the deep valley.",
    image: "https://images.unsplash.com/photo-1533276395701-451450cf4c5c?auto=format&fit=crop&q=80&w=800"
  }
];

export const FOOTER_SECTIONS = [
  {
    title: 'COLLECTION',
    items: ['Verdant Dreams', 'Cerulean Whispers', 'Amber Glow', 'Midnight Flora']
  },
  {
    title: 'CRAFTSMANSHIP',
    items: ['Ethical Sourcing', 'Sustainable Dyeing', 'Hand-Stitched', 'Artisan Legacy']
  }
];

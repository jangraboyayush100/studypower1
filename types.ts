
import React from 'react';

export interface Institution {
  id: string;
  name: string;
  image: string;
  location: string;
  rating: number;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

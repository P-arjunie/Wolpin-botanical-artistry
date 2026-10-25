
export interface FeatureItem {
  id: string;
  icon: string;
  label: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

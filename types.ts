
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  title: string;
  category: string;
  result: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export enum MessageRole {
  USER = 'user',
  AI = 'ai'
}

export interface ChatMessage {
  role: MessageRole;
  content: string;
}

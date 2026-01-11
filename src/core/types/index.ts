export interface PlatformConfig {
  id: string;
  name: string;
  api: Record<string, string>;
  lang: string | number;
  menu: string[];
}

export interface Drama {
  id: string;
  title: string;
  poster?: string;
  description?: string;
  rating?: number;
  episodes?: number;
  status?: string;
  genre?: string[];
}

export interface Episode {
  id: string;
  number: number;
  title: string;
  thumbnail?: string;
  duration?: number;
}

export interface ApiResponse<T = any> {
  success?: boolean;
  data?: T;
  message?: string;
  error?: string;
  [key: string]: any;
}

interface BlogPost {
  title: string;
  slug: string;
  abstract?: string;
  body?: string;
  published?: string;
  views?: number;
  tags?: string[];
  created?: string;
  modified?: string;
}

interface Featured {
  recent: BlogPost[];
  popular: BlogPost[];
}

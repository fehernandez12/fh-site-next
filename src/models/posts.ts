interface Status {
  name: string;
}

interface BlogPost {
  title: string;
  slug: string;
  abstract?: string;
  body?: string;
  published?: string;
  status?: Status;
  views?: number;
  tags?: string[];
  created?: string;
  modified?: string;
}

interface Featured {
  recent: BlogPost[];
  popular: BlogPost[];
}

export interface AppInfo {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  iconBg: string;
  liveUrl: string;
  githubUrl: string;
  tags: string[];
  features: string[];
  techStack: string[];
  landingUrl?: string;
}

export const apps: AppInfo[] = [
  {
    id: 'media-inquiries',
    name: 'Media Inquiries Tracker',
    tagline: 'Track and manage incoming media inquiries',
    description:
      'A Kanban-style dashboard for tracking incoming media inquiries to the Office of Research and Development. Similar to Microsoft Planner, it allows teams to manage the full lifecycle of media requests — from intake through resolution. Past entries are fully searchable and exportable for analysis and reporting. Tracks news agency, reporter, subject, source/SME, and more.',
    icon: '📰',
    iconBg: '#1a73e8',
    liveUrl: 'https://dbartlinski.github.io/Media-Inquiries/',
    githubUrl: 'https://github.com/DBartlinski/Media-Inquiries',
    tags: ['Communications', 'Tracking'],
    features: [
      'Kanban-style board for visual workflow management',
      'Track news agency, reporter, subject, and source/SME',
      'Search and filter past inquiry entries',
      'Export data for reporting and analysis',
      'Data stored via GitHub API — no backend server required',
    ],
    techStack: ['React', 'TypeScript', 'Vite', 'GitHub API'],
    landingUrl: 'https://dbartlinski.github.io/Media-Inquiries/landing.html',
  },
  {
    id: 'va-active-studies',
    name: 'VA Active Studies',
    tagline: 'Searchable dashboard of VA-funded research projects',
    description:
      'Transforms raw data into a searchable, filterable dashboard showing all current active VA-funded research projects across the country. Browse 1,843+ active studies across 12 research programs (FY2026) with category, award, and status filtering, location search, and direct links to NIH Reporter for 89% of studies.',
    icon: '🔬',
    iconBg: '#0d652d',
    liveUrl: 'https://dbartlinski.github.io/va-research-active-studies/',
    githubUrl: 'https://github.com/DBartlinski/va-research-active-studies',
    tags: ['Data & Analytics', 'Research'],
    features: [
      'Browse 1,843+ active VA research studies',
      'Filter by category, award type, and status',
      'Location-based search across all VA facilities',
      'Direct links to NIH Reporter for study details',
      'Standalone HTML — no server required',
    ],
    techStack: ['HTML', 'JavaScript', 'Python'],
  },
  {
    id: 'pubtracker',
    name: 'PubTracker Compliance Report Generator',
    tagline: 'Automated VA publication compliance reporting',
    description:
      'Takes direct PubTracker data and VA Dimensions research data to generate VA facility compliance reports for research reporting to the PubTracker system. Upload PubTracker CSV and Dimensions CSV files, and the tool automatically generates per-quarter compliance reports. All processing happens in the browser — no data leaves your machine.',
    icon: '📊',
    iconBg: '#e8710a',
    liveUrl: 'https://dbartlinski.github.io/PubTracker/',
    githubUrl: 'https://github.com/DBartlinski/PubTracker',
    tags: ['Compliance', 'Reporting'],
    features: [
      'Upload PubTracker and Dimensions CSV data',
      'Automated compliance report generation per quarter',
      'Compare publication data across systems',
      'All processing in-browser — data never leaves your machine',
      'Export generated reports for distribution',
    ],
    techStack: ['Python', 'HTML', 'JavaScript'],
  },
  {
    id: 'knowledge-repository',
    name: 'ORD Comms Knowledge Repository',
    tagline: 'Searchable catalog of VA research topics',
    description:
      'Catalogues current information about various VA Research topics. Content is fully searchable and filterable, making it easy to find the most recent information on any research topic for reporting and answering media inquiries. Features document preview with search highlighting.',
    icon: '📚',
    iconBg: '#7b1fa2',
    liveUrl: 'https://dbartlinski.github.io/know-repo/',
    githubUrl: 'https://github.com/DBartlinski/know-repo',
    tags: ['Knowledge Management', 'Search'],
    features: [
      'Searchable catalog of VA research topics',
      'Filterable content by topic and category',
      'Document preview with search term highlighting',
      'Find the latest information for media inquiries',
      'Quick access to research topic summaries',
    ],
    techStack: ['Python', 'JavaScript', 'CSS'],
  },
  {
    id: 'policy-library',
    name: 'Policy Library',
    tagline: 'VA research document management system',
    description:
      'A comprehensive document management system for VA research teams. Upload, search, and track reviews of policies and guidance documents with AI-powered Q&A and automated email reminders. Features full-text search, document categorization, and review tracking.',
    icon: '📋',
    iconBg: '#c62828',
    liveUrl: 'https://dbartlinski.github.io/Policy-Library/',
    githubUrl: 'https://github.com/DBartlinski/Policy-Library',
    tags: ['Document Management', 'Policy'],
    features: [
      'Upload and manage policy documents',
      'Full-text search across all documents',
      'Automated review tracking and reminders',
      'AI-powered Q&A for quick policy lookups',
      'Document categorization and tagging',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'SQLite'],
  },
];

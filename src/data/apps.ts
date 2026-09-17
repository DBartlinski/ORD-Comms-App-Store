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
    name: 'PubTracker Compliance Report',
    tagline: 'Automated VA publication compliance reporting',
    description:
      'VA Researcher Publication Compliance — an automated report generator comparing PubTracker submissions against VA Dimensions research data to produce per-quarter facility compliance reports. Auto-loads the latest generated dataset, or upload your own PubTracker and Dimensions files for ad-hoc runs. All processing happens locally in your browser — no data leaves your machine.',
    icon: '📊',
    iconBg: '#e8710a',
    liveUrl: 'https://dbartlinski.github.io/PubTracker/index.html',
    githubUrl: 'https://github.com/DBartlinski/PubTracker',
    tags: ['Compliance', 'Reporting'],
    features: [
      'Auto-loads the latest generated PubTracker/Dimensions dataset',
      'Upload PubTracker and Dimensions CSV data for custom runs',
      'Automated compliance report generation per quarter',
      'Compare publication data across systems, per VAMC facility',
      'All processing in-browser — data never leaves your machine',
      'Export generated reports (CSV and summary) for distribution',
    ],
    techStack: ['Python', 'HTML', 'JavaScript'],
  },
  {
    id: 'va-publications-dashboard',
    name: 'VA Publications Dashboard',
    tagline: 'Interactive dashboard of VA-affiliated research publications',
    description:
      'Visualizes Dimensions publication records, facility attribution, and ORD portfolio estimates entirely in your browser. Explore fiscal-year trends, document types, ORD portfolio breakdowns, and top facilities across thousands of VA-affiliated publications, with filtering by fiscal year, facility, and portfolio, plus direct links to the PubTracker Compliance Report tool.',
    icon: '📚',
    iconBg: '#1565c0',
    liveUrl: 'https://dbartlinski.github.io/PubTracker/dashboard.html',
    githubUrl: 'https://github.com/DBartlinski/PubTracker',
    tags: ['Data & Analytics', 'Research'],
    features: [
      'Filter publications by fiscal year, facility, and ORD portfolio',
      'Search by title, author, DOI, or ID',
      'VA fiscal-year trend and document type breakdown charts',
      'Publications by ORD Broad and Actively Managed Portfolio',
      'Top facilities view with match-strength indicators',
      'All processing happens locally in your browser',
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
  {
    id: 'va-research-post-generator',
    name: 'VA Research Post Generator',
    tagline: 'Turn VA research into ready-to-post social media content — instantly',
    description:
      'A purpose-built tool for VA communications and research teams to transform research summaries into platform-optimized social media posts. Paste a research paper summary, tag relevant VA facilities and universities, and let AI generate polished, character-aware posts for X, Facebook, and Instagram in seconds. No formatting guesswork, no copy-paste juggling across tabs — just focused content, ready to publish.',
    icon: '💬',
    iconBg: '#0ea5e9',
    liveUrl: 'https://dbartlinski.github.io/VA-Research-Social-Media-dev/',
    githubUrl: 'https://github.com/DBartlinski/VA-Research-Social-Media-dev',
    tags: ['Social Media', 'Communications'],
    features: [
      'AI-powered post generation using OpenAI, Anthropic Claude, or Google Gemini',
      'Platform-specific formatting for X, Facebook, and Instagram',
      'Auto-generated hashtags tailored to each platform\'s audience',
      'Tag autocomplete for VA facilities, medical centers, and partner universities',
      'Optional URL attachment appended intelligently to each post',
      'One-click copy for each platform post',
      'Generation history panel to revisit and reuse past posts',
      'Fully client-side — your API key never leaves your browser',
    ],
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Zustand'],
  },
  {
    id: 'email-report-cleaner',
    name: 'Email Report Cleaner',
    tagline: 'Outlook CSV to review-ready Markdown',
    description:
      'Converts Outlook CSV exports into clean, review-ready Markdown files entirely in your browser. Upload one or more Outlook CSV exports, set a date range, and the tool redacts email addresses, strips signatures and quoted reply history, and normalizes whitespace to produce a tidy archive ready for review — no server, no uploads, no installation required.',
    icon: '📧',
    iconBg: '#2563eb',
    liveUrl: 'https://dbartlinski.github.io/email-report-cleaner-react/',
    githubUrl: 'https://github.com/DBartlinski/email-report-cleaner-react',
    tags: ['Productivity', 'Communications'],
    features: [
      'Runs entirely in your browser — files processed locally, never uploaded',
      'Redacts email addresses and removes Exchange routing IDs and SafeLink tracking URLs',
      'Strips known signatures/disclaimers and quoted reply history',
      'Filters messages by date range, excluding out-of-range and undated entries',
      'Instant conversion with no server or installation required',
      'Download a clean, review-ready Markdown archive',
    ],
    techStack: ['React', 'JavaScript', 'PapaParse', 'GitHub Pages'],
  },
];

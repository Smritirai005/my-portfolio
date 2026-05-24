export const projects = [
  {
    id: 1,
    title: 'Vector DB AI',
    description:
      'Fully working Vector Database built from scratch in C++ with a web UI. Implements HNSW, KD-Tree, and Brute Force search side-by-side, plus a RAG pipeline powered by a local LLM via Ollama.',
    tech: ['C++', 'HNSW', 'KD-Tree', 'RAG', 'Ollama', 'Web UI'],
    github: 'https://github.com/Smritirai005/vector-db-ai',
    live: null,
    badge: 'From Scratch',
  },
  {
    id: 2,
    title: 'LogSentinel',
    description:
      'Real-time log anomaly detection on AWS using an LSTM Autoencoder. HDFS Logs → Kinesis → Lambda processors → SageMaker endpoint → CloudWatch, SNS alerts, and Grafana.',
    tech: ['Python', 'AWS', 'Kinesis', 'Lambda', 'SageMaker', 'LSTM', 'Grafana'],
    github: 'https://github.com/Smritirai005/logsentinenl',
    live: null,
    badge: 'AWS Pipeline',
  },
  {
    id: 3,
    title: 'Fealth',
    description:
      'Finance management app with Clerk auth, multi-account tracking, budgets, AI transaction categorization, email alerts via Resend, and recurring jobs with Inngest.',
    tech: ['Next.js', 'Clerk', 'Inngest', 'Resend', 'AI', 'PostgreSQL'],
    github: 'https://github.com/Smritirai005/AI-finance-updated',
    live: null,
    badge: 'FinTech',
  },
  {
    id: 4,
    title: 'Urja Arena',
    description:
      'Eco-themed gamified React app for environmental awareness. Firebase auth, responsive UI, floating animations, impact metrics, and interactive sustainability features. Top 10 at SIH.',
    tech: ['React', 'Vite', 'Firebase', 'Lucide', 'Vercel'],
    github: 'https://github.com/Smritirai005/sih_gamified_final',
    live: 'https://sih-gamified-final.vercel.app/',
    badge: 'Top 10 SIH',
  },
  {
    id: 5,
    title: 'Music App',
    description:
      'Cross-platform music application built with React Native — browse, play, and manage tracks with a smooth mobile-first experience.',
    tech: ['React Native', 'JavaScript', 'Mobile UI'],
    github: 'https://github.com/Smritirai005/Music-app',
    live: null,
    badge: 'Mobile',
  },
];

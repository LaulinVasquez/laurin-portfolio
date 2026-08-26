export interface JourneyItem {
  label: string
  title: string
  description: string
}

export const journey: JourneyItem[] = [
  {
    label: 'Foundation',
    title: 'Computer Science at BYU–Idaho',
    description: 'Building a foundation in software design, programming, data, and web development.',
  },
  {
    label: 'Web development',
    title: 'From interfaces to complete applications',
    description: 'Progressed from responsive websites into React, Next.js, and application-focused user experiences.',
  },
  {
    label: 'Backend & data',
    title: 'Systems that persist and serve real workflows',
    description: 'Working with Node.js, Express, PostgreSQL, Supabase, authentication, and relational data.',
  },
  {
    label: 'Product building',
    title: 'Shipping full-stack projects',
    description: 'Applying those skills to finance, productivity, fitness, business, and market-data projects.',
  },
  {
    label: 'What’s next',
    title: 'AI-assisted software and useful automation',
    description: 'Exploring agents, AI APIs, and tools that make software more capable without losing sight of users.',
  },
]

export interface SkillGroup {
  label: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  { label: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS'] },
  { label: 'Backend', items: ['Node.js', 'Express', 'REST APIs', 'Python'] },
  { label: 'Data', items: ['PostgreSQL', 'Supabase'] },
  { label: 'Tools', items: ['Git', 'GitHub'] },
  { label: 'Exploring', items: ['AI APIs', 'AI Agents', 'Automation'] },
]

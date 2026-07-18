export type ProjectStatus = 'Live' | 'In development' | 'Complete' | 'Prototype'

export type ProjectLinkKind = 'github' | 'demo'

export interface ProjectLink {
  label: string
  href: string
  kind: ProjectLinkKind
}

export interface Project {
  id: string
  title: string
  description: string
  techStack: string[]
  status: ProjectStatus
  links: ProjectLink[]
}

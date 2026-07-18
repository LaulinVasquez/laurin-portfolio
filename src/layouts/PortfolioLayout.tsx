import { useCallback, useRef, useState } from 'react'
import DesktopShell from '../components/desktop/DesktopShell'
import FeaturedProjects from '../components/projects/FeaturedProjects'
import ProjectDetailWindow from '../components/projects/ProjectDetailWindow'
import HomePage from '../pages/HomePage'
import ContactPage from '../pages/ContactPage'
import type { Project } from '../types/project'

type DesktopView = 'home' | 'projects' | 'contact' | 'project'

function PortfolioLayout() {
  const [activeView, setActiveView] = useState<DesktopView>('home')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [returnFocusProjectId, setReturnFocusProjectId] = useState<string | null>(null)
  const returnViewRef = useRef<'home' | 'projects'>('projects')

  const openProject = (project: Project) => {
    returnViewRef.current = activeView === 'home' ? 'home' : 'projects'
    setReturnFocusProjectId(null)
    setSelectedProject(project)
    setActiveView('project')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const closeProject = useCallback(() => {
    setReturnFocusProjectId(selectedProject?.id ?? null)
    setActiveView(returnViewRef.current)
    setSelectedProject(null)
  }, [selectedProject?.id])

  const selectApp = (appId: string) => {
    if (appId === 'code') {
      window.open('https://github.com/LaulinVasquez', '_blank', 'noopener,noreferrer')
      return
    }

    if (appId === 'home' || appId === 'projects' || appId === 'contact') {
      setSelectedProject(null)
      setReturnFocusProjectId(null)
      setActiveView(appId)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const activeAppId = activeView === 'project' ? 'projects' : activeView
  const contentKey = selectedProject ? `project-${selectedProject.id}` : activeView

  let content = (
    <HomePage onOpenProject={openProject} focusProjectId={returnFocusProjectId} />
  )

  if (activeView === 'projects') {
    content = (
      <FeaturedProjects
        onOpenProject={openProject}
        focusOnMount={!returnFocusProjectId}
        focusProjectId={returnFocusProjectId}
      />
    )
  } else if (activeView === 'contact') {
    content = <ContactPage />
  } else if (activeView === 'project' && selectedProject) {
    content = <ProjectDetailWindow project={selectedProject} onClose={closeProject} />
  }

  return (
    <DesktopShell
      contentKey={contentKey}
      activeAppId={activeAppId}
      onSelectApp={selectApp}
    >
      {content}
    </DesktopShell>
  )
}

export default PortfolioLayout

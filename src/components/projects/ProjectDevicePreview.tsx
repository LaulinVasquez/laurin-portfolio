import { ImagePlus } from 'lucide-react'
import type { Project } from '../../types/project'

interface ProjectDevicePreviewProps {
  project: Project
  priority?: boolean
}

function ProjectDevicePreview({ project, priority = false }: ProjectDevicePreviewProps) {
  return (
    <div className="device-showcase" aria-label={`${project.title} desktop and mobile previews`}>
      <figure className="device-preview device-laptop">
        <div className="laptop-lid">
          <span className="laptop-camera" aria-hidden="true" />
          <div className="laptop-screen">
            <img
              src={project.image}
              alt={project.imageAlt}
              width="1280"
              height="800"
              loading={priority ? 'eager' : 'lazy'}
              fetchPriority={priority ? 'high' : 'auto'}
            />
          </div>
        </div>
        <div className="laptop-base" aria-hidden="true"><span /></div>
        <figcaption>Desktop</figcaption>
      </figure>

      <figure className="device-preview device-phone">
        <div className="phone-frame">
          <span className="phone-island" aria-hidden="true" />
          <span className="phone-button phone-button-top" aria-hidden="true" />
          <span className="phone-button phone-button-bottom" aria-hidden="true" />
          <div className="phone-screen">
            <div className="phone-viewport">
              {project.mobileImage ? (
                <img
                  src={project.mobileImage}
                  alt={project.mobileImageAlt ?? `${project.title} mobile interface`}
                  width="471"
                  height="1024"
                  loading={priority ? 'eager' : 'lazy'}
                  fetchPriority={priority ? 'high' : 'auto'}
                />
              ) : (
                <div
                  className="mobile-image-placeholder"
                  role="img"
                  aria-label={`Mobile screenshot placeholder for ${project.title}`}
                >
                  <ImagePlus aria-hidden="true" />
                  <span>Mobile image</span>
                </div>
              )}
            </div>
          </div>
        </div>
        <figcaption>Mobile</figcaption>
      </figure>
    </div>
  )
}

export default ProjectDevicePreview

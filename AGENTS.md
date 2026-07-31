Portfolio UI Redesign — Supabase-Inspired Experience
Goal

Redesign the current portfolio interface so it feels closer to the visual language of Supabase while keeping the existing Laurin OS structure, navigation system, project views, accessibility behavior, and responsive design.

The new design should feel:

clean
technical
modern
developer-focused
spacious
polished
professional

Do not copy Supabase exactly. Use it only as visual inspiration for layout, surfaces, borders, typography, navigation, cards, and subtle green accent lighting.

Before Editing

Inspect the full repository first.

Review:

current layout architecture
existing Tailwind styles
desktop shell
background component
top navigation
app dock
reusable window component
project cards
project detail view
centralized project data
accessibility and focus behavior

Also inspect the Garden & Landscaping Pros project entry and its repository information.

Look through the repository and existing project data for its Render deployment link. Use the verified live Render URL in the project data and project detail view. Do not invent or guess a URL.

Before implementation, provide:

A summary of the existing UI architecture.
The proposed Supabase-inspired design direction.
A list of files that will change.
Any new reusable components or utilities.
How the mouse-follow background illumination will work.
How reduced-motion and touch devices will be handled.
How the Garden & Landscaping Pros Render URL was verified.

Do not edit files until the plan is approved.

Design Direction
Overall Visual Style

Move away from the current heavily rounded, floating operating-system appearance and toward a cleaner Supabase-inspired interface.

Use:

deep charcoal and near-black backgrounds
subtle green accent colors
thin low-contrast borders
restrained shadows
soft gradients
clean typography
structured panels
compact labels
technical dashboard-style details
minimal glass effects

Avoid:

excessive glow
overly large rounded corners
strong cyan gradients
cartoonish app icons
excessive blur
overly dramatic animation
copying Supabase branding or logos

The portfolio should still feel original and personal to Laurin.

Interactive Mouse Illumination

Create a subtle background lighting effect that follows the visitor’s mouse.

The effect should:

slightly illuminate the background near the pointer
use a soft radial gradient
use a restrained green or green-teal accent
remain behind all content
not reduce text readability
not block pointer interaction
not cause layout shifts
update smoothly
remain subtle rather than looking like a spotlight

The preferred implementation is to track pointer position and expose the coordinates through CSS custom properties.

Example concept:

--mouse-x
--mouse-y

The background can use a radial gradient centered at those coordinates.

Performance requirements:

avoid React state updates on every mouse movement when possible
prefer direct CSS custom-property updates through a ref
use requestAnimationFrame only if necessary
keep the animation GPU-friendly
do not trigger unnecessary component re-renders

Accessibility and device behavior:

disable or simplify the effect when prefers-reduced-motion is enabled
disable pointer-follow behavior on touch-only devices
provide a static background gradient as the fallback
ensure the effect has pointer-events: none
Desktop Shell

Update the desktop shell to feel more like a developer platform dashboard.

Consider:

a thin top navigation area
subtle border separators
clearer content hierarchy
reduced decorative chrome
consistent max-width containers
improved spacing
restrained panel backgrounds

Preserve the existing application view system.

Do not remove:

Home view
Projects view
project detail views
Contact view
Escape-key navigation
focus restoration
dock navigation
GitHub link behavior
Top Navigation

Update the top bar with a Supabase-inspired structure.

It should include:

Laurin’s name or portfolio brand
current section indicator
subtle availability status
clean navigation controls
GitHub or résumé action where appropriate

Use:

compact typography
thin borders
low-contrast separators
subtle hover states
visible keyboard focus styles

Avoid making it look identical to Supabase’s website navigation.

App Dock

Keep the existing dock functionality, but redesign it to match the new visual system.

The dock should feel more like a compact developer-tool navigation bar than a macOS clone.

Use:

dark structured container
thin border
subtle active-state background
green accent for the selected item
restrained icon animation
clear tooltips or accessible labels

Preserve:

Home
Projects
Contact
Code/GitHub
keyboard accessibility
active-view indication
Portfolio Window

Continue using the existing reusable PortfolioWindow component.

Redesign it as a structured application panel.

Recommended characteristics:

smaller border radius
thin neutral border
dark layered background
subtle top header
compact icon container
green active accent
less decorative window chrome
strong content spacing

The component should remain reusable for:

Hero content
Projects
Project details
Contact
Future About and Résumé views

Do not duplicate panel styling inside individual pages.

Hero Section

Update the hero so it feels like the landing view of a modern developer platform.

It should clearly communicate:

Laurin Vasquez
Computer Science student
Full-stack developer
React, TypeScript, Node.js, Express, and PostgreSQL
interest in AI agents and production software
availability for software opportunities

Keep the writing concise and honest.

Possible supporting UI:

current focus panel
technology labels
project status
availability status
quick actions for Projects, GitHub, and Résumé

Avoid generic language such as:

mission-critical systems
world-class products
revolutionary experiences
industry-leading solutions
Projects View

Redesign project cards to resemble technical product or database dashboard cards.

Each project card should include:

project title
concise description
technology stack
project status
GitHub link when available
live deployment link when available
clear action to open the project detail view

Use consistent card heights and spacing.

Hover behavior should be subtle:

slight border emphasis
small elevation change
restrained background transition
no large scaling effect
Garden & Landscaping Pros

Inspect the existing portfolio repository and project data for the Garden & Landscaping Pros project.

Find and verify:

GitHub repository URL
Render deployment URL
project description
technology stack
project status

Add the verified Render URL as the project’s live-demo link.

The project card and project detail view should clearly provide:

View live site
View source code

Links must:

open in a new tab
include rel="noreferrer"
have accessible labels
not use placeholder URLs

If the deployment URL cannot be verified from the repository or project files, report that clearly rather than inventing one.

Contact View

Preserve the current email-based contact workflow.

Redesign the form to match the new system:

structured dark inputs
subtle green focus rings
clear labels
visible validation or required states
consistent field spacing
strong keyboard accessibility

Keep the fields:

name
email
subject
message

Keep the prepared email addressed to:

laurin171125@gmail.com
Animation

Use Framer Motion only where animation improves clarity.

Recommended uses:

view transitions
project-detail opening
active navigation indicator
small hover transitions

Avoid:

constant floating effects
excessive card movement
large scaling
repeated glow pulses
slow animations

All animations must respect reduced-motion preferences.

Responsive Behavior

The redesign must work across:

large desktop monitors
laptops
tablets
mobile phones

On smaller screens:

remove unnecessary decorative elements
preserve readable spacing
stack multi-column content
keep navigation usable
keep project actions accessible
disable mouse-follow effects on touch devices
prevent horizontal overflow

Do not create a separate mobile application architecture.

Technical Requirements

Use the existing stack:

React
TypeScript
Tailwind CSS
Framer Motion
Lucide React
Vite

Maintain:

centralized project data
existing TypeScript types
limited application state
reusable components
current keyboard and focus-management behavior
existing branch architecture

Do not add:

a component library
a global state library
React Router unless genuinely required
dragging or window resizing
canvas-based background rendering
heavy animation dependencies
duplicated project content
Quality Checks

After implementation, run:

npm run lint
npm run build

Also verify manually:

all dock items work
project cards open correctly
Back navigation works
Escape returns to the previous view
focus moves into opened views
focus returns to the originating card
Contact opens the prepared email
GitHub links work
Garden & Landscaping Pros live Render link works
mouse illumination is subtle and smooth
touch devices receive the static fallback
reduced-motion behavior works
there is no horizontal overflow
browser console contains no errors

Provide a concise implementation summary and identify every file created or modified.
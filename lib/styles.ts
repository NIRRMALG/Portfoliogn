import { cva } from 'class-variance-authority'

export const contentContainer = cva([
  'container',
  'mx-auto',
  'max-w-7xl',
  'px-4',
  'sm:px-6',
  'lg:px-8'
])

export const sectionContainer = cva([
  'py-12',
  'sm:py-16',
  'md:py-20',
  'lg:py-24'
])

export const sectionHeading = cva([
  'text-3xl',
  'sm:text-4xl',
  'lg:text-5xl',
  'font-bold',
  'tracking-tight',
  'bg-clip-text',
  'text-transparent',
  'bg-gradient-to-r',
  'from-primary',
  'to-accent'
])

export const sectionSubheading = cva([
  'mt-4',
  'text-lg',
  'sm:text-xl',
  'text-muted-foreground'
])
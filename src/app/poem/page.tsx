import type { Metadata } from 'next'
import PoemClient from './PoemClient'

export const metadata: Metadata = {
  title: 'The Caged Butterfly — Mack',
  description: 'The poem behind the name. By Makena Maple.',
}

export default function PoemPage() {
  return <PoemClient />
}

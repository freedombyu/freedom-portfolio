import type { Metadata } from 'next';
import './globals.css';


export const metadata: Metadata = {
  metadataBase: new URL('https://freedom-mukanza.vercel.app'),
  title: { default: 'Freedom Mukanza | Junior Software Developer', template: '%s | Freedom Mukanza' },
  description: 'Portfolio of Freedom Mukanza, a Junior Software Developer and BYU-Idaho Software Development student based in South Africa.',
  keywords: ['Freedom Mukanza','Junior Software Developer','Next.js','JavaScript','C#','PostgreSQL','BYU-Idaho'],
  openGraph: { title: 'Freedom Mukanza | Junior Software Developer', description: 'Software developer portfolio featuring projects, skills, education, and experience.', type: 'website' }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

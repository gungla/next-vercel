import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'

import styles from '../components/layouts/MainLayout.module.css'

export default function HomePage() {
  return (
    <MainLayout>
      <h1>Home page</h1>
      <h1 className='title'>
      Ir a <Link href="/about">About</Link>
      </h1>
      <p className='description'>
      Get started by editing{' '}
      <code className='code'>pages/index.jsx</code>
      </p>
    </MainLayout> 
  )
}

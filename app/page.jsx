import Image from 'next/image'
import '@/styles/app/main.sass'
import { Header, Timeline } from '@/components'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Timeline />
      </main>
    </>
  )
}

/*

*/

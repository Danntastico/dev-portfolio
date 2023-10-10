import { IconBuilding } from '@tabler/icons-react'
import { SectionTitle } from '..'
import './companies.sass'
import Image from 'next/image'
import Link from 'next/link'

export default function Companies() {
  return (
    <section className="companies">
      <div className='container'>
        <SectionTitle icon={IconBuilding} title="Companies I've work with" />
        <div className='logos-list'>
          <Link
            href='https://www.endava.com/en/'
            target='_blank'
          >
            <Image
              alt='company-logo'
              src='/logo-endava.png'
              width={150}
              height={150}
              className='company-logo'
            />
          </Link>

          <Link
            href='https://www.sinco.co/'
            target='_blank'
          >
            <Image
              alt='company-logo'
              src='/sinco.png'
              width={150}
              height={150}
              className='company-logo'
            />
          </Link>
        </div>
      </div>
    </section>
  )
}

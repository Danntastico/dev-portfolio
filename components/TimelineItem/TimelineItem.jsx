'use client'

import { useState } from 'react'
import { IconCalendar } from '@tabler/icons-react'
import Image from 'next/image'

import './timeline-item.sass'

export default function TimelineItem({
  client,
  date,
  company,
  grade,
  imgUrl,
  location,
  role,
  tasks
}) {
  const [open, setOpen] = useState(false)

  return (
    <li onClick={() => setOpen(v => !v)} >
      <div className="bullet-logo">
        <Image
          alt={`${company} image logo`}
          width={40}
          height={40}
          src={imgUrl} />
      </div>
      <section className='job-definition'>
        <div className='job-title'>
          <h3><strong>{company}</strong> - {location}</h3>
          <h4>{role}<br />{grade}<span></span></h4>
          <div className='date'>
            <IconCalendar />
            <h5>{date}</h5>
          </div>
        </div>
        <div
          className='dropdown-content'
          style={{ display: open ? 'block' : 'none' }}
        >
          {client && <p>Client: {client}</p>}
          {tasks &&
            <ul className='company-tasks'>
              {tasks.map((task, ix) => (
                <li key={`${company} task ${ix}`}>{task}</li>
              ))}
            </ul>
          }
        </div>
      </section>
    </li>
  )
}

import Image from 'next/image'
import './timeline-item.sass'
import { IconCalendar } from '@tabler/icons-react'

export default function TimelineItem({ company, imgUrl, location, role, grade, date, client }) {
  return (
    <li>
      <div className="bullet-logo">
        <Image width={40} height={40} src={imgUrl} />
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
        {client && <p>Client: {client}</p>}
      </section>
    </li>
  )
}

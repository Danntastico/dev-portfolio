import Image from 'next/image'
import './timeline-item.sass'

export default function TimelineItem() {
  return (
    <li className="timeline-list-item">
      <div className="bullet-logo">
        <Image width={40} height={40} src='/endava.png' />
      </div>
      <section className='job-definition'>
        <div className='job-title'>
          <h4>React Developer<br/> <span>Senior Developer (engineer)</span></h4>
          <h5>01/2023 - Present</h5>
        </div>
        <h4><strong>Endava </strong>Bogotá, Colombia</h4>
        <p>Client: Media company focused on Digital Commerce retailer platforms (Flywheel Digital LLC)
        </p>
      </section>
    </li>
  )
}

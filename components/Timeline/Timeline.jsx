import { SectionTitle, TimelineItem } from "..";
import { TIMELINE_ITEMS } from "@/lib/constants/timeline";
import "./timeline.sass"
import { IconDeviceLaptop } from "@tabler/icons-react";

export default function Timeline() {
  return (
    <section className="timeline">
      <div className="section-content">
        <div className="timeline-container">
          <SectionTitle icon={IconDeviceLaptop} title='Experience' />
          <ul className="timeline-list">
            {
              TIMELINE_ITEMS.map((item, ix) => (
                <TimelineItem
                  key={`${item.company}-${ix}`}
                  {...item}
                />
              ))
            }
          </ul>
        </div>
      </div>
    </section>
  )
}
/*

  <ul className="timeline-list">
  </ul>


*/

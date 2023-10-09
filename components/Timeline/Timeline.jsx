import { TimelineItem } from "..";
import { TIMELINE_ITEMS } from "@/lib/constants/timeline";
import "./timeline.sass"
import { IconDeviceLaptop } from "@tabler/icons-react";

export default function Timeline() {
  return (
    <section className="timeline">
      <div className="section-content">
        <div className="timeline-container">
          <div className="section-title">
            <IconDeviceLaptop />
            <h4>Experience</h4>
          </div>
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

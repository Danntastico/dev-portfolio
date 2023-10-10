import './section-title.sass'

export default function SectionTitle(props) {
  return (
    <div className="section-title">
      <props.icon />
      <h4>{props.title}</h4>
    </div>
  )
}

import {Chrono} from 'react-chrono'

import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  const renderViews = items => {
    if (items.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={items.id} projectDeatils={items} />
    }
    return <CourseTimelineCard key={items.id} courseDetails={items} />
  }

  return (
    <div className="timeline-container">
      <div className="responsive-container">
        <div className="heading-container">
          <h1 className="heading">
            MY JOURNEY OF
            <br />
            <span className="ccbp-heading">CCBP 4.0</span>
          </h1>
        </div>
        <Chrono
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
          theme={{secondary: 'white'}}
        >
          {timelineItemsList.map(each => renderViews(each))}
        </Chrono>
      </div>
    </div>
  )
}
export default TimelineView


import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {TimedItemProps} from '@/app/types/TimedItem'

export default function TimeLine({data}: {data: Array<TimedItemProps>}) {
    return (
        <VerticalTimeline className='font-propo'>
            {data?.map((item, index) => (
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={item.contentStyle}
                    contentArrowStyle={item.contentArrowStyle}
                    date={item.date}
                    iconStyle={item.iconStyle}
                    icon={item.icon? <item.icon /> : undefined}
                >
                    <h3 className="vertical-timeline-element-title text-sky-950">{item.title}</h3>
                    <h4 className="vertical-timeline-element-subtitle  text-sky-950">{item.position}</h4>
                    <p className=' text-sky-950'>
                        {item.content}
                    </p>
                </VerticalTimelineElement>
            ))}
            
        </VerticalTimeline>
    )
}


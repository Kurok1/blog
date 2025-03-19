import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { JavaScriptIcon } from 'nextra/icons';
import BirthIcon from './BirthIcon'
import PrimarySchool from './PrimarySchool'
import JavaIcon from './JavaIcon'
import Work from './Work'
import FutureIcon from './Future'

export default function TimeLine() {
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="1997-07"
                iconStyle={{ background: 'rgb(232, 236, 239)', color: '#fff' }}
                icon={<BirthIcon />}
            >
                <h3 className="vertical-timeline-element-title">Come Into This World</h3>
                <h4 className="vertical-timeline-element-subtitle">Wuhan China.</h4>
                <p>
                    On July 25, 1997, a Friday, I came into this world.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2015"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<PrimarySchool />}
            >
                <h3 className="vertical-timeline-element-title">As A Student</h3>
                <h4 className="vertical-timeline-element-subtitle">Tianjin China.</h4>
                <p>
                From 2015 to 2019, I completed my undergraduate studies at Tianjin Chengjian University.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2017"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<JavaIcon />}
            >
                <h3 className="vertical-timeline-element-title">Become Java Developer</h3>
                <h4 className="vertical-timeline-element-subtitle">Tianjin China.</h4>
                <p>
                    In 2017, I started learning Java development
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2018"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<JavaScriptIcon />}
            >
                <h3 className="vertical-timeline-element-title">Become Web Developer</h3>
                <h4 className="vertical-timeline-element-subtitle">Tianjin China.</h4>
                <p>
                    In 2018, I started learning Web development, mainly using Vue and React.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="March 2019"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<Work />}
            >
                <h3 className="vertical-timeline-element-title">Entering The Workplace</h3>
                <h4 className="vertical-timeline-element-subtitle">Wuhan China.</h4>
                <p>
                    In March 2019, I got my first job as a Java development engineer, and of course I also took on a small amount of web development work.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="April 2022"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<Work />}
            >
                <h3 className="vertical-timeline-element-title">Job Hopping</h3>
                <h4 className="vertical-timeline-element-subtitle">Wuhan China.</h4>
                <p>
                    I left my original company and joined a new company. Of course, I continued to develop Java
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="Now"
                iconStyle={{ background: 'rgb(222, 212, 124)', color: '#fff' }}
                icon={<FutureIcon />}
            >
                <h3 className="vertical-timeline-element-title">To Future</h3>
                <h4 className="vertical-timeline-element-subtitle">Wuhan China.</h4>
                <p>
                    <b>The story of the future is still being written.</b>
                </p>
            </VerticalTimelineElement>
            
        </VerticalTimeline>
    )
}


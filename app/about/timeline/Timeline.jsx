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
        <VerticalTimeline className='font-propo'>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'oklch(0.917 0.08 205.041)' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="1997-07"
                iconStyle={{ background: 'rgb(232, 236, 239)', color: '#fff' }}
                icon={<BirthIcon />}
            >
                <h3 className="vertical-timeline-element-title text-sky-950">Come Into This World</h3>
                <h4 className="vertical-timeline-element-subtitle  text-sky-950">Wuhan China.</h4>
                <p className=' text-sky-950'>
                    On July 25, 1997, a Friday, I came into this world.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{background: 'oklch(0.828 0.189 84.429)'}}
                date="2015"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<PrimarySchool />}
            >
                <h3 className="vertical-timeline-element-title  text-sky-950">As A Student</h3>
                <h4 className="vertical-timeline-element-subtitle  text-sky-950">Tianjin China.</h4>
                <p className=' text-sky-950'>
                From 2015 to 2019, I completed my undergraduate studies at Tianjin Chengjian University.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{background: 'oklch(0.828 0.189 84.429)'}}
                date="2017"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<JavaIcon />}
            >
                <h3 className="vertical-timeline-element-title  text-sky-950">Become Java Developer</h3>
                <h4 className="vertical-timeline-element-subtitle  text-sky-950">Tianjin China.</h4>
                <p className=' text-sky-950'>
                    In 2017, I started learning Java development
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{background: 'oklch(0.828 0.189 84.429)'}}
                date="2018"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<JavaScriptIcon />}
            >
                <h3 className="vertical-timeline-element-title  text-sky-950">Become Web Developer</h3>
                <h4 className="vertical-timeline-element-subtitle  text-sky-950">Tianjin China.</h4>
                <p className=' text-sky-950'>
                    In 2018, I started learning Web development, mainly using Vue and React.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{background: 'oklch(0.718 0.202 349.761)'}}
                date="March 2019"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<Work />}
            >
                <h3 className="vertical-timeline-element-title  text-sky-950">Entering The Workplace</h3>
                <h4 className="vertical-timeline-element-subtitle  text-sky-950">Wuhan China.</h4>
                <p className=' text-sky-950'>
                    In March 2019, I got my first job as a Java development engineer, and of course I also took on a small amount of web development work.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{background: 'oklch(0.718 0.202 349.761)'}}
                date="April 2022"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<Work />}
            >
                <h3 className="vertical-timeline-element-title text-sky-950">Job Hopping</h3>
                <h4 className="vertical-timeline-element-subtitle text-sky-950">Wuhan China.</h4>
                <p className=' text-sky-950'>
                    I left my original company and joined a new company. Of course, I continued to develop Java
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="Now"
                contentStyle={{ background: 'rgb(65, 198, 191)' }}
                iconStyle={{ background: 'rgb(222, 212, 124)', color: '#fff' }}
                icon={<FutureIcon />}
            >
                <h3 className="vertical-timeline-element-title  text-sky-950">To Future</h3>
                <h4 className="vertical-timeline-element-subtitle  text-sky-950">Wuhan China.</h4>
                <p className=' text-sky-950'>
                    <b>The story of the future is still being written.</b>
                </p>
            </VerticalTimelineElement>
            
        </VerticalTimeline>
    )
}


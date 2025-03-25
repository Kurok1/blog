import {LinkItemProps} from "@/app/types/Link";
import {SiApachemaven, SiDocker, SiFiles, SiPrometheus, SiServerfault} from "react-icons/si";
import {TimedItemProps} from "@/app/types/TimedItem";
import {
    BirthIcon,
    FutureIcon,
    JavaIcon,
    PrimarySchool,
    Work
} from '@/app/about/timeline/icons'
import {JavaScriptIcon} from "nextra/icons";

const TOOLS : Array<LinkItemProps> = [
    { name: 'MAVEN', description: 'My Maven Repository', href: 'https://repo.kurok1.top', icon: SiApachemaven, target: '_blank' },
    { name: 'Docker Registry', description: 'My Docker Registry', href: 'https://registry.kurok1.top', icon: SiDocker, target: '_blank' },
    { name: 'FileManager', description: 'My Disk', href: 'https://files.kurok1.top', icon: SiFiles, target: '_blank' },
    { name: 'Prometheus', description: 'Monitor My Server', href: 'https://prometheus.kurok1.top', icon: SiPrometheus, target: '_blank' },
    { name: 'Nacos', description: 'My Local Nacos Server', href: 'https://nacos.kurok1.top', icon: SiServerfault, target: '_blank'  }
]


const POSTS : Array<LinkItemProps> =  [
    {
        name: '当下Java环境的思考',
        href: '/blog/2025/javaer_future',
        description: "",
        icon: null,
        target: ""
    }
]

const TIME_LINES : Array<TimedItemProps> =  [
    {
        title: "Come Into This World",
        date: "1997-07",
        position: "Wuhan China.",
        content: "On July 25, 1997, a Friday, I came into this world.",
        contentStyle: { background: 'oklch(0.917 0.08 205.041)' },
        contentArrowStyle: { borderRight: '7px solid oklch(0.917 0.08 205.041)' },
        iconStyle: { background: 'rgb(232, 236, 239)', color: '#fff' },
        icon: <BirthIcon/>,
    },
    {
        title: "As A Student",
        date: "2015",
        position: "Tianjin China.",
        content: "From 2015 to 2019, I completed my undergraduate studies at Tianjin Chengjian University.",
        contentStyle:{background: 'oklch(0.828 0.189 84.429)'},
        contentArrowStyle: {borderRight: '7px solid oklch(0.828 0.189 84.429)'},
        iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
        icon: <PrimarySchool/>,
    },
    {
        title: "Become Java Developer",
        date: "2017",
        position: "Tianjin China.",
        content: "In 2017, I started learning Java development",
        contentStyle:{background: 'oklch(0.828 0.189 84.429)'},
        contentArrowStyle: { borderRight: '7px solid oklch(0.828 0.189 84.429)' },
        iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
        icon: <JavaIcon/>,
    },
    {
        title: "Become Web Developer",
        date: "2018",
        position: "Tianjin China.",
        content: "In 2018, I started learning Web development, mainly using Vue and React.",
        contentStyle:{background: 'oklch(0.828 0.189 84.429)'},
        contentArrowStyle: { borderRight: '7px solid oklch(0.828 0.189 84.429)' },
        iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
        icon: <JavaScriptIcon/>,
    },
    {
        title: "Entering The Workplace",
        date: "March 2019",
        position: "Wuhan China.",
        content: "In March 2019, I got my first job as a Java development engineer, and of course I also took on a small amount of web development work.",
        contentStyle:{background: 'oklch(0.718 0.202 349.761)'},
        contentArrowStyle: { borderRight: '7px solid oklch(0.718 0.202 349.761)' },
        iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
        icon: <Work/>,
    },
    {
        title: "Job Hopping",
        date: "April 2022",
        position: "Wuhan China.",
        content: "I left my original company and joined a new company. Of course, I continued to develop Java",
        contentStyle:{background: 'oklch(0.718 0.202 349.761)'},
        contentArrowStyle: { borderRight: '7px solid oklch(0.718 0.202 349.761)' },
        iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
        icon: <Work/>,
    },
    {
        title: "To Future",
        date: "Now",
        position: "Wuhan China.",
        content: <b>The story of the future is still being written.</b>,
        contentStyle:{ background: 'rgb(65, 198, 191)' },
        contentArrowStyle: { borderRight: '7px solid rgb(65, 198, 191)' },
        iconStyle: { background: 'rgb(222, 212, 124)', color: '#fff' },
        icon: <FutureIcon/>,
    }
]

export {
    TOOLS,
    POSTS,
    TIME_LINES
}
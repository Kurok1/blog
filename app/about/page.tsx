'use client'
import TimeLine from "./timeline/Timeline"
import {TIME_LINES} from '@/app/_data/data'
export default function Page() {
  return (
    <TimeLine data={TIME_LINES}/>
  )
}
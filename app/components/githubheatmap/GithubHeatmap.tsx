import githubContributes from './github'
import React, { useEffect, useState } from "react";
import CalendarHeatmap, {ReactCalendarHeatmapValue} from "react-calendar-heatmap";
import 'tailwindcss'
import "react-calendar-heatmap/dist/styles.css";
import {ContributionDay, ContributionWeek, GitHubContributionsResponse} from "@/app/types/GithubContributes";

export default function GithubHeatmap({theme}:{theme:string|undefined}) : React.ReactElement {
  const [contributions, setContributions] = useState([] as Array<ContributionDay>);
  useEffect(() => {
    githubContributes()
      .then((res : Response) : Promise<GitHubContributionsResponse> => res.json())
      .then((data : GitHubContributionsResponse) => {
        const days : Array<ContributionDay> = data.data.user.contributionsCollection.contributionCalendar.weeks.flatMap((week : ContributionWeek) : Array<ContributionDay> => week.contributionDays);
        setContributions(days);
      });
  }, []);

  const isDark = theme === 'dark'
  return (
    <CalendarHeatmap
      startDate={new Date(new Date().setFullYear(new Date().getFullYear() - 1))}
      endDate={new Date()}
      values={contributions.map((day: ContributionDay) : ReactCalendarHeatmapValue<string> => ({
        date: day.date,
        count: day.contributionCount
      }))}
      classForValue= {
          (value : ReactCalendarHeatmapValue<string> | undefined) : string  => {
              if (!value || value.count === 0)
                  if (isDark)
                      return 'react-calendar-heatmap color-dark-scala-empty'
                  else return 'react-calendar-heatmap color-scala-empty'
              if (value.count > 9)
                  return 'react-calendar-heatmap color-scala-max'
              return 'react-calendar-heatmap color-scala-' + value.count
          }
      }
    />
  );
}
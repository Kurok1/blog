import githubContributes from './github'
import React, { useEffect, useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import 'tailwindcss'
import "react-calendar-heatmap/dist/styles.css";

export default function GithubHeatmap({theme}:{theme:string|undefined}) : React.ReactElement {
  const [contributions, setContributions] = useState([]);
  useEffect(() => {
    githubContributes()
      .then((res) => res.json())
      .then((data) => {
        const days = data.data.user.contributionsCollection.contributionCalendar.weeks.flatMap(week => week.contributionDays);
        setContributions(days);
      });
  }, []);

  const isDark = theme === 'dark'
  return (
    <CalendarHeatmap
      startDate={new Date(new Date().setFullYear(new Date().getFullYear() - 1))}
      endDate={new Date()}
      values={contributions.map(day => ({
        date: day.date,
        count: day.contributionCount
      }))}
      classForValue={
        value => {
          if (!value || value.count === 0)
            if (isDark)
              return 'react-calendar-heatmap color-dark-scala-empty'
            else return 'react-calendar-heatmap color-scala-empty'
          if (value.count > 9)
            return 'react-calendar-heatmap color-scala-max'
          return 'react-calendar-heatmap color-scala-' + value.count
        }}
    />
  );
}
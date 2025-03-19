import githubContributes from './github'
import React, { useEffect, useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

export default function GithubHeatmap() {
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    githubContributes()
      .then((res) => res.json())
      .then((data) => {
        const days = data.data.user.contributionsCollection.contributionCalendar.weeks.flatMap(week => week.contributionDays);
        setContributions(days);
      });
  }, []);

  return (
    <CalendarHeatmap
      startDate={new Date(new Date().setFullYear(new Date().getFullYear() - 1))}
      endDate={new Date()}
      values={contributions.map(day => ({
        date: day.date,
        count: day.contributionCount,
        color: day.color
      }))}
      classForValue={value => value?.count ? `color-scale-${value.count}` : "color-empty"}
    />
  );
}
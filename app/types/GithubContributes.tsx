interface ContributionDay {
    date: string;
    contributionCount: number;
    color: string;
}

interface ContributionWeek {
    contributionDays: Array<ContributionDay>;
}

interface ContributionCalendar {
    totalContributions: number;
    weeks: Array<ContributionWeek>;
}

interface ContributionsCollection {
    contributionCalendar: ContributionCalendar;
}

interface UserContributions {
    contributionsCollection: ContributionsCollection;
}

interface Data {
    user: UserContributions;
}

interface GitHubContributionsResponse {
    data: Data;
}

export type {
    GitHubContributionsResponse,
    ContributionDay,
    ContributionWeek,
    ContributionCalendar,
    ContributionsCollection,
    UserContributions,
    Data,
}
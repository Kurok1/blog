export default function githubContributes(req, res) {
    // const GITHUB_TOKEN = process.env.GITHUB_TOKEN; // 存在环境变量中
    const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_CONTRIBUTES_TOKEN
    const username = process.env.NEXT_PUBLIC_GITHUB_CONTRIBUTES_USERNAME; // 你的 GitHub 用户名
  
    const query = {
      query: `
        query {
          user(login: "${username}") {
            contributionsCollection {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    date
                    contributionCount
                    color
                  }
                }
              }
            }
          }
        }
      `,
    };
  
    const response = fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(query),
    });
  
    return response
  }
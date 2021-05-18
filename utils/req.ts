const GRAPHQL_URL = "https://api.github.com/graphql";

export function getDataByUsername(username = "") {
  const bodyData = {
    query:
      'query {user(login: "' +
      username +
      '") { login, bio, avatarUrl, repositories(first: 20, privacy: PUBLIC, orderBy: {field:NAME, direction:ASC}) { pageInfo {hasNextPage, endCursor} nodes {  name url isPrivate owner { login } defaultBranchRef { name } } } } }',
  };
  return fetch(GRAPHQL_URL, {
    method: "POST",
    body: JSON.stringify(bodyData),
    headers: {
      Authorization: `bearer ${process.env.GITHUB_API_TOKEN}`,
    },
  }).then(async (res) => {
    const json = await res.json();
    if (res.ok) {
      return { data: json };
    } else {
      return { error: true, data: json };
    }
  });
}

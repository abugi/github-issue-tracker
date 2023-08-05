import { useQuery } from "@tanstack/react-query";

export function useIssueComments(issueNumber) {
  return useQuery(["issues", issueNumber, "comments"], ({signal}) => {
    return fetch(`/api/issues/${issueNumber}/comments`, {signal}).then((res) => res.json()
    );
  });
}

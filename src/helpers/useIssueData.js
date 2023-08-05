import { useQuery } from "@tanstack/react-query";

export function useIssueData(issueNumber) {
  return useQuery(["issues", issueNumber], ({signal}) => {
    return fetch(`/api/issues/${issueNumber}`, {signal}).then((res) => res.json());
  });
}

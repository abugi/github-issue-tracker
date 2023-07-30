import { Link } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import { IssueItem } from './IssueItem';

export default function IssuesList() {
  const issuesQuerry = useQuery(
    ['issues'],
    () => fetch('/api/issues').then(res => res.json())
  )

  const {isLoading, data} = issuesQuerry

  return (
    <div>
      <h1>Issues List</h1>
      {
        isLoading ? <p>Loading...</p> : <ul className="issues-list">
        {
          data.map(issue => <IssueItem
            key={issue.id}
            title={issue.title}
            number={issue.number}
            assignee={issue.assignee}
            commentCount={issue.comments.length}
            createdBy={issue.createdBy}
            createdDate={issue.createdDate}
            labels={issue.labels}
            status={issue.status}
          />)
        }
      </ul>
      }
    </div>
  );
}

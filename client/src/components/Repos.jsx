import React from 'react';

const Repos = ({ repo }) => {
  return (
    <div>
      <div>{repo.watchers_count}</div>
      <a href={"https://github.com/" + repo.full_name}>{repo.full_name}</a>
    </div>
)};

export default Repos;
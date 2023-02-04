import React from 'react';
import Repos from './Repos.jsx';

const RepoList = ({ repos }) => {
  return (
    <div>
      <h4> There are {repos.length} repos. </h4>
      {repos.map((repo) => {
        return (
          <Repos key={repo.full_name} repo={repo} />
        );
      })}
    </div>
)};

export default RepoList;
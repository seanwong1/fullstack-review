import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

const App = () => {

  const [repos, setRepos] = useState([]);

  const search = (term) => {
    console.log(`${term} was searched`);
    // $.post('http://localhost:1128/repos', JSON.stringify(term), 'json');
    $.ajax({
      url: '/repos',
      type: 'POST',
      data: {
        username: term
      }
    });

    $.ajax({
      url: '/repos',
      type: 'GET'
    })
      .done((response) => {
        setRepos(response);
      });
  }

  return (
    <div>
      <h1>Github Fetcher</h1>
      <RepoList repos={repos}/>
      <Search onSearch={search}/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
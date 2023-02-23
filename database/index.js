const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  full_name: String,
  watchers_count: Number,
  forks_count: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (userRepoObj) => {
  // This function should save a repo or repos to
  // the MongoDB
  var repo = new Repo({
    id: userRepoObj.id,
    full_name: userRepoObj.full_name,
    watchers_count: userRepoObj.watchers_count,
    forks_count: userRepoObj.forks_count
  });

  // propagate errors back out
  repo.save((err, repo) => {
    if (err) {
      console.log(err);
    } else {
      console.log(repo.full_name);
    }
  })
};

let get = (criteria, length) => {
  var query = Repo.find().sort({[criteria]: -1}).limit(length);
  return query;
};

module.exports.save = save;
module.exports.get = get;
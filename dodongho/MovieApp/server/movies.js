Movies = new Meteor.Collection("movies");

Meteor.startup(function () {
  if(Movies.find().count() == 0) {
    Movies.insert({title: "Star Wars", director: "Lucas"});
    Movies.insert({title: "Memento", director: "Nolan"});
    Movies.insert({title: "King Kong", director: "Jackson"});
  }
});

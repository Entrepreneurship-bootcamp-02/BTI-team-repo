Meteor.methods({
  addMovie: function(newMovie) {
    if(newMovie.title == "") {
      throw new Meteor.Error(413, "Missing title!");
    }
    if(newMovie.director == "") {
      throw new Meteor.Error(413, "Missing director!");
    }

    return Movies.insert(newMovie);
  }
});

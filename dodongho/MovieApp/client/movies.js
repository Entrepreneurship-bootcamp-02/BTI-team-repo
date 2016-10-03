Movies = new Meteor.Collection("movies");

Template.moviesTemplate.movies = function() {
  return Movies.find();
}

Template.movieForm.events = {
  'submit': function (e, tmpl) {
    e.preventDefault();

    var newMovie = {
      title: tmpl.find("#title").value,
      director: tmpl.find("#director").value
    };

    //Movies.insert(newMovie);
    Meteor.call(
      "addMovie",
      newMovie,
      function (err, result) {
        if(err) {
          alert("Could not add movie " + err.reason);
        }
      }
    );
  }
};

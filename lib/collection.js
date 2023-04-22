JokeBoxdb = new Mongo.Collection("JokeBox")  
Jokesdb = new Mongo.Collection("Jokes")

// Meteor.methods({
//     addJoke(joke) {
//       Jokes.insert({text: joke});
//     }
//   }); 
  JokeBoxdb.allow({
    insert(){
      return true
    },
    update(){
      return true
    },
    remove(){
      return true
    }
  })  

  Jokesdb.allow({
    insert(){
      return true
    },
    update(){
      return true
    },
    remove(){
      return true
    }
  })  




  





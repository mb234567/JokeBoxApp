import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base' 
import '../lib/collection.js'

Meteor.startup(() => {
  // code to run on server at startup
}); 


 

Meteor.publish('profData', function () {
  return JokeBoxdb.find({}, {
    // fields: { 'first': 1, 'gender': 1, 'profile': 1,}
  })
})
 


Meteor.publish('JokeData', function () {
  return Jokesdb.find({}, {
    // fields: { 'first': 1, 'gender': 1, 'profile': 1,}
  })
})


// Meteor.publish('ListJokes.view', function (id) {
//   // sleep(2000)
//   return JokeBoxdb.find({ _id: id }, {
//     fields: { 'jokes': 1}
//   })
// })
Meteor.methods({
  createNewUserAccount(user, pwd) {
    //create a JSON object with the user’s credential
    let options = {
      'username' : user,
      'password' : pwd
    }
    return Accounts.createUser(options)
  }
}) 



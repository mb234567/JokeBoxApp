import * as bootstrap from 'bootstrap' 

Template.AddedJokes.onCreated(function () {
    // this.autorun(() => {
    Meteor.subscribe('JokeData');
    // });
}) 

Template.AddedJokes.helpers({
    joke() {
        return Jokesdb.find()
    }, 
    jokesEmpty() {
        if (Jokesdb.find().count() > 0)
            return false
        return true
    }
}) 

Template.AddedJokes.events({
    'click .remove-joke'(event) {
        let that = this 
        document.querySelector("#delJokeID").value = that._id
        event.target.parentNode.parentNode.classList.add('deleteIt') 
        document.querySelector(".deleteIt").classList.add("hideIt")
        setTimeout(() => {
            Jokesdb.remove({ "_id": that._id })
        }, 1000)
    }
})
import * as bootstrap from 'bootstrap'
import { Session } from 'meteor/session' 
import { FlowRouter } from 'meteor/ostrio:flow-router-extra'

Session.set('filter', 'all')

Template.listProfiles.onCreated(function () {
    // this.autorun(() => {
    Meteor.subscribe('profData');
    // });
})

Template.listProfiles.helpers({
    profiles() {
        console.warn(Session.get('filter'))
        if (Session.get('filter') == 'all')
            return JokeBoxdb.find({}, { sort: { first: -1 } })
        if (Session.get('filter') == 'male')
            return JokeBoxdb.find({ 'gender': 'm' }, { sort: {  first: -1 } })
        if (Session.get('filter') == 'female')
            return JokeBoxdb.find({ 'gender': 'f' }, { sort: {  first: -1 } })
    },
    profilesEmpty() {
        if (JokeBoxdb.find().count() > 0)
            return false
        return true
    }
})

Template.listProfiles.events({
    'click .remove-user'(event) { 
        let that = this 
        document.querySelector("#delID").value = that._id
        event.target.parentNode.parentNode.classList.add('deleteIt') 
        document.querySelector(".deleteIt").classList.add("hideIt")
        setTimeout(() => {
            JokeBoxdb.remove({ "_id": that._id })
        }, 1000)
    },
    'click .js-filterMales'() {
        Session.set('filter', 'male')
    },
    'click .js-filterFemales'() {
        Session.set('filter', 'female')
    },
    'click .js-filterAll'() {
        Session.set('filter', 'all')
    }
})
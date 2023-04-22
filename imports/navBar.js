import * as bootstrap from 'bootstrap';
import { Accounts } from 'meteor/accounts-base' 
import { FlowRouter } from 'meteor/ostrio:flow-router-extra'

Template.navBar.events({
    'click .js-logOut'() {
        Accounts.logout()
    }, 
    'click .js-showLogin'() {
        console.log('show login dialog')
    }
}) 
Template.navBar.helpers({
    users() {
        return JokeBoxdb.find()
    }
})
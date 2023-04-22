import { Meteor } from 'meteor/meteor';
import * as bootstrap from 'bootstrap'
import { FlowRouter } from 'meteor/ostrio:flow-router-extra'

Template.loginForm.events({
    'click .js-logIn'() { 
        let username = document.querySelector("#login-name").value
        let password = document.querySelector("#login-password").value
        Meteor.loginWithPassword(username, password, (err, result) => {
            if (err)
                console.error(`error: ${err}`)
            else {
                if (result) {
                    console.debug(`result: ${result}`)
                }
                console.warn(`loggin in with username: ${username} and password: ${password}`) 
                FlowRouter.go('showjoke')
            }
        })
       
    },
    'click .js-showCreateUser'() {
        console.log('show create user dialog')
        FlowRouter.go('newuser')
    }, 
    'click .js-cancel'() {
        alert("Are you Sure You Want To Cancel?") 
        FlowRouter.go('newuser')
    }
   
})
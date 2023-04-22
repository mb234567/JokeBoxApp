import { Meteor } from 'meteor/meteor'; 
import { Accounts } from 'meteor/accounts-base' 
import * as bootstrap from 'bootstrap'; 
import { FlowRouter } from 'meteor/ostrio:flow-router-extra'

Template.ChangePassword.events({ 
  'click .js-setchanges'() {   
     let oldpwd = document.querySelector("#current-password").value
     let newpwd = document.querySelector("#new-password").value
     
     Accounts.changePassword(oldpwd, newpwd, (err) => {
        if (err)
            console.error(`failed to change password: ${err.reason}`)
    }); 
     alert("Password Has Been Changed")
     FlowRouter.go('showjoke')
       }

}) 
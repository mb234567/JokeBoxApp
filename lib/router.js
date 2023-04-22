import { FlowRouter } from 'meteor/ostrio:flow-router-extra'

BlazeLayout.setRoot('.mainContainer')

const normalRoute = FlowRouter.group()
const userRoutes = FlowRouter.group({
    triggersEnter: [
        (context, redirect) => {
            if (!Meteor.userId()) {
                if (context.route.name != 'index')
                    redirect('index')
            }
        }
    ]
})

normalRoute.route('/', {
    name: 'index',
    action() {
        BlazeLayout.render('appBody', { header: 'navBar', body: '' })
    }
})


userRoutes.route('/showjoke', {
    name: 'showjoke',
    action() {
        BlazeLayout.render('appBody', { header: 'navBar', body: 'Showjoke' })
    }
}) 

userRoutes.route('/add', {
    name: 'add',
    action() {
        BlazeLayout.render('appBody', { header: 'navBar', body: 'addProfile' })
    }
}) 

userRoutes.route('/changepassword', {
    name: 'changepassword',
    action() {
        BlazeLayout.render('appBody', { header: 'navBar', body: 'ChangePassword' })
    }
})

FlowRouter.route('/newuser', {
    name: 'newuser',
    action() {
        BlazeLayout.render('appBody', { header: 'navBar', body: 'NewUser' })
    }
}) 

userRoutes.route('/profiles', {
    name: 'profiles',
    action() {
        BlazeLayout.render('appBody', { header: 'navBar', body: 'listProfiles' })
    }
})  

userRoutes.route('/addedjokes', {
    name: 'profiles',
    action() {
        BlazeLayout.render('appBody', { header: 'navBar', body: 'AddedJokes' })
    }
}) 

normalRoute.route('/login', {
    name: 'login',
    action() {
        BlazeLayout.render('appBody', { header: 'navBar', body: 'loginForm' })
    }
})

// catch-all
FlowRouter.route('*', {
    name: 'err404',
    action() {
        this.render('notFound')
    }
})
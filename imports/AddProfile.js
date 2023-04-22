import * as bootstrap from 'bootstrap'

Template.addProfile.events({
    'click .js-addModal'() {
        const addModal = new bootstrap.Modal('#addModal', {})
        document.querySelector("#addModal").addEventListener('hidden.bs.modal', event => {
            // do something...
            console.log("closing")
        })

        addModal.show()
    },
    'click .js-saveProfile'() {
        const addModal = bootstrap.Modal.getInstance('#addModal')
        let image = document.querySelector("#image").value
        let fname = document.querySelector("#fname").value
        let lname = document.querySelector("#lname").value 
        let gender = document.querySelector("#gender").value
        // console.debug(`Saving ${fname} ${lname} is ${age} years old and lives in ${location}. my profile pic: ${image}`)
        JokeBoxdb.insert({
            "first": fname,
            "surname": lname,
            "profile": image, 
            "gender": gender, 
            "ownerId": Meteor.userId()
        })
        addModal.hide()
    },
    'input #image'() {
        const image = document.querySelector('#image')
        const imgProfile = document.querySelector('#profImg')
        imgProfile.src = image.value
        console.debug(image.value)
    }
})
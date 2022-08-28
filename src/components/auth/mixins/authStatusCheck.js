import firebase from "../../../firebase/firebase"

const authStatus = {
    data: () => ({
        userDetails: {
            userName: '',
            email: '',
            photo: ''
        },     
        isUserSigned: false,
        defaultPhoto: require('../../../assets/images/unknown.jpg'),      
    }),
    methods: {
        checkUserStatus () {
            firebase.auth().onAuthStateChanged(user => {
                if (user) {
                  // User is signed in.
                  console.log("User  ",user)
                  this.isUserSigned = true
                  this.userDetails.userName = user.displayName
                  this.userDetails.email = user.email
                  this.userDetails.photo = user.photoURL
                } else {
                    this.isUserSigned = false
                  console.log('No user signed in')
                }
              });            
        },
        UserSignOut () {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    console.log("Successfuly signed out")
                    this.$router.push({ name: 'AppLogin' })
            })
            .catch(err => console.log('Error during signout!', err))
        }        
    },
    created(){
        this.checkUserStatus()
    }
}

export default authStatus
import firebase from "../../../firebase/firebase"

const authStatus = {
    data: () => ({
        userDetails: {
            id: '',
            userName: '',
            email: '',
            photo: '',
            isUserInfoShown: false
        },     
        isUserSigned: false,
        defaultPhoto: require('../../../assets/images/unknown.jpg'),      
    }),
    methods: {
        checkUserStatus () {
            firebase.auth().onAuthStateChanged(user => {
                if (user) {
                  // User is signed in.
                  this.userDetails.id = user.uid
                  this.isUserSigned = true
                  this.userDetails.userName = user.displayName
                  this.userDetails.email = user.email
                  this.userDetails.photo = user.photoURL
                } else {
                    this.isUserSigned = false
                }
              });            
        }     
    },
    created(){
        this.checkUserStatus()
    }
}

export default authStatus
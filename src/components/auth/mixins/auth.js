import firebase from "../../../firebase/firebase";

const auth = {
    data: () =>({
        user: {
            email: 'Artush',
            password: 'password'
        },
        loading: false        
    }),
    methods: {
        continueWithGmail (){
            let provider = new firebase.auth.GoogleAuthProvider()
            firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                const user = result.user
                console.log('User ', user)
                const {additionalUserInfo: {isNewUser}} = result

                console.log(isNewUser ? "This user just registered" : "Existing User")
                if(isNewUser) {
                    firebase.firestore().collection('Users').doc(user.uid).set({
                        id: user.uid,
                        userName: user.displayName,
                        userEmail: user.email,
                        userEmailVerified: user.emailVerified,
                        created_at: user.metadata.creationTime,
                        lastLogin: user.metadata.lastSignInTime
                    })                          
                }
                this.loading = true
                setTimeout(() => {
                    this.loading = false
                    this.$router.push({name: "DashBoard"})                    
                }, 4000)
            })
            .catch((err) => {
                console.log(err); // This will give you all the information needed to further debug any errors
            })
        }
    }
}

export default auth
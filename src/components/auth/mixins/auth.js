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
            let provider = new firebase.auth.GoogleAuthProvider();
            firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                let user = result.user;
                console.log("Successfuly signed in! ",user) // User that was authenticated
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
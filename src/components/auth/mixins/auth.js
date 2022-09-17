import firebase from "../../../firebase/firebase";

const auth = {
    data: () =>({
        user: {
            email: 'Artush',
            password: 'password'
        }        
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
                this.$router.push({name: "DashBoard"})
            })
            .catch((err) => {
                console.log(err); // This will give you all the information needed to further debug any errors
            })
        }
    }
}

export default auth
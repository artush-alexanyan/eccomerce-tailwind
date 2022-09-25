import firebase from '../firebase/firebase'

const allStory = {
    data: () => ({
        allUserStories: []
    }),
    methods: {
        getAllUserStories () {
            this.allUserStories = []
            firebase.firestore().collection('AllUsersStoryes').get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    this.allUserStories.push(doc.data())
                })
            })
        }  
    },
    created() {
        this.getAllUserStories()
    }
}
export default allStory
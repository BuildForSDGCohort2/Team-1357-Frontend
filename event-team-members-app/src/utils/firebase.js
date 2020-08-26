import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCQ0WV-DyHiuIYEcVny28E4jrexUowxeEQ",
    authDomain: "tendaievents-c0192.firebaseapp.com",
    databaseURL: "https://tendaievents-c0192.firebaseio.com",
    projectId: "tendaievents-c0192",
    storageBucket: "tendaievents-c0192.appspot.com",
    messagingSenderId: "590352793632",
    appId: "1:590352793632:web:244e227e9b838bd0b87c45",
    measurementId: "G-8MQ9GGJTM4"
};

firebase.initializeApp(firebaseConfig)

//utils 
const db = firebase.firestore()
const auth = firebase.auth()
const googleProvider = new firebase.auth.GoogleAuthProvider()
const facebookProvider = new firebase.auth.FacebookAuthProvider()

//collection references 
const teamMembersCollection = db.collection('teamMembers')
const eventsCollection = db.collection('events')
const tasksCollection = db.collection('tasks')
const taskThreadsCollection = db.collection('taskThreads')
const chatsCollection = db.collection('chats')
const annoucementsCollection = db.collection('annoucements')
const teamMembersEventsCollection = db.collection('teamMembersEvents')


export {
    db,
    auth, 
    googleProvider,
    facebookProvider,
    teamMembersCollection,
    eventsCollection,
    tasksCollection,
    taskThreadsCollection,
    chatsCollection,
    annoucementsCollection,
    teamMembersEventsCollection
}
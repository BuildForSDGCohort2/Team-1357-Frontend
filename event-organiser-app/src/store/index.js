import Vue from 'vue'
import Vuex from 'vuex'
import { auth , googleProvider , facebookProvider , organisersCollection , eventsCollection , annoucementsCollection , tasksCollection , taskThreadsCollection} from '../utils/firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userProfile: {}, 
    events: []
  },
  mutations: {
    setUserProfile(state , val){
      state.userProfile = val
    } , 
    setEvents(state , val){
      state.events = val
    }
  },
  actions: {
   async googleLogin({ commit}) {
     
    try {
     //google login
     const { user }  = await auth.signInWithPopup(googleProvider)

      // fetch user profile and set in state 
      commit('setUserProfile' , user)
    } catch (error) {
      console.log(error.message)
    }

   } , 
    async facebookLogin({commit}){
      try {
        //facebook login 
      const { user } = await auth.signInWithPopup(facebookProvider)

      //fetch user profile and set in state 
      commit('setUserProfile' , user)
      } catch (error) {
        console.log(error.message)
      }

    },
    async emailPasswordSignUp({dispatch} , form){
      try {
        //email password login
        const { user } = await auth.signInWithEmailAndPassword(form.email, form.password)
        
        // create organiser profile object in organiser collections
        await organisersCollection.doc(user.uid).set({
          name: form.name,
          email: form.email
        })

        //fetch user profile and set in state 
        dispatch('fetchUserProfile' , user)
      } catch (error) {
        console.log(error.message)
      }
    },
    async signOut({commit}){
      await auth.signOut()
      
      commit('setUserProfile', {})
      this.$router.push('/login')
    },
    async newEVent(form){
      await eventsCollection.add({
        createdOn: new Date(),
        eventName: form.eventName,
        eventlocation: form.eventlocation,
        eventTimeDate: form.eventTimeDate,
        eventImage: form.eventImage,
        eventDescription: form.eventDescription,
        eventPrice: form.eventPrice
      })
    },
    async newEventAnnoucements(form){
      await annoucementsCollection.add({
        createdOn: new Date(), 
        eventId: form.eventId,
        message: form.annoucementMessage,
        image: form.annoucementImage,
        organiserId: form.organiserId
      })

    },
    async newTask(form){
      await tasksCollection.add({
        createdOn: new Date(),
        eventId: form.eventId,
        name: form.taskName,
        description: form.taskDescription,
        status: form.taskStatus,
        teamMembers: form.taskTeamMembers
      })
    }, 
    async newTaskThreadMessage(form){
      await taskThreadsCollection.add({
        createdOn: new Date(), 
        taskId : form.taskId, 
        message: form.threadMessage,
        organiserId: form.organiserId,
        teamMembers: form.teamMembers
      })
    }
  },
  modules: {
  }
})

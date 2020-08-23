import Vue from 'vue'
import Vuex from 'vuex'
import { auth , googleProvider , facebookProvider , organisersCollection} from '../utils/firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userProfile: {}
  },
  mutations: {
    setUserProfile(state , val){
      state.userProfile = val
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
    async facebookLogin(){
      try {
        //facebook login 
      const { user } = await auth.signInWithPopup(facebookProvider)

      //fetch user profile and set in state 
      this.commit('setUserProfile' , user)
      } catch (error) {
        console.log(error.message)
      }

    },
    async emailPasswordSignUp({dispatch} , form){
      try {
        //email password login
        const { user } = await auth.signInWithEmailAndPassword(form.email, form.paswword)
        
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
    }
  },
  modules: {
  }
})

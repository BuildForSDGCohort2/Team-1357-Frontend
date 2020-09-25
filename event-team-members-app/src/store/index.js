import Vue from 'vue'
import Vuex from 'vuex'
import { auth , googleProvider , facebookProvider , teamMembersCollection} from '../utils/firebase'

Vue.use(Vuex)
import router from'../router/index'


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
      router.push('/')
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
      router.push('/')
      } catch (error) {
        console.log(error.message)
      }

    },
    async emailPasswordSignUp({dispatch} , form){
      try {
        //email password login
        const { user } = await auth.signInWithEmailAndPassword(form.email, form.password)
        
        // create team members profile object in organiser collections
        await teamMembersCollection.doc(user.uid).set({
          name: form.name,
          email: form.email
        })

        //fetch user profile and set in state 
        dispatch('fetchUserProfile' , user)
        router.push('/')
      } catch (error) {
        console.log(error.message)
      }
    }, 
    async emailLinkSignIn( form){
      //auth details 
      await auth.signInWithEmailLink(form.email , form.url)
      
    },
    async signOut({commit}){
      await auth.signOut()
      
      commit('setUserProfile', {})
      router.push('/login')
    }
  },
  modules: {
  }
})

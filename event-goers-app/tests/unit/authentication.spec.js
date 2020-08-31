import {shallowMount , createLocalVue} from '@vue/test-utils'
import Login from '@/components/Login.vue'
import SideBar from '@/components/SideBar.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()

localVue.use(Vuex)
describe('A event goer should authenticate using Google or Facebook and Sign out' , () => {
    let store
    let actions 
    let state

    beforeEach(() => {
        actions = {
            googleLogin: jest.fn(),
            facebookLogin: jest.fn(),
            emailPasswordSignUp: jest.fn(),
            signOut: jest.fn()
        }
        state = {
            userProfile: {}
        }
        store = new Vuex.Store({
            state, 
            actions
        })
    })
    it('clicks on google button' , async () => {
        const wrapper = shallowMount(Login , {store , localVue})
        const googleButton = wrapper.find('#google').trigger('click')
        expect(actions.googleLogin).toHaveBeenCalled()
       
    })

    it('clicks on facebook button' , async () => {
        const wrapper = shallowMount(Login , {store , localVue})
        const facebookButton = wrapper.find('#facebook').trigger('click')
        expect(actions.facebookLogin).toHaveBeenCalled()
       
    })
    it('clicks sign up using email' , async () => {
        const wrapper = shallowMount(Login , {store , localVue})
        const nameInput = wrapper.find("#nameInput").setValue("organiser1")
        const emailInput = wrapper.find("#emailInput").setValue("organiser1@tendaievents.com")
        const passwordInput = wrapper.find("#passwordInput").setValue("organiserDefaultPassword")
        const submitButton = wrapper.find("#signupButton").trigger('click')
        
        expect(actions.emailPasswordSignUp).toHaveBeenCalled()
    })

    it('clicks on sign out button' , async () => {
        const wrapper = shallowMount(SideBar , {store , localVue})
        if(state.userProfile != null){
            const signOutButton = wrapper.find('#signout').trigger('click')
            expect(actions.signOut).toHaveBeenCalled()
            
        }       

    })
})
import {shallowMount , createLocalVue} from '@vue/test-utils'
import Login from '@/components/Login.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()

localVue.use(Vuex)
describe('team leaders authentication scenarios' , () => {
    let store
    let actions 
    let state

    beforeEach(() => {
        actions = {
            googleLogin: jest.fn(),
            facebookLogin: jest.fn(),
            emailPasswordSignUp: jest.fn(),
            emailPasswordLessSignUp: jest.fn(),
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
    it('sign up with email link' , async () => {
        const wrapper = shallowMount(EmailSignUp , {store , localVue})
        const emailButton = wrapper.find('#emailButton').trigger('click')
        expect(actions.emailPasswordLessSignUp).toHaveBeenCalled()

    })

    it('clicks on sign out button' , async () => {
        const wrapper = shallowMount(Login , {store , localVue})
        if(state.userProfile != null){
            const signOutButton = wrapper.find('#signout').trigger('click')
            expect(actions.signOut).toHaveBeenCalled()
            
        }       

    })
})
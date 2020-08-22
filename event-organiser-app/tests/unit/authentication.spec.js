import {shallowMount , createLocalVue} from '@vue/test-utils'
import Login from '@/components/Login.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()

localVue.use(Vuex)
describe('An organiser should authenticate using Google or Facebook.' , () => {
    let store
    let actions 

    beforeEach(() => {
        actions = {
            googleLogin: jest.fn(),
            facebookLogin: jest.fn(),
            signOut: jest.fn()
        }
        store = new Vuex.Store({
            state: {
                userProfile: null
            }, 
            actions
        })
    })
    it('clicks on google button' , async () => {
        const wrapper = shallowMount(Login , {store , localVue})
        const googleButton = wrapper.find('#google').trigger('click')
        expect(actions.googleLogin).toHaveBeenCalled()
        expect(state.userProfile).toBe(!null)
    })

    it('clicks on facebook button' , async () => {
        const wrapper = shallowMount(Login , {store , localVue})
        const facebookButton = wrapper.find('#facebook').trigger('click')
        expect(actions.facebookButton).toHaveBeenCalled()
        expect(state.userProfile).toBe(!null)
    })

    it('clicks on sign out button' , async () => {
        const wrapper = shallowMount(Login , {store , localVue})
        if(state.userProfile != null){
            const signOutButton = wrapper.find('#signout').trigger('click')
            expect(actions.signOut).toHaveBeenCalled()
            expect(state.userProfile).toBe(null)
        }       

    })
})
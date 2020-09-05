import {shallowMount , createLocalVue} from '@vue/test-utils'
import Vuex from 'vuex'

import EventFeed from '@/components/EventFeed.vue'
import EventDetails from '@/components/EventDetails.vue'
import EventCheckout from '@/components/EventCheckout.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('A event goer can', () => {
    let store 
    let actions 
    let state 

    beforeEach(() => {
        actions = {
            checkout: jest.fn(),
            addToCart: jest.fn()

        }
        state = {
            userProfile: {},
            event: {
                id: 1,
                organiserId: 1,
                eventName: 'Korujams Sport Day',
                eventLocation: 'Rosmead Ave, Wynberg, Cape Town, 7800',
                eventTimeDate: Date.now, 
                eventImage: 'https://dekhnews.com/wp-content/uploads/2016/04/Sports-Day-Poster.png',
                eventDescription: "Sports Day at St. Xavier’s Godavari School is a platform to showcase the talent and efforts put in by the student to make it a successful event. Sports here at SXG is not only about competition, it is also about having fun , being physically active , learning the basics of sports and building coordination and teamwork and so to give the students an opportunity to display their talent, self-confidence, patience, zeal and sportsmanship.The two- day Sports Day celebrations for seniors and juniors were held at the school on 4th and 5th November 2018 respectively. The day began with a march past presented by the students of all six teams- Lions, Tigers, Leopards, Panthers and Jaguar.",
                eventPrice: 150                
            }, 
            ticketSale: {
                id:2 ,
                eventId: 1,
                userId: 2,
                payFastId: 30
            },
        }
        store = new Vuex.Store({
            state,
            actions
        })  
    })

    it('view all new events in a feed' , async () => {
        const wrapper = shallowMount(EventFeed , {store , localVue})

        const eventId = wrapper.find(`#eventId#${state.event.id}`)
        const eventName = wrapper.find(`#eventName#${state.event.id}`)
        const eventLocation = wrapper.find(`#eventLocation#${state.event.id}`)
        const eventTimeDate = wrapper.find(`#eventTimeDate#${state.event.id}`)
        const eventDescription = wrapper.find(`#eventDescription#${state.event.id}`)
        const eventPrice = wrapper.find(`#eventPrice#${state.event.id}`)

        // expect values to equal the same 
        expect(eventName).toContain(state.event.eventName)
        expect(eventLocation).toContain(state.event.eventLocation)
        expect(eventTimeDate).toContain(state.event.eventTimeDate)
        expect(eventDescription).toContain(state.event.eventDescription)
        expect(eventPrice).toContain(state.event.eventPrice)
        


    })

    it('buy a ticket for a particular event' , async () => {
        const wrapper = shallowMount(EventCheckout , {store , localVue})

        const eventName = wrapper.find(`#eventName#${state.event.id}`)
        const eventLocation = wrapper.find(`#eventLocation#${state.event.id}`)
        const eventTimeDate = wrapper.find(`#eventTimeDate#${state.event.id}`)
        const eventDescription = wrapper.find(`#eventDescription#${state.event.id}`)
        const eventPrice = wrapper.find(`#eventPrice#${state.event.id}`)

        const buyNowButton = wrapper.find(`#eventBuyNowButton`).trigger('click')

        expect(actions.checkout).toHaveBeenCalled()

    })

    it('buy tickets for friends and family' , async () => {
        const wrapper = shallowMount(EventDetails , {store , localVue})

        const eventName = wrapper.find(`#eventName#${state.event.id}`)
        const eventLocation = wrapper.find(`#eventLocation#${state.event.id}`)
        const eventTimeDate = wrapper.find(`#eventTimeDate#${state.event.id}`)
        const eventDescription = wrapper.find(`#eventDescription#${state.event.id}`)
        const eventPrice = wrapper.find(`#eventPrice#${state.event.id}`)

        const addToCartButton = wrapper.find(`#eventAddToCartButton`).trigger('click')

        expect(actions.addToCart).toHaveBeenCalled()

    })
})
import {shallowMount , createLocalVue} from '@vue/test-utils'
import flushPromises from 'flush-promises'
import Vuex from 'vuex'

import EventFeed from '@/components/EventFeed.vue'
import EventTasks from '@/components/EventTasks.vue'
import EventTaskThreadMessage from '@/components/EventTaskThreadMessage.vue'
const localVue = createLocalVue()

localVue.use(Vuex)


describe('team members can' , () => {
    let store 
    let actions 
    let state 

    beforeEach(() => {
        actions = {
            updateTaskStatus: jest.fn(),
            newTaskThreadMessage: jest.fn()

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
            task: {
                id: 3, 
                eventId: 2 ,
                taskName: 'Find sport ground Venue',
                taskDescription: 'We need to get more options for our grounds',
                taskStatus: 'Pending',
                taskMembers: [ 1 , 2]

            }, 
            taskThread: {
                id: 4,
                taskId: 3,
                threadMessage: 'Hello how far is the progress on this task',
                organiserId: 1,
                teamMemberId: 2,
                eventId: 2
            }, 
        }
        store = new Vuex.store({
            state, 
            actions
        })

        it('see all events that they are working on' , async () => {
            const wrapper = shallowMount(EventFeed , {store , localVue})
            const eventId = wrapper.find(`#eventId#${state.event.eventId}`)
            const eventName = wrapper.find(`#eventName#${state.event.eventId}`)
            const eventLocation = wrapper.find(`#eventLocation#${state.event.eventId}`)
            const eventTimeDate = wrapper.find(`#eventTimeDate#${state.event.eventId}`)
            const eventImage = wrapper.find(`#eventImage#${state.event.eventId}`)
            const eventDescription = wrapper.find(`#eventDescription#${state.event.eventId}`)
            const eventPrice = wrapper.find(`#eventPrice#${state.event.eventId}`)

            //value Id's should equal to 
            expect(eventName.text()).toContain(state.event.eventName)
            expect(eventLocation.text()).toContain(state.event.eventLocation)
            expect(eventTimeDate.text()).toContain(state.event.eventTimeDate)
            expect(eventImage.text()).toContain(state.event.eventImage)
            expect(eventDescription.text()).toContain(state.event.eventDescription)
            expect(eventPrice.text()).toContain(state.event.eventPrice)




        })

        it('see all the event tasks allocated to the team member' , async () => {
            const wrapper = shallowMount(EventTasks , {store , localVue})
            const taskId = wrapper.find(`#taskId#${state.task.id}`)
            const eventId = wrapper.find(`#taskEventId#${state.task.eventId}`)
            const taskName = wrapper.find(`#taskName#${state.task.id}`)
            const taskDescription = wrapper.find(`#taskDescription#${state.task.id}`)
            const taskStatus = wrapper.find(`#taskStatus#${state.task.id}`)
    
    
            //valid id's should be equal to 
    
            expect(taskName.text()).toContain(state.task.taskName)
            expect(taskDescription.text()).toContain(state.task.taskDescription)
            expect(taskStatus.text()).toContain(state.task.taskStatus)
    

        })
        it('update event task status(done, pending, open)' , async () => {
            const wrapper = shallowMount(EventTasks , {store , localVue})
            const taskId = wrapper.find(`#taskId#${state.task.id}`)
            const eventId = wrapper.find(`#taskEventId#${state.task.eventId}`)
            const taskName = wrapper.find(`#taskName#${state.task.id}`)
            const taskDescription = wrapper.find(`#taskDescription#${state.task.id}`)
            const taskStatus = wrapper.find(`#taskStatus#${state.task.id}`).trigger('click')

            expect(actions.updateTaskStatus).toHaveBeenCalled()
    
            
            
    

        })

        it('add messages to the event task thread' , async () => {
            const wrapper = shallowMount(EventThreadMessage , {store , localVue})
            const taskThreadMessageInput = wrapper.find(`#taskThreadMessageInput#${state.taskThread.id}`).setValue(state.taskThread.threadMessage)
            const submitButton = wrapper.find(`#taskThreadMessageSubmitButton#${state.taskThread.id}`).trigger('click')

            expect(actions.newTaskThreadMessage).toHaveBeenCalled()

        })
    })
})
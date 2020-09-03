import {shallowMount , createLocalVue} from '@vue/test-utils'
import NewEvent from '@/components/NewEvent.vue'
import Annoucements from '@/components/Annoucements.vue'
import NewAnnoucement from '@/components/NewAnnoucement.vue'
import Tasks from '@/components/Tasks.vue'
import NewTask from '@/components/NewTask.vue'
import TaskMessageThread from '@/components/TaskMessageThread.vue'
import TeamMembers from '@/components/TeamMembers.vue'
import ViewEvent from '@/components/ViewEvent.vue'
import TeamMemberChat from '@/components/TeamMemberChat.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('An organiser sport day event scenarios' , () => {
    let store 
    let actions 
    let state 

    beforeEach(() => {
        actions = {
            newEvent: jest.fn(),
            viewEvent: jest.fn(),
            viewAnnouncements: jest.fn(),
            newEventAnnoucements: jest.fn(),
            viewTasks: jest.fn(),
            newTask: jest.fn(),
            taskThread: jest.fn(),
            newTaskThreadMessage: jest.fn(),
            viewEventTeamMembers: jest.fn(),
            teamMembersProfile: jest.fn(),
            newEventTeamMember: jest.fn(),
            removeEventTeamMember: jest.fn(),
            eventTeamMemberChat: jest.fn()
        }
        state = {
            userProfile: {
                id: 1 , 
                emailAddress: 'jkyony@gmail.com',
                name: 'john'
            },
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
            annoucement: {
                id: 2, 
                eventId: 1,
                annoucementMessage: 'Date changes coming soon , due to the corona virus',
                annoucementImage: 'https://dekhnews.com/wp-content/uploads/2016/04/Sports-Day-Poster.png',
                organiserId: 1
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
            teamMembersProfile : {
                emailAddress: 'abc@gmail.com',
                avatar: 'https://dekhnews.com/wp-content/uploads/2016/04/Sports-Day-Poster.png',
                name: 'abcde',
                id: 2

            },
            chats: {
                eventId: 2,
                organiserId: 1,
                teamMemberId: 3,
                chatMessage: 'Hello there how have you been'
            }
        }
        store = new Vuex.Store({
            state , 
            actions
        })

    })

    it('can create an event' , async () => {
        const wrapper = shallowMount(NewEvent , {store , localVue})
        const eventNameInput = wrapper.find("#eventNameInput").setValue("Korujams Sport Day")
        const eventLocationInput = wrapper.find("#eventLocationInput").setValue("Rosmead Ave, Wynberg, Cape Town, 7800")
        const eventTimeDateInput = wrapper.find("#eventTimeDateInput").setValue(`${Date.now}`)
        const eventImageInput = wrapper.find('#eventImageInput').setValue("https://dekhnews.com/wp-content/uploads/2016/04/Sports-Day-Poster.png")
        const eventDescriptionInput = wrapper.find('#eventDescriptionInput').setValue("Sports Day at St. Xavier’s Godavari School is a platform to showcase the talent and efforts put in by the student to make it a successful event. Sports here at SXG is not only about competition, it is also about having fun , being physically active , learning the basics of sports and building coordination and teamwork and so to give the students an opportunity to display their talent, self-confidence, patience, zeal and sportsmanship.The two- day Sports Day celebrations for seniors and juniors were held at the school on 4th and 5th November 2018 respectively. The day began with a march past presented by the students of all six teams- Lions, Tigers, Leopards, Panthers and Jaguar.")
        const eventPriceInput = wrapper.find('#eventPriceInput').setValue(150)
        const submitButton = wrapper.find('#createNewEvent').trigger('click')

        expect(actions.NewEvent).toHaveBeenCalled()

    })

    it('can view event details' , async () => {
        const wrapper = shallowMount(ViewEvent , {store , localVue})
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

    it('can see event ticket sales' , async () => {
        const wrapper = shallowMount(ViewEvent , {store , localVue})
        const ticketId = wrapper.find(`#ticket#${state.ticketSale.id}`)
        const eventId = wrapper.find(`#ticket#${state.ticketSale.eventId}`)
        const userId = wrapper.find(`#ticket#${state.ticketSale.userId}`)
        const payFastId = wrapper.find(`#ticket#${state.ticketSale.payFastId}`)

        //value id's should equal to 

        expect(ticketId.text()).toContain(state.ticketSale.id)
        expect(eventId.text()).toContain(state.ticketSale.eventId)
        expect(userId.text()).toContain(state.ticketSale.userId)
        expect(payFastId.text()).toContain(state.ticketSale.payFastId)

    })

    it('can view event announcements' , async () => {
        const wrapper = shallowMount(Annoucements , {store , localVue})
        const annoucementId = wrapper.find(`#annoucement#${state.annoucement.id}`)
        const eventId = wrapper.find(`#annoucement#${state.annoucement.eventId}`)
        const annoucementMessage = wrapper.find(`#annoucement#${state.annoucement.annoucementMessage}`)
        const image = wrapper.find(`#annoucement#${state.annoucement.annoucementImage}`)
        const organiserId = wrapper.find(`#annoucement#${state.annoucement.organiserId}`)

        //value ids should equal to 
        expect(annoucementMessage.text()).toContain(state.annoucement.annoucementMessage)

    })

    it('can create new event announcements' , async () => {
        const wrapper = shallowMount(NewAnnoucement , {store , localVue})
        const annoucementMessageInput = wrapper.find(`#annoucement#${state.annoucement.id}`).setValue('Date changes coming soon , due to the corona virus')
        const submitButton = wrapper.find(`#annoucement#${state.annoucement.id}`).trigger('click')

        expect(actions.newEventAnnoucements).toHaveBeenCalled()
        

    })

    it('can view event tasks' , async () => {
        const wrapper = shallowMount(Tasks , {store , localVue})
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

    it('can create new event task and assign to team members' , async () => {
        const wrapper = shallowMount(NewTask , {store , localVue})
        const taskNameInput = wrapper.find('#taskNameInput').setValue('Find sport ground Venue')
        const taskDescriptionInput = wrapper.find('#taskDescriptionInput').setValue('We need to get more options for our grounds')
        const taskStatusInput = wrapper.find('#taskStatusInput').setValue('Pending')
        const taskTeamMembersInput = wrapper.find('#taskTeamMembersInput').setValue([1,2])

        const submitButton = wrapper.find('#createNewTask').trigger('click')

        expect(actions.newTask).toHaveBeenCalled()

    })

    it('can view event task message thread' , async () => {
        const wrapper = shallowMount(TaskMessageThread , {store , localVue})
        const taskMessageId = wrapper.find(`#taskMessageID#${state.taskThread.id}`)
        const taskMessageOrganiserId = wrapper.find(`#taskMessgaeOrganiserId#${state.taskThread.organiserId}`)
        const taskMessageTeamMemberId = wrapper.find(`#taskMessageTeamMemberId#${state.taskThread.teamMemberId}`)
        const taskMessageEventId = wrapper.find(`#taskMessageEventId#${state.taskThread.eventId}`)
        const taskMessageThreadMessage = wrapper.find(`#taskMessageThreadMessage`)

        //check if thread message correct
        expect(taskMessageThreadMessage.text()).toContain(state.taskThread.threadMessage)

    })

    it('can send a message on the event task thread' , async () => {
        const wrapper = shallowMount(TaskMessageThread , {store , localVue})
        const taskThreadMessageInput = wrapper.find(`#taskThreadMessageInput#${state.taskThread.id}`).setValue(state.taskThread.threadMessage)
        const submitButton = wrapper.find(`#taskThreadMessageSubmitButton#${state.taskThread.id}`).trigger('click')

        expect(actions.newTaskThreadMessage).toHaveBeenCalled()

    })

    it('can view all event team members' , async () => {
        const wrapper = shallowMount(TeamMembers , {store , localVue})
        const eventTeamMemberId = wrapper.find(`#teamMemberId#${state.teamMembersProfile.id}`)
        const eventTeamMemberEmailAddresss = wrapper.find(`#teamMemberEmailAddress#${state.teamMembersProfile.id}`)
        const eventTeamMemberAvatar = wrapper.find(`#teamMemberAvatar#${state.teamMembersProfile.id}`)
        const eventTeamMemberName = wrapper.find(`#teamMemberName#${state.teamMembersProfile.id}`)

        expect(eventTeamMemberName.text()).toContain(state.teamMembersProfile.name)

    })

    

    it('can add an event team member' , async () => {
        const wrapper = shallowMount(TeamMembers , {store , localVue})
        const addEventTeamMemberInput = wrapper.find(`#teamMemberInput#${state.event.id}`).setValue('abc@gmail.com')
        const submitButton = wrapper.find(`#teamMemberSubmitButton#${state.event.id}`).trigger('click')

        expect(actions.newEventTeamMember).toHaveBeenCalled()

    })

    it('can remove a team member' , async () => {
        const wrapper = shallowMount(TeamMembers , {store , localVue})
        const eventTeamMember = wrapper.find(`#eventTeamMemberId#${state.teamMembersProfile.id}`)
        const eventTeamMemberRemoveButton = wrapper.find(`#eventTeamMemberRemoveButton#${state.teamMembersProfile.id}`).trigger('click')

        expect(actions.removeEventTeamMember).toHaveBeenCalled()
        

    })

    



})

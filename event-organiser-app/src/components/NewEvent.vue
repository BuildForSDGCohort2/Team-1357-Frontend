<template>
    <div>
        <div class="container bootstrap snippet">
            <div class="row">
                <div class="col-sm-10"><h1>New Event</h1></div>
                <!-- <div class="col-sm-2"><a class="pull-right"><img src="http://www.gravatar.com/avatar/28fd20ccec6865e2d5f0e1f4446eb7bf?s=100" alt="" class="img-circle img-responsive"></a></div> -->
            </div>
            <div class="row">
                <div class="col-sm-3">
                    <div class="text-center">
                        <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" class="avatar img-circle img-thumbnail" alt="avatar">
                        <h6>Upload Event Image</h6>
                        <input type="file" class="text-center center-block file-upload">
                    </div>
                </div>

                <div class="col-sm-9">
                    <ul class="nav nav-tabs">
                        <li class="active"><a data-toggle="tab">Home</a></li>
                    </ul>

                    <div class="tab-content">
                        <div class="tab-pane active" id="home">
                            <hr>
                            <form id="createNewEventForm" @submit.prevent >
                                <div class="form-group">
                                    
                                    <div class="col-xs-6">
                                        <label for="eventName"><h4>Event Name</h4></label>
                                        <input type="text"  class="form-control" name="eventName" id="eventNameInput" placeholder="Enter Event Name " v-model.trim="event.name">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="col-xs-6">
                                        <label for="eventLocation"><h4>Event Location Address</h4></label>
                                        <input type="text" class="form-control" name="eventLocation" id="eventLocationInput" placeholder="Enter Event Location Address" v-model.trim="event.location">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="col-xs-6">
                                        <label for="eventTimeDate"><h4>Event Time & Date</h4></label>
                                        <input type="text" class="form-control" name="eventTimeDate" id="eventTimeDateInput" v-model.trim="event.timeDate">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="col-xs-6">
                                        <label for="eventImage"><h4>Event Image</h4></label>
                                        <input type="text" class="form-control" name="eventImage" id="eventImageInput" v-model.trim="event.image">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="col-xs-6">
                                        <label for="eventDescription"><h4>Event Description</h4></label>
                                        <input type="text" class="form-control" name="eventDescription" id="eventDescriptionInput" v-model.trim="event.description">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="col-xs-6">
                                        <label for="eventPrice"><h4>Event Price</h4></label>
                                        <input type="text" class="form-control" name="eventPrice" id="eventPriceInput" v-model.trim="event.price">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="col-xs-12">
                                        <br>
                                        <button class="btn btn-lg btn-success" @click="NewEvent" id="createNewEvent"></button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            event: {
                name: '',
                location: '',
                timeDate: '',
                image: '',
                description: '',
                price: ''
            }
        }
    },
    methods: {
        NewEvent(){
            this.$store.dispatch('newEvent' , {
                eventName: this.name,
                eventLocation: this.location,
                eventTimeDate: this.timeDate,
                eventImage: this.image,
                eventDescription: this.description,
                eventPrice: this.price
            })
        }

    }
}
</script>

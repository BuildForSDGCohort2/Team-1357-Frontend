<template>
    <div>
        <div class="container bootstrap snippet">
            <div class="row">
                <div class="col-sm-10"><h1>New Annoucements</h1></div>
                <!-- <div class="col-sm-2"><a class="pull-right"><img src="http://www.gravatar.com/avatar/28fd20ccec6865e2d5f0e1f4446eb7bf?s=100" alt="" class="img-circle img-responsive"></a></div> -->
            </div>
            <div class="row">
                

                <div class="col-sm-9">
                    <ul class="nav nav-tabs">
                        <li class="active"><a data-toggle="tab">New Event</a></li>
                    </ul>

                    <div class="tab-content">
                        <div class="tab-pane active" id="home">
                            <hr>
                            <form id="createNewEventForm" @submit.prevent >
                                <div class="form-group">
                                    
                                    <div class="col-xs-6">
                                        <label for="Annoucement Message"><h4>Annoucement Message</h4></label>
                                        <input type="text"  class="form-control" name="Annoucement Message" id="annoucementMessageInput" placeholder="Enter Annoucement Message" v-model.trim="event.annoucementMessage">
                                    </div>
                                </div>                                                      

                                

                                <div class="form-group">
                                    <div class="col-xs-12">
                                        <br>
                                        <button class="btn btn-lg btn-success" @click="NewEventAnnoucements" id="annoucementSubmitButton"></button>
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
                annoucementMessage: ''
            }
        }
    }, 
    methods: {
        NewEventAnnoucements(){
            this.$store.dispatch('newEventAnnoucements' , {
                message: this.annoucementMessage
            })
        }
    }
}
</script>
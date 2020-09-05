<template>
    <div>
        <div class="container bootstrap snippet">
            <div class="row">
                <div class="col-sm-10"><h1>New Task</h1></div>
                <!-- <div class="col-sm-2"><a class="pull-right"><img src="http://www.gravatar.com/avatar/28fd20ccec6865e2d5f0e1f4446eb7bf?s=100" alt="" class="img-circle img-responsive"></a></div> -->
            </div>
            <div class="row">
                

                <div class="col-sm-9">
                    <ul class="nav nav-tabs">
                        <li class="active"><a data-toggle="tab">New Task</a></li>
                    </ul>

                    <div class="tab-content">
                        <div class="tab-pane active" id="home">
                            <hr>
                            <form id="createNewEventForm" @submit.prevent >
                                <div class="form-group">
                                    
                                    <div class="col-xs-6">
                                        <label for="taskName"><h4>Task Name</h4></label>
                                        <input type="text"  class="form-control" name="taskName" id="taskNameInput" placeholder="Enter task name" v-model.trim="event.taskName">
                                    </div>
                                </div>     
                                <div class="form-group">
                                    
                                    <div class="col-xs-6">
                                        <label for="taskDescription"><h4>Task Description</h4></label>
                                        <input type="text"  class="form-control" name="taskDescription" id="taskDescriptionInput" placeholder="Enter task description" v-model.trim="event.taskDescription">
                                    </div>
                                </div>   

                                <div class="form-group">
                                    
                                    <div class="col-xs-6">
                                        <label for="taskStatus"><h4>Task Status</h4></label>
                                        <input type="text"  class="form-control" name="taskStatus" id="taskStatusInput" placeholder="Enter task status" v-model.trim="event.taskStatus">
                                    </div>
                                </div>  

                                <div class="form-group">
                                    
                                    <div class="col-xs-6">
                                        <label for="taskTeamMember"><h4>Task Team Member</h4></label>
                                        <input type="text"  class="form-control" name="taskTeamMember" id="taskTeamMembersInput" placeholder="Enter task team member" v-model.trim="event.taskTeamMember">
                                    </div>
                                </div>  
                                                                                  

                                

                                <div class="form-group">
                                    <div class="col-xs-12">
                                        <br>
                                        <button class="btn btn-lg btn-success" @click="NewTask" id="createNewTask"></button>
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
                taskName: '',
                taskDescription: '',
                taskStatus: '',
                taskTeamMember: ''
            }
        }
    }, 
    methods: {
        NewTask(){
            this.$store.dispatch('newTask' , {
                taskName: this.taskName,
                taskDescription: this.taskDescription,
                taskStatus: this.taskStatus,
                taskTeamMember: this.taskTeamMember
            })
        }

    }
}
</script>
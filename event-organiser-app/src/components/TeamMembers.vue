<template>
<div class="container">
    <div class="row">
        <div class="col-sm-6 col-md-4 col-lg-3 mt-4">
            <div class="card">
                <img class="card-img-top" src="https://picsum.photos/200/150/?random">
                <div class="card-block">
                    <h5 class="text-bold" id="teamMemberName">{{teamMembersProfile.name}}</h5>
                </div>
                <button class="btn btn-lg btn-danger" id="eventTeamMemberRemoveButton" @click="removeEventTeamMember(teamMembersProfile.id)"></button>
            </div>
        </div>
       <form >
           <div class="form-group">
               <div class="col-xs-6">
                   <label for="teamMemberEmail">Team Member Email</label>
                   <input type="text" class="form-control" name="teamMemberEmail" id="teamMemberInput" v-model.trim="teamMemberEmailInput">
               </div>
           </div>
           
           <div class="form-group">
               <div class="col-xs-6">
                   <br>
                   <button class="btn btn-lg btn-success" id="teamMemberSubmitButton" @click="newEventTeamMember()"></button>
               </div>
           </div>

          
       </form>
       
    </div>
    
</div>
</template>

<script>
export default {
    data(){
        return {
            teamMembersProfile : {
                emailAddress: 'abc@gmail.com',
                avatar: 'https://dekhnews.com/wp-content/uploads/2016/04/Sports-Day-Poster.png',
                name: 'abcde',
                id: 2

            },
            teamMemberEmailInput: ''
        }
    } , 
    methods: {
        newEventTeamMember(){
            this.$store.dispatch('newEventTeamMember', {
                emailAddress: this.teamMemberEmailInput
            })
        }, 
        removeEventTeamMember(id){
            this.$store.dispatch('removeEventTeamMember' , id)
        }
    }
}
</script>
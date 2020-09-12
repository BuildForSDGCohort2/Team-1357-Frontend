<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6 col-md-6 ">
        <div class="card">
          <img class="card-img-top" src="https://picsum.photos/200/150/?random" />
          <div class="card-block">
            <h5 class="text-bold" id="teamMemberName">{{teamMembersProfile.name}}</h5>
            <h5 class="text-bold" id="teamMemberEmail">{{teamMembersProfile.emailAddress}}</h5>
          </div>
          <button
            class="btn btn-danger"
            id="eventTeamMemberRemoveButton"
            @click="removeEventTeamMember(teamMembersProfile.id)"
          >Delete</button>
        </div>
      </div>
    </div>
    <br>
    <hr>

    <div class="row">
        <h1>Add Team Member</h1>
      <div class="col-sm-12 col-md-12">
        <form>
          <div class="form-group">
            <div class="col-xs-6">
              <label for="teamMemberEmail">Team Member Email</label>
              <input
                type="text"
                class="form-control"
                name="teamMemberEmail"
                id="teamMemberInput"
                v-model.trim="teamMemberEmailInput"
              />
            </div>
          </div>

          <div class="form-group">
            <div class="col-xs-6">
              <br />
              <button
                class="btn  btn-success"
                id="teamMemberSubmitButton"
                @click="newEventTeamMember()"
              >Add Team Member</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teamMembersProfile: {
        emailAddress: "eddy@gmail.com",
        avatar:
          "https://dekhnews.com/wp-content/uploads/2016/04/Sports-Day-Poster.png",
        name: "eddy",
        id: 2
      },
      teamMemberEmailInput: ""
    };
  },
  methods: {
    newEventTeamMember() {
      this.$store.dispatch("newEventTeamMember", {
        emailAddress: this.teamMemberEmailInput
      });
    },
    removeEventTeamMember(id) {
      this.$store.dispatch("removeEventTeamMember", id);
    }
  }
};
</script>
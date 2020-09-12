<template>
  <div class="profile-page sidebar-collapse">
    <div
      class="page-header header-filter"
      data-parallax="true"
      style="background-image: url('https://live.staticflickr.com/65535/50256935841_6b3e5bfe96_k.jpg');"
    ></div>
    <div class="main main-raised">
      <div class="profile-content">
        <div class="container">
          <div class="row">
            <div class="col-md-6 ml-auto mr-auto">
              <div class="profile">
                <div class="avatar">
                  <img
                    src="https://live.staticflickr.com/65535/50256935841_6b3e5bfe96_k.jpg"
                    alt="Circle Image"
                    class="img-raised rounded-circle img-fluid"
                  />
                </div>
                <div class="name">
                  <h3 class="title">New Event Annoucement</h3>
                  <h6>Create Annoucement</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="description text-center">
            <form id="createNewEventForm" @submit.prevent>
              <div class="form-group">
                <div class="col-xs-6">
                  <label for="Annoucement Message">
                    <h4>Annoucement Message</h4>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="Annoucement Message"
                    id="annoucementMessageInput"
                    placeholder="Enter Annoucement Message"
                    v-model.trim="event.annoucementMessage"
                  />
                </div>
              </div>

              <div class="form-group">
                <div class="col-xs-12">
                  <br />
                  <button
                    class="btn btn-lg btn-success"
                    @click="NewEventAnnoucements"
                    id="annoucementSubmitButton"
                  >Create Annoucement</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      event: {
        annoucementMessage: ""
      }
    };
  },
  methods: {
    NewEventAnnoucements() {
      this.$store.dispatch("newEventAnnoucements", {
        message: this.annoucementMessage
      });
    }
  }
};
</script>
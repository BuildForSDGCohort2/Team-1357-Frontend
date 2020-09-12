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
                  <h3 class="title">New Event</h3>
                  <h6>Create a sport day</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="description text-center">
            <form id="createNewEventForm" @submit.prevent>
              <div class="form-group">
                <div class="col-xs-6">
                  <label for="eventName">
                    <h4>Event Name</h4>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="eventName"
                    id="eventNameInput"
                    placeholder="Enter Event Name "
                    v-model.trim="event.name"
                  />
                </div>
              </div>

              <div class="form-group">
                <div class="col-xs-6">
                  <label for="eventLocation">
                    <h4>Event Location Address</h4>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="eventLocation"
                    id="eventLocationInput"
                    placeholder="Enter Event Location Address"
                    v-model.trim="event.location"
                  />
                </div>
              </div>

              <div class="form-group">
                <div class="col-xs-6">
                  <label for="eventTimeDate">
                    <h4>Event Time & Date</h4>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="eventTimeDate"
                    id="eventTimeDateInput"
                    placeholder="Enter Event Time & Date"
                    v-model.trim="event.timeDate"
                  />
                </div>
              </div>

              <div class="form-group">
                <div class="col-xs-6">
                  <label for="eventImage">
                    <h4>Event Image</h4>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="eventImage"
                    id="eventImageInput"
                    placeholder="Enter Event image link , please upload on you own cdn"
                    v-model.trim="event.image"
                  />
                </div>
              </div>

              <div class="form-group">
                <div class="col-xs-6">
                  <label for="eventDescription">
                    <h4>Event Description</h4>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="eventDescription"
                    id="eventDescriptionInput"
                    placeholder="Enter Event description"
                    v-model.trim="event.description"
                  />
                </div>
              </div>

              <div class="form-group">
                <div class="col-xs-6">
                  <label for="eventPrice">
                    <h4>Event Price</h4>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="eventPrice"
                    id="eventPriceInput"
                    placeholder="Enter Event price"
                    v-model.trim="event.price"
                  />
                </div>
              </div>

              <div class="form-group">
                <div class="col-xs-12">
                  <br />
                  <button
                    class="btn btn-lg btn-success"
                    @click="NewEvent"
                    id="createNewEvent"
                  >Create New Event</button>
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
        name: "",
        location: "",
        timeDate: "",
        image: "",
        description: "",
        price: ""
      }
    };
  },
  methods: {
    NewEvent() {
      this.$store.dispatch("newEvent", {
        eventName: this.name,
        eventLocation: this.location,
        eventTimeDate: this.timeDate,
        eventImage: this.image,
        eventDescription: this.description,
        eventPrice: this.price
      });
    }
  }
};
</script>

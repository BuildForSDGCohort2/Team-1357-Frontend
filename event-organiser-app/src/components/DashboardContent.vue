<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header card-header-icon card-header-rose">
            <div class="card-icon">
              <i class="material-icons">language</i>
            </div>
          </div>
          <div class="card-body">
            <h4 class="card-title">{{event.eventName}}</h4>
            <p>{{event.eventDescription}}</p>
            <a class="btn btn-primary" @click="viewEvent">Event Details</a>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header card-header-icon card-header-rose">
            <div class="card-icon">
              <i class="material-icons">language</i>
            </div>
          </div>
          <div class="card-body">
            <h4 class="card-title">{{event.eventName}}</h4>
            <p>{{event.eventDescription}}</p>
            <a class="btn btn-primary" @click="viewEvent">Event Details</a>
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
        id: 1,
        organiserId: 1,
        eventName: "Korujams Sport Day",
        eventLocation: "Rosmead Ave, Wynberg, Cape Town, 7800",
        eventTimeDate: Date.now,
        eventImage:
          "https://dekhnews.com/wp-content/uploads/2016/04/Sports-Day-Poster.png",
        eventDescription:
          "Sports Day at St. Xavier’s Godavari School is a platform to showcase the talent and efforts put in by the student to make it a successful event. Sports here at SXG is not only about competition, it is also about having fun , being physically active , learning the basics of sports and building coordination and teamwork and so to give the students an opportunity to display their talent, self-confidence, patience, zeal and sportsmanship.The two- day Sports Day celebrations for seniors and juniors were held at the school on 4th and 5th November 2018 respectively. The day began with a march past presented by the students of all six teams- Lions, Tigers, Leopards, Panthers and Jaguar.",
        eventPrice: 150
      }
    };
  },
  methods: {
    viewEvent() {
      this.$router.push("/viewEvent");
    }
  }
};
</script>
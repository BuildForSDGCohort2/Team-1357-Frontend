<template>
  <div class="profile-page sidebar-collapse">
    <div
      class="page-header header-filter"
      data-parallax="true"
      style="background-image: url('https://dekhnews.com/wp-content/uploads/2016/04/Sports-Day-Poster.png');"
    ></div>
    <div class="main main-raised">
      <div class="profile-content">
        <div class="container">
          <div class="row">
            <div class="col-md-6 ml-auto mr-auto">
              <div class="profile">
                <div class="avatar">
                  <img
                    src="https://dekhnews.com/wp-content/uploads/2016/04/Sports-Day-Poster.png"
                    alt="Circle Image"
                    class="img-raised rounded-circle img-fluid"
                  />
                </div>
                <div class="name">
                  <h3 class="title">{{event.eventName}}</h3>
                  <h6>{{event.eventLocation}}</h6>
                  <h6>{{event.eventTimeDate}}</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="description text-center">
            <p>{{event.eventDescription}}</p>
          </div>
          <div class="row">
            <div class="col-md-6 ml-auto mr-auto">
              <div class="profile-tabs">
                <ul class="nav nav-pills nav-pills-icons justify-content-center" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active" href="#ticketSales" role="tab" data-toggle="tab">
                      <i class="material-icons">account_balance_wallet</i> Ticket Sales
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#annoucements" role="tab" data-toggle="tab">
                      <i class="material-icons">alarm_add</i> Annoucements
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#tasks" role="tab" data-toggle="tab">
                      <i class="material-icons">add_task</i> Tasks
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#teamMembers" role="tab" data-toggle="tab">
                      <i class="material-icons">supervised_user_circle</i> Team Members
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="tab-content tab-space">
            <div class="tab-pane active text-center" id="ticketSales">
              <div class="row justify-content-center">
                <div class="col-md-6">
                  <table class="table">
                    <thead>
                      <th scope="col">#</th>
                      <th scope="col">#payfastID</th>
                      <th scope="col">#userID</th>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">{{ticketSale.id}}</th>
                        <th>{{ticketSale.payFastId}}</th>
                        <th>{{ticketSale.userId}}</th>
                      </tr>
                    </tbody>
                  </table>
                  <!-- <img src="" class="rounded">
                  <img src="" class="rounded">-->
                </div>
                <!-- <div class="col-md-3 mr-auto">
                <img src="" class="rounded">
                <img src="" class="rounded">
                </div>-->
              </div>
            </div>
            <div class="tab-pane text-center gallery" id="annoucements">
              <div class="row justify-content-center">
                <div class="col-md-6">
                  <Annoucements></Annoucements>
                  <!-- <img src class="rounded" />
                  <img src class="rounded" />
                  <img src class="rounded" />-->
                </div>
                <!-- <div class="col-md-3 mr-auto">
                  <img src class="rounded" />
                  <img src class="rounded" />
                </div>-->
              </div>
            </div>
            <div class="tab-pane text-center gallery" id="tasks">
              <div class="row justify-content-center">
                <div class="col-md-6">
                  <Tasks></Tasks>
                  <!-- <img src class="rounded" />
                  <img src class="rounded" />-->
                </div>
                <!-- <div class="col-md-3 mr-auto">
                  <img src class="rounded" />
                  <img src class="rounded" />
                  <img src class="rounded" />
                </div>-->
              </div>
            </div>
            <div class="tab-pane" id="teamMembers">
              <div class="row justify-content-center">
                <div class="col-md-6">
                  <TeamMembers></TeamMembers>
                  <!-- <img src class="rounded" />
                  <img src class="rounded" />-->
                </div>
                <!-- <div class="col-md-3 mr-auto">
                  <img src class="rounded" />
                  <img src class="rounded" />
                  <img src class="rounded" />
                </div>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Annoucements from "@/components/Annoucements.vue";
import Tasks from "@/components/Tasks.vue";
import TeamMembers from "@/components/TeamMembers.vue";
export default {
  data() {
    return {
      event: {
        id: 1,
        organiserId: 1,
        eventName: "Korujams Sport Day",
        eventLocation: "Rosmead Ave, Wynberg, Cape Town, 7800",
        eventTimeDate: Date(),
        eventImage:
          "https://dekhnews.com/wp-content/uploads/2016/04/Sports-Day-Poster.png",
        eventDescription:
          "Sports Day at St. Xavier’s Godavari School is a platform to showcase the talent and efforts put in by the student to make it a successful event. Sports here at SXG is not only about competition, it is also about having fun , being physically active , learning the basics of sports and building coordination and teamwork and so to give the students an opportunity to display their talent, self-confidence, patience, zeal and sportsmanship.The two- day Sports Day celebrations for seniors and juniors were held at the school on 4th and 5th November 2018 respectively. The day began with a march past presented by the students of all six teams- Lions, Tigers, Leopards, Panthers and Jaguar.",
        eventPrice: 150
      },
      ticketSale: {
        id: 2,
        eventId: 1,
        userId: 2,
        payFastId: 30
      }
    };
  },
  components: {
    Annoucements,
    Tasks,
    TeamMembers
  }
};
</script>
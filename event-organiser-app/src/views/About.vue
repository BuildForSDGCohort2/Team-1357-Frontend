<template>
  <div class="landing-page sidebar-collapse">
    <div
      class="page-header header-filter"
      data-parallax="true"
      style="background-image: url('https://live.staticflickr.com/65535/50256935841_6b3e5bfe96_k.jpg')"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h1 class="title">Sports day of the future</h1>
            <h4>This application shall allow sport day organisers to quickly create sports events and enable event-goers to connect their Fitbit devices to Tendai. At the same time, gamifying their experience during the games and record heart rate data to be used as points.</h4>
            <br />
            <a @click="loginPage" class="btn btn-danger btn-raised btn-lg">
              <i class="fa fa-play"></i> Login / Register
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="main main-raised">
      <div class="container">
        <div class="section text-center">
          <div class="row">
            <div class="col-md-8 ml-auto mr-auto">
              <h2 class="title">Let&apos;s talk product</h2>
              <h5 class="description">
                Sports day of the future. This application shall allow sport day organisers to quickly create sports events and enable event-goers to connect their Fitbit devices to Tendai. At the same time, gamifying their experience during the games and record heart rate data to be used as points.
                According to statistics, obesity rates in South Africa are increasing rapidly, with almost 70% of women and 40% of men either overweight or obese.
                Goals
                Create a friendly and intuitive user experience for event organisers, event-goers, team members.
                Incentives Sports Day Organisers to create more events.
                Incentives Sports Day Goers to integrate this as part of their lifestyle.
                Promote good health & well being
              </h5>
            </div>
          </div>
        </div>
        <div class="section text-center">
          <h2 class="title">Here is our team</h2>
          <div class="team">
            <div class="row">
              <div class="col-md-4">
                <div class="team-player">
                  <div class="card card-plain">
                    <div class="col-md-6 ml-auto mr-auto">
                      <img
                        src="https://instagram.fcpt7-1.fna.fbcdn.net/v/t51.2885-15/e35/14733759_595790453956021_3488642251951702016_n.jpg?_nc_ht=instagram.fcpt7-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=zcdhcsEvjjEAX-wAp3C&_nc_tp=18&oh=f20626367fa80a1e3715cb867bdcaa5c&oe=5F986E6F"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      John Kyony
                      <br />
                      <small class="card-description text-muted">Senior FullStack Software Engineer</small>
                    </h4>
                    <div class="card-body">
                      <p class="card-description">
                        Taurus , Computer Geek , Creative
                        <br />
                        <a href="https://open.engineer/johnkyony">Digital Resume</a> for more technical depth.
                      </p>
                    </div>
                    <div class="card-footer justify-content-center">
                      <a href="https://twitter.com/JKyony" class="btn btn-link btn-just-icon">
                        <i class="fa fa-twitter"></i>
                      </a>
                      <a href="https://www.instagram.com/jwvlkr/" class="btn btn-link btn-just-icon">
                        <i class="fa fa-instagram"></i>
                      </a>
                      <a href="https://www.facebook.com/john.kyony/" class="btn btn-link btn-just-icon">
                        <i class="fa fa-facebook-square"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    loginPage() {
      this.$router.push("/login");
    }
  }
};
</script>
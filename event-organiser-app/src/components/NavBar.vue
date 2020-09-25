<template>
  <div>
	<nav class="navbar navbar-expand-lg bg-primary">
  <div class="container">
    <a class="navbar-brand" href="javascript:;">Tendai Events</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="sr-only">Toggle navigation</span>
    <span class="navbar-toggler-icon"></span>
    <span class="navbar-toggler-icon"></span>
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a href="/NewEvent" class="nav-link">New Event</a>
        </li>
       
        <li><a id="signout" @click="signOut">SignOut</a></li>
        <!-- <li class="nav-item">
          <a class="nav-link" href="javascript:;">Events</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:;">Tasks</a>
        </li> -->
        <!-- <li class="nav-item">
          <a class="nav-link disabled" href="javascript:;">Disabled</a>
        </li> -->
      </ul>
    </div>
  </div>
</nav>
  </div>

</template>

<script>
export default {
    name: 'NavBar',
     methods: {
        signOut(){
            this.$store.dispatch('signOut')
        }
    }
}
</script>
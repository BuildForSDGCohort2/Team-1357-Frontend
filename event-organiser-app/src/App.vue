<template>
  <div >
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <NavBar v-if="showNav"></NavBar>
    <router-view/>
    
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import {mapState} from 'vuex'
export default {
  components: {
    NavBar,
  },
  computed: {
    ...mapState(['userProfile']),
    showNav(){
      return Object.keys(this.userProfile).length > 1
    }
  }
}
</script>
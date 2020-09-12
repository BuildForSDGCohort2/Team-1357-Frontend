<template>
 <div class="col-md2 sidebar">
   <ul class="nav nav-pills nav-stacked">
     <li class="active"><a>Home</a></li>
     <li><a >Create Events</a></li>
     <li><a>Events</a></li>
     <li><a> Tickets</a></li>
     <li><a>Annoucements</a></li>
     <li><a>Tasks</a></li>
     <li><a id="signout" @click="signOut">signOut</a></li>
   </ul>
 </div>
          
</template>
<script>
export default {
    name: 'SideBar',
    methods: {
        signOut(){
            this.$store.dispatch('signOut')
        }
    }
}
</script>
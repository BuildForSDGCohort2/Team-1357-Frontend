<template>
    <div class="login-page sidebar-collapse">
    <div class="page-header header-filter" :style="{'background-image':'url(https://live.staticflickr.com/65535/50256935841_6b3e5bfe96_k.jpg)'}">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 ml-auto mr-auto">
          <div class="card card-login">
            <form class="form" method="" action="">
              <div class="card-header card-header-primary text-center">
                <h4 class="card-title">Login</h4>
                <div class="social-line">
                  <a href="#facebook" class="btn btn-just-icon btn-link" id="facebook" @click="facebookLogin">
                    <i class="fa fa-facebook-square"></i>
                  </a>
                 
                  <a href="#pablo" class="btn btn-just-icon btn-link" id="google" @click="googleLogin">
                    <i class="fa fa-google-plus"></i>
                  </a>
                </div>
              </div>
              <p class="description text-center">Or Be Classical</p>
              <div class="card-body">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="material-icons">face</i>
                    </span>
                  </div>
                  <input type="text" class="form-control" placeholder="First Name..."  id="nameInput"  v-model.trim="signupForm.name">
                </div>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="material-icons">mail</i>
                    </span>
                  </div>
                  <input type="email" class="form-control" placeholder="Email..." id="emailInput" v-model.trim="signupForm.email">
                </div>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="material-icons">lock_outline</i>
                    </span>
                  </div>
                  <input type="password" class="form-control" placeholder="Password..." id="passwordInput" v-model.trim="signupForm.password">
                </div>
              </div>
              <div class="footer text-center">
                <a  class="btn btn-primary btn-link btn-wd btn-lg" id="signupButton" @click="emailPasswordSignUp">Get Started</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <LoginFooter></LoginFooter>
    </div>
    </div>
</template>

<script>
import LoginFooter from './LoginFooter.vue'
export default {
    data(){
        return{
          signupForm: {
            name: '' , 
            email: '', 
            password: ''
          }

        }
    },
    methods: {
       async facebookLogin(){
          await this.$store.dispatch('facebookLogin')  
        }, 
       async googleLogin(){
            await this.$store.dispatch('googleLogin')
            
        },
        async emailPasswordSignUp(){
          this.$store.dispatch('emailPasswordSignUp' , {
            email: this.signupForm.email,
            password: this.signupForm.password,
            name: this.signupForm.name
          })
        }


    },
    components:{
      LoginFooter
    }
}
</script>
<style  scoped>
#pageHeader {
    
    background-size: cover;
    background-position: top center;
}
</style>

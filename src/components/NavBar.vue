<template>      
     <nav>
        <div class="nav-wrapper">
        <a href="/" class="brand-logo center">Pit Of Our Souls</a>
         <ul id="nav-mobile" class="right hide-on-med-and-down">
        
        <li><a href="/dogs">View Dogs</a></li>
        <li><a href="/add">Add A Dog</a></li>
        <li><a href="/aboutus">FAQ And Contact Information</a></li>
        <li v-if="this.email===''"><a><button @click="Warning" class="social-button">Login</button></a></li>
        <li v-else><a><button  @click="LogOut" class="social-button">Log Out</button></a></li>

     
        </ul>
    </div>
  </nav>
</template>

<script>
import db from './firebaseInit'
import firebase from 'firebase'
export default {
    
    data: function () {
        return {
         email:'',
        
        }
    },

    methods: {

    Warning(){alert ("Login Disabled")},

     Login(){
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then((result) => {
          var token = result.credential.accessToken;
          var user = result.user;
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;

        }).catch((err) => {
          alert('Oops. ' + err.message)
        });
      },

     LogOut(){
       firebase.auth().signOut().then(function() {
        // Sign-out successful.
        }).catch(function(error) {
          // An error happened.
        });
     }



    },
    created () {


    }
}
</script>

<style scoped>
</style>


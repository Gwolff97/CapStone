<template>
    <div>
        <NavBar />

         <div class="row">
            <div class="input-field col s2 offset-s5">
            <input placeholder="Dog Name" v-model="dogName" id= 'Name' type="text" class="validate">
            <label class="active" for="Name">Dog Name</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s2 offset-s5">
            <input placeholder="Your Name" v-model="name" id= 'PersonName' type="text" class="validate">
            <label class="active" for="PersonName">Your Name</label>
            </div>
        </div>

        <div class="row">
            <form class="col s2 offset-s5">
            <div class="row">
                <div class="input-field col s22">
                <input v-model="email" id="email" type="email" class="validate">
                <label for="email"> Your Email</label>
                <span class="helper-text" data-error="Invlaid Email" data-success="Valid Email"></span>
                </div>
            </div>
            </form>
         </div>

         <div class="row">
            <form class="col s2 offset-s5">
            <div class="row">
                <div class="input-field col s12">
                <textarea id="textarea1" class="materialize-textarea"></textarea>
                <label for="textarea1">Tell Us About Yourself and You Experience</label>
                </div>
            </div>
            </form>
            </div>

         


         

        <a @click="sendEmail" class="waves-effect waves-light btn col s2">Send Inquiry About {{this.dogName}}?</a>
    </div>
</template>

<script>
import db from './firebaseInit'
import firebase from 'firebase'
import NavBar from '@/components/NavBar'

export default {
    

     props: ['DocID'],

    data () {
        return {
            dogName : "",
            name: "",
            email: "",
       
                     
        }
    },

    methods: {
        sendEmail(){
           if(this.dogName != "" && this.name!= "" && this.email != "" && this.validEmail(this.email )) {
               alert ("Email Is Disabled!")
           }
           else if(!this.validEmail(this.email )){
               alert ("Please Enter A Valid Email")

           }
           else{
               alert ("Please Fill In Every Field")
           } 
        },

        validEmail: function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
             }
        
    },

    components: {
        NavBar
    },

    created () { 

       
       var self = this;    
         var docRef = db.collection("dogs").doc(self.DocID);
         docRef.get().then(function(doc) {
        
        if (doc.exists) {
        self.dogBreed = doc.data().Breed;
        self.dogName = doc.data().Name;
        self.dogGender=doc.data().Gender;
        self.dogWeight=doc.data().Weight;
        self.dogFoster=doc.data().Foster;
        self.dogCat=doc.data().CatFriendly;
        self.dogDog=doc.data().DogFriendly;
        self.dogSpade=doc.data().Spade;
        self.dogMedical=doc.data().Medical;
        self.dogKid=doc.data().Child;
        self.dogPeople=doc.data().People;

        } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });

    }
}


</script>

<style scoped>

</style>


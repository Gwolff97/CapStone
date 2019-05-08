<template>
    <div>
        <NavBar />

         <div class="row">
            <div class="input-field col s2">
            <input placeholder="Dog Name" v-model="dogName" id= 'Name' type="text" class="validate">
            <label class="active" for="Name">Dog Name</label>
            </div>
        </div>
         <div class="row">
            <div class="input-field col s2">
            <input placeholder="Dog Breed" v-model="dogBreed" id= 'Breed' type="text" class="validate">
            <label class="active" for="Breed">Dog Breed</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s2">
            <input placeholder="Dog Weight" v-model="dogWeight" id= 'Weight' type="text" class="validate">
            <label class="active" for="Weight">Dog Weight (In Pounds)</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s2">
            <input placeholder="Dog Foster" v-model="dogFoster" id= 'Foster' type="text" class="validate">
            <label class="active" for="Foster">Dog Foster</label>
            </div>
        </div> 
          
       
            <select v-model="dogGender" class="browser-default" style="max-width:10%">
                <option value="" disabled selected>Choose Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                
            </select>
    

        <form action="#">
           <div class=row>
            <div class="input-field col s2">
            <label>
                <input v-model="dogSpade" type="checkbox" class="filled-in" />
                <span>Spade/Neutered?</span>
            </label>
            </div> 
            </div></form>

        
        <form action="#">
           <div class=row>
            <div class="input-field col s2">
            <label>
                <input v-model="dogPeople" type="checkbox" class="filled-in" />
                <span>People Friendly?</span>
            </label>
            </div> 
            </div></form>

        <form action="#">
            <div class=row>
        <div class="input-field col s2">
            <label>
                <input v-model="dogCat" type="checkbox" class="filled-in" />
                <span>Cat Friendly?</span>
            </label>
            </div>
         </div> </form>
         
        <form action="#">
            <div class=row>
        <div class="input-field col s2">
            <label>
                <input v-model="dogDog" type="checkbox" class="filled-in" />
                <span>Dog Friendly?</span>
            </label>
            </div>
         </div> </form>
         
        <form action="#">
            <div class=row>
        <div class="input-field col s2">
            <label>
                <input v-model="dogKid" type="checkbox" class="filled-in" />
                <span>Kid Friendly?</span>
            </label>
            </div>
         </div> </form>
         
        <form action="#">
            <div class=row>
        <div class="input-field col s2">
            <label>
                <input v-model="dogMedical" type="checkbox" class="filled-in" />
                <span>Medical Conditions?</span>
            </label>
            </div>
         </div> </form>


         

        <a @click="editDog" class="waves-effect waves-light btn">Update {{this.dogName}}?</a>
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
            dogBreed : "",
            dogGender: "",
            dogWeight: "",
            dogFoster: "None",
            dogCat: false,
            dogDog: false,
            dogSpade: false,
            dogMedical: false,
            dogKid: false,
            dogPeople: false,
            docID : "",
            
            
        }
    },

    methods: {
        editDog(){
            if(this.dogName != "" && this.dogBreed != "" && this.dogGender != "" && this.dogWeight != ""){
                if (confirm("Are you sure you want to update "+this.dogName+"?")){
                 db.collection("dogs").doc(this.DocID).update({
                 Breed: this.dogBreed,
                 Name: this.dogName,
                 Gender: this.dogGender,
                 Weight: this.dogWeight,
                 Foster: this.dogFoster,
                 CatFriendly: this.dogCat,
                 DogFriendly: this.dogDog,
                 Spade: this.dogSpade,
                 Medical: this.dogMedical,
                 Child: this.dogKid,
                 People: this.dogPeople,})
                 this.dogName=""
                 this.dogBreed=""
                 this.dogGender=""
                 this.dogWeight=""
                 this.dogFoster=""
                 this.dogCat=false
                 this.dogDog= false
                 this.dogSpade= false
                 this.dogMedical= false
                 this.dogKid= false
                 this.dogPeople= false}
                 this.$router.push("/dogs");
                
          }
          else{
                    alert ("Error Empty Fields!")
                }
          
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


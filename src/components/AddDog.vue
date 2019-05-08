<template>
<div>
    <NavBar />
    <div v-if="this.okay">
        

         <div class="row">
            <div class="input-field col s2">
            <input v-model="dogName" id= 'Name' type="text" class="validate">
            <label class="active" for="Name">Dog Name</label>
            </div>
        </div>
         <div class="row">
            <div class="input-field col s2">
            <input v-model="dogBreed" id= 'Breed' type="text" class="validate">
            <label class="active" for="Breed">Dog Breed</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s2">
            <input v-model="dogWeight" id= 'Weight' type="text" class="validate">
            <label class="active" for="Weight">Dog Weight (In Pounds)</label>
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


         <div class="row">
            <div class="input-field col s2">
            <input v-model="dogFoster" id= 'Foster' type="text" class="validate">
            <label class="active" for="Foster">Dog Foster</label>
            </div>
        </div> 
    
       


        <a @click="addDog" class="waves-effect waves-light btn">Add dog?</a>
    </div>

    <div v-else>
        You Do Not Have Permission To Use This
    </div>

</div> 
</template>

<script>
import db from './firebaseInit'
import firebase from 'firebase'
import NavBar from '@/components/NavBar'

export default {
    
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
            okay: true
        }
    },

    methods: {
        addDog(){
            if(this.dogName != "" && this.dogBreed != "" && this.dogGender != "" && this.dogWeight != ""){
            if (confirm("Add "+this.dogName)){
                
                 db.collection("dogs").add({
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
                 People: this.dogPeople,
                 })
                 this.dogName=""
                 this.dogBreed=""
                 this.dogGender=""
                 this.dogWeight=""
                 this.dogFoster="None"
                 this.dogCat=false
                 this.dogDog= false
                 this.dogSpade= false
                 this.dogMedical= false
                 this.dogKid= false
                 this.dogPeople= false
                 }
                 
                                 
          }
          else{
                    alert ("Error Empty Fields")
                }
          
        } 
        
    },

    components: {
        NavBar
    },

    created () {     

    }
}
</script>

<style scoped>

</style>


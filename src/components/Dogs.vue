<template>
    <div>
    <NavBar />
        
            <table v-if="this.okay" class="highlight">
                <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Breed</th>
                    <th>Gender</th>
                    <th>Weight</th>
                    <th>Spade/Neutered</th>
                    <th>Kid Friendly</th>
                    <th>People Friendly</th>
                    <th>Dog Friendly</th>
                    <th>Cat Friendly</th>
                    <th>Medical Conditions</th>
                    <th>Foster</th>
                    <th>Inquire</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody >
                <tr v-for="(Dog,index) in dogs" :key= "index">
                    <td>                 
                        <lightbox
                            style="width: 35px; height: 35px"
                            thumbnail="G:\vue-cdn\CapStone\src\assets\puppy2.jpg"
                            :images ="[
                            'G:\vue-cdn\CapStone\src\assets\puppy2.jpg',
                            ]"
                        >
                            <lightbox-default-loader slot="loader"/>
                        </lightbox>
                    </td>
                    <td>{{Dog.Name}}</td>
                    <td>{{Dog.Breed}}</td>
                     <td>{{Dog.Gender}}</td>
                    <td>{{Dog.Weight}} Lbs.</td> 
                    <td v-if="Dog.Spade" class="Yes">Yes</td>
                    <td v-else class="No">No</td>  

                    <td v-if="Dog.Kid" class="Yes">Yes</td>
                    <td v-else class="No">No</td>

                    <td v-if="Dog.People" class="Yes">Yes</td>
                    <td v-else class="No">No</td>

                    <td v-if="Dog.Dog" class="Yes">Yes</td>
                    <td v-else class="No">No</td>  

                    <td v-if="Dog.Cat" class="Yes">Yes</td>
                    <td v-else class="No">No</td> 

                    <td v-if="Dog.Medical" class="Yes">Yes</td>
                    <td v-else  class="No">No</td>
                    <td>{{Dog.Foster}}</td>

                    <td > <router-link :to="{ name: 'AdoptDog', params: { DocID: Dog.DocID } }"><i class=" clickable3 fas fa-envelope"></i></router-link>  </td>
                    <td > <router-link :to="{ name: 'EditDog', params: { DocID: Dog.DocID } }"><i class=" clickable1 fas fa-pencil-alt"></i></router-link>  </td>
                    <td  @click="DeleteDog(index,Dog.DocID,Dog.Name)"> <i class=" clickable2 fas fa-times"></i>  </td>
                </tr>
                </tbody>
            </table >


            <table v-else class="highlight">
                <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Breed</th>
                    <th>Gender</th>
                    
                </tr>
                </thead>
                <tbody >
                <tr v-for="(Dog,index) in dogs" :key= "index">
                    <td>                 
                        <lightbox
                            style="width: 35px; height: 35px"
                            thumbnail="http://localhost:8080/static/img/aesdfg.49ebf9a.png"
                            :images ="[
                            'http://localhost:8080/static/img/aesdfg.49ebf9a.png',
                            ]"
                        >
                            <lightbox-default-loader slot="loader"/>
                        </lightbox>
                    </td>
                    <td>{{Dog.Name}}</td>
                    <td>{{Dog.Breed}}</td>
                    <td>{{Dog.Gender}}</td>
                    <td>{{Dog.Weight}}</td>
                    <td>{{Dog.Foster}}</td>
                    <td>{{Dog.Cat}}</td>
                    <td>{{Dog.Cat}}</td>
                    <td>{{Dog.Spade}}</td>
                    <td>{{Dog.Medical}}</td>
                    <td>{{Dog.Kid}}</td>
                    <td>{{Dog.People}}</td>

                </tr>
                </tbody>
            </table >
        
    </div>
</template>


<script>

import db from './firebaseInit'
import firebase from 'firebase'
import NavBar from '@/components/NavBar'
import lightbox from 'vue-pure-lightbox'



export default {
    
    
    data() {
        return {
            dogs: [],
            okay: true,
           

        }
    },
    methods: {
        DeleteDog(index,DocID,Name){
            if (confirm("Are You Sure You Want To Remove "+Name+"?")){
            db.collection("dogs").doc(DocID).delete()
            this.dogs.splice(index,1)
  
          }
        },

        
    },

    components: {
        NavBar
        
    },
    

    created () {
    var self = this



    var docRef = db.collection("dogs").get().then(function(querySnapshot){
        querySnapshot.forEach(function(doc){
            console.log(doc.id,' ',doc.data());
            self.dogs.push({
                Breed: doc.data().Breed,
                Name: doc.data().Name,
                Gender: doc.data().Gender,
                Weight: doc.data().Weight,
                Foster:doc.data().Foster,
                Cat:doc.data().CatFriendly,
                Dog:doc.data().DogFriendly,
                Spade:doc.data().Spade,
                Medical:doc.data().Medical,
                Kid:doc.data().Child,
                People:doc.data().People,
                DocID: doc.id,
                
            })
           
        });
    }).catch(function(error){
        console.log("Error getting document", error)
    })
    console.log(self.dogs)
  }




    }




    
</script>


<style scoped>
.lightbox {width: 1em; height: 1em}
.lightbox__image img {width: 1em; height: 1em}

.clickable1 {color: orange; cursor: pointer; }
.clickable2 {color: crimson; cursor: pointer; }
.clickable3 {color: green; cursor: pointer; }

.Yes {color: green}
.No {color:red}


</style>


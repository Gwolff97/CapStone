<template>
    <div>
        <NavBar />
        <img src="@/assets/POSLOGO.jpg" alt="Logo" style=" width: 20%;">

        <div @click="Redirect" class="card-panel  "><a href="/dogs" style="font-size:25PX">Have A Look At Some Of Our Dogs</a></div>
        <div>
          <div class="carousel">
         <a class="carousel-item" href="#one!"><img src="@/assets/images (10).jpg"></a>
         <a class="carousel-item" href="#one!"><img src="@/assets/images (3).jpg"></a>
         <a class="carousel-item" href="#one!"><img src="@/assets/images (6).jpg"></a>
         <a class="carousel-item" href="#one!"><img src="@/assets/images (7).jpg"></a>
         <a class="carousel-item" href="#one!"><img src="@/assets/images (9).jpg"></a>
        
         
  </div>
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
         

        }
    },

    methods: {
      Redirect(){
         this.$router.push("/");
      }
       
    },

    components: {
        NavBar
     },

    created () {
    },
}    
</script>


<style scoped>

.clickable {cursor: pointer; }


.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>


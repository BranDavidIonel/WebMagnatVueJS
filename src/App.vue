<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Bran David-Ionel App  Vue.js for  WebMagnat "/>


  <ul>
    
  <li v-for="todo of todos" :key="todo.id"> {{todo.service_status}}</li>  
  </ul>
  </div>
  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import axios from 'axios';
//make a test with a local db.json
//const baseUrl="http://localhost:3000/totos";
//rest api from app WebMagnatRestApi
const baseUrl="http://127.0.0.1:8000/api/statuses";
export default {
  name: 'App',
  data(){
    return{
      todos:[{
        service_status:''

      }]
    };

  },
  async created(){
    try{
      
    const res=await axios.get(baseUrl);
    this.todos=res.data;
    }catch(e){
      console.error(e);
    }
  },
  components: {
    HelloWorld
  }/*,
  mounted:function(){
    axios.get('http://127.0.0.1:8000/api/statuses')
    .then(response=>console.log(response));

  }
  */
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

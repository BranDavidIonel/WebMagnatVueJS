<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Bran David-Ionel App  Vue.js for  WebMagnat "/>


  <input type="text" v-model="status" @keyup.enter="addStatus">

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
const baseUrlGet="http://127.0.0.1:8000/api/statuses";
const baseUrlPost="http://127.0.0.1:8000/api/status";
export default {
  name: 'App',
  data(){
    return{
      todos:[{
      }],
      status:''
    };

  },
  async created(){
    try{
      
    const res=await axios.get(baseUrlGet);
    this.todos=res.data;
    }catch(e){
      console.error(e);
    }
  },
  //for post the data (good,fair..) from formular into url api
  methods:{
    async addStatus(){
     try{
      const res=await axios.post(baseUrlPost,{service_status:this.status});
      this.todos=[...this.todos,res.data];
      this.status='';
      }catch(e){
        console.error(e);
      }
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

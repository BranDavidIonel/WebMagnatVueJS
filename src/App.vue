<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Bran David-Ionel App  Vue.js for  WebMagnat "/>

  <h2>How do you find our service?</h2>
<div>
<input type="radio" id="good" name="status" value="good" v-model="status">
<label for="good">Good</label><br>
<input type="radio" id="fair" name="status" value="fair" v-model="status">
<label for="fair">Fair</label><br>
<input type="radio" id="neutral" name="status" value="neutral" v-model="status">
<label for="neutral">Neutral</label><br>
<input type="radio" id="bad" name="status" value="bad" v-model="status">
<label for="bad">Bad</label><br>
</div>
<!--
<h3>Other</h3>
<input type="text" v-model="status" @keyup.enter="addStatus"><br>
-->
<button @click="addStatus">Submit</button>

<h2>The results are:</h2>
  <ul>    
  <li v-for="todo of todos" :key="todo.id"> 
    {{todo.service_status}}-{{todo.nrStatuses}}  results! 
  </li>  
  </ul>


  </div>
  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import axios from 'axios';
//make a test with a local db.json
//const baseUrl="http://localhost:3000/totos";
//rest api from app WebMagnatRestApi
//all statuses 
//const baseUrlGet="http://127.0.0.1:8000/api/statuses";
//post de status 
const baseUrlPost="http://127.0.0.1:8000/api/status";
//get group status
const baseUrlGroupedStatus="http://127.0.0.1:8000/api/grouped_status";
export default {
  name: 'App',
  data(){
    return{
      todos:[{
      }],
      status:'',
      check_submit:false
    };

  },
  async created(){
    try{
      
    const res=await axios.get(baseUrlGroupedStatus);
    this.todos=res.data;
    }catch(e){
      console.error(e);
    }
  },
  //for post the data (good,fair..) from formular into url api
  methods:{
    async addStatus(){
     try{
      await axios.post(baseUrlPost,{service_status:this.status});
      //I get the data what I post 
      //this.todos=[...this.todos,res.data];
      const res2=await axios.get(baseUrlGroupedStatus);
      this.todos=res2.data;
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

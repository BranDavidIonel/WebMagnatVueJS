<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Bran David-Ionel App  Vue.js for  WebMagnat "/>

  <h2>How do you find our service?</h2>
<div>
<label for="good">A. Good</label>
<input type="radio" id="good" name="status" value="good" v-model="status">
<br>
<label for="fair">B. Fair</label>
<input type="radio" id="fair" name="status" value="fair" v-model="status">
<br>
<label for="neutral">C. Neutral</label>
<input type="radio" id="neutral" name="status" value="neutral" v-model="status">
<br>
<label for="bad">D. Bad</label>
<input type="radio" id="bad" name="status" value="bad" v-model="status">
<br>
</div>
<!--
<h3>Other</h3>
<input type="text" v-model="status" @keyup.enter="addStatus"><br>
-->
<button @click="addStatus">Submit</button>
<div v-if="check_submit">
<h2>The results are:</h2>
  <ul>    
  <li v-for="todo of todos" :key="todo.id"> 
    <div v-if="todo.service_status=='good'"> A.  
    {{todo.service_status}} -{{todo.percentage}}%- {{todo.nrStatuses}}  results! 
    </div>
    <div v-if="todo.service_status=='fair'"> B.  
    {{todo.service_status}} -{{todo.percentage}}%- {{todo.nrStatuses}}  results! 
    </div>
    <div v-if="todo.service_status=='neutral'"> C.  
    {{todo.service_status}} -{{todo.percentage}}%- {{todo.nrStatuses}}  results! 
    </div>
    <div v-if="todo.service_status=='bad'"> D.  
    {{todo.service_status}} -{{todo.percentage}}%- {{todo.nrStatuses}}  results! 
    </div>
  </li>  
  </ul>
  <br>
  Total results: {{todos[0].nrSum}}
  </div>


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
      //for make visible the other result or not 
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
      //make visible the other results
      this.check_submit=true;
      }catch(e){
        console.error(e);
      }
    }

  },
  components: {
    HelloWorld
  }/*,
  //I made a test
  mounted:function(){
    axios.get('http://127.0.0.1:8000/api/statuses')
    .then(response=>console.log(response));

  }
  */
}
</script>

<style>
#app {
  font-family:  Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #c21f1f;
  margin-top: 20px;
}
</style>

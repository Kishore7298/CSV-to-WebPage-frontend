<template>
  <div class="container">
    <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Attendance</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in items">
      <th scope="row">{{item.Name}}</th>
      <td>{{item.Attendance}}</td>
    </tr>
    
  </tbody>
</table>
  </div>
</template>
<script>
import axios from 'axios';
import api from './api';
export default {
  name: 'app',
  data:()=>{
    return {
      items:[]
    }
  },
  created(){
    api().get('getjson').then((res,err)=>{
      this.items = res.data;
    })
  }
}

</script>

<style>

</style>

<template>
  <div id="app">
    <div style="text-align: center;">
          <vue-pagination :page-index="pageNumber" :total="total" :page-size="pageSize" @change="getData"></vue-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      pageNumber: 1,
      total:0,
      pageSize:20,
    }
  },
  created(){
        this.getData(1);
  },
  methods:{
    getData:function(idx){
      this.pageNumber=idx||1;
      this.total=473;
    },
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

<template>
    <div>
       <template v-for="child in node.items" v-if="node.items && node.items.length">
        1
        <!-- <span>11{{ child.contentType }}</span> -->
        <div v-html="formatCode(child)"></div>
      </template>
      <template v-else>
        2
        <div v-html="formatCode(node)"></div>
      </template>
    </div>
</template>

<script>
export default {
  props: ["node"],
  data(){
    return{
 
    }
  },
  computed: {
        // formatCode(node){
        //      return '<h1>'+ 'helloooooooooooooooo' +'</h1>'; 
        // }
  },
  methods: {
    formatCode(node){
      if(node.contentType=='h1'){
        return '<h1>'+ 'helloooooooooooooooo' +'</h1>';
      }
      else if(node.contentType=='b'){
        return '<b>'+ 'bbbb' +'</b>';
      }else{
          return '<h1>'+ 'helloooooooooooooooo' +'</h1>';
      }     
    }
  },
  filters: {
   

  }

}
</script>

<style scoped>

</style>



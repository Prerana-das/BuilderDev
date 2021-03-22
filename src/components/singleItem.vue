<template>
    <div>
        <h5>hello</h5>
        {{singleItem}}
         <template v-if="singleItem.contentType=='h1'">
            <h1>
            </h1>
         </template>
    </div>
</template>

<script>
export default {
  props: ["singleItem"],
  data(){
    return{
 
    }
  }
}
</script>

<style scoped>

</style>



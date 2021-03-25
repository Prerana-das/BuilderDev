<template>
    <div>
      <template v-if="conatinerProp.step1=='conatiner'">
         <div class="container u-container">
        </div>
      </template>
      <template>
        <div class="container u-container">
        </div>
      </template>
    </div>
</template>

<script>
export default {
  props: ["conatinerProp"],
  data(){
    return{
 
    }
  }
}
</script>

<style scoped>

</style>



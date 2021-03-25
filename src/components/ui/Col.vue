<template>
    <div>
      <template v-if="colProp.step1=='col4'">
         <div class="u-row row p-0">
          <div class="u-col col-md-4">
          </div>
          <div class="u-col col-md-4">
          </div>
          <div class="u-col col-md-4">
          </div>
        </div>
      </template>
      <template v-else-if="colProp.step1=='col3'">
         <div class="u-row row p-0">
          <div class="u-col col-md-3">
          </div>
          <div class="u-col col-md-3">
          </div>
          <div class="u-col col-md-3">
          </div>
          <div class="u-col col-md-3">
          </div>
        </div>
      </template>
      <template v-else>
         <div class="u-row row p-0">
          <div class="u-col col-md-6">
          </div>
          <div class="u-col col-md-6">
          </div>
        </div>
      </template>
      
    </div>
</template>

<script>
export default {
  props: ["colProp"],
  data(){
    return{
 
    }
  }
}
</script>

<style scoped>

</style>



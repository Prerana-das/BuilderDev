<template>
    <div
      :id="id"
      class="card"
      :draggable="draggable"
      @dragstart="dragStart"
      @dragover.stop>
      h1
      <slot/>
    </div>
</template>

<script>
export default {
  props: ["id","draggable"],
  data(){
    return{
 
    }
  },
   methods:{
    dragStart: e => {
      const target= e.target;
      e.dataTransfer.setData('card_id',target.id);
    }
   }
}
</script>

<style scoped>

</style>



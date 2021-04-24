<template>
    <div
      :id="id"
      class="card"
      :draggable="draggable"
      @dragstart="dragStart"
      @dragover.stop>
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
      console.log('drag start e',e,e.target)
      // console.log('card_id',card_id)

  //  const card_id= e.dataTransfer.getData(target.id);
  //     const card= document.getElementById(card_id);
      const item= e.target;
      console.log('item',item)

      

      var cln = e.target.cloneNode(true);
        console.log('cln',cln)
        console.log('e.target',e.target)
      // document.getElementById("board_id").appendChild(cln);


          const card= document.getElementById('card-1');
      //  e.target.parentNode.appendChild(cln);
       e.target.appendChild(card.cloneNode(true));
       //NOW YOU HAVE A CLONE ELEMENT JUST USE this and remove on drag stop
        // return true;
    // e.target.ghostDragger = cln;//SET A REFERENCE TO THE HELPER

    // $(cln).addClass('dragging');//NOW YOU HAVE A CLONE ELEMENT JUST USE this and remove on drag stop
    // return true;
       
    }
   },
   created(){
  
   }
}
</script>

<style scoped>

</style>



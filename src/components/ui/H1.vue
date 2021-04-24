<template>
    <div :id="id"
    class="board"
    @dragover.prevent
    @drop.prevent="drop">
       <slot/>
        <!-- <h1 contenteditable="true" :class="h1Prop.step1.ac=='ac'? 'textCenter': h1Prop.step1.ac=='al' ? 'textLeft':h1Prop.step1.ac=='ar'? 'textRight':''">
          <template v-if="h1Prop.step2">
             <template v-if="h1Prop.step2.contentType=='p'">
                 <template v-if="h1Prop.step3">
                    <template v-if="h1Prop.step3.contentType=='i'">
                        <p>
                          <i>Heading</i>
                        </p>
                    </template>
                    <template v-else-if="h1Prop.step3.contentType=='b'">
                        <p>
                          <b>Heading</b>
                        </p>
                    </template>
                    <template v-else-if="h1Prop.step3.contentType=='u'">
                        <p>
                          <u>Heading</u>
                        </p>
                    </template>
                    <template v-else>
                        <p>
                          Heading
                        </p>
                    </template>
                 </template>
                 <template v-else>
                    <p>
                      Heading
                    </p>
                </template>
            </template>
            <template v-else-if="h1Prop.step2.contentType=='b'">
              <b>
                Heading
              </b>
            </template>
            <template v-else-if="h1Prop.step2.contentType=='i'">
              <i>
                Heading
              </i>
            </template>
            <template v-else-if="h1Prop.step2.contentType=='u'">
              <u>
                Heading
              </u>
            </template>
            <template v-else-if="h1Prop.step2.contentType=='container'">
              <div class="container u-container">
                Heading
              </div>              
            </template>
            <template v-else-if="h1Prop.step2.contentType=='row'">
              <div class="u-row row">
                Heading
              </div>  
            </template>
            <template v-else-if="h1Prop.step2.contentType=='col'">
              <div class="u-col col-md-12">
                Heading
              </div>  
            </template>
            <template v-else>
              Heading
            </template>
          </template>
          <template v-else>
            Heading
          </template>
        </h1> -->
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["id"],
  computed: {
   ...mapGetters({
          selectTag:'getSelectTagData',
          mainData:'getMainData',
          hoverContent:'getHoverContent',
        }),
  },
  data(){
    return{
      hoverOn:false,
       styleObject: {
        color: 'red',
        fontSize: '13px'
      }
    }
  },
  methods:{
    onMouseOver(value){
      console.log('fhgfghsdfghfsfff',value);
      this.hoverOn=true
      this.$store.commit("setHoverContent",value);
    },
    onMouseLeave(value){
      console.log('dsf',value);
      this.hoverOn=false
      this.$store.commit("setHoverContent",'');
    },
    onMouseDown(value){
      console.log('down',value);
      this.selectTag.selectItem=value
      this.selectTag.selectIndex=0
      this.$store.commit("setSelectTagData",this.selectTag);
    },
    fsdjhfjfdf(value){
      console.log('textttt',value);
    },

    drop: e=>{
       console.log('drag dropppppp',e)

      const card_id= e.dataTransfer.getData('card_id');

      const card= document.getElementById(card_id);
      console.log('card',card)
      card.style.display="block";
      e.target.appendChild(card);
      console.log('card update',card)

    }
  }
}
</script>

<style scoped>
.board{
  height: 100px;
  width: 100%;
  background-color: #ddd;
}
</style>



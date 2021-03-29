<template>
    <div>
        <!-- 1 -->
        <component :is="h1Prop.step1.contentType" contenteditable="true" :class="h1Prop.step1.ac=='ac'? 'textCenter': h1Prop.step1.ac=='al' ? 'textLeft':h1Prop.step1.ac=='ar'? 'textRight': hoverOn==true ? 'tagHoverOn':''"
        
         @mouseover="onMouseOver(h1Prop.step1)"
         @mouseleave="onMouseLeave(h1Prop.step1)"
         @mousedown="onMouseDown(h1Prop.step1)"
         :title="hoverOn==true ? hoverContent.contentType : '' "
         :style="h1Prop.step1.style ? h1Prop.step1.style : ''">
          <!-- 2 -->
          <component :is="h1Prop.step2.contentType" v-if="h1Prop.step2" contenteditable="true" :class="h1Prop.step2.ac=='ac'? 'textCenter': h1Prop.step2.ac=='al' ? 'textLeft':h1Prop.step2.ac=='ar'? 'textRight': hoverOn==true ? 'tagHoverOn':''"
           @mouseover.stop="onMouseOver(h1Prop.step2)"
           @mouseleave.stop="onMouseLeave(h1Prop.step2)"
           @mousedown.stop="onMouseDown(h1Prop.step2)"
           :title="hoverOn==true ? hoverContent.contentType : '' "
           :style="h1Prop.step2.style ? h1Prop.step2.style : ''">
            <!-- 3 -->
            <component :is="h1Prop.step3.contentType" v-if="h1Prop.step3" contenteditable="true" :class="h1Prop.step3.ac=='ac'? 'textCenter': h1Prop.step3.ac=='al' ? 'textLeft':h1Prop.step3.ac=='ar'? 'textRight':''"
             @mouseover.stop="onMouseOver(h1Prop.step3)"
             @mouseleave.stop="onMouseLeave(h1Prop.step3)"
             @mousedown.stop="onMouseDown(h1Prop.step3)">
              <!-- 4 -->
              <component :is="h1Prop.step4.contentType" v-if="h1Prop.step4" contenteditable="true" :class="h1Prop.step4.ac=='ac'? 'textCenter': h1Prop.step4.ac=='al' ? 'textLeft':h1Prop.step4.ac=='ar'? 'textRight':''">
                <!-- 5 -->
                <component :is="h1Prop.step5.contentType" v-if="h1Prop.step5" contenteditable="true" :class="h1Prop.step5.ac=='ac'? 'textCenter': h1Prop.step5.ac=='al' ? 'textLeft':h1Prop.step5.ac=='ar'? 'textRight':''">
                  <template>
                      Lorem ipsum
                  </template>
                </component>
                <!-- 5 -->
                <template v-else>
                  Lorem ipsum
                </template>
              </component>
              <!-- 4 -->
              <template v-else>
                Lorem ipsum
              </template>
            </component>
             <!-- 3 -->
            <template v-else>
              Lorem ipsum
            </template>
          </component>
          <!-- 2 -->
          <template v-else>
            Lorem ipsum
          </template>
        </component>
        <!-- 1 -->
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
  props: ["h1Prop"],
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
   

    drop: e=>{
      const card_id= e.dataTransfer.getData('card_id');

      const card= document.getElementById(card_id);
      card.style.display="block";
      e.target.appendChild(card);
    }
  }
}
</script>

<style scoped>

</style>



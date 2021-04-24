<template>
  <div class="content">
   
    <div class="nodeTop">
      <ul>
        <li @change="editItem('fs')">Font Size <span><input type="number" v-model="fontSize"></span></li>
        <li @change="editItem('color')">Color<span><input type="color"  v-model="textColor"></span></li>
        <li class="align_list">
          <span @click="editItem('al')"><i class="fas fa-align-left"></i></span>
          <span @click="editItem('ac')"><i class="fas fa-align-center"></i></span>
          <span @click="editItem('ar')"><i class="fas fa-align-right"></i></span>
          <span @click="editItem('b')">B</span>
          <span @click="editItem('i')">I</span>
          <span @click="editItem('u')">U</span>
        </li>
         <li class="align_list">
          <span @click="editItem('db')">Block</span>
          <span @click="editItem('dib')">Inline-block</span>
        </li>
      </ul>
    </div>
     <div v-for="(item1,index1) in node.items" :key="index1" v-if="node.items.length">
       
     </div>

    <div v-for="(item1,index1) in node.items" :key="index1" v-if="node.items.length">
      <template v-if="!item1.items.length">
         <template v-if="item1.contentType=='h1'" >
           <span @click="singleItem(item1,index1)" >
             <Heading :h1Prop="{step1:item1}"></Heading >
              <span @click.stop="editOn(item1,index1)" class="edit_btn" v-if="editoptionON==true">
                Edit
                <i class="fas fa-cog"></i>
              </span>
              <ul v-if="uibEditId==item1.id && uibEditIndex==index1" class="edit_list">
                <li @click.stop="editItem('b')">b</li>
                <li @click.stop="editItem('i')">i</li>
                <li @click.stop="editItem('u')">u</li>
                <li @click.stop="editItem('ac')">Align center</li>
                <li @click.stop="editItem('al')">Align left</li>
                <li @click.stop="editItem('ar')">Align Right</li>
              </ul>
           </span>
         </template>
         <template v-if="item1.contentType=='p'" >
           <span @click="singleItem(item1,index1)" >
             <Paragraph :h1Prop="{step1:item1}"></Paragraph>
              <span @click.stop="editOn(item1,index1)" class="edit_btn" v-if="editoptionON==true">
                Edit
                <i class="fas fa-cog"></i>
              </span>
              <ul v-if="uibEditId==item1.id && uibEditIndex==index1" class="edit_list">
                <li @click.stop="editItem('b')">b</li>
                <li @click.stop="editItem('i')">i</li>
                <li @click.stop="editItem('u')">u</li>
                <li @click.stop="editItem('ac')">Align center</li>
                <li @click.stop="editItem('al')">Align left</li>
                <li @click.stop="editItem('ar')">Align Right</li>
              </ul>
           </span>
         </template>
         <template v-else-if="item1.contentType=='container'">
           <span @click="singleItem(item1,index1)">
            <UContainer :conatinerProp="{step1:item1}"></UContainer>
           </span>
         </template>
         <template v-else-if="item1.contentType=='row'">
           <span @click="singleItem(item1,index1)">
             <URow :rowProp="{step1:item1}"></URow>
           </span>
         </template>
         <template v-else-if="item1.contentType=='col' || item1.contentType=='col6' || item1.contentType=='col4' || item1.contentType=='col3'">
           <span @click="singleItem(item1,index1)">
            <UCol :colProp="{step1:item1}"></UCol>
            <span @click="editOn(item1,index1)" class="edit_btn">
                Edit
                <i class="fas fa-cog"></i>
              </span>
              <ul v-if="uibEditId==item1.id && uibEditIndex==index1" class="edit_list_col">
                <li @click="editItem('col6',item1.id)">
                  <span></span>
                  <span></span>
                </li>
                <li @click="editItem('col4',item1.id)">
                  <span></span>
                  <span></span>
                  <span></span>
                </li>
                <li @click="editItem('col3',item1.id)">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </li>
              </ul>
           </span>
         </template>
      </template>
      <!-- =============Loop 2============== -->
      <div v-for="(item2,index2) in item1.items" :key="index2" v-if="item1.items.length">
        <template v-if="!item2.items.length">
          <template v-if="item1.contentType=='h1'">
             <span @click="singleItem(item2,index2)">
              <Heading :h1Prop="{step1:item1,step2:item2}">
              </Heading>
              <span @click.stop="editOn(item2,index2)" class="edit_btn">
                  Edit
                  <i class="fas fa-cog"></i>
                </span>
                <ul v-if="uibEditId==item2.id && uibEditIndex==index2" class="edit_list">
                  <li @click.stop="editItem('b')">b</li>
                  <li @click.stop="editItem('i')">i</li>
                  <li @click.stop="editItem('u')">u</li>
                  <li @click.stop="editItem('ac')">Align center</li>
                  <li @click.stop="editItem('al')">Align left</li>
                  <li @click.stop="editItem('ar')">Align Right</li>
                </ul>
             </span>
          </template>
          <template v-else-if="item1.contentType=='p'">
            <Paragraph :pProp="{step1:item1,step2:item2}">
            </Paragraph>
            <span @click="editOn(item2,index2)" class="edit_btn">
                Edit
                <i class="fas fa-cog"></i>
              </span>
              <ul v-if="uibEditId==item2.id && uibEditIndex==index2" class="edit_list">
                <li @click.stop="editItem('b')">b</li>
                <li @click.stop="editItem('i')">i</li>
                <li @click.stop="editItem('u')">u</li>
                <li @click.stop="editItem('ac')">Align center</li>
                <li @click.stop="editItem('al')">Align left</li>
                <li @click.stop="editItem('ar')">Align Right</li>
              </ul>
          </template>
          <template v-else-if="item1.contentType=='container'">
           <span @click="singleItem(item2,index2)">
            <UContainer :conatinerProp="{step1:item1,step2:item2}"></UContainer>
           </span>
         </template>
         <template v-else-if="item1.contentType=='row'">
           <span @click="singleItem(item2,index2)">
             <URow :rowProp="{step1:item1,step2:item2}"></URow>
           </span>
         </template>
         <template v-else-if="item1.contentType=='col' || item1.contentType=='col6' || item1.contentType=='col4' || item1.contentType=='col3'">
           <span @click="singleItem(item2,index2)">
            <UCol :colProp="{step1:item1,step2:item2}"></UCol>
            <span @click="editOn(item2,index2)" class="edit_btn">
                Edit
                <i class="fas fa-cog"></i>
              </span>
              <ul v-if="uibEditId==item2.id && uibEditIndex==index2" class="edit_list_col">
                <li @click="editItem('col6',item2.id)">
                  <span></span>
                  <span></span>
                </li>
                <li @click="editItem('col4',item2.id)">
                  <span></span>
                  <span></span>
                  <span></span>
                </li>
                <li @click="editItem('col3',item2.id)">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </li>
              </ul>
           </span>
         </template>
        </template>

        <!-- ============= Loop 3 ============== -->
        <div v-for="(item3,index3) in item2.items" :key="index3" v-if="item2.items.length">
          <template v-if="!item3.items.length">
            <template v-if="item1.contentType=='h1'">
              <span @click="singleItem(item3,index3)">
                3
                <Heading :h1Prop="{step1:item1,step2:item2,step3:item3}">
                </Heading>
                <span @click.stop="editOn(item3,index3)" class="edit_btn">
                  Edit
                  <i class="fas fa-cog"></i>
                </span>
                <ul v-if="uibEditId==item3.id && uibEditIndex==index3" class="edit_list">
                  <li @click.stop="editItem('b')">b</li>
                  <li @click.stop="editItem('i')">i</li>
                  <li @click.stop="editItem('u')">u</li>
                  <li @click.stop="editItem('ac')">Align center</li>
                  <li @click.stop="editItem('al')">Align left</li>
                  <li @click.stop="editItem('ar')">Align Right</li>
                </ul>
              </span>
            </template>
            <template v-else-if="item1.contentType=='p'">
              <span @click="singleItem(item3,index3)">
                3
                <Paragraph :h1Prop="{step1:item1,step2:item2,step3:item3}">
                </Paragraph>
                <span @click.stop="editOn(item3,index3)" class="edit_btn">
                  Edit
                  <i class="fas fa-cog"></i>
                </span>
                <ul v-if="uibEditId==item3.id && uibEditIndex==index3" class="edit_list">
                  <li @click.stop="editItem('b')">b</li>
                  <li @click.stop="editItem('i')">i</li>
                  <li @click.stop="editItem('u')">u</li>
                  <li @click.stop="editItem('ac')">Align center</li>
                  <li @click.stop="editItem('al')">Align left</li>
                  <li @click.stop="editItem('ar')">Align Right</li>
                </ul>
              </span>
            </template>
            <template v-else-if="item1.contentType=='container'">
              <span @click="singleItem(item3,index3)">
                <UContainer :conatinerProp="{step1:item1,step2:item2,step3:item3}"></UContainer>
              </span>
            </template>
            <template v-else-if="item1.contentType=='row'">
              <span @click="singleItem(item3,index3)">
                <URow :rowProp="{step1:item1,step2:item2,step3:item3}"></URow>
              </span>
            </template>
            <template v-else-if="item1.contentType=='col' || item1.contentType=='col6' || item1.contentType=='col4' || item1.contentType=='col3'">
              <span @click="singleItem(item3,index3)">
                <UCol :colProp="{step1:item1,step2:item2,step3:item3}"></UCol>
                <span @click="editOn(item2,index2)" class="edit_btn">
                    Edit
                    <i class="fas fa-cog"></i>
                  </span>
                  <ul v-if="uibEditId==item2.id && uibEditIndex==index2" class="edit_list_col">
                    <li @click="editItem('col6',item2.id)">
                      <span></span>
                      <span></span>
                    </li>
                    <li @click="editItem('col4',item2.id)">
                      <span></span>
                      <span></span>
                      <span></span>
                    </li>
                    <li @click="editItem('col3',item2.id)">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </li>
                  </ul>
              </span>
            </template>
          </template>
           <!-- ============= Loop 4 ============== -->
          <div v-for="(item4,index4) in item3.items" :key="index4" v-if="item3.items.length">
            <template v-if="!item4.items.length">
              <template v-if="item1.contentType=='h1'">
                <span @click="singleItem(item4,index3)">
                  4
                  <Heading :h1Prop="{step1:item1,step2:item2,step3:item3,step4:item4}">
                  </Heading>
                  <span @click.stop="editOn(item4,index3)" class="edit_btn">
                    Edit
                    <i class="fas fa-cog"></i>
                  </span>
                  <ul v-if="uibEditId==item4.id && uibEditIndex==index3" class="edit_list">
                    <li @click.stop="editItem('b')">b</li>
                    <li @click.stop="editItem('i')">i</li>
                    <li @click.stop="editItem('u')">u</li>
                    <li @click.stop="editItem('ac')">Align center</li>
                    <li @click.stop="editItem('al')">Align left</li>
                    <li @click.stop="editItem('ar')">Align Right</li>
                  </ul>
                </span>
              </template>
            </template>
             <!-- ============= Loop 5 ============== -->
            <div v-for="(item5,index5) in item4.items" :key="index5" v-if="item4.items.length">
              <template v-if="!item5.items.length">
                <template v-if="item1.contentType=='h1'">
                  5
                  <span @click="singleItem(item5,index3)">
                    <Heading :h1Prop="{step1:item1,step2:item2,step3:item3,step4:item4,step5:item5}">
                    </Heading>
                    <span @click.stop="editOn(item5,index3)" class="edit_btn">
                      Edit
                      <i class="fas fa-cog"></i>
                    </span>
                    <ul v-if="uibEditId==item5.id && uibEditIndex==index3" class="edit_list">
                      <li @click.stop="editItem('b')">b</li>
                      <li @click.stop="editItem('i')">i</li>
                      <li @click.stop="editItem('u')">u</li>
                      <li @click.stop="editItem('ac')">Align center</li>
                      <li @click.stop="editItem('al')">Align left</li>
                      <li @click.stop="editItem('ar')">Align Right</li>
                    </ul>
                  </span>
                </template>
              </template>
            </div>
          </div>
        </div>
      </div>  
    </div>

    <!-- <div v-if="node.items && node.items.length">
      <node v-for="child in node.items" :node="child">
      </node>
    </div> -->

    </div>
</template>

<script>
import { mapGetters } from "vuex";
import singleItem from "./singleItem";
import Heading from "./ui/H1";
import Paragraph from "./ui/p";
import UContainer from "./ui/Container";
import URow from "./ui/Row";
import UCol from "./ui/col";
export default {
  name: "node",
  props: {
    node: Object
  },
  components: {
    singleItem,
    Heading,
    Paragraph,
    UContainer,
    URow,
    UCol,
  },
  computed: {
   ...mapGetters({
          selectTag:'getSelectTagData',
          mainData:'getMainData',
          uniqueId:'getUniqueIdData'
        }),
  },
  data () {
    return {
      isEditOn:false,
      counter:0,
      offerCount:-1,

      continue_working:true,
      countMethod:0,
      itemId:-1,
      editValue:'',

      htmlTrue:false,

      uibEditId:-1,
      uibEditIndex:-1,
      storeData:[],

      editoptionON:false,

      fontSize:15,
      textColor:''

    }
  },
  methods:{
    change(){
      console.log('okkkk');
      return 'ok'
    },
    editOn(item,index){
      console.log('editOn calling');
      console.log('editOn calling',item);
      this.uibEditId= item.id;
      this.uibEditIndex= index;
      // this.singleItem(item,index);
    },
   async editItem(value,cssValue){
    if(this.selectTag.selectItem){
        this.editValue=value
        this.editValue=value
        this.storeData = _.clone(this.mainData);
        await this.dfs(this.storeData)
        this.$store.commit("setMainData",this.storeData);
      }
    },

    async dfs(node) {
      if(node.id==this.selectTag.selectItem.id){
          console.log('matched')
          if(this.editValue=='b' || this.editValue=='u' || this.editValue=='i' && this.editValue!=node.contentType){
              node.items.push({
              contentType:this.editValue,
              items:[],
              size:null,
              text:null,
              id:this.uniqueId
            })
            // this.singleItem(node.items,0);
          } 
          else if(this.editValue=='ac' || this.editValue=='al' || this.editValue=='ar'){
            node.ac=this.editValue
          }
          else if(this.editValue=='fs'){
            let fs=parseInt(this.fontSize)
            node.style={
              'font-size':`${fs}px`
            }
          }
          else if(this.editValue=='color'){
            node.style={
              'color':`${this.textColor}`
            }
          }
          else if(this.editValue=='db'){
            node.style={
              'display':'block'
            }
          }
          else if(this.editValue=='dib'){
            node.style={
              'display':'inline-block'
            }
          }
          else{}
        }
      var len = node.items.length;
      for (var i = 0; i < len; i++) {
        var foundNode = await this.dfs(node.items[i]);
        
        if (foundNode) {
          console.log('foundNode',foundNode);
          return foundNode;
        }
      }
      console.log('nodeeeee',node);
      return null;
    },

    topEditStyle(value){

    },


    updateOfferCount() {
      // console.log('child',this.$root.$children);
      this.offerCount+=1;
      this.$store.commit("setUniqueIdData",this.offerCount);
      // this.offerCount = this.$children.filter(child => child.constructor.options.name === 'node').length;
    },
    singleItem(i,index){
        let a =_.clone(i)
        console.log('a i',a);
        console.log('singleItem')
        this.editoptionON=true;
        // this.selectTag.selectItem=a
        // this.selectTag.selectIndex=index
        // this.$store.commit("setSelectTagData",this.selectTag);
    },

    
  },

  updated() {
    this.updateOfferCount()
  },
  mounted() {
    this.updateOfferCount()
  },

   filters:{
    pretty: function(value) {
      console.log('value',value);
      let a= JSON.stringify(value);
      let ab= JSON.parse(a);
      console.log('a',a)
      console.log('ab',ab)
      return ab;
    }
   },

  created(){
     
  }
};
</script>


<style scoped>
.col{
    flex: 0 0 100%;
    max-width: 100%;
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
}
.u-row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    padding: 20px;
    border:1px solid #ddd;
}
.u-col-1 {
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
}
.u-col-2 {
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
}
.u-col-3{
    flex: 0 0 25%;
    max-width: 25%;
}
.u-col-4 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
}
.u-col-5 {
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
}
.u-col-6 {
    flex: 0 0 50%;
    max-width: 50%;
    border: 1px solid;
}
.u-col-7 {
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
}
.u-col-8 {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
}
.u-col-9 {
    flex: 0 0 75%;
    max-width: 75%;
}
.u-col-10 {
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
}
.u-col-11 {
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
}
.u-col-12 {
    flex: 0 0 100%;
    max-width: 100%;  
}
.u-col{
  padding: 20px;
  border: 1px solid #ddd;
}

.u-container{
  padding: 20px;
  border: 1px solid #ddd;
}
.p-0{
  padding: 0px!important;
}
</style>
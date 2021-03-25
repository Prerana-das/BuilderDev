<template>
  <div class="content">
    <div v-for="(item1,index1) in node.items" :key="index1" v-if="node.items.length">
      <template v-if="!item1.items.length">
         <template v-if="item1.contentType=='h1'" >
           <span @click="singleItem(item1,index1)">
             <Heading :h1Prop="{step1:item1.contentType}"></Heading>
              <span @click.stop="editOn(item1,index1)" class="edit_btn" v-if="editoptionON==true">
                Edit
                <i class="fas fa-cog"></i>
              </span>
              <ul v-if="uibEditId==item1.id && uibEditIndex==index1" class="edit_list">
                <li @click.stop="editItem('b',item1.id)">b</li>
                <li @click.stop="editItem('i',item1.id)">i</li>
                <li @click.stop="editItem('u',item1.id)">u</li>
              </ul>
           </span>
         </template>
         <template v-else-if="item1.contentType=='p'">
           <span @click="singleItem(item1,index1)">
            <Paragraph :pProp="{step1:item1.contentType}"></Paragraph>
            <span @click.stop="editOn(item1,index1)" class="edit_btn" v-if="editoptionON==true">
                Edit
                <i class="fas fa-cog"></i>
              </span>
              <ul v-if="uibEditId==item1.id && uibEditIndex==index1" class="edit_list">
                <li @click.stop="editItem('b',item1.id)">b</li>
                <li @click.stop="editItem('i',item1.id)">i</li>
                <li @click.stop="editItem('u',item1.id)">u</li>
                <li @click.stop="editItem('ac',item1.id)">Align center</li>
                <li @click.stop="editItem('am',item1.id)">Align middle</li>
              </ul>
           </span>
         </template>
         <template v-else-if="item1.contentType=='container'">
           <span @click="singleItem(item1,index1)">
            <UContainer :conatinerProp="{step1:item1.contentType}"></UContainer>
           </span>
         </template>
         <template v-else-if="item1.contentType=='row'">
           <span @click="singleItem(item1,index1)">
             <URow :rowProp="{step1:item1.contentType}"></URow>
           </span>
         </template>
         <template v-else-if="item1.contentType=='col' || item1.contentType=='col6' || item1.contentType=='col4' || item1.contentType=='col3'">
           <span @click="singleItem(item1,index1)">
            <UCol :colProp="{step1:item1.contentType}"></UCol>
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
      <div v-for="(item2,index2) in item1.items" :key="index2" v-if="item1.items.length">
        <template v-if="!item2.items.length">
          <template v-if="item1.contentType=='h1'">
            <Heading :h1Prop="{step1:item1.contentType,step2:item2.contentType}">
            </Heading>
            <span @click="editOn(item2,index2)" class="edit_btn">
                Edit
                <i class="fas fa-cog"></i>
              </span>
              <ul v-if="uibEditId==item2.id && uibEditIndex==index2" class="edit_list">
                <li @click="editItem('b',item2.id)">b</li>
                <li @click="editItem('i',item2.id)">i</li>
                <li @click="editItem('u',item2.id)">u</li>
              </ul>
          </template>
          <template v-else-if="item1.contentType=='p'">
            <Paragraph :pProp="{step1:item1.contentType,step2:item2.contentType}">
            </Paragraph>
            <span @click="editOn(item2,index2)" class="edit_btn">
                Edit
                <i class="fas fa-cog"></i>
              </span>
              <ul v-if="uibEditId==item2.id && uibEditIndex==index2" class="edit_list">
                <li @click="editItem('b',item2.id)">b</li>
                <li @click="editItem('i',item2.id)">i</li>
                <li @click="editItem('u',item2.id)">u</li>
              </ul>
          </template>
        </template>
        <div v-for="(item3,index3) in item2.items" :key="index3" v-if="item2.items.length">
          <template v-if="!item3.items.length">
            <template v-if="item1.contentType=='h1'">
              <Heading :h1Prop="{step1:item1.contentType,step2:item2.contentType,step3:item3.contentType}">
              </Heading>
            </template>
          </template>
          <div v-for="(item4,index4) in item4.items" :key="index4" v-if="item4.items.length">
            <div v-for="(item5,index5) in item5.items" :key="index5" v-if="item5.items.length">
                
            </div>
          </div>
        </div>
      </div>  
    </div>
    
     <!-- <template >
      <template v-if="node.contentType=='h1' || node.contentType=='p' || node.contentType=='i'" >
          <component :is="node.contentType" contenteditable="true" class="customStyle">
              <template>
                 {{node.text}}
              </template>
          </component>
          <span @click="editOn(node)" class="edit_btn">
            Edit
            <i class="fas fa-cog"></i>
          </span>
          <ul v-if="isEditOn==true" class="edit_list">
            <li @click="editItem('b',node)">b</li>
            <li @click="editItem('i',node)">i</li>
            <li @click="editItem('u',node)">u</li>
          </ul>
      </template>
      <template v-else-if="node.contentType=='container'">
          <div class="container u-container">

          </div>
      </template>
      <template v-else-if="node.contentType=='col'">
          <div class="u-row row p-0">
            <div class="u-col col-md-6">
            </div>
            <div class="u-col col-md-6">
            </div>
          </div>
      </template>
      <template v-else-if="node.contentType=='row'">
          <div class="u-row row">
          </div>
      </template>
    </template> -->

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
import UCol from "./ui/Col";
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

    helloWorld(){
      return 'vallagena';
    }
   
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
      nestedCount:0
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
   async editItem(value,id){

      this.itemId=id
      this.editValue=value
      // let mainData = _.clone(this.mainData);
      this.storeData = _.clone(this.mainData);

      this.nestedCount=0;
       await this.dfs(0,this.storeData)
    //  await this.callRecursive(this.mainData.items);

    //  this.$store.commit("setMainData",mainData);
    },
    async callRecursive(item){
      this.nestedCount++;
      item = JSON.stringify(item);
      item = JSON.parse(item);
      this.countMethod = this.countMethod +1;
      console.log('callRecursive ', this.countMethod)


      if(item.length > 0){
        for(let d of item){
          console.log("contentType",d.contentType)
          console.log("this.selectTag.selectItem.id",this.selectTag.selectItem.id)
          if(d.id==this.selectTag.selectItem.id){
            console.log('matched')
            console.log('d',d)
            if(this.editValue=='b' || this.editValue=='u' || this.editValue=='i'){
               d.items.push({
                contentType:this.editValue,
                items:[],
                size:null,
                text:null,
                id:this.uniqueId
              })
            } 
            else{
              d.ac='ac'
            }
          }
          console.log('dddddddddddddddddd',d);
          //  this.storeData.push(d)
         
          await this.callRecursive(d.items)

          
        }
      }
    },
    async pushTostoreData(data){
      totalLoop=_.clone(this.nestedCount);
      while(totalLoop){
        // for(let d of data){
          
        // }
      }
    },

    async dfs(value,node) {
      if(node.id==this.selectTag.selectItem.id){
          console.log('matched')
          if(this.editValue=='b' || this.editValue=='u' || this.editValue=='i'){
              node.items.push({
              contentType:this.editValue,
              items:[],
              size:null,
              text:null,
              id:this.uniqueId
            })
          } 
          else{
            node.ac='ac'
          }
        }

      if (node.value === value) {
        return node;
      }
      var len = node.items.length;
      for (var i = 0; i < len; i++) {
        var foundNode = await this.dfs(value,node.items[i]);
        
        if (foundNode) {
          console.log('foundNode',foundNode);
          return foundNode;
        }
      }
      console.log('nodeeeee',node);
      return null;
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
        this.selectTag.selectItem=a
        this.selectTag.selectIndex=index
        this.$store.commit("setSelectTagData",this.selectTag);
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
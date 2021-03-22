<template>
    <div class="main_area">
        <div class="row">
            <div class="col-md-2">
                <div class="topbar">
                    <h2 @click="addItem('container',null,null)">Container</h2>
                    <h2 @click="addItem('row',null,null)">Row</h2>
                    <h2 @click="addItem('col',2,null)">Col</h2>
                    <h2 @click="addItem('h1',1,'heading')">Heading...</h2>
                    <h2 @click="addItem('p',null,'paragraph')">Text...</h2>
                    <h2 @click="addItem('img',null,null)">Image</h2>
                </div>
                <input type="file" accept="image/*" @change="onChange" />
                <div id="preview">
                    <img v-if="item.imageUrl" :src="item.imageUrl" />
                </div>
            </div>
            <div class="col-md-10">
                <!-- <div v-for="(item,index2) in mainData.items" :key="index2" v-if="mainData.items.length">
                    <p @click="singleItem(item,index2)" class="single">
                        {{item}}
                    </p> 
                </div> -->
                <node-tree :node="mainData"></node-tree>
                <div @click="blankDiv()" class="blank_btn">
                    Blank
                </div>
    
               
            </div>
        </div>
       
        <!-- <Button type="primary" @click="modal6=true">Display dialog box</Button>
        <Modal v-model="modal6" :closable="false" title="Edit" :mask-closable="false">			
            <div slot="footer">
                <Button  @click="closeEditModal">Close</Button>
                <Button type="primary">Update</Button>
            </div>
        </Modal> -->
        <!-- <div v-for="(i,index) in countPTag" :key="index">
            <p @click="singleItem(i,index)" class="single">{{ i }}</p> 
        </div> -->
        
        
        
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import NodeTree from "./NodeTree";
export default {
//   name: 'HelloWorld',
 components: {
    NodeTree
  },
  computed: {
   ...mapGetters({
          selectTag:'getSelectTagData',
          mainData:'getMainData',
          uniqueId:'getUniqueIdData',
        }),
  },
  data () {
    return {
        modal6:false,
        countPTag:[],
        item:{
          image : null,
          imageUrl: null
        }
    }
  },
  methods:{
      paragraphOn(){

      },

      addItem(value,size,text){
        let mainData = _.clone(this.mainData);
        if(this.selectTag.selectIndex== -1){
             mainData.items.push({
                contentType:value,
                items:[],
                size:size,
                text:text,
                id:this.uniqueId
            })
             console.log('if 1')
        }
        else{
            if(mainData.items[this.selectTag.selectIndex].contentType==value && (mainData.items[this.selectTag.selectIndex].contentType=='p' || mainData.items[this.selectTag.selectIndex].contentType=='h1')){
                console.log('else 1')
                mainData.items.push({
                    contentType:value,
                    items:[],
                    size:size,
                    text:text,
                    id:this.uniqueId
                })
                this.$Notice.info({
                    title: 'back'
                });
            }
            else{
                 console.log('else 2')
                 mainData.items[this.selectTag.selectIndex].items.push({
                    contentType:value,
                    items:[],
                    size:size,
                    text:text,
                    id:this.uniqueId
                });
            }
        }
       
        console.log('counttttt',mainData);
        this.$store.commit("setMainData",mainData);
      },

      singleItem(i,index){
          let a =_.clone(i)
          console.log('singleItem')
          console.log(i,index)
          this.selectTag.selectItem=a
          this.selectTag.selectIndex=index
         this.$store.commit("setSelectTagData",this.selectTag);
      },
      blankDiv(){
        this.selectTag.selectItem=''
        this.selectTag.selectIndex=-1
          console.log('blank')
      },


     onChange(e) {
        const file = e.target.files[0]
        this.image = file
        this.item.imageUrl = URL.createObjectURL(file)

        console.log('file',file)
        console.log('image',this.image)
        console.log('imageUrl',this.item.imageUrl)
      }
      

  }
}
</script>

<style scoped>
/* .u-col{
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

.u-container{
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    max-width: 1140px;
} */
</style>
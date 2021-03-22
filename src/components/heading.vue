<template>
    <div>
        <div>
            
        </div>
        <h1>heading</h1>
        <ul>
            <li @click="headingOn('h1')">h1</li>
            <li @click="headingOn('h2')">h2</li>
            <li @click="headingOn('h3')">h3</li>
            <li @click="headingOn('h4')">h4</li>
            <li @click="headingOn('h5')">h5</li>
            <li @click="headingOn('h6')">h6</li>
        </ul>
        <div>
            <input type="color" id="head" name="head" value="#ff0000">
        </div>
        <hr/>

        <template>
            <component :is="tag">Test</component>
        </template>

        <div contenteditable="true">
            This text can be edited by the user.
        </div>

        <hr/>
        <h5 @click="paragraphOn('p')">Select P tag</h5>
        <h5 @click="paragraphOn('h5')">Select h5 tag</h5>



        <div v-for="(i,index) in countPTag" :key="index">
            <component :is="i" contenteditable="true" v-if="i=='p'">
                <template>
                    Lorem ipsum
                </template>
            </component>
            <component :is="i" contenteditable="true" v-else>
                <span @click="editHeading(i,index)">
                    heading
                </span>
            </component>
        </div>

        <div
            v-if="editHModal">
            <ul>
                <li @click="headingEdit('h1')">h1</li>
                <li @click="headingEdit('h2')">h2</li>
                <li @click="headingEdit('h3')">h3</li>
                <li @click="headingEdit('h4')">h4</li>
                <li @click="headingEdit('h5')">h5</li>
                <li @click="headingEdit('h6')">h6</li>
            </ul>
        </div>

    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
//   name: 'HelloWorld',
  computed: {
   ...mapGetters({
        //   count:'getCount',
        }),
  },
  data () {
    return {
      tag:"h2",
      ptag:"",
      htag:"",
      pTrue:false,
      countPTag:[],
      editHIndex:-1,
      editHModal:true
    }
  },
  methods:{
      headingOn(value){
          this.tag=value
      },

      paragraphOn(value){
        this.countPTag.push(value)

        console.log('mainarray',this.countPTag);
      },

      editHeading(i,index){
          this.editHIndex=index
          this.editHModal=true
          console.log('editHeadingggggggg')
      },
      headingEdit(value){
        console.log('headingEdit',value);
        console.log('arrayy 1',this.countPTag)
        // this.countPTag.splice(this.editHIndex,1);
        this.countPTag[this.editHIndex]=value
        Vue.set(this.countPTag, this.editHIndex,value)
        console.log('arrayy 2',this.countPTag)
      }


  }
}
</script>

<style scoped>
ul {
    list-style: none;
    display: inline-flex;
}

ul li {
    margin-right: 10px;
    cursor: pointer;
}
</style>
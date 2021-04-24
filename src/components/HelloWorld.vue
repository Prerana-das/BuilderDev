<template>
  <div class="hello">
    <!-- <div>
      <ul class="left_heading">
        <li @click="hClick(1)">H1</li>
        <li>H2</li>
      </ul>
    </div>

    <ul>
      <li @click="heading(1)">h1</li>
      <li @click="heading(2)">h2</li>
      <li @click="heading(3)">h3</li>
    </ul>
    <template>
      <article>
        <component :is="tag">Test</component>
      </article>
    </template>
    <div>
      <div>
        <template v-if="headingNo==1">
          <h1 @click="headingClick">
            <template v-if="headingTextOn==true">
              <input type="text" placeholder="Heading" class="writeOn">
            </template>
            <template v-else>
                Heading
            </template>
          </h1>
        </template>
        <template v-else-if="headingNo==2">
          <h2 @click="headingClick">
             <template v-if="headingTextOn==true">
              <input type="text" placeholder="Heading" class="writeOn">
            </template>
            <template v-else>
                Heading
            </template>
          </h2>
        </template>
        <template v-else-if="headingNo==3">
          <h3 @click="headingClick">
             <template v-if="headingTextOn==true">
              <input type="text" placeholder="Heading" class="writeOn">
            </template>
            <template v-else>
                Heading
            </template>
          </h3>
        </template>
        <template v-else-if="headingNo==4">
          <h4>Heading</h4>
        </template>
        <template v-else-if="headingNo==5">
          <h5>Heading</h5>
        </template>
        <template v-else-if="headingNo==6">
          <h6>Heading</h6>
        </template>
      </div>
    </div> -->

      <!-- <span v-html="html">Test v-html</span> -->
      <!-- <span :class="count.settings.heading[headingNo-1].isTrue==true ? 'h1':''">{{testText}}</span> -->
      <!-- <textarea name="" id="" cols="30" rows="10" v-model="testText"></textarea> -->
    

    <!-- <div class="mainView">

    </div> -->
    <!-- <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul> -->

    <Board id="board-1">
      board
    </Board>
    <Card id="card-1" draggable="true">
          <span>oNe</span>
      </Card>
      <Card id="card-2" draggable="true">
          <span>two</span>
      </Card>
      
    <!-- <Board id="board-3">
      <Card id="card-3" draggable="true">
          <span>three</span>
      </Card>
    </Board>
    <Board id="board-4">
      <Card id="card-4" draggable="true">
          <span>four</span>
      </Card>
    </Board> -->

  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Board from "./ui/H1";
import Card from "./ui/card";

export default {
  name: 'HelloWorld',
  components: {
    Board,
    Card
  },
  computed: {
   ...mapGetters({
          // count:'getCount',
        }),
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      testText:'',
      headingNo:0,
      headingTextOn:false,
      tag:"h2"
    }
  },
  methods:{
    heading(value){
      this.headingNo=value
      let i=0;
      for(i of this.count.settings.heading){
        if(i.h1==value){
          let rowData = _.clone(this.count)
          console.log('test', rowData.settings.heading[value-1].isTrue)
          rowData.settings.heading[value-1].isTrue=true
           this.$store.commit("setCount",rowData);
        }
      }
    },

    headingClick(){
      this.headingTextOn=true
    },


    hClick(value){

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.h1{
    color: blue;
    font-size: 20px;
}


.writeOn{
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: -internal-light-dark(black, white);
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    appearance: auto;
    background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
    -webkit-rtl-ordering: logical;
    cursor: text;
    margin: 0em;
    font: 400 13.3333px Arial;
    padding: 1px 2px;
    border:0!important;
}
.writeOn{
  font-size: 30px;
}

.left_heading {
    text-align: left;
    display: table-caption;
}
</style>

<template>
    <div>
        <!-- <h1 contenteditable="true">
          <template v-if="h1Prop=='p'">
            <p>
              Heading
            </p>
          </template>
          <template v-else-if="h1Prop=='b'">
            <b>
              Heading
            </b>
          </template>
          <template v-else-if="h1Prop=='i'">
            <i>
              Heading
            </i>
          </template>
          <template v-else-if="h1Prop=='u'">
            <u>
              Heading
            </u>
          </template>
          <template v-else-if="h1Prop=='container'">
            <div class="container u-container">
              Heading
            </div>              
          </template>
          <template v-else-if="h1Prop=='row'">
             <div class="u-row row">
              Heading
            </div>  
          </template>
          <template v-else-if="h1Prop=='col'">
            <div class="u-col col-md-6">
              Heading
            </div>  
            <div class="u-col col-md-6">
            </div>  
          </template>
          <template v-else >
            Heading
          </template>
        </h1> -->


        <h1 contenteditable="true">
          <template v-if="h1Prop.step2">
             <template v-if="h1Prop.step2=='p'">
              <p>
                Heading
              </p>
            </template>
            <template v-else-if="h1Prop.step2=='b'">
              <b>
                Heading
              </b>
            </template>
            <template v-else-if="h1Prop.step2=='i'">
              <i>
                Heading
              </i>
            </template>
            <template v-else-if="h1Prop.step2=='u'">
              <u>
                Heading
              </u>
            </template>
            <template v-else-if="h1Prop.step2=='container'">
              <div class="container u-container">
                Heading
              </div>              
            </template>
            <template v-else-if="h1Prop.step2=='row'">
              <div class="u-row row">
                Heading
              </div>  
            </template>
            <template v-else-if="h1Prop.step2=='col'">
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
        </h1>

    </div>
</template>

<script>
export default {
  props: ["h1Prop"],
  data(){
    return{
 
    }
  }
}
</script>

<style scoped>

</style>



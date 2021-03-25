<template>
    <div>
         <p contenteditable="true">
          <template v-if="pProp.step2">
            <template v-if="pProp.step2=='b'">
              <b>
                Paragraph
              </b>
            </template>
            <template v-else-if="pProp.step2=='i'">
              <i>
                Paragraph
              </i>
            </template>
            <template v-else-if="pProp.step2=='u'">
              <u>
                Paragraph
              </u>
            </template>
            <template v-else-if="pProp.step2=='container'">
              <div class="container u-container">
                Paragraph
              </div>              
            </template>
            <template v-else-if="pProp.step2=='row'">
              <div class="u-row row">
                Paragraph
              </div>  
            </template>
            <template v-else-if="pProp.step2=='col'">
              <div class="u-col col-md-12">
                Paragraph
              </div>  
            </template>
            <template v-else>
              Paragraph
            </template>
          </template>
          <template v-else>
            Paragraph
          </template>
        </p>
    </div>
</template>

<script>
export default {
  props: ["pProp"],
  data(){
    return{
 
    }
  }
}
</script>

<style scoped>

</style>



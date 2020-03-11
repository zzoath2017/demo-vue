<template>
    <div class="demo">
        <split-pane v-on:resize="resize" :min-percent='20' :default-percent='30' split="vertical">
      <template slot="paneL">
       <split-pane split="vertical">
          <template slot="paneL">
           1
          </template>
          <template slot="paneR">
            2
          </template>
        </split-pane>
      </template>
    
      <template slot="paneR">
        <split-pane split="horizontal">
          <template slot="paneL">
           3
          </template>
          <template slot="paneR">
             <split-pane split="horizontal">
          <template slot="paneL">
           4
          </template>
          <template slot="paneR">
            5
          </template>
        </split-pane>
          </template>
        </split-pane>
      </template>
    </split-pane>
    </div>
</template>

<script>
import splitPane from 'vue-splitpane'
export default {
    name: "Demo",
    components: {
        splitPane
    },
    data(){
        return{

        }
    },
    methods: {
        resize(){

        }
    }
}
</script>
<style lang="scss">
    .demo{
        width: 100%;
        height: 600px;
        background-color: aqua;
    }
</style>
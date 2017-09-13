<template>
  <v-ons-page>
    <custom-toolbar :back-label="'Page 1'">Page 2</custom-toolbar>
<google-map
  name="example"
></google-map>

  </v-ons-page>
</template>

<script>
  import customToolbar from './CustomToolbar';
import example from './Page1';
  import app from './App';
 

  export default {
    methods: {
      pop() {
        this.pageStack.pop();
      } 
    },
    props: ['pageStack'],
    components: { customToolbar,example }
  }
</script>


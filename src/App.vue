<template>
  <v-ons-navigator :page-stack="pageStack">
    <component :is="page" v-for="page in pageStack" :page-stack="pageStack"></component>
<google-map
  name="example"
></google-map>
  </v-ons-navigator>
</template>

<script>

  import page2 from './Page2';



  export default {
    data() {
      return {
        pageStack: [page1]
      }
    }
  }
</script>

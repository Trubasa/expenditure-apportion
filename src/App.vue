
<template>
  <div id="app">
    <v-app>
      <v-navigation-drawer app clipped v-model="root.sideBarShow">
        <!-- -->
        <side-bar-vue></side-bar-vue>
      </v-navigation-drawer>

      <v-app-bar app clipped-left dense>
        <v-app-bar-nav-icon @click="root.sideBarShow=!root.sideBarShow"></v-app-bar-nav-icon>
      </v-app-bar>

      <!-- Sizes your content based upon application components -->
      <v-content>
        <!-- Provides the application the proper gutter -->
        <v-container fluid>
          <!-- If using vue-router -->
          <router-view></router-view>
        </v-container>
      </v-content>

      <!-- <v-footer app>
        
      </v-footer>-->
    </v-app>
  </div>
</template>

<script>
import SideBarVue from "./SideBar.vue";
import {mapState} from "vuex"

export default {
  components: { SideBarVue },
  name: "App",
  data: () => ({
    drawer: null
  }),
  computed:{
    ...mapState({
      root:state=>state.root,
    })
  },
  created() {
    this.$vuetify.theme.dark = false;
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>

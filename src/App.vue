<template>
  <v-app :theme="dark? 'dark': 'light'">
    <v-layout>
      <v-navigation-drawer
          class="ml-2 mr-4"
          v-model="drawer"
          :rail="rail"
          floating
          permanent
          dark
          color="white"
          @click="rail = false"
      >
        <template v-slot:default>
          <div class="">
            <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
            title="User UFMS"
            style="
              /*color: white;*/
              /*background: #EA1D2C;*/
              padding-top: 10px;
              border-radius: 25px; "
        >
          <template v-slot:append>
            <v-btn
                variant="text"
                icon="mdi-chevron-left"
                @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>
            <v-list density="compact" nav
                    >
          <v-list-item prepend-icon="mdi-home" title="Home" value="home" to="/"></v-list-item>
          <v-list-item prepend-icon="mdi-store" title="Restaurantes" value="restaurantes" to="restaurante"></v-list-item>
<!--          <v-list-item prepend-icon="mdi-theme-light-dark" title="Dark/Ligth" value="theme" @click="dark = !dark"></v-list-item>-->
        </v-list>
          </div>
        </template>


        <template v-slot:append>
          <div class="pa-2">
            <v-btn block flat>
              Sair
            </v-btn>
          </div>
        </template>

      </v-navigation-drawer>
      <v-app-bar
          elevation="0"
          style="background: #DEDEDE">
        <v-app-bar-title>{{currentRouteName}}</v-app-bar-title>
        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>
      <v-main style="background: #DEDEDE;" class="ml-4">
        <div class="ma-2">
          <div class="text-mutted mb-2">{{currentRouteDescription}}</div>
        </div>
        <router-view/>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer: true,
    rail: false,
    dark: false
  }),
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
    currentRouteDescription() {
      return this.$route.meta.description;
    }
  }
}
</script>
<style>
.v-navigation-drawer{
  border: none;
  background: grey;

}

.v-list {
  background: grey;
}
</style>

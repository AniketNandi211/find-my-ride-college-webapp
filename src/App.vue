<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <span>
        Vue2 + TS boilerplate <sub>V-{{ appVersion }}</sub>
      </span>

      <v-spacer></v-spacer>

      <v-btn text>
        <span class="mr-2">{{ tagLine }}</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <Home :content="appName" />
      <Counter />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Home from "@/views/Home.vue";
import Counter from "@/components/Counter.vue";
import { State } from "vuex-class";

@Component({
  name: "App",
  components: { Home, Counter },
})
export default class App extends Vue {
  // accessing Root state
  @State
  private appVersion!: number;
  @State
  private appName!: string;
  @State
  private desc!: string;

  tagLine = "Grow on";
}
</script>

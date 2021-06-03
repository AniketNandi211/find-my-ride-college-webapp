<template>
  <div class="home">
    <h1 class="text-center">{{ content }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  name: "Home",
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  @Prop({ required: true }) readonly content!: string;
}
</script>

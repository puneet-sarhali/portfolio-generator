<template>
  <button class="btn !m-8" @click="onGenerate()">Generate</button>
  <div class="bg-primary">
    <div class="max-w-[90rem] mx-auto">
      <header1></header1>
      <bio-1></bio-1>
      <skill-1></skill-1>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header1 from "@/components/headers/Header-1.vue";
import Bio1 from "@/components/bios/Bio-1.vue";
import Skill1 from "./skills/Skill-1.vue";
import themeData from "../config/theme.json";

@Options({
  components: { Header1, Bio1, Skill1 },
  props: {},
})
export default class HelloWorld extends Vue {
  onGenerate() {
    this.changeTheme();
    this.changeFont();
  }

  // changing themes
  changeTheme() {
    const randIndex = Math.floor(Math.random() * themeData.length);
    this.changeVar("--color-primary", themeData[randIndex]["--color-primary"]);
    this.changeVar(
      "--color-primary-light",
      themeData[randIndex]["--color-primary-light"]
    );
    this.changeVar(
      "--color-secondary",
      themeData[randIndex]["--color-secondary"]
    );
    this.changeVar("--color-accent", themeData[randIndex]["--color-accent"]);
    this.changeVar(
      "--color-accent-focus",
      themeData[randIndex]["--color-accent-focus"]
    );
    this.changeVar(
      "--color-accent-content",
      themeData[randIndex]["--color-accent-content"]
    );
    this.changeVar("--color-accent2", themeData[randIndex]["--color-accent2"]);
  }

  //change font family
  changeFont() {
    this.changeVar("--font-family-silkscreen", "Verdana");
  }

  // for changing css variable
  changeVar(from: string, to: string) {
    document.documentElement.style.setProperty(from, to);
  }
}
</script>

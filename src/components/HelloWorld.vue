<template>
  <div class="hello">
    <div><font-awesome-icon class="text-red-900 mb-2 text-2xl" icon="exclamation-triangle" /><span> >> this is font-awesome 6 icon</span></div>
    <h1>Next text is rendered using i18n: {{ $t('misc.test_text') }}</h1>
    <div><font-awesome-icon class="text-red-900 mb-2 text-2xl" icon="exclamation-triangle" /><span> >> this is font-awesome 6 icon</span></div>
    <h1>{{ msg }}</h1>
    <h1>Next text is rendered from Pinia store state: </h1><span class="font-bold">{{ store.doubleCount }}</span>
    <h1>Next text is rendered from Pinia store getter: </h1><span class="font-bold">{{ store.getUserById(1).name }}</span>
    <h1>Next text is rendered from Pinia store action: </h1><span class="font-bold">{{ testText }}</span>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener">router</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript" target="_blank" rel="noopener">typescript</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useTestStore } from '@/store/test';
import { defineProps, ref } from 'vue';
import { Ref } from 'vue';
const store = useTestStore();
const testText: Ref<string> = ref('Not yet resolved');
(async() => {
  testText.value = await store.testAwait('Resolved text from promise');
})();
const props = defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

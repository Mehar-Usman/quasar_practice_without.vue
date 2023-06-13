<template>
 <!--
Forked from:
https://quasar.dev/layout/header-and-footer#example--ios-like
-->
<div id="q-app" style="min-height: 100vh;">
<div class="q-pa-md">
    <q-layout view="lHh lpr lFf" container style="height: 400px" class="shadow-2 rounded-borders">
      <q-header bordered class="bg-grey-3 text-primary">
        <q-toolbar>
          <q-toolbar-title class="text-center">
            <q-avatar>
              <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg">
            </q-avatar>
            Quasar Framework
          </q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-footer bordered class="bg-grey-3 text-primary">
        <q-tabs no-caps active-color="primary" indicator-color="transparent" class="text-grey-8" v-model="tab">
          <q-tab name="images" label="Images"></q-tab>
          <q-tab name="videos" label="Videos"></q-tab>
          <q-tab name="articles" label="Articles"></q-tab>
        </q-tabs>
      </q-footer>

      <q-page-container>
        <q-page class="q-pa-md">
          <p v-for="n in 15" :key="n">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
          </p>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</div>
</template>

// <script>
//   const { ref } = Vue

// const app = Vue.createApp({
//   setup () {
//     return {
//       tab: ref('Videos')
//     }
//   }
// })

// app.use(Quasar, { config: {} })
// app.mount('#q-app')
// </script>

<template>
  <q-page padding>
    <!-- content -->
    <div class="col-12">
      <Screen_plugin/>
    </div>
    <div class="col-12">
      <Layout_build/>
    <!-- <qlayoutpractice/> -->
    </div>
    <div>
      <breadcrumbs/>
    </div>
    <div>
      <breadcrumbs2/>
    </div>

  </q-page>
</template>

<script>
import Layout_build from 'src/components/layout_build.vue';
import Screen_plugin from 'src/components/screen_plugin.vue';
import breadcrumbs from 'src/components/breadcrumbs.vue';
import breadcrumbs2 from 'src/components/breadcrumbs2.vue';
// import qlayoutpractice from 'src/components/qlayoutparctice.vue.js';
export default {
    components: {
    Screen_plugin,
    Layout_build,
    breadcrumbs,
    breadcrumbs2,
}
}
</script>

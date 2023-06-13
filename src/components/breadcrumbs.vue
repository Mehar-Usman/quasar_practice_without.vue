<template>
  <div>
    <q-breadcrumbs separator=">" active-color="primary" separator-color="grey-8">
      <q-breadcrumbs-el
        v-for="(item, index) in breadcrumbs"
        :key="index"
        :label="item.label"
        :icon="item.icon"
        :to="item.to"
        :exact="item.exact"
        :active-class="item.activeClass"
      ></q-breadcrumbs-el>
    </q-breadcrumbs>

    <q-btn @click="updateBreadcrumbs('Section 2')" label="Go to Section 2" class="q-mt-md" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbs: [
        { label: 'Home', icon: 'home', to: '/' },
      ]
    };
  },
  methods: {
    updateBreadcrumbs(section) {
      this.breadcrumbs.push({ label: section, icon: 'arrow_forward', to: '' });
    }
  }
};
</script>

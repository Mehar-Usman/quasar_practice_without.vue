<template>
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
</template>

<script>
export default {
  data() {
    return {
      breadcrumbs: [
        { label: 'Home', icon: 'home', to: '/' },
        { label: 'Products', icon: 'shopping_cart', to: '/products' },
        { label: 'Category', icon: 'category', to: '/products/category', exact: true },
        { label: 'Product', icon: 'info', to: '/products/category/product', activeClass: 'active' }
      ]
    };
  }
};
</script>


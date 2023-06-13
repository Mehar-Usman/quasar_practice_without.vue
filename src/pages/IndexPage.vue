<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
<component2/>
<component3/>

  </q-page>
</template>



<script>
import { defineComponent } from 'vue'
import  component2  from 'components/component2.vue'
import  component3  from 'components/component3.vue'
export default defineComponent({
  name: 'IndexPage',
  components:{
    component2,
    component3
  }
})
</script>

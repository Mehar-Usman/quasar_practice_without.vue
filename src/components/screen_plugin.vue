<template>
  <div>
    <div v-if="$q.screen.lt.md">This text will be displayed on xs and sm screens only.</div>
    <div v-if="$q.screen.gt.sm" class="text-h1 text-weight-bolder">show md , lg , xl</div><br>
    <div v-if="$q.screen.gt.lg" class="text-h1 text-weight-bolder">Just Show MD , LG And XL screens</div>
  </div>
  <!-- <div>
    <div v-if="$q.screen.lt.md">This text will be displayed on xs and sm screens only.</div>
    <div v-else-if="$q.screen.lt.xl">This text will be displayed on xs, sm, and md screens only.</div>
    <div v-else-if="$q.screen.gt.md">This text will be displayed on lg and xl screens only.</div>
  </div> -->
    <div class="row">
      <div class="col-md-4 bg-pink row flex items-center " style="height: 300px;">
        <div class="col-md-4 justify-center flex">sds</div><div class="col-md-4 justify-center flex">fsf</div><div class="col-md-4 justify-center flex">fsf</div>
      </div>
      <div class="col-md-4 bg-yellow items-end  flex">ggggggggggggggqd</div>
      <div class="col-md-4 bg-info ">r23rtet</div>
    </div>

</template>



<script>
export default {
  name: 'screen_plugin',
  setup () {
    return {}
  }
}
</script>

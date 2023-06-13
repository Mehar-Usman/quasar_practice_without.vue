<template>
  <q-page class="q-pa-xlxl">
    <div class="row q-col-gutter-sm">
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
        <div class="bg-positive q-pa-md ht flex-center">
          <div class="text-center">
            {{ lorem }}
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
        <div class="bg-secondary q-pa-md ht">
          {{ lorem }}
        </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
        <div class="bg-info q-pa-md ht">
          {{ lorem }}
        </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
        <div class="bg-warning q-pa-md ht">
          {{ lorem }}
        </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
        <div class="bg-negative q-pa-md ht">
          {{ lorem }}?
        </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
        <div class="bg-positive q-pa-md ht">
          {{ lorem }}
        </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
        <div class="bg-positive q-pa-md ht">
   {{ lorem }}
        </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
        <div class="bg-positive q-pa-md ht">
          {{ lorem }}
        </div>
      </div>
    </div>
  </q-page>
</template>
<script>
export default {
  setup() {
    return {
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
};
</script>
<style scoped>
.ht {
  height: 150px;
  border-radius: 50px;
}
</style>

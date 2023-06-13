<template>

  <!-- Start Header -->
  <div class="bg_image_container">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
      <span class="row flex-center">
        <img
          src="https://thecommercialcoop.com/img/THE_COMMERCIAL_COOP_MARK_2COLOR_1200x.3cf04f2f.webp"
          alt=""
          class="cop_img"
        />
        <h5 class="text-white">THE COMMERCIAL CO-OP</h5>
      </span>
    </div>
    <q-tabs v-model="tab" class="text-orange-10" >
      <q-tab name="mails" label="Home" />
      <q-tab name="alarms" label="Search For Sale" />
      <q-tab name="movies" label="Search For Lease" />
      <q-tab name="mails1" label="Search For comps" />
      <q-tab name="mails2" label="Message Board" />
      <q-tab name="mails3" label="Contact Us" />
      <q-tab name="mails4" label="About Us" />
      <q-tab name="mails5" label="Sign-in" />

      <q-btn color="negative" size="md"  @click="handleClick">
        Click me!
      </q-btn>
    </q-tabs>
    <img  src="https://thecommercialcoop.com/img/message-board.b205605f.webp" alt="" class="mess_img">
  </div>
<!-- End Header -->

<div class="row q-px-xl">
  <component3/>
</div>

</template>

<script>

import  component3  from 'components/component3.vue'
export default definedefineComponent({

component:{
  component3
}
})
</script>

<style>
.bg_image_container {
  width: 100%;
  height: auto;
  background-image: url("https://thecommercialcoop.com/img/coop-background-img.cb91b6a4.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: brightness(0.9);
}
.cop_img {
  height: 50px;
}
.mess_img{
  width: 100%;
}
</style>

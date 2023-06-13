<template>
  <div class="q-pa-md ">
    <!-- First Header Footer Practice -->
    <q-layout view="lHh lpr lFf" container style="height: 400px;" class="shadow-2 rounded-borders">
      <!-- Elevated Property show more brightness in header -->
      <q-header elevated>
        <q-toolbar class="glossy">
          <q-btn flat round dense icon="menu"></q-btn>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          <q-toolbar-title>Quasar Framework</q-toolbar-title>
          <!-- <q-space></q-space> -->
          <q-btn flat dense round icon="whatshot"></q-btn>
        </q-toolbar>
      </q-header>
      <q-footer elevated>
        <q-toolbar class="glossy">
          <q-footer-title>Footer</q-footer-title>
        </q-toolbar>
      </q-footer>
      <q-page-container>
        <q-page class="q-pa-md">
          <p v-for="n in 15" :key="n">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet reiciendis nulla veritatis laudantium aut
            tempore nisi mollitia alias non harum modi doloremque officiis provident dolorem veniam fugit quam tenetur
            atque, repudiandae nam facere exercitationem! Totam adipisci fuga quaerat molestias assumenda debitis officia
            consequatur dicta repudiandae ducimus, illo provident dolore. Tempore?
          </p>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
  <!-- Second Navbar Practice -->
  <div class="q-pa-md">
    <q-layout view="lHh lpr lFf" container style="height: 500px;" class="rounded shadow-2">
      <q-header elevated class="bg-purple">
        <q-toolbar>
          <q-btn dense flat round icon="menu">
          </q-btn><q-space></q-space>
          <q-btn flat dense round icon="search"></q-btn>
          <q-btn flat dense round icon="group_add"></q-btn>
        </q-toolbar>
        <q-toolbar inset>
          <q-toolbar-title>
            <strong>Quasar</strong> Framework
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar.png">
            </q-avatar>
          </q-toolbar-title>
        </q-toolbar>
        <!-- <q-space></q-space> -->
      </q-header>
      <q-page-container>
        <q-page class="q-pa-md">
          <p v-for="n in 15" :key="n">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi dignissimos culpa obcaecati optio hic
            dolor corporis, sed consequuntur aspernatur enim minus veritatis. Eos obcaecati consectetur quidem. Recusandae
            velit fuga praesentium, quis facilis molestiae ducimus, sapiente sit nisi doloremque consequatur! Quis
            blanditiis distinctio eaque, fugiat perspiciatis commodi aut dolores a nam laboriosam mollitia ut repudiandae
            illum? Deleniti a, sit ipsum nemo quia fuga distinctio numquam quidem quaerat nobis laboriosam voluptatibus
            optio.
          </p>
        </q-page>
      </q-page-container>
    </q-layout>

      <!-- Third Header footer practice -->
    <div class="q-pa-md">
      <q-layout view="lHh lpr lFf" container style="height: 400px; " class="shadow-2 rounded-borders">
        <q-header elevated>
          <q-toolbar >
            <q-btn flat round dense icon="menu" class="q-mr-md"></q-btn>
            <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          <q-toolbar-title>
            Quasar FrameWork
          </q-toolbar-title>
          <q-space/>
          <q-btn flat round dense icon="whatshot" />
          </q-toolbar>
          <q-toolbar inset>
          <q-breadcrumbs active-color="white" style="font-size: 16px">
            <q-breadcrumbs-el label="Home" icon="home" />
            <q-breadcrumbs-el label="Components" icon="widgets" />
            <q-breadcrumbs-el label="Toolbar" />
          </q-breadcrumbs>
        </q-toolbar>
        </q-header>
      </q-layout>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'layout_build',
  setup() {
    return {}
  }
}
</script>

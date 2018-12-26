<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar color="primary">
        <q-toolbar-title>
          Vue Hash Files
          <div slot="subtitle">Running on Quasar v{{$q.version}}</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>
    <q-page-container>
      <router-view class="layout-padding" style="height: calc(100vh - 50px);" />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'default'
};
</script>

<style>
</style>

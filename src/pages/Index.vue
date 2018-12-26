<template>
  <q-page class="flex">
    <file-hasher />
  </q-page>
</template>

<style>
</style>

<script>
import FileHasher from '../components/FileHasher';

export default {
  name: 'page-index',
  components: {FileHasher}
};
</script>

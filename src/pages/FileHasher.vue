<template>
  <q-page class="flex">
    <div class="row fit">
      <file-picker class="col-12 col-md-4" />
      <file-queue class="col-12 col-md-8" />
    </div>
  </q-page>
</template>

<script>
import FilePicker from '../components/FilePicker';
import FileQueue from '../components/FileQueue';

export default {
  name: 'file-hasher',
  components: {FileQueue, FilePicker}
};
</script>

<style scoped>

</style>

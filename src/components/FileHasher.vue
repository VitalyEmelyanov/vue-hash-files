<template>
  <div class="row fit">
    <file-picker class="col-12 col-md-4" />
    <file-queue class="col-12 col-md-8" />
  </div>
</template>

<script>
import FilePicker from './FilePicker';
import FileQueue from './FileQueue';

export default {
  name: 'file-hasher',
  components: {FileQueue, FilePicker}
};
</script>

<style scoped>

</style>

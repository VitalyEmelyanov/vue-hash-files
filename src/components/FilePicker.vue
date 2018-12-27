<template>
  <div class="row flex-center">

    <div
      class="drop-zone flex flex-center"
      @click="$refs.uploader.click()"
      @dragover.stop.prevent
      @drop.stop.prevent="onFilesDrop">
      <div class="text-neutral text-center q-pa-md">
        <q-icon class="q-pb-md" name="add box" size="48px" />
        <div>Drop files here or click to select (1.5 GB max)</div>
      </div>
    </div>

    <input
      ref="uploader"
      class="hidden"
      type="file"
      multiple
      @change="onFilesSelect">

  </div>
</template>

<script>
import {createNamespacedHelpers} from 'vuex';

const {
  mapActions: mapFileHasherActions
} = createNamespacedHelpers('fileHasher');

const MAX_FILE_SIZE = 1024 * 1024 * 1024 * 1.5; // 1.5 GB

export default {
  name: 'file-picker',
  methods: {
    ...mapFileHasherActions(['addFiles']),
    onFilesSelect() {
      const files = Array.from(this.$refs.uploader.files || []);
      this.$refs.uploader.value = '';
      this.validateAndAdd(files);
    },
    onFilesDrop(e) {
      const files = Array.from(e.dataTransfer.files || []);
      this.validateAndAdd(files);
    },
    validateAndAdd(files) {
      const validFiles = files.filter(file => {
        if (file.size < MAX_FILE_SIZE) return true;
        this.$q.notify(`File '${file.name}' is ignored (> 1.5 GB)`);
        return false;
      });
      this.addFiles(validFiles);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import "~variables"

.drop-zone
  width 100%
  height 100%
  cursor pointer
  color $tertiary
  border 3px dashed $neutral
  border-radius 20px
</style>

<template>
  <div class="row flex-center">
    <div
      class="drop-zone flex flex-center"
      @click="$refs.uploader.click()"
      @dragover.stop.prevent
      @drop.stop.prevent="onFilesDrop">
      <div class="text-neutral text-center q-pa-md">
        <q-icon class="q-pb-md" name="add box" size="48px" />
        <div>Drop files here or click to select</div>
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

export default {
  name: 'file-picker',
  methods: {
    ...mapFileHasherActions(['addFiles']),
    onFilesSelect() {
      const files = Array.from(this.$refs.uploader.files || []);
      this.$refs.uploader.value = '';
      this.addFiles(files);
    },
    onFilesDrop(e) {
      const files = e.dataTransfer && e.dataTransfer.files || [];
      this.addFiles(files);
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

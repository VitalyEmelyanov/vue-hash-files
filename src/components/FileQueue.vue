<template>
  <div class="list-holder scroll">
    <q-list v-if="fileQueue.length" no-border>
      <q-item v-for="({file, sha256}, i) in fileQueue" :key="i">

        <q-item-side icon="insert drive file" inverted color="secondary" />

        <q-item-main>
          <q-item-tile label>{{file.name}}</q-item-tile>
          <q-item-tile sublabel>{{file.size | fileSize}}</q-item-tile>
          <q-item-tile sublabel>Type: {{file.name | fileType}}</q-item-tile>
          <q-item-tile sublabel>Time spent: {{sha256.timeSpent.toFixed(2)}}s</q-item-tile>
          <q-item-tile v-if="sha256.completed" sublabel>SHA256: {{sha256.hash}}</q-item-tile>
          <q-item-tile v-else sublabel>
            <q-progress :percentage="sha256.progress" />
          </q-item-tile>
        </q-item-main>

        <q-item-side right>
          <q-icon v-if="sha256.completed" name="check" color="positive" />
          <span v-else>{{sha256.progress.toFixed(2)}}%</span>
        </q-item-side>

      </q-item>
    </q-list>
    <div v-else class="absolute-center">No files selected</div>
  </div>
</template>

<script>
import {createNamespacedHelpers} from 'vuex';

const {
  mapGetters: mapFileHasherGetters
} = createNamespacedHelpers('fileHasher');

export default {
  name: 'file-queue',
  computed: mapFileHasherGetters(['fileQueue'])
};
</script>

<style lang="stylus" scoped>
@import "~variables"

.list-holder
  position relative
</style>

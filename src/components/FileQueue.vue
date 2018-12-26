<template>
  <div class="scroll">
    <q-list no-border>
      <q-item v-for="(file, i) in files" :key="i">
        <q-item-side icon="assignment" inverted color="grey-6" />
        <q-item-main>
          <q-item-tile label>{{file.name}}</q-item-tile>
          <q-item-tile sublabel>{{humanStorageSize(file.size)}}</q-item-tile>
          <q-item-tile sublabel>{{file.type}}</q-item-tile>
        </q-item-main>
        <q-item-side right icon="info" />
      </q-item>
      <q-item>
        <q-item-side icon="place" inverted color="grey-6" />
        <q-item-main>
          <q-item-tile label>Places to visit</q-item-tile>
          <q-item-tile sublabel>February 22, 2016</q-item-tile>
        </q-item-main>
        <q-item-side right icon="info" color="amber" />
      </q-item>
      <q-item>
        <q-item-side icon="library_music" inverted color="grey-6" />
        <q-item-main>
          <q-item-tile label>My favorite song</q-item-tile>
          <q-item-tile sublabel>Singing it all day</q-item-tile>
        </q-item-main>
        <q-item-side right icon="info" />
      </q-item>
      <q-item>
        <q-item-side icon="videogame_asset" inverted color="grey-6" />
        <q-item-main>
          <q-item-tile label>Quasar Game</q-item-tile>
          <q-item-tile sublabel>Have fun while building apps</q-item-tile>
        </q-item-main>
        <q-item-side right icon="info" />
      </q-item>
    </q-list>
  </div>
</template>

<script>
import {format} from 'quasar';
import {createNamespacedHelpers} from 'vuex';

const {
  mapGetters: mapFileHasherGetters
} = createNamespacedHelpers('fileHasher');

const {humanStorageSize} = format;

export default {
  name: 'file-queue',
  computed: mapFileHasherGetters(['files']),
  methods: {
    humanStorageSize
  }
};
</script>

<style scoped>

</style>

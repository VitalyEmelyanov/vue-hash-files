const ADD_FILES = 'ADD_FILES';

export default {
  namespaced: true,
  state: {
    files: []
  },
  getters: {
    files: state => state.files
  },
  mutations: {
    [ADD_FILES]: (state, files) => state.files.unshift(...files)
  },
  actions: {
    addFiles({commit}, files) {
      commit(ADD_FILES, files);
    }
  }
};

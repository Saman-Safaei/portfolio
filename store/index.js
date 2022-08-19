export const state = () => ({
  theme: 'light',
});

export const mutations = {
  setTheme(state) {
    state.theme = this.$cookies.get('theme') || state.theme;
  },
  toggleDark(state) {
    state.theme = 'dark';
    this.$cookies.set('theme', 'dark');
  },
  toggleLight(state) {
    state.theme = 'light';
    this.$cookies.set('theme', 'light');
  },
};

export const getters = {
  theme(state) {
    return state.theme;
  },
};

export const actions = {
  setThemeLight(context) {
    context.commit('toggleLight');
    context.commit('setTheme');
  },
  setThemeDark(context) {
    context.commit('toggleDark');
    context.commit('setTheme');
  },
  nuxtServerInit(context) {
    context.commit('setTheme');
  },
};

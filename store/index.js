export const state = () => ({
  theme: 'light',
  showNavMenu: false,
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
  toggleNavMenu(state) {
    state.showNavMenu = !state.showNavMenu;
  },
};

export const getters = {
  theme(state) {
    return state.theme;
  },
  showNavMenu(state) {
    return state.showNavMenu;
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

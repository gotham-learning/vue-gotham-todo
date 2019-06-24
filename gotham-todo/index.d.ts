declare module '*.vue' {
  import Vue from 'vue' // eslint-disable-line import/no-duplicates
  const _default: Vue.ComponentOptions<Vue>
  export default _default
}

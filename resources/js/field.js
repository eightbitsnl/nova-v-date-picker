Nova.booting((Vue, router, store) => {
  Vue.component('index-nova-v-date-picker', require('./components/IndexField'))
  Vue.component('detail-nova-v-date-picker', require('./components/DetailField'))
  Vue.component('form-nova-v-date-picker', require('./components/FormField'))
})

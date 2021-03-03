<template>
  <default-field :field="field" :errors="errors" :show-help-text="showHelpText">
    <template slot="field">
      <v-date-picker></v-date-picker>
      <!-- <input
        :id="field.name"
        type="text"
        class="w-full form-control form-input form-input-bordered"
        :class="errorClasses"
        :placeholder="field.name"
        v-model="value"
      /> -->
    </template>
  </default-field>
</template>

<script>
import { FormField, HandlesValidationErrors } from 'laravel-nova'
import DatePicker from 'v-calendar/lib/components/date-picker.umd'

export default {
  mixins: [FormField, HandlesValidationErrors],

  components: {
    DatePicker
  },

  props: ['resourceName', 'resourceId', 'field'],

  methods: {
    /*
     * Set the initial, internal value for the field.
     */
    setInitialValue() {
      this.value = this.field.value || ''
    },

    /**
     * Fill the given FormData object with the field's internal value.
     */
    fill(formData) {
      formData.append(this.field.attribute, this.value || '')
    },
  },
}
</script>

<template>
  <b-button
    v-if="visible"
    :id="id"
    :block="block"
    :disabled="disabled"
    :class="{'placeholder-label' : label === false}"
    :variant="(outline ? 'outline-' : '') + color"
    :pill="pill"
    :size="size"
    :target="target"
    :type="type"
    :title="title"
    @click="$emit('click', $event)"
  >
    <slot />
  </b-button>
</template>

<script>
import { BButton } from 'bootstrap-vue-next';

export default {
  name: 'ButtonGlobal',
  components: { BButton },
  props: {
    id: { type: String, default: null },
    block: { type: Boolean, default: false },
    color: { type: String, default: 'primary' },
    disabled: { type: Boolean, default: false },
    label: { type: [Boolean, String], default: '' },
    large: { type: Boolean, default: false },
    outline: { type: Boolean, default: false },
    pill: { type: Boolean, default: false },
    small: { type: Boolean, default: true },
    target: { type: String, default: '_self' },
    title: { type: String, default: 'Clique' },
    type: { type: String, default: 'button' },
  },
  emits: ['click'],
  data: () => ({
    visible: true,
  }),
  computed: {
    size() {
      return this.small ? 'sm' : (this.large ? 'lg' : null);
    },
  },
}
</script>
<template>
  <v-card :style="styles" v-bind="$attrs">
      <v-card
          class=""
          v-if="!$slots.offset"
          :color="color"
          :elevation="elevation"
          dark
          min-height="80"

      >
        <v-card-title>{{title}}</v-card-title>
        <v-card-subtitle>{{text}}</v-card-subtitle>
      </v-card>
      <slot v-else name="offset" />
      <v-card-text>
        <slot />
      </v-card-text>
    <v-divider v-if="$slots.actions" class="mx-3" />
    <v-card-actions v-if="$slots.actions">
      <slot name="actions" />
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "MaterialCard",

  inheritAttrs: false,

  props: {
    color: {
      type: String,
      default: "secondary",
    },
    elevation: {
      type: [Number, String],
      default: 0,
    },
    inline: {
      type: Boolean,
      default: false,
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
    offset: {
      type: [Number, String],
      default: 24,
    },
    title: {
      type: String,
      default: undefined,
    },
    text: {
      type: String,
      default: undefined,
    },
  },

  computed: {
    hasOffset() {
      return (
          this.$slots.header || this.$slots.offset || this.title || this.text
      );
    },
    styles() {
      if (!this.hasOffset) return null;

      return {
        marginBottom: `${this.offset}px`,
        marginTop: `${this.offset * 2}px`,
      };
    },
  },
};
</script>

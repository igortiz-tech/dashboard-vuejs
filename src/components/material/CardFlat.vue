<template>
  <v-card  width="100%" elevation="0">
        <v-card-title style="height: 70px;">
            <v-layout full-height>
              <v-app-bar
                  density="comfortable"
                  flat
              >
                <v-app-bar-title class="text-h6">
                  {{title}}
                </v-app-bar-title>
                <template v-slot:append>
                  <v-icon icon="mdi-magnify"></v-icon>
<!--                  <v-icon icon="mdi-dots-vertical"></v-icon>-->
                </template>
              </v-app-bar>
            </v-layout>
        </v-card-title>


        <v-card-text>
          <slot />
        </v-card-text>
      </v-card>
</template>

<script>
export default {
  name: "MaterialCardFlat",

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

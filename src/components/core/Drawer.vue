<template>
    <v-navigation-drawer
            id="app-drawer"
            v-model="inputValue"
            :src="image"
            app
            color="grey darken-2"
            mobile-breakpoint="991"
            dark
            persistent
            width="260"
            class="elevation-1"
            :mini-variant.sync="mini"
    >
        <template v-slot:img="attrs">
            <v-img v-bind="attrs" gradient="to bottom, rgba(11, 77, 102, 0.9), rgb(11, 77, 102)"/>
        </template>

        <v-list nav>
            <v-list-item>
              <v-list-item-avatar tile color="transparent" size="60">
                <v-img :src="logo" aspect-ratio="1.6" height="48" contain />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="subtitle-2">Reggio</v-list-item-title>
              </v-list-item-content>
                <v-btn icon v-if="!responsive" @click.stop="mini = !mini">
                    <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
            </v-list-item>

            <div v-for="(link, i) in links" :key="i" v-show="paiTemAcesso(link, hasAccess)">
                <v-list-group
                        v-if="link.subs"
                        :prepend-icon="link.icon"
                        no-action
                        dark
                        active-class="grey--text text--lighten-2"
                >
                    <template v-slot:activator>
                        <v-list-item-title>{{link.text}}</v-list-item-title>
                    </template>

                    <v-list-item v-for="(sub, i) in link.subs" :key="i" link :to="sub.to" v-show="hasAccess(sub.to)">
                        <v-list-item-title v-text="sub.text"></v-list-item-title>
                        <v-list-item-icon>
                            <v-icon v-text="sub.icon"></v-icon>
                        </v-list-item-icon>
                    </v-list-item>
                </v-list-group>

                <v-list-item v-else :to="link.to" >
                    <v-list-item-icon>
                        <v-icon>{{ link.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-title>{{ link.text }}</v-list-item-title>
                </v-list-item>
            </div>
        </v-list>

        <template v-slot:append>
            <v-container fluid>
                <v-row>
                    <v-col :cols="mini === true ? 12 : 6" class="text-right">
                        <a href="https://agetic.ufms.br/" target="_blank" rel="noopener noreferrer">
                            <v-img :src="logoAgetic" height="48" contain/>
                        </a>
                    </v-col>
                    <v-col :cols="mini === true ? 12 : 6">
                        <a href="https://ufms.br/" target="_blank" rel="noopener noreferrer">
                            <v-img :src="logoUFMS" height="48" contain/>
                        </a>
                    </v-col>
                </v-row>
            </v-container>
        </template>
    </v-navigation-drawer>
</template>

<script>
    // Utilities
    import {mapMutations, mapState} from "vuex";

    export default {
        props: {
            image: {
                type: String
            },
            links: {
                type: Array
            },
            logo: {
                type: String
            },
            opened: {
                type: Boolean,
                default: false
            }
        },
        data: () => ({
            logoUFMS: require("../../assets/logo-ufms.png"),
            logoAgetic: require("../../assets/logo-agetic-small.png"),
            mini: true
        }),
        computed: {
            ...mapState(["color"]),
            inputValue: {
                get() {
                    return this.$store.state.drawer;
                },
                set(val) {
                    this.setDrawer(val);
                }
            },
            responsive() {
                return this.$store.state.responsive;
            }
        },
        mounted() {
            this.mini = !this.responsive;
        },
        methods: {
            ...mapMutations(["setDrawer"]),

            paiTemAcesso(link, hasAccess) {
                if (link.subs) {
                    let temAcesso = false;
                    link.subs.forEach(v => {
                        temAcesso = temAcesso || hasAccess(v.to);
                    });
                    return temAcesso;
                } else {
                    return true;
                }
            }
        }
    };
</script>
<style scoped>
    .v-list-group__items .v-list-item {
        border-left: 2px solid rgb(175, 175, 175) !important;
        padding-left: 10px !important;
        margin-left: 11px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
    }

    .v-list-group__items .v-list-item:hover {
        border-left: 5px solid rgb(76, 174, 255) !important;
    }

    .v-list-item__icon:first-child {
        margin-right: 20px !important;
        margin-top: 12px !important;
    }

    .v-list-item__icon {
        margin: 6px 0 !important;
    }
</style>

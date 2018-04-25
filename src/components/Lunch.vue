<template>
    <v-flex d-flex xs12>
        <v-card hover light @click.native="onClick">
            <v-container fluid grid-list-lg>
                <v-layout row>
                    <v-flex xs2>
                        <v-card-media
                            :src="imgSrc"
                            height="50px"
                            contain
                        ></v-card-media>
                    </v-flex>
                    <v-flex xs7>
                        <div>
                            <div class="headline">{{menu.title}}</div>
                            <div>{{menu.loc}}</div>
                        </div>
                    </v-flex>
                    <v-flex xs3>
                        <div class="price-tag">
                            <div>{{menu.price}} EUR</div>
                        </div>
                    </v-flex>
                </v-layout>
                <div v-show="show">
                    <v-layout row v-if="showAllergy">
                        <v-flex xs12>
                            <div class="subheading center-text" >
                                Enthält Allergene
                            </div>
                        </v-flex>
                    </v-layout>
                    <v-layout v-if="showAllergy" v-for="allergy in menu.allergies" :key="allergy.descr" row>
                        <v-flex xs2>
                            <div class="body-2 center-text">
                                {{ allergy.type }}
                            </div>
                        </v-flex>
                        <v-flex xs10>
                            <div class="body-1">
                                {{ allergy.descr }}
                            </div>
                        </v-flex>
                    </v-layout>
                    <v-layout v-if="showAdditive" row>
                        <v-flex xs12>
                            <div class="subheading center-text" >
                                Enthält Zusätze
                            </div>
                        </v-flex>
                    </v-layout>
                    <v-layout v-if="showAdditive" v-for="additive in menu.additives" :key="additive.descr" row>
                        <v-flex xs2>
                            <div class="body-2 center-text">
                                {{ additive.type }}
                            </div>
                        </v-flex>
                        <v-flex xs10>
                            <div class="body-1">
                                {{ additive.descr }}
                            </div>
                        </v-flex>
                    </v-layout>
                </div>
            </v-container>
        </v-card>
    </v-flex>
</template>

<script>
export default {
    name: 'Lunch',
    props: ['menu', 'closeOther'],
    computed: {
        imgSrc () {
            return '/static/lunch-icons/' + this.menu.img + '.png'
        },
        showAdditive: function () {
            return (this.menu.additives.length > 0)
        },
        showAllergy: function () {
            return (this.menu.allergies.length > 0)
        }
    },
    data: () => ({
        show: false
    }),
    methods: {
        onClick () {
            this.show = !this.show
            this.closeOther(this)
        }
    }
}
</script>

<style scoped>
.headline {
    overflow-wrap: break-word;
    -moz-hyphens: auto;
    hyphens: auto;
}

.price-tag {
    float: right;
}

.center-text {
    text-align: center
}
</style>

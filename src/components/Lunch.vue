<template>
    <v-flex d-flex xs12>
        <v-card hover light>
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
            </v-container>
        </v-card>
    </v-flex>
</template>

<script>
export default {
    name: 'Lunch',
    props: ['menu'],
    computed: {
        imgSrc () {
            return '/static/lunch-icons/' + this.menu.img + '.png'
        }
    }
}
</script>

<style scoped>
.price-tag {
    float: right;
}
</style>

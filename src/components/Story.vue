<template lang="html">
  <div class="story" v-if="story">
    <h1 class="story__entry" v-html="story[0].entry"></h1>
    <p class="story__contributor">{{ story[0].username }} <a :href="'https://twitter.com/' + story[0].contributor">@{{ story[0].contributor }}</a></p>
  </div>
</template>

<script>
    import axios from 'axios';

    export default {
        props: ['id'],
        data() {
            return {
            story: null,
            endpoint: 'http://thaumatrope.greententacles.com/api/stories/',
            }
        },
        methods: {
            getStory(id) {
                axios(this.endpoint + id)
                .then(response => {
                    this.story = response.data
                    console.log(this.story);
                })
                .catch( error => {
                    console.log(error)
                })
            }
        },
        
        created() {
            this.getStory(this.id);
        },

        watch: {
            '$route'() {
                this.getStory(this.id);
            }
        }
    }

</script>
<template>
  <div id="app">
    <header>
      <h2>Thaumatrope Stories</h2>
    </header>
    <main>
    <aside class="sidebar">
      <router-link 
        active-class="is-active"
        class="link"
        to="/">Home</router-link>
      <router-link
        v-for="story in stories"
        :key="story.id"
        active-class="is-active"
        class="link"
        :to="{ name: 'story', params: { id: story.id } }">
        {{story.username}}
      </router-link>
    </aside>
    <article class="content">
      <router-view></router-view>
    </article>
  </main>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        stories: null,
        endpoint: 'https://thaumatrope.greententacles.com/api/stories/',
      }
    },

    created() {
      this.getAllStories();
    },

    methods: {
      getAllStories() {
        axios.get(this.endpoint)
          .then(response => {
            this.stories = response.data;
          })
          .catch(error => {
            console.log('-----error-------');
            console.log(error);
          })
      }
    }
  }
</script>

<style>
#app {
  color: #111;
  font-family: 'Playfair Display', Helvetica, Arial, sans-serif;
  margin: 0 auto;
  max-width: 1170px;
}
h1, h2 {
  font-weight: normal;
}
h1 {
  font-size: 2.66rem;
}
a {
  color: #111;
}
.link {
  background-color: #ccc;
  display: block;
  margin-bottom: .25rem;
  overflow: hidden;
  padding: .5rem 1rem;
  text-decoration: none;
  text-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 1s cubic-bezier(.25,.8,.25,1);
  white-space: nowrap;
}
.link:hover {
  text-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
.is-active {
  background-color: #900;
  color: #fff;
  text-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
header {
  color: #fff;
}
main {
  display: flex;
}
.content {
  background-color: #ddc;
  box-shadow: inset 0px 0px 100px 0px rgba(112, 78, 3, 1), 6px 24px 100px 0px rgba(51, 0, 0,3);;
  box-sizing: border-box;
  color: #333;
  padding: 2rem 13% 1rem;
  text-align: center;
  text-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 3s cubic-bezier(.25,.8,.25,1);
  width: 75%;
}
.content:hover {
  color: #000;
  text-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
.sidebar {
  transition: all 5s cubic-bezier(.25,.8,.25,1);
  width: 25%;
}
</style>

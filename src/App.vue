<template>
  <div id="app">
    <header>
    <h1>KIKK COMPASS</h1>
    <p class="sous-titre">RIDE FREELY NOT LOSTLY </p>
    </header>
      <div>
        <div v-for="(category, categoryName) in eventData" :key="categoryName">
          <h2>{{ categoryName }}</h2>
          <a  v-for="event in category" :key="event.name" :href="event.link" target="_blank">{{ event.name }}</a>
              <!--p>{{ event.informations }}</p-->
        </div>
        <h2> </h2>
        <h2> </h2>
        <span class="program"> <a href="https://www.kikk.be/schedule/">(see the schedule)</a></span>
    </div>
    <footer>
      <p class="sous-titre">A NON-MAP ON</p>
      <h1>DERIVE</h1>
      <p class="sous-titre">MADE BY HÉRÉTIQUE </p>
    </footer>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      eventData: null
    };
  },
  created() {
    this.fetchEventData();
  },
  methods: {
    fetchEventData() {
      axios
        .get("/events.json")
        .then(response => {
          this.eventData = response.data;
        })
        .catch(error => {
          console.error("Error fetching the event data:", error);
        });
    }
  }
};
</script>

<style scoped>
</style>

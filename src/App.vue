<template>
  <div id="app">
    <h1>Dérivez parmi les lieux du KIKK Festival</h1>
    <div v-for="(category, categoryName) in eventData" :key="categoryName">
      <h2>{{ categoryName }}</h2>
      <ul>
        <li v-for="event in category" :key="event.name">
          <a :href="event.link" target="_blank">{{ event.name }}</a>
          <!--p>{{ event.informations }}</p-->
        </li>
      </ul>
    </div>
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
h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

h2 {
  font-size: 20px;
  margin-top: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

a {
  font-weight: bold;
  color: #3498db;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

p {
  font-size: 14px;
  color: #7f8c8d;
}
</style>

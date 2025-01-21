<template>
  <div id="main">
    <header>
      <h1 class="header-top">Law & Order</h1>
      <h2 class="header-bottom">Broadway Edition</h2>
    </header>
    <div class="hero">
      <p>
        In the Broadway theater community, Law & Order has long been known for casting Broadway actors over the years. This project was created to show visually how Broadway actors have been involved in the Law & Order franchise, tracing data from the very first episode in 1990 to the present.
      </p>
      <p>This project is still a work in progress. As of Jan 2025, data has been entered for the years 1990 - 1992.</p>
      <p class="portfolio-link">
        Created by
        <a href="https://musicalwebdev.com" target="_blank">Brittany Walker</a>.
        View the code
        <a href="https://github.com/brittanyrw/law-and-order-broadway-edition" target="_blank"
          >on GitHub.</a
        >
      </p>
    </div>

    <TotalStats />

    <TopActors />

    <BarChart />

    <CrimeShowStats />

    <ShowSpecificStats />

    <CharacterTypeStats />

    <RepeatCharacters />

    <MultipleActors />

    <TimelineChart />
  </div>
</template>

<script setup>
import { useActorStats } from "./utils/useActorStats";
import TotalStats from "./components/stats/TotalStats.vue";
import TopActors from "./components/stats/TopActors.vue";
import CrimeShowStats from "./components/stats/CrimeShowStats.vue";
import ShowSpecificStats from "./components/stats/ShowSpecificStats.vue";
import RepeatCharacters from "./components/stats/RepeatCharacters.vue";
import MultipleActors from "./components/stats/MultipleActors.vue";
import CharacterTypeStats from "./components/stats/CharacterTypeStats.vue";
import TimelineChart from "./components/stats/TimelineChart.vue";

import BarChart from "./components/stats/BarChart.vue";

const stats = useActorStats();
</script>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px auto 20px auto;
}

#main {
  background-color: #f8f8f8;
  border: 7px solid #333333;
  box-shadow: 10px 10px 0 #333333;
  border-radius: 7px 7px 7px 0;
  max-width: 1200px;
  margin: 50px auto;
}

.header-top,
.header-bottom {
  font-weight: 100;
  margin: 0;
  text-transform: uppercase;
}

.header-top {
  border-top: 7px solid;
  border-bottom: 7px solid;
  font-size: 80px;
  max-width: 700px;
}

.header-bottom {
  font-size: 56px;
}

.hero {
  padding: 1em;
  border-bottom: 3px solid var(--black);
}
</style>

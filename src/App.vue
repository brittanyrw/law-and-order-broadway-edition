<template>
  <div id="main">
    <header>
      <h1 class="header-top">Law & Order</h1>
      <h2 class="header-bottom">Broadway Edition</h2>
    </header>
    <div class="hero">
      <div class="quote">
        <img :src="getImageUrl('quote')" alt="Quotation icon" />
        <p>
          In the Law & Order franchise, the people are entertained by two
          separate yet equally important groups: the Broadway actors who bring
          their talents to the screen and the showrunners who cast them. These
          are their stories.
        </p>
      </div>
      <hr />
      <p>
        In the Broadway theater community, Law & Order has long been known for
        casting many Broadway actors over the years. This project was created to
        show visually how Broadway actors have been involved in the Law & Order
        franchise, tracing data from the very first episode in 1990 to the
        present.
      </p>
      <p class="note">
        Note: The data is limited to the actors of opening night casts for each
        Broadway show that has opened since September 13, 1990 (first episode
        aired of Law & Order). This project is still a work in progress. As of
        Jan 2025, data has been entered for Broadway shows that opened the years
        1990 - 1992.
      </p>
      <p class="portfolio-link">
        Created by
        <a href="https://musicalwebdev.com" target="_blank">Brittany Walker</a>.
        View the code
        <a
          href="https://github.com/brittanyrw/law-and-order-broadway-edition"
          target="_blank"
          >on GitHub.</a
        >
      </p>
      <nav>
        <ul>
          <li>Skip To:</li>
          <li><a href="#stats">Overall Stats</a></li>
          <li><a href="#top">Top 10 Actors</a></li>
          <li><a href="#timeline">Timeline</a></li>
          <li><a href="#top-by-show">Top Actors by Show</a></li>
          <li><a href="#repeat">Repeat Characters</a></li>
          <li><a href="#types">Character Types</a></li>
          <li><a href="#multi">Episodes with Multiple Actors</a></li>
          <li><a href="#other-crime">Other Crime Shows</a></li>
        </ul>
      </nav>
    </div>

    <TotalStats />

    <TopActors />

    <TimelineChart />

    <ShowSpecificStats />

    <RepeatCharacters />

    <CharacterTypeStats />

    <MultipleActors />

    <BarChart />

    <CrimeShowStats />
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

const imageMap = {
  quote: new URL("@/assets/quote-right-solid.svg", import.meta.url).href,
};

const getImageUrl = (rating) => {
  return imageMap[rating] || "";
};

const stats = useActorStats();
</script>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding-bottom: 0;
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
  font-size: 50px;
  max-width: 700px;
}

.header-bottom {
  font-size: 30px;
}

.hero {
  padding: 1em;
  border-bottom: 3px solid var(--black);
}

.quote {
  display: flex;
  align-items: flex-start;
  max-width: 900px;
  margin: auto;
}

.quote img {
  display: none;
}

.quote p {
  font-style: italic;
}

hr {
  border: 3px solid var(--black);
}

nav a {
  padding: 5px 10px;
  background-color: var(--black);
  color: var(--white);
  text-decoration: none;
  border: 3px solid var(--black);
  margin: 10px;
  display: inline-block;
  font-size: 16px;
}

nav ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
}

nav ul li:first-child {
  width: 100%;
}

.note {
  font-size: 16px;
}

@media screen and (min-width: 450px) {
  .header-top {
    font-size: 80px;
  }
  header {
    margin: 50px auto 0 auto;
  }
  .header-bottom {
    font-size: 56px;
  }

  .quote img {
    height: 60px;
    display: block;
    margin-right: 20px;
  }
  .quote p {
    font-size: 25px;
  }
  nav a {
    font-size: 21px;
  }
}
</style>

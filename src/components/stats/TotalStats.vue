<template>
  <div class="stat-card top-stats" id="stats">
    <h2>Overall Statistics</h2>
    <p class="subheader">These stats are across the entire Law & Order franchise.</p>
    <div v-if="loading" class="loading">Loading statistics!</div>
    <div v-else-if="error" class="error">
      {{ error }}
    </div>
    <div v-else class="stats-grid">
      <div class="stat-item">
        <p>Total Broadway Actors</p>
        <div class="stat-number">{{ totalBroadwayActors }}</div>
      </div>
      <div class="stat-item">
        <p>Broadway Actors in Law & Order</p>
        <div class="stat-number">{{ totalActors }}</div>
      </div>
      <div class="stat-item">
        <p>Law & Order Episodes with Broadway Actors</p>
        <div class="stat-number">{{ totalEpisodes }}</div>
      </div>
      <div class="stat-item">
        <p>Total Characters Played</p>
        <div class="stat-number">{{ totalCharacters }}</div>
      </div>
      <div class="stat-item">
        <p>Average Episodes per Actor</p>
        <div class="stat-number">{{ averageEpisodesPerActor }}</div>
      </div>
      <div class="stat-item">
        <p>Episodes with Multiple Actors</p>
        <div class="stat-number">{{ multipleActorEpisodesCount }}</div>
      </div>
      <div class="stat-item">
        <p>Peak Season</p>
        <div class="stat-number">{{ peakSeason.year }}</div>
        <p v-if="peakSeason" class="stat-subtitle">
          {{ peakSeason.appearances }} appearances
        </p>
      </div>
      <div class="stat-item longest-running">
        <p>Longest Running Character</p>
        <div class="longest-running-detail-container">
          <div class="stat-number">
            {{ longestRunningCharacter.episodes || 0 }}
          </div>
          <div v-if="longestRunningCharacter">
            <p class="stat-subtitle">{{ longestRunningCharacter.character }} played by {{ longestRunningCharacter.actor }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useActorStats } from "@/utils/useActorStats";

const {
  totalActors,
  totalBroadwayActors,
  totalCharacters,
  peakSeason,
  totalEpisodes,
  multipleActorEpisodesCount,
  longestRunningCharacter,
  averageEpisodesPerActor,
  loading,
  error,
} = useActorStats();
</script>

<style scoped>
.loading {
  text-align: center;
  padding: 1rem;
  color: #666;
}

.error {
  text-align: center;
  padding: 1rem;
  color: var(--red);
}

.stat-item {
  background-color: var(--white);
  padding: 15px;
  text-align: center;
  margin: 10px;
  border: 2px solid var(--white);
  -webkit-box-shadow: 5px 5px 0 var(--white);
  box-shadow: 9px 9px 0 var(--white);
  border-radius: 7px;
  color: var(--black);
  outline: 3px solid var(--black);
  flex-grow: 1;
  min-width: 200px;
}

.stat-number {
  font-size: 35px;
  margin: 0;
  font-weight: bold;
}

.stat-subtitle {
  margin: 5px 0 0 0;
  font-size: 14px;
  color: var(--black);
}

.stat-item p {
  margin: 0;
  font-weight: 600;
}

h2 {
  color: var(--white);
  margin-bottom: 20px;
}

@media screen and (min-width: 922px) {
  .stat-number {
    font-size: 40px;
  }
}

.top-stats {
  background-color: var(--black);
  border-radius: 0;
  padding: 20px 20px 60px 20px;
}

.stats-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
}

.subheader {
  color: var(--white);
}
</style>

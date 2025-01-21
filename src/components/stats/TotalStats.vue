<template>
  <div class="stat-card top-stats">
    <h2>Overall Statistics</h2>
    <div v-if="loading" class="loading">
      Loading statistics!
    </div>
    <div v-else-if="error" class="error">
      {{ error }}
    </div>
    <div v-else class="stats-grid">
      <div class="stat-item">
        <p>Broadway Actors</p>
        <div class="stat-number">{{ totalBroadwayActors || 'N/A' }}</div>
      </div>
      <div class="stat-item">
        <p>Broadway Shows</p>
        <div class="stat-number">125</div>
      </div>
      <div class="stat-item">
        <p>Broadway Actors in Law & Order</p>
        <div class="stat-number">{{ totalActors }}</div>
      </div>
      <div class="stat-item">
        <p>Law & Order Episodes</p>
        <div class="stat-number">{{ totalEpisodes }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useActorStats } from '@/utils/useActorStats'

const { totalActors, totalEpisodes, totalBroadwayActors, loading, error } = useActorStats()
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
}

.stat-number {
  font-size: 35px;
  margin: 0;
}

.stat-item p {
  margin: 0;
}

h2 {
  color: var(--white);

}

@media screen and (min-width: 922px) {
    .stat-number {
        font-size: 40px;
    }
}

.top-stats {
  background-color: var(--black);
  border-radius: 0;
}

.stats-grid {
  display: flex;
}
</style>
<template>
  <div class="crime-show-stats">
    <div v-if="loading" class="loading">
      Loading crime show statistics...
    </div>
    <div v-else-if="error" class="error">
      {{ error }}
    </div>
    <div v-else class="stats-content">
      <!-- <div class="top-crime-shows stat-section">
        <h2>Top 10 Other Crime Shows</h2>
        <table>
          <thead>
            <tr>
              <th class="rank-column">Rank</th>
              <th>Show Name</th>
              <th class="number-column">Appearances</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(show, index) in topCrimeShows" 
                :key="show.show"
                :class="{ 'top-three': index < 3 }">
              <td class="rank">{{ index + 1 }}</td>
              <td class="show-name">{{ show.show }}</td>
              <td class="count">{{ show.count }}</td>
            </tr>
          </tbody>
        </table>
      </div> -->

      <div class="top-crime-show-actors">
        <h2>Actors Other Crime Show Appearances</h2>
        <div class="actors-list">
          <div 
            v-for="(actor, index) in topCrimeShowActors" 
            :key="actor.name"
            class="actor-item"
            :class="{ 'top-three': index < 3 }"
          >
            <div class="actor-rank">{{ index + 1 }}</div>
            <div class="actor-info">
              <span class="actor-name">{{ actor.name }}</span>
              <span class="actor-shows">{{ actor.shows }} {{ actor.shows === 1 ? 'show' : 'shows' }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  
</template>

<script setup>
import { useActorStats } from '@/utils/useActorStats'

const { topCrimeShows, topCrimeShowActors, loading, error } = useActorStats()
</script>

<style scoped>
.crime-show-stats {
  padding: 1rem;
}

.actors-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0.5rem;
}

.actor-item {
  display: flex;
  align-items: center;
  padding: 1rem;
  transition: background-color 0.2s;
}

.actor-rank {
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  margin-right: 1rem;
  border-radius: 50%;
  background-color: var(--white);
}

.top-three .actor-rank {
  color: var(--white);
}

.actors-list .top-three:first-child .actor-rank {
  background-color: var(--red);
}

.actors-list .top-three:nth-child(2) .actor-rank {
  background-color: var(--blue);
}

.actors-list .top-three:nth-child(3) .actor-rank {
  background-color: var(--black);
}

.actor-info {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.actor-name {
  font-weight: 500;
}

.actor-shows {
  font-weight: bold;
  color: var(--black);
}

.loading, .error {
  text-align: center;
  padding: 2rem;
  color: var(--darkgray);
}

.error {
  color: var(--error-color);
}

.actor-item:hover {
  background-color: var(--gray);
  border-radius: 4px;
}

@media (max-width: 600px) {
  .actor-info {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }
  
  .actor-shows {
    font-size: 0.9em;
  }
}

h2 {
  margin-bottom: 1rem;
  color: var(--black);
  font-size: 1.3rem;
}
</style>
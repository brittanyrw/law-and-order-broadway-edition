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

      <div class="top-crime-show-actors stat-section">
        <h2>Actors with Most Other Crime Show Appearances</h2>
        <table>
          <thead>
            <tr>
              <th class="rank-column">Rank</th>
              <th>Actor Name</th>
              <th class="number-column">Shows</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(actor, index) in topCrimeShowActors" 
                :key="actor.name"
                :class="{ 'top-three': index < 3 }">
              <td class="rank">{{ index + 1 }}</td>
              <td class="actor-name">{{ actor.name }}</td>
              <td class="count">{{ actor.shows }}</td>
            </tr>
          </tbody>
        </table>
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
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
}

.loading, .error {
  text-align: center;
  padding: 2rem;
  font-size: 1.1rem;
  color: var(--text-secondary);
}

.error {
  color: var(--error-color);
}

.stats-content {
  display: flex;
  gap: 2rem;
}

@media (max-width: 1200px) {
  .stats-content {
    flex-direction: column;
  }
}

.stat-section {
  flex: 1;
  background-color: var(--card-background);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  font-size: 1.3rem;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th {
  text-align: left;
  padding: 0.75rem 1rem;
  border-bottom: 2px solid var(--border-color);
  color: var(--text-secondary);
  font-weight: 600;
}

td {
  padding: 1rem;
  border-bottom: 1px solid var(--border-color);
}

tr:last-child td {
  border-bottom: none;
}

.rank-column {
  width: 80px;
}

.number-column {
  width: 120px;
  text-align: right;
}

.rank {
  font-weight: 600;
  color: var(--text-secondary);
}

.count {
  text-align: right;
  font-weight: 600;
  color: var(--blue);
}

.top-three {
  background-color: var(--highlight-background);
}

tr:hover {
  background-color: var(--hover-background);
}

.top-three:hover {
  background-color: var(--highlight-background-hover);
}

.show-name, .actor-name {
  font-weight: 500;
}

/* Animation for loading state */
@keyframes pulse {
  0% { opacity: 0.6; }
  50% { opacity: 1; }
  100% { opacity: 0.6; }
}

.loading {
  animation: pulse 1.5s infinite ease-in-out;
}
</style>
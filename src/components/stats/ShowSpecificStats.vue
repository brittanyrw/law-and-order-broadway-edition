<script setup>
import { useActorStats } from '@/utils/useActorStats'

const { showSpecificStats, loading, error } = useActorStats()
</script>

<template>
  <div class="show-specific-stats">
    <h2>Top Actors by Law & Order Show</h2>
    
    <div v-if="loading" class="loading">
      Loading show statistics!
    </div>
    
    <div v-else-if="error" class="error">
      {{ error }}
    </div>
    
    <div v-else class="shows-container">
      <div v-for="(actors, showName) in showSpecificStats?.showBreakdown || {}" 
           :key="showName" 
           class="show-section">
        <h3>{{ showName }}</h3>
        <table v-if="actors && actors.length > 0">
          <thead>
            <tr>
              <th class="rank-column">Rank</th>
              <th>Actor Name</th>
              <th class="episodes-column">Episodes</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(actor, index) in actors" 
                :key="actor.name"
                :class="{ 'top-three': index < 3 }">
              <td class="rank">{{ index + 1 }}</td>
              <td class="actor-name">{{ actor.name }}</td>
              <td class="episodes">{{ actor.episodes }}</td>
            </tr>
          </tbody>
        </table>
        <p v-else class="no-actors">No actors found for this show</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.show-specific-stats {
  padding: 1rem;
}

h2 {
  margin-bottom: 2rem;
  color: var(--text-primary);
  font-size: 1.5rem;
}

.shows-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.show-section {
  background-color: var(--card-background);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h3 {
  margin-bottom: 1rem;
  color: var(--text-primary);
  font-size: 1.2rem;
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
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--border-color);
}

tr:last-child td {
  border-bottom: none;
}

.rank-column {
  width: 80px;
}

.episodes-column {
  width: 100px;
  text-align: right;
}

.rank {
  font-weight: 600;
  color: var(--text-secondary);
}

.actor-name {
  font-weight: 500;
}

.episodes {
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

.no-actors {
  text-align: center;
  color: var(--text-secondary);
  padding: 2rem 0;
}

.loading {
  text-align: center;
  padding: 3rem;
  color: var(--text-secondary);
  font-size: 1.1rem;
  animation: pulse 1.5s infinite ease-in-out;
}

.error {
  text-align: center;
  padding: 3rem;
  color: var(--error-color);
  font-size: 1.1rem;
}

@keyframes pulse {
  0% { opacity: 0.6; }
  50% { opacity: 1; }
  100% { opacity: 0.6; }
}

@media (max-width: 480px) {
  .shows-container {
    grid-template-columns: 1fr;
  }
  
  .rank-column {
    width: 60px;
  }
  
  .episodes-column {
    width: 80px;
  }
  
  td, th {
    padding: 0.75rem 0.5rem;
  }
  
  .actor-name {
    font-size: 0.9rem;
  }
}
</style>
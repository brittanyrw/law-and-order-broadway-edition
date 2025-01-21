<template>
  <div class="repeat-characters">
    <h2>Actors with Repeated Characters</h2>
    
    <div v-if="loading" class="loading">
      Loading repeat character statistics!
    </div>
    
    <div v-else-if="error" class="error">
      {{ error }}
    </div>
    
    <div v-else class="actors-grid">
      <div v-for="actor in repeatCharacters" 
           :key="actor.name" 
           class="actor-section">
        <h3>{{ actor.name }}</h3>
        <p>Total Repeat Appearances: {{ actor.totalRepeats }}</p>
        
        <table>
          <thead>
            <tr>
              <th>Character</th>
              <th>Episodes</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="character in actor.characters" 
                :key="character.name">
              <td>{{ character.name }}</td>
              <td>{{ character.episodes }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useActorStats } from '@/utils/useActorStats'

const { repeatCharacters, loading, error } = useActorStats()
</script>

<style scoped>
.repeat-characters {
  padding: 1rem;
}

h2 {
  margin-bottom: 2rem;
  color: var(--text-primary);
  font-size: 1.75rem;
}

.actors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.actor-section {
  background-color: var(--background-light);
  border-radius: 8px;
  padding: 1.5rem;
}

h3 {
  margin: 0 0 0.5rem 0;
  color: var(--text-primary);
  font-size: 1.25rem;
}

p {
  margin: 0 0 1rem 0;
  color: var(--text-secondary);
}

table {
  width: 100%;
  border-collapse: collapse;
}

th {
  text-align: left;
  padding: 0.5rem;
  color: var(--text-secondary);
  border-bottom: 1px solid var(--border-color);
}

td {
  padding: 0.5rem;
  border-bottom: 1px solid var(--border-color-light);
}

tr:last-child td {
  border-bottom: none;
}

.loading, .error {
  text-align: center;
  padding: 2rem;
  color: var(--text-secondary);
}

.error {
  color: var(--error-color);
}
</style>
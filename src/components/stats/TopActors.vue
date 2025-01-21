<template>
  <div class="stat-card">
    <h2>Top 10 Law & Order Actors</h2>
    <p>Appearances across the entire Law & Order franchise.</p>
    <div v-if="loading" class="loading">
      Loading top actors!
    </div>
    <div v-else-if="error" class="error">
      {{ error }}
    </div>
    <div v-else class="actors-list">
      <div v-for="(actor, index) in topLawAndOrderActors" 
           :key="actor.name" 
           class="actor-item"
           :class="{ 'top-three': index < 3 }">
        <div class="actor-rank">{{ index + 1 }}</div>
        <div class="actor-info">
          <span class="actor-name">{{ actor.name }}</span>
          <span class="actor-episodes">{{ actor.episodes }} {{ actor.episodes === 1 ? 'episode' : 'episodes' }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useActorStats } from '@/utils/useActorStats'

const { topLawAndOrderActors, loading, error } = useActorStats()

</script>

<style scoped>
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
  background-color: var(--background-light);
}

.top-three .actor-rank {
  color: white;
  background-color: var(--blue);
}

.top-three .actor-rank {
  color: white;
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

.actor-episodes {
  font-weight: bold;
  color: var(--black);
}

.actor-item:last-child {
  border-bottom: none;
}

/* Loading and error states */
.loading, .error {
  text-align: center;
  padding: 2rem;
  color: var(--text-secondary);
}

.error {
  color: var(--error-color);
}

/* Hover effect */
.actor-item:hover {
  background-color: var(--gray);
  border-radius: 4px;
}

/* Responsive design */
@media (max-width: 600px) {
  .actor-info {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }
  
  .actor-episodes {
    font-size: 0.9em;
  }
}
</style>
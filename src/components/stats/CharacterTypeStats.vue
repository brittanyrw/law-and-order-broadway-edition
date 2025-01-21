<template>
  <div class="character-type-stats">
    <h2>Character Types Across Law & Order Shows</h2>
    
    <div v-if="loading" class="loading">
      Loading character statistics!
    </div>
    
    <div v-else-if="error" class="error">
      {{ error }}
    </div>
    
    <div v-else class="type-grid">
      <div 
        v-for="(typeData, typeName) in characterTypeStats" 
        :key="typeName" 
        class="type-card"
      >
        <img :src="getImageUrl(typeName)" :alt="`Icon for ${typeName}`"/>
        <h3>{{ typeName }}</h3>
        <div class="stats">
          <div class="stat">
            <span class="count">{{ typeData.totalAppearances }}</span>
            <!-- <span class="label">Appearances</span> -->
          </div>
          <!-- <div class="stat">
            <span class="count">{{ typeData.uniqueActorCount }}</span>
            <span class="label">Unique Actors</span>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useActorStats } from '@/utils/useActorStats'

const { characterTypeStats, loading, error } = useActorStats()

const imageMap = {
  Detective: new URL('@/assets/gavel-solid.svg', import.meta.url).href,
  Judge: new URL('@/assets/gavel-solid.svg', import.meta.url).href,
  "Defense Attorney": new URL('@/assets/gavel-solid.svg', import.meta.url).href
};

const getImageUrl = (rating) => {
  return imageMap[rating] || '';
};
</script>

<style scoped>
.character-type-stats {
  padding: 1rem;
}

h2 {
  margin-bottom: 2rem;
  color: var(--text-primary);
}

.type-grid {
  gap: 1rem;
  display: flex;
  flex-wrap: wrap;
}

.type-card {
    background-color: var(--white);
    padding: 15px;
    text-align: center;
    margin: 10px;
    border: 2px solid var(--white);
    -webkit-box-shadow: 5px 5px 0 var(--purple);
    box-shadow: 9px 9px 0 var(--white);
    border-radius: 7px;
    color: var(--black);
    outline: 3px solid var(--red);
    flex-grow: 1;
    display: flex
;
}

h3 {
  margin: 0 0 1rem 0;
  color: var(--text-primary);
  font-size: 1.1rem;
}

.stats {
  display: flex;
  justify-content: space-between;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.count {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--blue);
}

.label {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-top: 0.25rem;
}

.loading, .error {
  text-align: center;
  padding: 2rem;
  color: var(--text-secondary);
}

.error {
  color: var(--error-color);
}

.type-card img {
  height: 20px;
}

.character-type-stats {
  background: var(--red);
    border-radius: 8px;
    margin: 20px;
}
</style>
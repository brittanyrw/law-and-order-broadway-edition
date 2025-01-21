<template>
  <div class="multiple-actors" id="multi">
    <h2>Episodes with Multiple Broadway Actors</h2>
    
    <div v-if="loading" class="loading">
      Loading episodes!
    </div>
    
    <div v-else-if="error" class="error">
      {{ error }}
    </div>
    
    <div v-else-if="Object.keys(groupedEpisodes).length > 0" class="shows-container">
      <div 
        v-for="(episodes, showName) in groupedEpisodes" 
        :key="showName" 
        class="show-section"
      >
        <h3>{{ showName }}</h3>
        <div class="episodes-container">
          <div 
            v-for="episode in episodes" 
            :key="`${episode.show}-${episode.title}`" 
            class="episode-card"
          >
            <h4>{{ episode.title }} <span>{{ episode.actors.length }}</span></h4>
            <div class="episode-details">
              <p>S. {{ episode.seasonNumber }} | Ep. {{ episode.episodeNumber }} ({{ episode.airDate }})</p>
            </div>
            <div class="actors-list">
              <ul>
                <li 
                  v-for="actor in episode.actors" 
                  :key="actor.name"
                >
                  {{ actor.name }} <span class="character"> as {{ actor.character[0] }} </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p v-else class="no-episodes">
      No episodes found with multiple Broadway actors.
    </p>
  </div>
</template>

<script setup>
import { useActorStats } from '@/utils/useActorStats'
import { computed } from 'vue'

const { multipleActorEpisodes, loading, error } = useActorStats()

const groupedEpisodes = computed(() => {
  const grouped = {}
  
  if (!multipleActorEpisodes.value) return {}

  multipleActorEpisodes.value.forEach(episode => {
    if (!grouped[episode.show]) {
      grouped[episode.show] = []
    }
    grouped[episode.show].push(episode)
  })

  return grouped
})
</script>

<style scoped>

.episodes-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

p, h4 {
  margin: 5px 0;
}

h4 {
  display: flex;
  justify-content: space-between;
}

.character {
  font-size: 16px;
}

.multiple-actors {
  padding: 1em;
}

.episode-card {
    background-color: var(--white);
    padding: 15px;
    margin: 10px;
    border: 2px solid var(--white);
    -webkit-box-shadow: 5px 5px 0 var(--white);
    box-shadow: 9px 9px 0 var(--black);
    border-radius: 7px;
    color: var(--black);
    outline: 3px solid var(--black);
}

.episode-card:nth-child(1n) h4 {
  color: var(--blue);
}

.episode-card:nth-child(2n) h4 {
  color: var(--red);
}

.episode-card:nth-child(3n) h4 {
  color: var(--black);
}

.episode-card h4 span {
  width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    font-weight: 600;
    background: var(--black);
}

.episode-card:nth-child(1n) h4 span {
  background: var(--blue);
}

.episode-card:nth-child(2n) h4 span {
  background: var(--red);
}

.episode-card:nth-child(3n) h4 span {
  background: var(--black);
}
</style>

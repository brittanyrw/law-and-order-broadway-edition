<template>
  <div class="repeat-characters" id="repeat">
    <h2>Actors with Repeated Characters</h2>

    <div v-if="loading" class="loading">
      Loading repeat character statistics!
    </div>

    <div v-else-if="error" class="error">
      {{ error }}
    </div>

    <div v-else class="actors-grid">
      <div
        v-for="actor in repeatCharacters"
        :key="actor.name"
        class="actor-section"
      >
        <h3>
          {{ actor.name }} <span>{{ actor.totalRepeats }}</span>
        </h3>
        <!-- <p>Total Repeat Appearances: {{ actor.totalRepeats }}</p> -->
        <p v-for="character in actor.characters" :key="character.name" :class="[{ 'resize-name': character.name.length >= 28 }]">
          {{ character.name }} ({{ character.episodes }})
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useActorStats } from "@/utils/useActorStats";

const { repeatCharacters, loading, error } = useActorStats();
</script>

<style scoped>
.repeat-characters {
  padding: 1rem;
}

h2 {
  margin-bottom: 2rem;
  color: var(--black);
  font-size: 1.75rem;
}

.actors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.actor-section {
  padding: 1.5rem;
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

h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
}

.loading,
.error {
  text-align: center;
  padding: 2rem;
  color: var(--darkgray);
}

.error {
  color: var(--error-color);
}

.actor-section:nth-child(2n) h3 {
  color: var(--red);
}

.actor-section:nth-child(4n) h3 {
  color: var(--blue);
}

.actor-section h3 {
  display: flex;
  justify-content: space-between;
}

.actor-section p {
  margin: 0;
}

.resize-name {
  font-size: 16px;
}
</style>

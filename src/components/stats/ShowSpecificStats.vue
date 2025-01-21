<script setup>
import { useActorStats } from "@/utils/useActorStats";

const { showSpecificStats, loading, error } = useActorStats();
</script>

<template>
  <div class="show-specific-stats">
    <h2>Top Actors by Law & Order Show</h2>

    <div v-if="loading" class="loading">Loading show statistics!</div>

    <div v-else-if="error" class="error">
      {{ error }}
    </div>

    <div v-else class="shows-container">
      <div
        v-for="(actors, showName) in showSpecificStats?.showBreakdown || {}"
        :key="showName"
        class="show-section stat-card"
      >
        <div class="show-header">
          <h3>{{ showName }}</h3>
        </div>
        <div class="list" v-if="actors && actors.length > 0">
          <div class="list-header">
            <div class="actor-header">
              <div class="rank-column">Rank</div>
              <div class="name-column">Actor Name</div>
              <div class="episodes-column">Episodes</div>
            </div>
          </div>
          <div class="actor-info">
            <div
              class="actor-item"
              v-for="(actor, index) in actors"
              :key="actor.name"
            >
              <div class="rank">
                <span class="rank-circle" :class="`rank-${index + 1}`">{{
                  index + 1
                }}</span>
              </div>
              <div class="actor-name">{{ actor.name }}</div>
              <div class="episodes">{{ actor.episodes }}</div>
            </div>
          </div>
        </div>
        <p v-else class="no-actors">No actors found for this show</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

.show-specific-stats {
  padding: 1em;
}
.stat-card {
  background-color: var(--white);
    padding: 15px;
    margin: 10px;
    border: 2px solid var(--white);
    -webkit-box-shadow: 5px 5px 0 var(--white);
    box-shadow: 9px 9px 0 var(--black);
    border-radius: 7px;
    color: var(--black);
    outline: 3px solid var(--black);
    flex-grow: 1;
}

.show-header {
  margin-bottom: 24px;
}

.show-header h3 {
  font-size: 24px;
  font-weight: 600;
  margin: 0 0 4px 0;
}

.subtitle {
  color: #666;
  font-size: 14px;
  margin: 0;
}

.actor-header {
  display: grid;
  grid-template-columns: 80px 1fr 100px;
  padding: 12px 0;
  border-bottom: 1px solid var(--gray);
  color: var(--black);
  /* font-size: 14px; */
}

.actor-item {
  display: grid;
  grid-template-columns: 80px 1fr 100px;
  padding: 16px 0;
  border-bottom: 1px solid #eee;
  align-items: center;
}

.rank-circle {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--black);
  font-weight: 600;
}

.rank-1 {
  background-color: #8b2635;
  color: var(--white);
}
.rank-2 {
  background-color: #2b4380;
  color: var(--white);
}
.rank-3 {
  background-color: #333333;
  color: var(--white);
}

.episodes {
  text-align: right;
  padding-right: 16px;
  font-weight: 600;
  color: var(--black);
}

.actor-name {
  font-weight: 500;
}

.loading,
.error {
  text-align: center;
  padding: 20px;
}

.error {
  color: #ff0000;
}

.shows-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
}
</style>

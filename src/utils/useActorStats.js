import { ref, onMounted, computed } from 'vue'
import api from '../services/api'

export function useActorStats() {
  const totalActors = ref(0)
  const totalEpisodes = ref(0)
  const topLawAndOrderActors = ref([])
  const topCrimeShows = ref([])
  const topCrimeShowActors = ref([])
  const totalBroadwayActors = ref(0)
  const characterTypeStats = ref({})
  const repeatCharacters = ref([])
  const showSpecificStats = ref({
    showBreakdown: {},
    yearlyStats: {}
  })
  const multipleActorEpisodes = ref([])
  
  const timelineStats = computed(() => {
    if (!showSpecificStats.value?.yearlyStats) {
      return { categories: [], series: [] };
    }

    const years = new Set();
    Object.values(showSpecificStats.value.yearlyStats).forEach(showStats => {
      showStats.forEach(stat => {
        if (stat.year) {
          years.add(stat.year);
        }
      });
    });

    const sortedYears = Array.from(years).sort((a, b) => a - b);

    const series = Object.entries(showSpecificStats.value.yearlyStats).map(([show, stats]) => {
      const yearMap = new Map(stats.map(stat => [stat.year, stat.count]));
      
      const data = sortedYears.map(year => yearMap.get(year) || 0);

      return {
        name: show,
        data
      };
    });

    return {
      categories: sortedYears,
      series
    };
  });

  const loading = ref(true)
  const error = ref(null)

  async function loadStats() {
    try {
      loading.value = true
      error.value = null

      const [stats, actors, crimeShows, crimeShowActors, showStats, multipleActors, characterTypes, repeatChars] = await Promise.all([
        api.getTotalStats(),
        api.getTopActors(),
        api.getTopCrimeShows(),
        api.getTopCrimeShowActors(),
        api.getShowSpecificStats(),
        api.getMultipleActorEpisodes(),
        api.getCharacterTypeStats(),
        api.getRepeatCharacters()

      ]);

      totalBroadwayActors.value = stats.totalBroadwayActors
      totalActors.value = stats.totalActors;
      totalEpisodes.value = stats.totalEpisodes;
      multipleActorEpisodes.value = multipleActors;
      characterTypeStats.value = characterTypes;
      repeatCharacters.value = repeatChars;

      topLawAndOrderActors.value = actors.map(actor => ({
        name: actor.name,
        episodes: actor.episodes  
    }));

      topCrimeShows.value = crimeShows;
      topCrimeShowActors.value = crimeShowActors.map(actor => ({
        name: actor.name,
        shows: actor.showCount
    }));
    if (showStats && (showStats.showBreakdown || showStats.yearlyStats)) {
      showSpecificStats.value = showStats;
    }      

    } catch (err) {
      console.error('Error loading stats:', err)
      error.value = 'Failed to load statistics'
    } finally {
      loading.value = false
    }
  }

  onMounted(() => {
    loadStats()
  })

  return {
    totalActors,
    totalEpisodes,
    topLawAndOrderActors,
    topCrimeShows,
    topCrimeShowActors,
    showSpecificStats,
    multipleActorEpisodes,
    timelineStats,
    characterTypeStats,
    repeatCharacters,
    totalBroadwayActors,
    loading,
    error,
    
    loadStats
  }
}
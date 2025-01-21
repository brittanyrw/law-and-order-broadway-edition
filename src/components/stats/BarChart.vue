<template>
  <div class="chart-container">
    <h2>Top 10 Other Crime Shows</h2>
    <div v-if="loading" class="loading">
      Loading chart data!
    </div>
    <div v-else-if="error" class="error">
      {{ error }}
    </div>
    <v-chart 
      v-else
      class="chart" 
      :option="chartOption" 
      autoresize 
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart } from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent,
  TitleComponent
} from 'echarts/components'
import VChart from 'vue-echarts'
import { useActorStats } from '@/utils/useActorStats'

use([
  CanvasRenderer,
  BarChart,
  GridComponent,
  TooltipComponent,
  TitleComponent
])

const { topCrimeShows, loading, error } = useActorStats()

const chartOption = computed(() => ({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    },
    formatter: (params) => {
      const data = params[0];
      return `${data.name}<br/>Broadway Actors: ${data.value}`;
    }
  },
  grid: {
    top: 20,
    right: 50,
    bottom: 20,
    left: 200,
    containLabel: true
  },
  xAxis: {
    type: 'value',
    splitLine: {
      show: false
    },
    axisLabel: {
      color: '#ffffff'
    }
  },
  yAxis: {
    type: 'category',
    data: topCrimeShows.value.map(show => show.show).reverse(),
    axisLabel: {
      color: '#ffffff',
      fontSize: 14,
      formatter: (value) => {
        return value.length > 25 ? value.slice(0, 22) + '...' : value;
      }
    },
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    }
  },
  series: [
    {
      type: 'bar',
      data: topCrimeShows.value.map(show => ({
        value: show.count,
        itemStyle: {
          color: 'rgba(255, 255, 255, 0.2)'
        }
      })).reverse(),
      barWidth: '60%',
      label: {
        show: true,
        position: 'right',
        color: '#ffffff',
        fontSize: 24,
        fontWeight: 'bold',
        formatter: '{c}'  
      },
      emphasis: {
        itemStyle: {
          color: 'rgba(255, 255, 255, 0.3)'
        }
      }
    }
  ]
}))
</script>

<style scoped>
.chart-container {
  padding: 1rem;
  background-color: var(--blue);
  border-radius: 8px;
  margin: 1rem 0;
  min-height: 500px;
  display: flex;
  flex-direction: column;
}

.chart {
  height: 500px;
  width: 100%;
}

h2 {
  color: white;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.loading, .error {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  color: white;
  font-size: 1.2rem;
}

.error {
  color: var(--red);
}
</style>
<template>
    <div class="chart-container">
      <h2>Broadway Actors in Law & Order Shows</h2>
      <v-chart class="chart" :option="chartOption" autoresize />
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { use } from 'echarts/core'
  import { CanvasRenderer } from 'echarts/renderers'
  import { LineChart } from 'echarts/charts'
  import { 
    GridComponent,
    TooltipComponent,
    LegendComponent,
    TitleComponent 
  } from 'echarts/components'
  import VChart from 'vue-echarts'
  import { useActorStats } from '@/utils/useActorStats'
  
  use([
    CanvasRenderer,
    LineChart,
    GridComponent,
    TooltipComponent,
    LegendComponent,
    TitleComponent
  ])
  
  const { timelineStats } = useActorStats()
  
  const chartOption = computed(() => ({
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'line',
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.3)'
        }
      },
      textStyle: {
        color: '#333'
      },
      backgroundColor: "#000000"
    },
    legend: {
      top: 25,
      textStyle: {
        color: '#ffffff'
      },
      icon: 'rect'
    },
    grid: {
      top: 80,
      left: 50,
      right: 50,
      bottom: 50,
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: timelineStats.value.categories,
      boundaryGap: false,
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.3)'
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        color: '#ffffff'
      },
    },
    yAxis: {
      type: 'value',
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        color: '#ffffff'
      }
    },
    series: timelineStats.value.series.map(series => ({
      name: series.name,
      type: 'line',
      data: series.data,
      smooth: true,
      symbolSize: 8,
      lineStyle: {
        width: 5
      },
      itemStyle: {
        color: getLineColor(series.name)
      },
      areaStyle: {
        opacity: 0
      }
    }))
  }))
  
  const getLineColor = (showName) => {
    const colors = {
      'Law & Order': '#FBFBFB',
      'Law & Order: Special Victims Unit': '#284C99',
      'Law & Order: Criminal Intent': '#992843',
      'Law & Order: Organized Crime': '#0F0F0F',
      'Law & Order: LA': '#FFD046'
    }
    return colors[showName] || '#999'
  }
  </script>
  
  <style scoped>
  .chart-container {
    padding: 1rem;
    background-color: var(--black);
    border-radius: 8px;
    margin: 1rem 0;
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
  </style>
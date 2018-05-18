library(highcharter)
library(dplyr)
library(tidyr)



#############
code à mettre dans un fidle highcharts pour avoir l'image du spiderwebr'



Highcharts.chart('container', {
  
  chart: {
    polar: true,
    type: 'area'
  },
  
  plotOptions: {
    series: {
      fillOpacity: 0.3
    }
  },
  
  title: {
    text: 'Calibration',
    x: -0
  },	
  
  pane: {
    center: ['50%', '60%'],
    size: '90%'
  },
  
  xAxis: {
    categories: ['Robustness', 'Parcimony', 'Realism'],
    tickmarkPlacement: 'on',
    lineWidth: 0,
    labels:{
      style :{
        color:'#7cb5ec',
        fontSize: '14px'
      }
    }
  },
  
  yAxis: {
    gridLineInterpolation: 'polygon',
    lineWidth: 0,
    min: 0
  },
  
  
  
  legend: {
    enabled: false
  },
  
  series: [{
    name: '',
    data: [10000, 4000, 14000],
    pointPlacement: 'off'
  }]
  
});
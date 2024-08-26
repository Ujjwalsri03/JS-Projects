document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('realtimeChart').getContext('2d');
  
    
    const realtimeChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [], 
        datasets: [{
          label: 'Random Data',
          data: [], 
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderWidth: 2,
          tension: 0.4, 
          pointRadius: 0, 
        }]
      },
      options: {
        responsive: true,
        animation: {
          duration: 1000, 
          easing: 'easeInOutQuad', 
        },
        scales: {
          x: {
            type: 'realtime', 
            realtime: {
              duration: 20000, 
              refresh: 1000, 
              delay: 1000, 
              onRefresh: function(chart) {
                const now = Date.now();
                chart.data.labels.push(now);
                chart.data.datasets.forEach(function(dataset) {
                  dataset.data.push(generateRandomData());
                });
              }
            },
            time: {
              parser: 'HH:mm:ss',
              tooltipFormat: 'HH:mm:ss',
              unit: 'second',
              displayFormats: {
                second: 'HH:mm:ss'
              }
            }
          },
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          legend: {
            display: true, 
          },
          tooltip: {
            enabled: true, 
          }
        }
      }
    });
  
    
    function generateRandomData() {
      return Math.floor(Math.random() * 100);
    }
  
   
    function removeOldData() {
      if (realtimeChart.data.labels.length > 20) {
        realtimeChart.data.labels.shift(); 
        realtimeChart.data.datasets[0].data.shift(); 
      }
    }
  
    setInterval(() => {
      removeOldData();
      realtimeChart.update('quiet');
    }, 1000);
  });
  
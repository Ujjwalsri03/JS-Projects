const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Engineer', 'Doctor', 'Teacher', 'Lawyer', 'Nurse', 'Artist', 'SDE', 'Data Scientist', 'Mechanic', 'Chef'],
        datasets: [{
            label: 'Annual Salary ($)',
            data: [75000, 120000, 45000, 95000, 60000, 70000, 130000, 110000, 55000, 65000],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(0, 204, 102, 0.2)',
                'rgba(204, 102, 0, 0.2)',
                'rgba(102, 102, 204, 0.2)',
                'rgba(204, 204, 0, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(0, 204, 102, 1)',
                'rgba(204, 102, 0, 1)',
                'rgba(102, 102, 204, 1)',
                'rgba(204, 204, 0, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Salary in USD'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Occupation'
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Annual Salaries by Occupation'
            },
            legend: {
                display: true,
                position: 'top'
            },
            tooltip: {
                enabled: true,
                mode: 'index',
                intersect: false
            }
        },
        animation: {
            duration: 2000, // Animation duration in milliseconds
            easing: 'easeOutBounce' // Easing effect for the animation
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const chartBars = document.querySelectorAll('#myChart .bar');

    anime({
        targets: chartBars,
        scaleY: [0, 1],
        easing: 'easeOutBounce',
        duration: 2000,
        delay: anime.stagger(100, {start: 500}),
        begin: () => {
            chartBars.forEach(bar => {
                bar.style.transform = 'scaleY(0)';
            });
        },
        complete: () => {
            chartBars.forEach(bar => {
                bar.style.transform = '';
            });
        }
    });
});

// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});

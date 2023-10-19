const ctx = document.getElementById('barchart').getContext('2d');

// Initial data
const data = {
    'Mari': 0,
    'Karen': 0,
    'Johann': 0,
    'Din progresjon': 0,
};

const names = Object.keys(data);
const percentages = Object.values(data);

const barchart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: names,
        datasets: [{
            label: 'Spareprogresjon (%)',
            data: percentages,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 100, // Set a fixed maximum value for the y-axis
                ticks: {
                    callback: function(value) {
                        return value + '%';
                    }
                }
            }
        }
    }
});

// Function to update the data and refresh the chart
function updateData() {
    // New data
    const newData = {
        'Mari': 30,
        'Karen': 40,
        'Johann': 50,
        'Din progresjon': 77.2,
    };

    // Update the chart's data
    barchart.data.datasets[0].data = Object.values(newData);

    // Update the chart's labels
    barchart.data.labels = Object.keys(newData);

    barchart.update();
}

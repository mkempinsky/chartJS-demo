var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',



    // The data for our dataset
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: 'rgba(148,231,190, .5)',
            borderColor: 'rgb(148,231,190)',
            borderWidth: 3,
            pointBackgroundColor: '#fff',
            pointRadius: 5,
            data: [0, 10, 5, 2, 20, 30, 45, 30, 23, 17, 22, 40],
        },
        {
            label: "My Second dataset",
            backgroundColor: 'rgba(231,148,189, .5)',
            borderColor: 'rgb(231,148,189)',
            borderWidth: 3,
            pointBackgroundColor: '#fff',
            pointRadius: 5,
            data: [7, 13, 5, 4, 15, 23, 30, 27, 21, 33, 40, 45],
        }]
    },

    // Configuration options go here
    options: {}
});
var cataDonut = {
    chart: {
        width: 350,
        type: 'donut',
        sparkline: {
            enabled: true
        },
        dropShadow: {
            enabled: true,
            opacity: 0.1,
            blur: 3,
            left: -2,
            top: 2
        },
    },
    colors: ['#007bff', '#dc3545', '#28a745', '#17a2b8', '#ffc107'],
    series: [44, 55, 13, 43, 22],
    labels: ['Business', 'Marketing', 'Admin', 'Hosting', 'Ecommerce'],
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            }
        }
    }]
};

var cata_donut = new ApexCharts(document.querySelector("#catagorydonutChart"), cataDonut);
cata_donut.render();
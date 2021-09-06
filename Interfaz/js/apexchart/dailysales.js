var dailySales = {
    chart: {
        height: 350,
        type: 'area',
        animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 1000
        },
        dropShadow: {
            enabled: true,
            opacity: 0.4,
            blur: 3,
            left: -5,
            top: 12
        },
        zoom: {
            enabled: false
        },
        toolbar: {
            show: false
        },
        sparkline: {
            enabled: true
        },
    },
    colors: ['#17a2b8'],
    dataLabels: {
        enabled: false
    },
    labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
    tooltip: {
        theme: 'light',
        marker: {
            show: true,
        },
        x: {
            show: true,
        }
    },
    stroke: {
        show: true,
        width: 2,
        curve: 'smooth',
    },
    series: [{
        name: 'Sales',
        data: [100, 90, 80, 70, 90, 95, 65, 55, 75, 100, 120, 80, 65, 95, 115, 65, 80, 90, 70, 96, 105, 120, 110, 95]
    }],
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                height: 180
            },
        },
    }]
}

var daily_sales = new ApexCharts(document.querySelector("#dailySales"), dailySales);

daily_sales.render();
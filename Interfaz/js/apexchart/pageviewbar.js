var pageViewsBar = {
    chart: {
        type: 'bar',
        height: 52,
        sparkline: {
            enabled: true
        },
        dropShadow: {
            enabled: true,
            opacity: 0.1,
            blur: 2,
            left: -1,
            top: 5
        },
    },
    colors: ['#007bff', '#28a745'],
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '50%'
        },
    },
    dataLabels: {
        enabled: false
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        theme: 'light',
        style: {
            fontSize: '12px',
            fontFamily: 'Nunito Sans, sans-serif',
        },
        marker: {
            show: false,
        },
        x: {
            show: false,
        }
    },
    series: [{
        name: 'Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }, {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    }],
};

var page_views_bar = new ApexCharts(document.querySelector("#pageViewsBar"), pageViewsBar);
page_views_bar.render();
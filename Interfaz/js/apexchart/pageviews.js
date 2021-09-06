var pageviews = {
    chart: {
        height: 52,
        type: 'area',
        dropShadow: {
            enabled: true,
            opacity: 0.1,
            blur: 2,
            left: -1,
            top: 5
        },
        zoom: {
            enabled: false
        },
        toolbar: {
            show: false
        },
        animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 800
        },
        sparkline: {
            enabled: true
        },
    },
    colors: ['#007bff'],
    dataLabels: {
        enabled: false
    },
    fill: {
        type: "solid",
        opacity: 0,
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
            show: true,
        }
    },
    stroke: {
        show: true,
        curve: 'smooth',
        width: 3
    },
    series: [{
        name: 'Pageviews',
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
    }],
    labels: ['1 Apr 20', '2 Apr 20', '3 Apr 20', '4 Apr 20', '5 Apr 20', '6 Apr 20', '7 Apr 20', '8 Apr 20', '9 Apr 20', '10 Apr 20', '11 Apr 20'],
}

var page_views = new ApexCharts(document.querySelector("#pageViews"), pageviews);

page_views.render();
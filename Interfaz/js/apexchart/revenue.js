var revenue_chart = {
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
    colors: ['#28a745'],
    dataLabels: {
        enabled: false
    },
    fill: {
        type: "solid",
        opacity: 0,
    },
    tooltip: {
        theme: 'light',
        y: {
            formatter: function (val) {
                return "$" + val
            }
        },
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
        name: 'Revenue',
        data: [31, 40, 28, 51, 37, 48, 43]
    }],
    labels: ['1 Apr 20', '2 Apr 20', '3 Apr 20', '4 Apr 20', '5 Apr 20', '6 Apr 20', '7 Apr 20'],
}

var revenueList = new ApexCharts(document.querySelector("#revenue"), revenue_chart);

revenueList.render();
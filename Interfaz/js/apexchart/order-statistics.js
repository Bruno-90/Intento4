var orderstatistics = {
    chart: {
        height: 420,
        type: 'bar',
        animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 1000
        },
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
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '50%',
            endingShape: 'rounded'
        },
    },
    colors: ['#ffc107', '#080820'],
    dataLabels: {
        enabled: false
    },
    grid: {
        borderColor: '#dbeaea',
        strokeDashArray: 4,
        xaxis: {
            lines: {
                show: true
            }
        },
        yaxis: {
            lines: {
                show: false,
            }
        },
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        },
    },
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    legend: {
        position: 'top',
        horizontalAlign: 'right',
        offsetY: 0,
        fontSize: '14px',
        fontFamily: 'Nunito Sans, sans-serif',
        markers: {
            width: 9,
            height: 9,
            strokeWidth: 0,
            radius: 20
        },
        itemMargin: {
            horizontal: 5,
            vertical: 0
        }
    },
    tooltip: {
        theme: 'light',
        marker: {
            show: true,
        },
        x: {
            show: false,
        }
    },
    stroke: {
        show: true,
        colors: ['transparent'],
        width: 3
    },
    series: [{
        name: 'Sales',
        data: [4200, 4600, 4200, 3800, 4500, 4300, 3800, 4900, 4600, 4000, 4800, 5100]
    }, {
        name: 'Revenue',
        data: [4900, 4800, 3900, 3600, 4000, 3700, 4000, 4200, 3800, 3900, 4100, 5900]
    }],
    xaxis: {
        crosshairs: {
            show: true
        },
        labels: {
            offsetX: 0,
            offsetY: 5,
            style: {
                colors: '#8380ae',
                fontSize: '12px',
                fontFamily: 'Nunito Sans, sans-serif'
            },
        },
        tooltip: {
            enabled: false,
        },
    },
    yaxis: {
        labels: {
            formatter: function (value, index) {
                return (value / 1000) + 'K'
            },
            offsetX: -10,
            offsetY: 0,
            style: {
                colors: '#8380ae',
                fontSize: '12px',
                fontFamily: 'Nunito Sans, sans-serif'
            },
        }
    },
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                height: 230
            },
            plotOptions: {
                bar: {
                    columnWidth: '70%',
                },
            },
        },
    }]
}

var order_statistics = new ApexCharts(document.querySelector("#OrderStatistics"), orderstatistics);

order_statistics.render();
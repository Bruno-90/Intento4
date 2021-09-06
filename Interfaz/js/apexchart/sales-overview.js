var salesoverview = {
    chart: {
        height: 370,
        type: 'area',
        animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 1000
        },
        dropShadow: {
            enabled: true,
            opacity: 0.3,
            blur: 3,
            left: -5,
            top: 18
        },
        zoom: {
            enabled: false
        },
        toolbar: {
            show: false
        },
    },
    colors: ['#007bff', '#dc3545'],
    dataLabels: {
        enabled: false
    },
    fill: {
        type: "gradient",
        gradient: {
            type: "vertical",
            shadeIntensity: 1,
            inverseColors: true,
            opacityFrom: .3,
            opacityTo: 0.05,
            stops: [40, 100],
        }
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
        offsetY: -60,
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
    title: {
        text: '$21,637',
        align: 'left',
        margin: 0,
        offsetX: -10,
        offsetY: 20,
        floating: false,
        style: {
            fontSize: '16px',
            color: '#383663'
        },
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
    subtitle: {
        text: 'Total Income',
        align: 'left',
        margin: 0,
        offsetX: -10,
        offsetY: 0,
        floating: false,
        style: {
            fontSize: '14px',
            color: '#8380ae'
        }
    },
    stroke: {
        show: true,
        curve: 'smooth',
        width: 3
    },
    series: [{
        name: 'Income',
        data: [4200, 4600, 4200, 3800, 4500, 4300, 3800, 4900, 4600, 4000, 4800, 5100]
    }, {
        name: 'Cost',
        data: [4000, 4800, 3900, 3600, 4000, 3700, 4000, 4200, 3800, 3900, 4100, 3600]
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
                height: 250
            },
            legend: {
                position: 'bottom',
                offsetY: 0,
            },
        },
    }]
}

var sales_overview = new ApexCharts(document.querySelector("#salesOverview"), salesoverview);

sales_overview.render();
var yearlySalesOverview = {
    chart: {
        type: 'line',
        width: 160,
        height: 50,
        dropShadow: {
            enabled: true,
            opacity: 0.1,
            blur: 2,
            left: -1,
            top: 5
        },
        sparkline: {
            enabled: true
        }
    },
    stroke: {
        curve: 'smooth',
        width: 3
    },
    plotOptions: {
        bar: {
            columnWidth: '60%'
        }
    },
    colors: ['#007bff'],
    series: [{
        data: [65, 78, 72, 82, 85, 99, 44, 58, 42, 39, 54, 96]
    }],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    xaxis: {
        crosshairs: {
            width: 1
        },
    },
    tooltip: {
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
};

var yearly_sales_overview = new ApexCharts(document.querySelector("#yearlySalesChart"), yearlySalesOverview);
yearly_sales_overview.render();

var monthlysales = {
    chart: {
        type: 'line',
        width: 160,
        height: 50,
        dropShadow: {
            enabled: true,
            opacity: 0.1,
            blur: 2,
            left: -1,
            top: 5
        },
        sparkline: {
            enabled: true
        }
    },
    colors: ['#28a745'],
    stroke: {
        curve: 'smooth',
        width: 3
    },
    series: [{
        data: [12, 14, 28, 36, 42, 15, 47, 42, 65, 19, 12, 14, 28, 63, 42, 15, 47, 48, 39, 19, 12, 14, 28, 47, 42, 15, 47, 34, 39, 14]
    }],
    tooltip: {
        x: {
            show: true
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
};

var monthly_sales = new ApexCharts(document.querySelector("#monthlysales"), monthlysales);
monthly_sales.render();
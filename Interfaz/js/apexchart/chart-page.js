/* Widget 1 */

var widget = {
    chart: {
        height: 70,
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

var widget_1 = new ApexCharts(document.querySelector("#widget"), widget);

widget_1.render();

/* Widget 2 */

var widget2 = {
    chart: {
        height: 70,
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
        data: [25, 66, 41, 89, 63, 25, 44, 12]
    }],
    labels: ['1 Apr 20', '2 Apr 20', '3 Apr 20', '4 Apr 20', '5 Apr 20', '6 Apr 20', '7 Apr 20', '8 Apr 20'],
}

var widget_2 = new ApexCharts(document.querySelector("#widget2"), widget2);

widget_2.render();

/* Widget 3 */

var widget3 = {
    chart: {
        height: 70,
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
    colors: ['#dc3545'],
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
        data: [25, 66, 63, 25, 44, 12, 36, 9, 54]
    }],
    labels: ['1 Apr 20', '4 Apr 20', '5 Apr 20', '6 Apr 20', '7 Apr 20', '8 Apr 20', '9 Apr 20', '10 Apr 20', '11 Apr 20'],
}

var widget_3 = new ApexCharts(document.querySelector("#widget3"), widget3);

widget_3.render();

/* Widget 4 */

var widget4 = {
    chart: {
        height: 70,
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
    colors: ['#17a2b8'],
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
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
}

var widget_4 = new ApexCharts(document.querySelector("#widget4"), widget4);

widget_4.render();

/* Widget 5 */

var widget5 = {
    chart: {
        type: 'bar',
        height: 70,
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

var widget_5 = new ApexCharts(document.querySelector("#widget5"), widget5);
widget_5.render();

/* Widget 6 */

var widget6 = {
    chart: {
        type: 'bar',
        height: 70,
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
    colors: ['#dc3545'],
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '40%'
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
    }],
};

var widget_6 = new ApexCharts(document.querySelector("#widget6"), widget6);
widget_6.render();

/* Widget 7 */

var widget7 = {
    chart: {
        type: 'bar',
        height: 70,
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
    colors: ['#ffc107', '#007bff'],
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

var widget_7 = new ApexCharts(document.querySelector("#widget7"), widget7);
widget_7.render();

/* Widget 8 */

var widget8 = {
    chart: {
        type: 'bar',
        height: 70,
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
    colors: ['#ffc107', '#28a745', '#007bff'],
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
    }, {
        name: 'Cost',
        data: [99, 75, 85, 92, 77, 110, 85, 100, 80]
    }],
};

var widget_8 = new ApexCharts(document.querySelector("#widget8"), widget8);
widget_8.render();

/* Sales Overview */

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
            opacity: 0.4,
            blur: 3,
            left: -5,
            top: 14
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

/* Sales Overview 2 */

var salesoverview2 = {
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
    colors: ['#007bff', '#dc3545', '#ffc107'],
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
    }, {
        name: 'Profit',
        data: [3000, 3500, 3400, 2900, 3800, 3240, 3500, 3800, 3600, 4200, 4600, 4300]
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

var sales_overview_2 = new ApexCharts(document.querySelector("#salesOverview2"), salesoverview2);

sales_overview_2.render();

/* Order Statictis */

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
            columnWidth: '50%'
        },
    },
    colors: ['#ffc107', '#383663'],
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
                height: 200
            },
            plotOptions: {
                bar: {
                    columnWidth: '70%'
                },
            },
        },
    }]
}

var order_statistics = new ApexCharts(document.querySelector("#OrderStatistics"), orderstatistics);

order_statistics.render();

/* Order Statictis 2 */

var orderstatistics2 = {
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
        },
    },
    colors: ['#007bff', '#080820'],
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
                height: 200
            },
            plotOptions: {
                bar: {
                    columnWidth: '70%'
                },
            },
        },
    }]
}

var order_statistics_2 = new ApexCharts(document.querySelector("#OrderStatistics2"), orderstatistics2);

order_statistics_2.render();

/* Daily Sales */

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
    colors: ['#28a745'],
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

/* Daily Sales */

var dailySales2 = {
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
    colors: ['#007bff'],
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

var daily_sales_2 = new ApexCharts(document.querySelector("#dailySales2"), dailySales2);

daily_sales_2.render();

/* Donut Chart */

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

/* Pie Chart */

var piechart = {
    chart: {
        width: 350,
        type: 'pie',
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

var pie_chart = new ApexCharts(document.querySelector("#piechart"), piechart);
pie_chart.render();
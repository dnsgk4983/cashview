$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
    
    // 상품 차트
    var prx = document.getElementById('prChart').getContext('2d');

    var pchart = new Chart(prx, {
        type: 'line',

        data: {
            labels: ['', '10.20', '10.20', '10.20', '10.20', '10.20', '10.20', '10.20', ""],
            datasets: [{
                label: "",
                backgroundColor: 'transparent',
                borderColor: '#FF8200',
                fill: true,
                data: [200, 200, 300, 100, 400, 500, 400, 300, 300],
            }
        ]},
        options: {
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        color: 'rgba(0,0,0,0)',
                        lineWidth: 0
                    }
                }],
                yAxes: [{
                    display: true,
                    ticks: {
                        min: 0,
                        stepSize: 100,
                        fontSize: 13,
                        fontColor: '#878787'
                    },
                }]
            }
        }
    });

    // 광고 차트

    var arx = document.getElementById('adChart').getContext('2d');

    var achart = new Chart(arx, {
        type: 'line',

        data: {
            labels: ['', '10.20', '10.20', '10.20', '10.20', '10.20', '10.20', '10.20', ""],
            datasets: [{
                label: "",
                backgroundColor: "transparent",
                borderColor: '#4C9EFF',
                fill: false,
                data: [300, 300, 330, 300, 380, 500, 420, 400, 390]
            },
            {
                label: "",
                backgroundColor: "transparent",
                borderColor: "#FF8200",
                fill: false,
                data: [100, 100, 200, 0, 300, 400, 300, 240, 230]
            }
            ]},
        options: {
            legend: {
                display: false,
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        color: 'rgba(0,0,0,0)',
                        lineWidth: 0
                    }
                }],
                yAxes: [{
                    display: true,
                    ticks: {
                        min: 0,
                        stepSize: 100,
                        fontSize: 13,
                        fontColor: '#878787'
                    },
                }]
            }
        }
    });

    var urx = document.getElementById('userChart').getContext('2d');

    var uchart = new Chart(urx, {
        type: 'bar',

        data: {
            labels: ['10.20', '10.20', '10.20', '10.20', '10.20', '10.20', '10.20'],
            datasets: [{
                label: "",
                backgroundColor: "#fa8200",
                data: [400, 500, 200, 400, 400, 300, 500]
            }
        ]},
        options: {
            legend: {
                display: false,
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        color: 'rgba(0,0,0,0)',
                        lineWidth: 0
                    }
                }],
                yAxes: [{
                    display: true,
                    ticks: {
                        min: 0,
                        stepSize: 100,
                        fontSize: 13,
                        fontColor: '#878787'
                    },
                }]
            }
        }
    });
    
    var adrx = document.getElementById('adminChart').getContext('2d');

    var adchart = new Chart(adrx, {
        type: 'bar',

        data: {
            labels: ['10.20', '10.20', '10.20', '10.20', '10.20', '10.20', '10.20'],
            datasets: [{
                label: "",
                backgroundColor: "#4C9EFF",
                data: [500, 300, 200, 300, 500, 300, 450]
            }
        ]},
        options: {
            legend: {
                display: false,
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        color: 'rgba(0,0,0,0)',
                        lineWidth: 0
                    },
                    fontSize: 13
                }],
                yAxes: [{
                    display: true,
                    ticks: {
                        min: 0,
                        stepSize: 100,
                        fontSize: 13,
                        fontColor: '#878787'
                    },
                }]
            }
        }
    });
    $('#ad-modal').modal('show')
});

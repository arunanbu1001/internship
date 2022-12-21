var xValues = ["little_mount", "guindy", "aalandur", "thirisoolam","meenampakkam", "Airport"];
var yValues = [55, 49, 44, 24, 20,35,1];
var barColors = ["red", "green","blue","orange","brown","yellow"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "World Wine Production 2018"
    }
  }
});
var xValues1 = ["little_mount", "guindy", "aalandur", "thirisoolam","meenampakkam", "Airport"];
var yValues1 = [55, 49, 44, 24, 20,35,1];
var barColors1 = ["red", "green","blue","orange","brown","yellow"];

new Chart("myChart1", {
  type: "bar",
  data: {
    labels: xValues1,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "World Wine Production 2018"
    }
  }
});

var xValues1 = ["little_mount", "guindy", "aalandur", "thirisoolam","meenampakkam", "Airport"];
var yValues1 = [55, 49, 44, 24, 20,35,1];
var barColors1 = ["red", "green","blue","orange","brown","yellow"];

new Chart("myChart3", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "World Wide Wine Production 2018"
    }
  }
});

var xValues = ["jan","feb","mar","april","may","jun","jul","aug","sep","oct","nov"];
var yValues = [70,80,80,90,90,90,100,110,140,140,154];

new Chart("myChart4", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 6, max:160}}],
    }
  }
});

var xValues1 = ["little_mount", "guindy", "aalandur", "thirisoolam","meenampakkam", "Airport"];
var yValues1 = [55, 49, 44, 24, 20,35,1];
var barColors1 = ["red", "green","blue","orange","brown","yellow"];

new Chart("myChart13", {
  type: "doughnut",
  data: {
    labels: xValues1,
    datasets: [{
      backgroundColor: barColors,
      data: yValues1
    }]
  },
  options: {
    title: {
      display: true,
      text: "World Wide Wine Production 2018"
    }
  }
});
var xValues1 = ["little_mount", "guindy", "aalandur", "thirisoolam","meenampakkam", "Airport"];
var yValues1 = [55, 49, 44, 24, 20,35,1];
var barColors1 = ["red", "green","blue","orange","brown","yellow"];

new Chart("myChart23", {
  type: "doughnut",
  data: {
    labels: xValues1,
    datasets: [{
      backgroundColor: barColors,
      data: yValues1
    }]
  },
  options: {
    title: {
      display: true,
      text: "World Wide Wine Production 2018"
    }
  }
});
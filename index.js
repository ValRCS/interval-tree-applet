"use strict";

function AddPoint() {
  var x = document.forms["EnterPointForm"]["x"].value;
  var y = document.forms["EnterPointForm"]["y"].value;
  if (x == "" || y == "") {
    alert("Name must be filled out");
    return false;
  }
  points.push([x, y]);
  document.getElementById("points_text").innerHTML = points.toString();
  var tree = constructIntervalTree(points);

}

// var directionInput = $("#direction");
// $("#btn-UD").click(function () {
//     directionInput.value = "UD";
//     draw();
// });
// $("#btn-DU").click(function () {
//     directionInput.value = "DU";
//     draw();
// });
// $("#btn-LR").click(function () {
//     directionInput.value = "LR";
//     draw();
// )};
// $("#btn-RL").click(function () {
//     directionInput.value = "RL";
//     draw();
// };

function draw(data) {
  var container = $('#mynetwork')[0];
  var options = {
    layout: {
      hierarchical: {
        direction: "UD",
        sortMethod: 'directed'
      }
    }
  };
  var network = new vis.Network(container, data, options);
}

$(document).ready(function() {
  $.getScript("./intervaltree.js");
  var tree = constructIntervalTree([
    [1888, 1971],
    [1874, 1951],
    [1843, 1907],
    [1779, 1828],
    [1756, 1791],
    [1585, 1672]
  ]);
  draw({
    nodes: nodes,
    edges: edges
  });
  draw(tree.getData());
});

var points = [];

// create an array with nodes
var nodes = [{
    id: 1,
    label: 'Node 1'
  },
  {
    id: 2,
    label: 'Node 2'
  },
  {
    id: 3,
    label: 'Node 3'
  },
  {
    id: 4,
    label: 'Node 4'
  },
  {
    id: 5,
    label: 'Node 5'
  }
];

// create an array with edges
var edges = [{
    from: 1,
    to: 3
  },
  {
    from: 1,
    to: 2
  },
  {
    from: 2,
    to: 4
  },
  {
    from: 2,
    to: 5
  },
  {
    from: 3,
    to: 3
  }
];

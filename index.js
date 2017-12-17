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
}

$(document).ready(function() {
  // create a network
  var container = document.getElementById('mynetwork');
  var data = {
    nodes: nodes,
    edges: edges
  };
  var options = {};
  var network = new vis.Network(container, data, options);
});

var points = [];

// create an array with nodes
var nodes = new vis.DataSet([{
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
]);

// create an array with edges
var edges = new vis.DataSet([{
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
]);

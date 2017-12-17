"use strict";

var data;
var points = [];

function AddPoint() {
  var x = document.forms["EnterPointForm"]["x"].value;
  var y = document.forms["EnterPointForm"]["y"].value;
  if (x == "" || y == "") {
    alert("Points must be filled out");
    return false;
  }
  x = Number(x);
  y = Number(y);
  points.push([x, y]);

  var cList = $('#points_text')
  var li = $('<li/>')
    .click(function() {
      points.splice($(this).index(), 1);
      $(this).remove();
      var tree = constructIntervalTree(points);
      if (tree) {
        data = tree.getData();
      } else {
        data = {
          nodes: [],
          edges: []
        };
      }
      draw()
    })
    .text(x + ',' + y)
    .addClass("point")
    .appendTo(cList);

  var tree = constructIntervalTree(points);
  data = tree.getData();
  draw();
}

function Query() {
  var x = document.forms["QueryForm"]["x"].value;
  if (x == "") {
    alert("Coordinate must be filled out");
    return false;
  }
  x = Number(x);
}

function draw() {
  var container = $('#mynetwork')[0];
  var options = {
    layout: {
      hierarchical: {
        direction: $("#direction").val(),
        sortMethod: 'directed',
        nodeSpacing: 400
      }
    },
    physics: {
      enabled: true,
      barnesHut: {
        avoidOverlap: 1
      }
    }
  };
  var network = new vis.Network(container, data, options);
}

$(document).ready(function() {
  $.getScript("./intervaltree.js");
  $("#btn-UD").click(function() {
    $('#direction').val("UD");
    draw();
  });
  $("#btn-DU").click(function() {
    $('#direction').val("DU");
    draw();
  });
  $("#btn-LR").click(function() {
    $('#direction').val("LR");
    draw();
  });
  $("#btn-RL").click(function() {
    $('#direction').val("RL");
    draw();
  });
  var tree = constructIntervalTree([
    [1888, 1971],
    [1874, 1951],
    [1843, 1907],
    [1779, 1828],
    [1756, 1791],
    [1585, 1672]
  ]);
  data = tree.getData();
  draw();
});

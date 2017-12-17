"use strict";

var n = 0;
var first = true;

function IntervalTreeNode(median, ml, mr) {
  this.id = n;
  this.median = median;
  this.ml = ml;
  this.mr = mr;
  this.left = null;
  this.right = null;
}

IntervalTreeNode.prototype.query = function(value) {
  if (this == null) {
    return;
  }
  var points = [];
  if (value < this.median) {
    for (var i = 0; i < this.ml.length; ++i) {
      if (this.ml[i][0] <= value) {
        points.push(this.ml[i]);
        continue;
      }
      break;
    }
    if (this.left) {
      points = points.concat(this.left.query(value));
    }
  } else {
    for (var i = 0; i < this.mr.length; ++i) {
      if (this.mr[i][1] >= value) {
        points.push(this.mr[i]);
        continue;
      }
      break;
    }
    if (this.right) {
      points = points.concat(this.right.query(value));
    }
  }
  return points;
}

function pointsToString(array) {
  var str = '[';
  for (var i = 0; i < array.length; ++i) {
    if (i != 0) {
      str += ',';
    }
    str += '[' + array[i][0] + ',' + array[i][1] + ']';
  }
  str += ']';
  return str;
}

IntervalTreeNode.prototype.getData = function() {
  if (this) {
    var nodes = [{
      id: this.id,
      label: "x-mid: " + this.median + '\n' + pointsToString(this.ml)
    }];
    var edges = [];
    if (this.left) {
      edges.push({
        from: this.id,
        to: this.left.id
      });
      var ldata = this.left.getData();
      nodes = nodes.concat(ldata.nodes);
      edges = edges.concat(ldata.edges);
    }
    if (this.right) {
      edges.push({
        from: this.id,
        to: this.right.id
      });
      var rdata = this.right.getData();
      nodes = nodes.concat(rdata.nodes);
      edges = edges.concat(rdata.edges);
    }
    return {
      nodes: nodes,
      edges: edges
    };
  }
}

function constructIntervalTree(s) {
  if (s.length == 0) {
    return null;
  }
  var points = [];
  for (var i = 0; i < s.length; ++i) {
    points.push(s[i][0]);
    points.push(s[i][1]);
  }
  points.sort(compareNumbers);
  var median = (points[points.length / 2 - 1] + points[points.length / 2]) / 2;
  var l = [];
  var r = [];
  var m = [];
  for (var i = 0; i < s.length; ++i) {
    if (s[i][1] < median) {
      l.push(s[i]);
    } else if (s[i][0] > median) {
      r.push(s[i]);
    } else {
      m.push(s[i]);
    }
  }
  var ml = m;
  var mr = m.slice();
  ml.sort(leftIntervalSort);
  mr.sort(rightIntervalSort);
  var t = new IntervalTreeNode(median, ml, mr);
  ++n;
  t.left = constructIntervalTree(l);
  t.right = constructIntervalTree(r);
  return t;
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
function compareNumbers(a, b) {
  return a - b;
}

function leftIntervalSort(a, b) {
  return a[0] - b[0];
}

function rightIntervalSort(a, b) {
  return b[1] - a[1];
}

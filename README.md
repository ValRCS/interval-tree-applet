# Interval Tree Applet

This is a JavaScript visualization of 1-D interval trees. View [here](https://aaronkirtland.com/interval-tree-applet/). We used the libraries [vis.js](http://visjs.org/) for graph visualization and [jQuery](https://jquery.com/) for HTML DOM manipulation.

## CSE546t

### Name

Aaron Kirtland

### Solution

To offer a visual teaching aid for learning about interval trees while also providing a textual walk through construction and queries.

### Pedagogical Applet Information

#### 1

We provide a Javascript/HTML applet for learning about interval trees. Interval trees are an efficient method of querying points or intervals given a set of axis-parallel intervals. Such queries are useful for scheduling problems and windowing management. This applet restricts usage to the 1-D space and requires a scalar query point.

Note that we label the two coordinates x and y, though they are generally considered to be in one dimension. Decimal values work fine, and we check to confirm x < y.

#### 2

The pseudo-code for interval tree construction and queries can be found [here](http://www.cs.umd.edu/class/fall2016/cmsc754/Lects/cmsc754-fall16-lects.pdf) on pages 174-178. The algorithms are written in JavaScript and are nearly identical to that provided in the text.

#### 3

We provide a textual walk through construction and querying of the set of intervals. Within the explanation area, for construction, we show the intervals under consideration, the median of these intervals, the set of intervals with y-coordinate to the left of the median, the set of intervals with x-coordinate to the right of the median, the set of intervals containing the median ordered by increasing x-coordinate and decreasing y-coordinate, and next recurrence. Should the left or right sets of intervals be empty, we make it clear that recurrence is unnecessary.

For queries, we textually show the comparisons between the provided query value and the medians of nodes, the output set of points depending on such comparison and the placement of the query value with respect to ml and mr, and the choice of recurring left or right.

Visually, we provide a tree graph generated with vis.js that shows the median of each node and the node's associated ml and mr lists. The tree is updated upon point addition or deletion.

#### 4

The applet was straight forward. We chose to learn towards the textual side rather than animation because animations can be slow and frustrating on large data sets. We consider intervals trees a simply enough concept that any possible benefits from complication visualization are marginal.

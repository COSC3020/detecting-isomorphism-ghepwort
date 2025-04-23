// Setup Code to copy and paste
const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js') + '');



// Not the same number of nodes, can't be isomorphic

zero1 = [
    [0]
];

zero2 = [
    [0, 0],
    [0, 0]
]

zero3 = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

zero4 = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
]

zero5 = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
];


assert.deepStrictEqual(are_isomorphic(zero1, zero2), false);
assert.deepStrictEqual(are_isomorphic(zero1, zero3), false);
assert.deepStrictEqual(are_isomorphic(zero1, zero4), false);
assert.deepStrictEqual(are_isomorphic(zero1, zero5), false);

assert.deepStrictEqual(are_isomorphic(zero2, zero3), false);
assert.deepStrictEqual(are_isomorphic(zero2, zero4), false);
assert.deepStrictEqual(are_isomorphic(zero2, zero5), false);

assert.deepStrictEqual(are_isomorphic(zero3, zero4), false);
assert.deepStrictEqual(are_isomorphic(zero3, zero5), false);

assert.deepStrictEqual(are_isomorphic(zero4, zero5), false);



// Single Node

graph1 = [[0]];
graph2 = [[0]];
assert.deepStrictEqual(are_isomorphic(graph1, graph2), true);

graph1 = [[0]];
graph2 = [[1]];
assert.deepStrictEqual(are_isomorphic(graph1, graph2), false);

graph1 = [[1]];
graph2 = [[0]];
assert.deepStrictEqual(are_isomorphic(graph1, graph2), false);

graph1 = [[1]];
graph2 = [[1]];
assert.deepStrictEqual(are_isomorphic(graph1, graph2), true);



// Double Node

graph1 = [[0, 0], [0, 0]];
graph2 = [[0, 0], [0, 0]];
assert.deepStrictEqual(are_isomorphic(graph1, graph2), true);

graph1 = [[0, 1], [0, 0]];
graph2 = [[0, 1], [0, 0]];
assert.deepStrictEqual(are_isomorphic(graph1, graph2), true);

graph1 = [[1, 0], [0, 0]];
graph2 = [[0, 0], [0, 1]];
assert.deepStrictEqual(are_isomorphic(graph1, graph2), true);

graph1 = [[0, 1], [0, 0]];
graph2 = [[0, 0], [0, 0]];
assert.deepStrictEqual(are_isomorphic(graph1, graph2), false);

graph1 = [[0, 1], [0, 0]];
graph2 = [[0, 1], [1, 0]];
assert.deepStrictEqual(are_isomorphic(graph1, graph2), false);

graph1 = [[1, 0], [0, 0]];
graph2 = [[1, 1], [1, 1]];
assert.deepStrictEqual(are_isomorphic(graph1, graph2), false);



// Triple Node

graph1 = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
graph2 = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
assert.deepStrictEqual(are_isomorphic(graph1, graph2), true);

graph1 = [[0, 1, 0], [0, 0, 1], [1, 0, 0]];
graph2 = [[0, 0, 1], [1, 0, 0], [0, 1, 0]];
assert.deepStrictEqual(are_isomorphic(graph1, graph2), true);

graph1 = [[0, 1, 0], [0, 0, 1], [1, 0, 1]];
graph2 = [[1, 0, 1], [1, 0, 0], [0, 1, 0]];
assert.deepStrictEqual(are_isomorphic(graph1, graph2), true);

graph1 = [[1, 0, 0], [0, 0, 1], [1, 0, 1]];
graph2 = [[1, 0, 1], [1, 0, 0], [0, 1, 0]];
assert.deepStrictEqual(are_isomorphic(graph1, graph2), false);

graph1 = [[0, 1, 0], [0, 1, 1], [0, 0, 1]];
graph2 = [[1, 0, 1], [1, 0, 0], [0, 1, 0]];
assert.deepStrictEqual(are_isomorphic(graph1, graph2), false);
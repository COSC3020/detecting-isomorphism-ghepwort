function are_isomorphic(graph1, graph2) {
    // Can't be isomorphic if they don't have the same number of nodes
    if (graph1.length !== graph2.length) return false;

    // Generate a list of all the nodes
    const n = graph1.length;
    const nodes = [];
    for (let i = 0; i < n; i++) {
        nodes[i] = i;
    }

    const nodePermOrder = getPermutations(nodes);

    for (let i = 0; i < nodePermOrder.length; i++) {
        const permutedGraph = permuteAdjMatrix(graph1, nodePermOrder[i]);

        if (matricesEqual(permutedGraph, graph2)) {
            return true; // Isomorphic match found!
        }
    }

    return false; // No match found
}

// Gets all permutations of nodes
function getPermutations(arr) {
    if (arr.length === 0) return [[]];

    const result = [];

    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
        const remainingPerms = getPermutations(remaining);

        for (const perm of remainingPerms) {
            result.push([current, ...perm]);
        }
    }

    return result;
}

// This permutes a matrix given a mapping
function permuteAdjMatrix(matrix, permutation) {
    const n = permutation.length;
    const permuted = [];

    for (let i = 0; i < n; i++) {
        permuted[i] = [];
        for (let j = 0; j < n; j++) {
            permuted[i][j] = matrix[permutation[i]][permutation[j]];
        }
    }

    return permuted;
}

// Just iterates through and see;s if two matrixes are equal
function matricesEqual(a, b) {
    const n = a.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (a[i][j] !== b[i][j]) return false;
        }
    }
    return true;
}


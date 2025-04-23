# Graph Isomorphism

Devise an algorithm to determine whether two given graphs are isomorphic or not.
It takes two graphs as an argument and returns `true` or `false`, depending on
whether the graphs are isomorphic or not. Your algorithm needs to handle both
the case where the two graphs are isomorphic and where they are not isomorphic.

Hint: Your algorithm does not need to be the best possible algorithm, but should
avoid unnecessarily repeating work.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?

## Answers
This algorithm has a worst-case time complexity of $\Theta(n! \cdot n^2)$.

1. Check to see if the graphs have the same number of nodes $\rightarrow\Theta(1)$
2. Generate a list of the nodes in the graph $\rightarrow\Theta(n)$ 
3. Generate all permutations of the nodes in the graph and iterate $\rightarrow\Theta(n!)$
    1. Permute the matrix $\rightarrow\Theta(n^2)$
    2. Check if the matrix's are the same $\rightarrow\Theta(n^2)$


## Sources

[GeeksForGeeks](https://www.geeksforgeeks.org/print-all-permutation-of-array-using-javascript/) helped me with permuting the array of nodes

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.



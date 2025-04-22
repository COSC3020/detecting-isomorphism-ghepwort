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
This algorithm has a worst-case time complexity of $\Theta(n!*n^2)$. We first check to see if the lists have the same length ($\Theta(1)$). We then generate a list of all the nodes ($\Theta(n)$) and then create a list of all permutations ($\Theta(n!)$). To permute a matrix takes $\Theta(n^2)$ time so doing all of them takes $\Theta(n! * n^2)$. We also must compare all the matrixes so it'll take $\Theta(n! * n^2)$ time. Overall this gives us a time complexity of $\Theta(n! * n^2)$.
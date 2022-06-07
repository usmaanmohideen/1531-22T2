## C. Using Javascript & Git

> 15 minutes

1. Create and checkout a new branch called `rainfall_solution`
    > ```shell
    > $ git checkout -b rainfall_solution
    > ```

1. What does the output of `git branch` indicate?
    > Also useful for showing remote branches: `git branch --all` (or `-a` for short)

1. Implement the function `rainfall` in [rainfall.js](rainfall.js), but avoid pushing this code to Gitlab for the time being.
    > See [solutions/rainfall.js](solutions/rainfall.js) (avoid filter/map/reduce!):
    >
    > <details close>
    > <summary>click to view</summary>
    >
    > ```js
    > function rainfall(integers) {
    >   let total = 0;
    >   let positiveCount = 0;
    >   for (const integer of integers) {
    >     if (integer > 0) {
    >       total += integer;
    >       positiveCount++;
    >     }
    >   }
    >   return positiveCount > 0 ? total / positiveCount : null;
    > }
    >
    > /*
    >
    > // NOTE: filter/map/reduce will be covered in more details in week 4+.
    > // YOU DO NOT NEED TO UNDERSTAND THE CODE BELOW BEFORE THEN.
    >
    > function rainfallAlternative(integers) {
    >   // Filter for 'integer' such that 'integer is greater than 0'
    >   const positives = integers.filter(integer => integer > 0);
    >   if (positives.length === 0) {
    >     return null;
    >   }
    >   const sum = positives.reduce((currentSum, integer) => currentSum + integer);
    >   return sum / positives.length;
    > }
    >
    > */
    > ```

    </details>

1. On **Gitlab's** master branch, replace the stub `rainfall` function with the alternative solution below:
    <details close>
    <summary>Click to view alternative solution</summary>

    ```javascript
    /**
     * Compute the average of only the positive
     * elements in the integer array.
     * Return null if there are no positive integers.
     */
    function rainfall(integers) {
      let total = 0
      let count = 0
      for (const integer in integers) {
        if (integer > 0) {
          total += integer
          count++;
        }
      }
      if (count === 0) {
        return null;
      } else {
        return total / count;
      }
    }
    ```

    </details>

    Commit the change. Also, confirm that there are currently no additional branches on Gitlab.

1. Back in your local terminal, add, commit and push your `rainfall_solution` branch to Gitlab.
    > Since this is a new local branch that Gitlab has no knowledge of, we need to specify the `--set-upstream` (or `-u` for short)
    > ```shell
    > $ git push -u origin rainfall_solution
    > ```
    > after the initial set-up for a new branch, the regular `git push` will work.

1. Open the link that is displayed in the output of the previous push command and create a merge request on Gitlab. Are you able to merge?

1. In the terminal, attempt to pull Gitlab's `master` branch into our local `rainfall_solution` branch.
    > ```shell
    > $ git pull origin master
    > ```
    >
    > Note: the pull command above does not update your "local" master branch, so when creating a new feature branch, make sure to pull again on master.
    >
    > Alternative (longer) method: checkout master, pull, checkout rainfall_solution, merge master.

1. Resolve all conflicts, push to Gitlab and attempt to merge the merge request once again.
    > May also want to locally checkout the `master` branch, `git log`, then `git pull` and `git log`.

# Corrections from today's tutorial!

#### 1. Re-iterating let and const
#### 2. Merge Conflicts, why ours didn't conflict
#### 3. List Comprehension in JAVASCRIPT (and not python lol)

-------------------------------------------------------------
## 1: Re-iterating let and const
During the tutorial we talked about how const just means a variable can not be reassigned. So,
for example, if we define `const lst = [];` we can still push elements into the list, i.e. `lst.push(5);`, we just can't
reassign it i.e. we can't say `lst = 5`.

We then talked about the way for loops work. Just wanted to clear up that in the following loop:

`for (let i = 0; i < numArray.length; i++)...`

i must be declared as let and not const. However, when we use a for of loop, we can declare it as const:

`for (const element of numArray)...`

Can anyone tell me why this is?

-------------------------------------------------------------

## 2: Merge Conflict

The conflict didn't occur simply because I merged the wrong branches! Since this was very similar to
the activity in your labs last week, I won't go into detail - email if you have questions!

-------------------------------------------------------------

## 3: List comprehension in Javascript

#### IMPORTANT: Typical list comprehension in Javascript involves the use of map. This will only be taught in week 4, so I was jumping the gun! We will come bacl to this later. The syntax we saw in class (i.e. [for (x of iterable) if (condition) x]) has been removed from javascript and is not standard anymore.

I accidentally went into pytho during the tutorial! Not great form, but mistakes do happen - hope this wasn't too confusing!
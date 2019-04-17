# Tricks and Tools for TypeScript

This repository contains some of my more generic pieces of TypeScript code that I use over multiple projects.
Some of them may be of interest to others, which is why they're open source.


# `Optional` type

The file `optional.ts` contains an `Optional` type and several simple functions to work with it. It can be
used with any non-boolean type, but my recommendation is to use it with objects and arrays.

Here is an example of working with the types:

```javascript

import { isEmpty, map, none, Optional } from 'optional'


interface User {
  name: string
}

const aUser: Optional<User> = { name: "Mario" }

map(aUser, u => console.log(u.name))

const noUser: Optional<User> = none

console.log(isEmpty(map(aUser, u => console.log(u.name))))
console.log(orElse(noUser, "No user provided"))

```

## Name clashes?

If you can't or won't import the `map`, `flatMap` or other functions because they clash with similar functions
from libraries like `rxjs`, you can simply use `Optional.map`, all functions are also available as members of
`Optional`

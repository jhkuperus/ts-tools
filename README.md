# Tricks and Tools for TypeScript

This repository contains some of my more generic pieces of TypeScript code that I use over multiple projects.
Some of them may be of interest to others, which is why they're open source.


# `Optional` type

The file `optional.ts` contains an `Optional` type and several simple functions to work with it. It can be
used with any non-boolean type, but my recommendation is to use it with objects and arrays.

Here is an example of working with the types:

```javascript

import { map, none, Optional } from 'optional'


interface User {
  name: string
}

const aUser: Optional<User> = { name: "Mario" }

map(aUser, u => console.log(u.name))

const noUser: Optional<User> = none

console.log(orElse(noUser, "No user provided"))

```

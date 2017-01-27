FUNCTIONAL PROGRAMMING IS A PROGRAMMING PARADIGM.
IT AIMS TO REDUCE SIDE EFFECTS ON FUNCTION CALLS via PURE FUNCTIONS.
it is based on lambda calculus.

Functional programming is programming without assignment statements
(Uncle Bob)

Expression Based programming paradigm, viz. Using Expressions as opposed to Statements,
and combining expressions to form functions and combining functions to achieve complex behaviours.

STATEMENT VS EXPRESSIONS

Statement = imperative programming construct which may and ma not return a value and hence may cause side effects
Expression = will always return a value and will have no side effects

key concepts: IMMUTABILITY and NO SIDE EFFECTS

In functional programming languages, functions are FIRST CLASS entities, thus they can be passed
as arguments to other functions.

This has many important implications.

Functions that take other functions as inputs are called HIGHER ORDER FUNCTIONS
an example of Higher order functions are FUNCTION DECORATORS

CURRYING

the idea of currying is: if I have a function that takes 3 arguments, I can perform a mathematical
transformation over it and turn it into 3 functions that take one argument and get called on the result of the previous
function, in sequence

PARTIAL APPLICATION

partial application fixes a number of arguments to a function,
producing another function of smaller ARITY (fewer number of arguments)

ARITY = the number of arguments a function takes

PURE FUNCTIONS

In computer programming, a function may be considered a pure function if both of the following statements
about the function hold:

The function always evaluates the same result value given the same argument value(s).
1 - The function result value cannot depend on any hidden information or state that may change while program execution proceeds or between different executions of the program,
nor can it depend on any external input from I/O devices (usually—see below).
2 - Evaluation of the result does not cause any semantically observable side effect or output, such as mutation of mutable objects or output to I/O devices (usually—see below).

HIGHER ORDER FUNCTIONS

Functions that take in a function and return a function

LAMBDA CALCULUS

CATEGORY THEORY

RECURSION

TYPE STRICTNESS

IMMUTABILITY

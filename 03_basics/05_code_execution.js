/*
JS CODE EXECUTION + CALL STACK

JS EXECUTION CONTEXT
1. {} => Global execution context (this)
    -> Function Execution Context
    -> Eval Execution Context (A property of global context) [Not very important]

2. Creation Phase or Memory creation phase.
    -> Memory allocation for variables etc.
    -> val1 -> undefined, val2 -> undefined ... etc.
    -> fun1 - > defination

3. Execution phase.
    -> Assign data to variables.
    -> Excution of called functions:
        -> A seperate execution context for the function is created.
        -> New variable environment + Execution thread.
        -> Memory Creation and execution phase for this context.
        -> Results returned to global execution context.
        -> Context gets deleted after execution.

CALL STACK IS JUST LIKE CPP : Functions which are called are put in 
stack, and nested functions keep on stacking over the parent, after
the child function call is finished first it comes out of the call
stack, then parent comes out after finishing. (LIFO)
*/

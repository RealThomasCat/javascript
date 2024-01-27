// Immediately Invoked Function Expressions (IIFE)

/*
( function () {} ) ()
*/

// NAMED IIFE
(function chai () {
    console.log(`DB CONNECTED`)
}) (); // *** IMPORTANT SEMICOLON ***

// NOTE: IIFE dont know where to stop the context,
// so we need to end it using a semicolon or else
// we will get errors

// Won't work without above semicolon
(() => {
    console.log(`DB CONNECTED 2`)
}) ();

// PARAMETERS AND ARGUMENTS IN IIFE
((name) => {
    console.log(`${name}`)
}) ('Tom');
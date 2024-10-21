let score = "33abc"

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score) // datatype write in First capital
console.log( "\n",typeof(valueInNumber))

/*
 convertion into Number
 Null => 0
 undefine => NaN   , but its type is Number
 "Mujtaba" => NaN  , but its type is Number
 "34" => 34 
 true => 1 ; false => 0
 
 */

 let A = Boolean("")
 let B = Boolean("abc")
 let C = Boolean("1")
 let D = Boolean("0")
 let E = Boolean(null)
 let F = Boolean(undefined)


//  console.table([
//     { Variable: "emptystring", Value: A, Type: typeof(A) },
//     { Variable: "abc", Value: B, Type: typeof(B) },
//     { Variable: "1", Value: C, Type: typeof(C) },
//     { Variable: "0", Value: D, Type: typeof(D) },
//     { Variable: "null", Value: E, Type: typeof(E) },
//     { Variable: "undefiend", Value: F, Type: typeof(F) }
// ]);

/* converting into bool
 1 => true
 0 => flase
 "Mujtaba" => ture
 undefiend => false
 null => false
*/

let g = String(1)
let h = String(undefined)
let i = String(null)

console.table([
    {variable:"g", value:g, type: typeof(g)},
    {variable:"h", value:h, type: typeof(h)},
    {variable:"i", value:i, type: typeof(i)}
])

/* converting into string
 1 => "1"
 0 => "0"
 null=> 
 undefiend => "undefined"
 null => "null"
*/

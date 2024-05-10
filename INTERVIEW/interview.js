// // bind()
// // The official docs say:
// // The bind() method creates a new function that,
// // when called, has its this keyword set to the provided value.
// // (It actually talks about even more stuff, but we’ll leave that for another time :) )


// var pokemon = {
//     firstname: 'Pika',
//     lastname: 'Chu ',
//     getPokeName: function() {
//         var fullname = this.firstname + ' ' + this.lastname;
//         return fullname;
//     }
// };

// var pokemonName = function() {
//     console.log(this.getPokeName() + 'I choose you!');
// };

// var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

// logPokemon(); // 'Pika Chu I choose you!'





// // call(), apply()
// // The official docs for call() say: 
// // The call() method calls a
// //  function with a given this value and arguments provided individually.
// // call() expects all parameters to be passed in individually,
// //  whereas apply() expects an array of all of our parameters. Example:
// var pokemon = {
//     firstname: 'Pika',
//     lastname: 'Chu ',
//     getPokeName: function() {
//         var fullname = this.firstname + ' ' + this.lastname;
//         return fullname;
//     }
// };

// var pokemonName = function(snack, hobby) {
//     console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
// };

// pokemonName.call(pokemon,'sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms
// pokemonName.apply(pokemon,['sushi', 'algorithms']); // Pika Chu  loves sushi and algorithms


// function show(a,callme){
//     console.log("hi my name is ",a)

// }
// function dem(){
//     a="you have been selected"
//     return(a)
// }
// show("sagarika",dem())

// function show(a,callme){
//     console.log("Hi my name is",a)
//     callme()

// }

// show("sagarika",function(){
//     console.log ("you have been selected")
// })


// function sum(){
//     return function mult(){
//         console.log("return")
//     }
// }
// sum()()

// sum=function hel(){
//     console.log("hi")
// }
// sum()


/**
 * Created by Margaret on 1/27/2016.
 */

birds = ["Parrot", "Chicken", "Dodo", "Owl"];

birds[1] = "Eagle";   //replace element 1 with "Eagle"
birds[5] = "Sparrow";  //JS lets you do this...
// Empty elements are added to fill in the gaps.
console.log(birds);

birds[4] = "Jay";   //Fil in the blank element
console.log(birds);

var firstBird = birds[0];    //Get a copy of data from the array
var thirdBird = birds[2];
console.log(firstBird, thirdBird);  // like PYTHON, commas can be separators

lastBird = birds.pop();         //Removes last item and returns it
console.log(lastBird, birds);
birds.push("Seagull");          //Push adds new element to end of array
console.log(birds);

// can mimic queue with pop and shift - actually UNshift
firstBird = birds.shift();      //Remove and returns first element SHIFTING LEFT
console.log(firstBird, birds);
birds.unshift("Wren");          //Add element to start of array MAKING ROOM AT THE FRONT
console.log(birds);

var spliced = birds.splice(4,1); // goes from where you start for how many
console.log('MBE spliced the array', birds, spliced);  // cut

var sliced = birds.slice(1,3); // goes from in to end
console.log('MBE sliced the array', birds, sliced);  // copy


//How many elements in the array?
numberOfBirds = birds.length;
console.log(numberOfBirds);

// you can add an array element at element 40 when you only have 3, then you have up to element 40 - can help you size an array; can enable you to leave fields blank if stored in array

//Where is an element in the array? Return index if found, -1 if not
console.log(birds.indexOf("Owl"));    // 3
console.log(birds.indexOf("Penguin"));    // -1

//Loop over array

for (var j = 0 ; j < birds.length ; j++) {
    console.log("Bird " + j + " is " + birds[j]);
}

birds.reverse();  //Reverse order of elements
console.log(birds);

birds.sort();   //arrange array in ascending order.
                // alpha or numerical sorts work
                // How would you sort in descending order?
console.log(birds);

var allBirds = birds.join();  //Join all elements into a string,
// separated by commas
var allBirdsWithSeparator = birds.join(" % ");  //Join all elements,
// connected with a custom string
console.log(allBirds);
console.log(allBirdsWithSeparator);
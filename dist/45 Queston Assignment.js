//Question2 and 10
//Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
console.log("\t Question no.2");
const name = "Arham"; //My name
console.log("Hello " + name + ", would you like to learn some Python today?"); //Printing my name with a message
console.log();
//Question3 and 10
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase
// Step 1: Store the person's name in a variable
console.log("\t Question no.3");
let personName = "arham Afzal";
// Step 2: Print the name in lowercase
console.log("Lowercase:", personName.toLowerCase());
// Step 3: Print the name in uppercase
console.log("Uppercase:", personName.toUpperCase());
// Step 4: Manually convert the name to titlecase
console.log("Tiitlecase:", personName.replace(/\b\w/g, (c) => c.toUpperCase()));
//Question4
//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks.
console.log("\t Question no.4");
const famousQuote = "“If you can dream it, you can do it.”";
const author = "Davinchi";
console.log(`Once ${author} said,${famousQuote}`);
console.log();
//Question5
//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message
console.log("\t Question no.5");
const famous_person = "Davinchi";
const famousQuote2 = "“If you can dream it, you can do it.”";
const message = `Once${famous_person}said,${famousQuote2}`;
console.log(message);
console.log();
//Question6
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
console.log("\t Question no.6");
let Name = "\n\t Arham Afzal \t\n";
console.log(" with whitespaces");
console.log(Name);
let withoutWitespace = Name.trim();
console.log("without whitespaces");
console.log(withoutWitespace);
//Question 7
//Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
console.log("\t Question no.7");
const additionresult = 5 + 3;
console.log("Addition of 5+3=", additionresult);
const subtractionresult = 10 - 2;
console.log("Subtraction of 10-2=", subtractionresult);
const multiplicationresult = 4 * 2;
console.log("Multiplication of 4*2=", multiplicationresult);
const divisionresult = 16 / 2;
console.log("Division of 16/2=", divisionresult);
console.log();
//Question 8
console.log("\t Question no.8");
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
console.log();
//Question 9
//Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
console.log("\t Question no.9");
const myfavouriteNumber = 7;
console.log(`My favorite numberis"${myfavouriteNumber}"`);
console.log();
//Question 11
//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
console.log("\t Question no.11");
const friends = ["Asad", "Ibrahim", "waiz", "waqas"];
for (let q = 0; q < friends.length; q++) {
    console.log(friends[q]);
}
console.log();
//Question 12
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
console.log("\t Question no.12");
const friend = ["Asad", "Ibrahim", "waiz", "waqas"];
for (let q = 0; q < friends.length; q++) {
    console.log(`Hello ${friends[q]}`);
}
console.log();
//Question 13
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.
console.log("\t Question no.13");
const transportation = ["Honda 125", "Honda city", "Audi Etron"];
for (let q = 0; q < transportation.length; q++) {
    console.log(`"I would like to own a ${transportation[q]}"`);
}
console.log();
//Question 14
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
console.log("\t Question no.14");
const guestList = ["Asad", "Ibrahim", "waiz", "waqas"];
guestList.map((guest) => console.log(`Dear ${guest} , you are invited to the dinner`));
console.log();
//Question 15
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite
console.log("\t Question no.15");
const guestList2 = ["Asad", "Ibrahim", "waiz", "waqas"];
const unabletoattend = "Asad";
const newGuest = "Ali";
const index = guestList2.indexOf(unabletoattend);
if (index !== -1) {
    guestList2[index] = newGuest;
}
guestList2.map((guest) => console.log(`Dear ${guest} you are invited to dinner`));
console.log();
//Question 16
/*Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/
console.log("\t Question no.16");
const guestList3 = ["Asad", "Ibrahim", "waiz", "waqas"];
console.log("Congrats! we found a bigger table");
guestList3.unshift("Ali Raza");
guestList3.splice(Math.floor(guestList3.length / 2), 0, "Anas");
guestList3.push("Ameer Hamza");
guestList3.map((guests) => console.log(`Dear ${guests} you all are invited to dinner`));
console.log();
//Question 17
/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program*/
console.log("\t Question no.17");
let newGuestlist = [
    "Ali Raza",
    "Asad",
    "Anas",
    "Ibrahim",
    "waiz",
    "waqas",
    "Ameer Hamza",
];
console.log("Unfortunately! new dinner table won't arrive in time for the dinner,so we can invite only two guests.");
console.log();
while (newGuestlist.length > 2) {
    let removeGuests = newGuestlist.pop();
    if (removeGuests !== undefined) {
        console.log(`Sorry! ${removeGuests}, we can't invite you`);
    }
}
newGuestlist.map((guest) => {
    console.log(`Dear ${guest} you are still invited`);
});
console.log();
//Question18
/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
console.log("\t Question no.18");
//Original order
const PlacestoVisit = ["Paris", "Giza", "Kashmir", "Damascus"];
console.log("Original Order", PlacestoVisit);
console.log();
//In Alphabetical Order
const sortedarray = PlacestoVisit.slice().sort();
console.log("In Alphabetical Order", sortedarray);
console.log();
//Original order
console.log("Original Order After Sorting", PlacestoVisit);
console.log();
//Reverse Alphabetic Order
let reverseAlphabeticalOrder = PlacestoVisit.slice().sort().reverse();
console.log("Reverse Alphabetic Order", reverseAlphabeticalOrder);
console.log();
//Original order
console.log("Original Order After Reverse Alphabetic Order", PlacestoVisit);
console.log();
//Reverse order
console.log("Reverse original array order ", PlacestoVisit.reverse());
console.log();
//Reversing Again
console.log("Reverse original array order ", PlacestoVisit.reverse());
console.log();
//Sorting original array
console.log("Sorting original array ", PlacestoVisit.sort());
console.log("original order after sorting", PlacestoVisit);
console.log();
//last point
PlacestoVisit.slice().sort().reverse();
console.log("Reverse Alphabetic Order", reverseAlphabeticalOrder);
console.log();
console.log();
//Question 19
/*Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.*/
console.log("\t Question no.19");
const guestList4 = ["Asad", "Ibrahim", "waiz", "waqas"];
for (let w = 0; w < guestList4.length; w++) {
    console.log(`"Dear ${guestList4[w]},I would like to invite you to dinner?"`);
}
console.log();
//Question 20
/*Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.*/
console.log("\t Question no.20");
let countries = ["USA", "Canada", "Germany", "France", "Japan"];
countries.map((country) => {
    console.log(country);
});
console.log();
//Question 21
/*They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.*/
console.log("\t Question no.21");
const person1 = {
    Name: "Arham",
    Age: 19,
    City: "Lahore",
    Skills: ["Graphic Designer", "web Designer"],
};
console.log("Person Details :-");
console.log("Name=", person1.Name);
console.log("Age=", person1.Age);
console.log("City=", person1.City);
console.log("Skills=", person1.Skills);
console.log();
//Question 22
/*If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.*/
console.log("\t Question no.22");
let myfavouriteFruits = ["apple", "banana", "grapes", "guava"];
console.log("intentional index error", myfavouriteFruits[10]);
console.log("After correcting error=", myfavouriteFruits[3]);
console.log();
//Question 23
/*Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False*/
console.log("\t Question no.23");
let car = "Mercedes";
let age = 21;
let languages = ["English", "Latin", "Spanish"];
let city = "Lahore";
let country = "Pakistan";
//Test 1: Equality check (True)
console.log("Is car == 'Mercedes'? I predict True.");
console.log(car == "Mercedes");
// Test 2: Equality check (False)
console.log("Is car == 'Toyota'? I predict False.");
console.log(car == "Toyota");
// Test 3: Numerical comparison (True)
console.log("Is age > 20? I predict True.");
console.log(age > 20);
// Test 4: Numerical comparison (False)
console.log("Is age < 20? I predict False.");
console.log(age < 20);
// Test 5: String comparison (True)
console.log("Is city == 'Lahore'? I predict True.");
console.log(city == "Lahore");
// Test 6: String comparison (False)
console.log("Is city == 'Los Angeles'? I predict False.");
console.log(city == "Los Angeles");
// Test 7: More String comparison (True)
console.log("Is country == 'Pakistan'? I predict True.");
console.log(country == "Pakistan");
// Test 8: More String comparison (False)
console.log("Is country == 'India'? I predict False.");
console.log(country == "India");
// Test 9: Array comparison (True)
console.log("Does languages include 'English'? I predict True.");
console.log(languages.includes("English"));
// Test 10: Array comparison (False)
console.log("Does languages include 'Hindi'? I predict False.");
console.log(languages.includes("Hindi"));
console.log();
//Question 24
/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following*/
//• Tests for equality and inequality with strings
console.log("\t Question no.24");
let vehicle = "motorcycle";
console.log(" Tests for equality with strings");
console.log("Is vehicle == motorcycle");
console.log(vehicle == "motorcycle");
console.log("Is vehicle == car");
console.log(vehicle == "car");
console.log(" Tests for inequality with strings");
console.log("Is vehicle !== motorcycle");
console.log(vehicle !== "motorcycle");
console.log("Is vehicle !== car");
console.log(vehicle !== "car");
console.log();
//• Tests using the lower case function
let fruit = "APPLE";
let fruit2 = "apple";
console.log("Tests using the lower case function");
console.log("In case of Upper case(apple)", fruit.toLowerCase() == "apple");
console.log("In case of Upper case(APPLE)", fruit.toLowerCase() == "APPLE");
console.log();
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1 = 10;
let num2 = 20;
console.log("Numerical tests involving equality and inequality");
console.log("Is num1 == 10");
console.log(num1 == 10);
console.log("Is num1 !== 10");
console.log(num1 !== 10);
console.log();
//• Tests using "and" and "or" operators
let car2 = "Mercedes";
let age2 = 21;
console.log("Tests using OR operator");
console.log("Is car == Mercedes ||  age ==21 I predict true");
console.log(car2 == " Mercedes" || age2 == 21);
console.log("Is car == Toyota ||  age ==20 I predict false");
console.log(car2 == " Toyota" || age2 == 20);
console.log();
console.log("Tests using AND operator");
console.log("Is car == Mercedes &&  age ==21 I predict true");
console.log(car == "Mercedes" && age == 21);
console.log("Is car == Toyata &&  age ==21 I predict true");
console.log(car == "Toyota" && age == 21);
console.log();
//• Test whether an item is in a array
let outfits = ["shirts", "pants", "caps"];
console.log("Test whether an item is in a array:-");
console.log("Is shirts in outfits? I predict true");
console.log(outfits.includes("shirts"));
console.log("Is shorts in outfits? I predict false");
console.log(outfits.includes("shorts"));
console.log();
//• Test whether an item is not in a array
console.log("Test whether an item is not in a array:-");
console.log("Is shorts in outfits? I predict false");
console.log(outfits.includes("shorts"));
console.log();
//Question 25
/*Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)*/
console.log("\t Question no.25");
let alien_color = "green";
if (alien_color == "green") {
    console.log("player has earned 5 points.");
}
else if (alien_color == "red") {
    console.log();
}
console.log();
//Question 26
/*Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block*/
console.log("\t Question no.26");
let aliencolor = "green";
if (aliencolor == "green") {
    console.log("player has earned 5 points.");
}
else {
    console.log("player has earned 10 points.");
}
console.log();
let aliencolor2 = "red";
if (aliencolor2 == "green") {
    console.log("player has earned 5 points.");
}
else {
    console.log("player has earned 10 points.");
}
console.log();
//Question 27
/*Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/
console.log("\t Question no.27");
console.log("For else if chain");
console.log("Version 1");
let alien_color1 = "green";
if (alien_color1 == "green") {
    console.log("player has earned 5 points(green color).");
}
else if (alien_color1 == "yellow") {
    console.log("player has earned 10 points(yellow color).");
}
else if (alien_color1 == "red") {
    console.log("player has earned 15 points(red color).");
}
console.log();
console.log("Version 2");
let alien_color2 = "yellow";
if (alien_color2 == "green") {
    console.log("player has earned 5 points(green color).");
}
else if (alien_color2 == "yellow") {
    console.log("player has earned 10 points(yellow color).");
}
else if (alien_color2 == "red") {
    console.log("player has earned 15 points(red color).");
}
console.log();
console.log("Version 3");
let alien_color3 = "red";
if (alien_color3 == "green") {
    console.log("player has earned 5 points(green color).");
}
else if (alien_color3 == "yellow") {
    console.log("player has earned 10 points(yellow color).");
}
else if (alien_color3 == "red") {
    console.log("player has earned 15 points(red color).");
}
//Question 28
/*Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

• If the person is age 65 or older, print a message that the person is an elder*/
console.log("\t Question no.28");
let age1 = 20;
if (age1 < 2) {
    console.log("The person is a baby.");
}
else if (age1 >= 2 && age1 < 4) {
    console.log("The person is a toddler.");
}
else if (age1 >= 4 && age1 < 13) {
    console.log("The person is a kid.");
}
else if (age1 >= 13 && age1 < 20) {
    console.log("The person is a teenager.");
}
else if (age1 >= 20 && age1 < 65) {
    console.log("The person is an adult.");
}
else if (age1 >= 65) {
    console.log("The person is an elder.");
}
console.log();
//Question 29
/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/
console.log("\t Question no.29");
let favorite_fruits = ["apple", "orange", "banana"];
if (favorite_fruits.includes("apple")) {
    console.log("You really like apples");
}
else if (favorite_fruits.includes("orange")) {
    console.log("You really like oranges");
}
else if (favorite_fruits.includes("banana")) {
    console.log("You really like banana");
}
else if (favorite_fruits.includes("papaya")) {
    console.log("You don't  like papaya");
}
else if (favorite_fruits.includes("cherry")) {
    console.log("You don't  like cherry");
}
console.log();
//Question 30
/*Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again*/
console.log("\t Question no.30");
let greeting = ["Admin", "Arham", "Asad", "Ali ", "Waiz"];
for (let i = 0; i < greeting.length; i++) {
    if (greeting[i] == "Admin") {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else {
        console.log("Hello " + greeting[i] + ", thank you for logging in again");
    }
}
console.log();
//Question 31
/*No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed*/
console.log("\t Question no.31");
let greetings = ["Admin", "Arham", "Asad", "Ali ", "Waiz"];
greetings = [];
if (greetings.length === 0) {
    console.log(" We need to find some users!");
}
else {
    for (let i = 0; i < greetings.length; i++) {
        if (greetings[i] == "Admin") {
            console.log("Hello Admin, would you like to see a status report?");
        }
        else {
            console.log("Hello " + greetings[i] + ", thank you for logging in again");
        }
    }
}
console.log();
//Question 32
/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/
console.log("\t Question no.32");
let current_users = ["Arham", "Afzal", "User1", "User2", "Waiz"];
let new_users = ["John", "WAIZ", "user1", "Ali", "AfZAl"];
new_users.forEach((newOne) => {
    let condition = current_users.some((current) => current.toLowerCase() === newOne.toLowerCase());
    if (condition) {
        console.log(newOne + " is not available");
    }
    else {
        console.log(newOne + " is available");
    }
});
console.log();
//Question 33
/*Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.

• Loop through the array.

• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.*/
console.log("\t Question no.33");
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == 1) {
        console.log(numbers[i] + "st");
    }
    else if (numbers[i] == 2) {
        console.log(numbers[i] + "nd");
    }
    else if (numbers[i] == 3) {
        console.log(numbers[i] + "rd");
    }
    else {
        console.log(numbers[i] + "th");
    }
}
console.log();
//Question 34
/*Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!*/
console.log("\t Question no.34");
let pizzas = ["pepperoni", "cheese", "chicken"];
for (let i = 0; i < pizzas.length; i++) {
    console.log("I like " + pizzas[i] + " pizza");
}
console.log("I really love pizza");
console.log();
//Question 35
/*Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!*/
console.log("\t Question no.35");
let animals = ["dog", "cat", "rabbit"];
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i] + " would make a great pet");
}
console.log("Any of these animals would make a great pet");
console.log();
//Question 36
/*T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.*/
console.log("\t Question no.36");
function make_shirt(size, message) {
    console.log(`The size of the shirt is "${size}" and the text of the shirt is "${message}"`);
}
make_shirt("L", "World is Mine");
console.log();
//Question 37
/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/
console.log("\t Question no.37");
function makeShirt(size = "large", message = "Ilove typescript") {
    console.log(`Creating a ${size} size with the ${message} prints on shirt`);
}
makeShirt();
makeShirt("Medium");
makeShirt("Small", "I love python");
console.log();
//Question 38
/*Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country. */
console.log("\t Question no.38");
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("london", "UK");
console.log();
//Question 39
/*City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned. */
console.log("\t Question no.39");
function city_country(city, country) {
    return `${city}, ${country}`;
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));
console.log();
//Question 40
/*Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.*/
console.log("\t Question no.40");
function make_album(artist, title, tracks) {
    let album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
let album1 = make_album("The Beatles", "Abbey Road");
let album2 = make_album("Pink Floyd", "The Dark Side of the Moon");
let album3 = make_album("Nirvana", "Nevermind", 13);
console.log(album1);
console.log(album2);
console.log(album3);
console.log();
//Question 41
/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.*/
console.log("\t Question no.41");
let Magicians = ["Houdini", "Copperfield", "Blaine", "Angel"];
function show_magicians(name) {
    Magicians.forEach((name) => console.log(name));
}
show_magicians(Magicians);
console.log();
//Question 42
/*Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.*/
console.log("\t Question no.42");
console.log("Original Magicians:");
show_magicians(Magicians);
function make_great(names) {
    return Magicians.map((name) => `The Great ${name} `);
}
make_great(Magicians);
console.log("\nGreat Magicians:");
show_magicians(Magicians);
console.log("\n");
//Question 43
/*Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/
console.log("\t Question no.43");
function make_great_copy(names) {
    let great_magicians = [];
    for (let name of names) {
        great_magicians.push(name + " the Great");
    }
    return great_magicians;
}
let great_magicians_copy = make_great_copy([...Magicians]);
console.log("Original Magicians:");
show_magicians(Magicians);
console.log("\nGreat Magicians:");
show_magicians(great_magicians_copy);
console.log();
//Question 44
/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.*/
// Function to make a sandwich with the given items
console.log("\t Question no.44");
function make_a_sandwich(...items) {
    console.log("\nMaking a sandwich with the following items:");
    items.forEach((element) => {
        console.log(`- ${element}`);
    });
}
make_a_sandwich("ham", "cheese", "lettuce");
make_a_sandwich("turkey", "bacon", "tomato", "avocado");
make_a_sandwich("peanut butter", "jelly");
console.log();
//Question 45
/*Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly. */
// Define the function with required parameters and arbitrary keyword arguments
console.log("\t Question no.45");
function createCar(manufacturer, modelName, options) {
    const car = {
        manufacturer: manufacturer,
        modelName: modelName,
    };
    for (const key in options) {
        if (options.hasOwnProperty(key)) {
            car[key] = options[key];
        }
    }
    return car;
}
const myCar = createCar("Toyota", "Corolla", {
    color: "red",
    year: 2021,
    sunroof: true,
});
console.log(myCar);
export {};

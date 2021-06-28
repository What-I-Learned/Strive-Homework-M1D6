/*
    ASSIGNMENT RULES
    - All the answers must be written in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for help, reach the Teaching Assistants if needed
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or de-commenting the single exercises in this one.
      You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account and upload repository link on Eduflow before 16.30 (Berlin Time) 
*/

//JS Basics

/* Ex.A
   Create a variable called "test" and assign a string to it.
*/

let test = "Hello";

/* Ex.B
    Create a variable called "sum" and assign to it the result of the sum between 10 and 20.
*/

let sum = 10+30

/* Ex.C 
    Create a variable called "random" and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/

let random = Math.floor(Math.random()*20)
console.log(random);

/* Ex.D
    Create a variable called "me" and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/

let me = {
    name:"Justas",
    surname: "Petrauskas",
    age:32,

}

/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/

delete me.age


/* Ex.F 
   Programmatically add to the object me an array called "skills", containing the programming languages you know right now.
*/

me.skills =["I","'M","STILL","LEARNING","JavaScript", "I", "Know", "ONLY A BIT OF C#/C++"]

/* Ex.G 
   Programmatically remove the last skill from the "skills" array inside the "me" object.
*/

me.skills.pop();

// JS Functions
/* Ex.1
    Write a function called "dice"; it should randomize an integer number between 1 and 6.
*/

function dice(){
    return Math.floor(Math.random()*6)+1
}

/* Ex.2 
    Write a function called "whoIsBigger" which receives 2 numbers as parameters and returns the biggest one.
*/

function whoIsBigger(a,b){
    return a>b?a:b
}

/* Ex.3
    Write a function called "splitMe" which receives a string as a parameter and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/

function splitMe(str){
    return str.split(' ');
}

/* Ex.4
    Write a function called "deleteOne" which receives a string and a boolean as parameters. 
    If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/

function deleteOne(str, bl){
    return bl?str.slice(1):str.slice(0,-1)
}

/* Ex.5
   Write a function called "onlyLetters" which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs")  => returns "I have  dogs"
*/

function onlyLetters(str){
    return str.replace(/[0-9]/g,'')
}


/* Ex.6 
   Write a function called "isThisAnEmail" which receives a string as a parameter and returns true if the string is a valid email address.
*/
function isThisAnEmail(str) {
    let email = str.toLowerCase();
    // check if email contains @
    if(email.indexOf("@")==-1){
        return false
    }
    // split email into 2 parts
    let emailArr = email.split('@')

    // check if there is a dot in the second part 
    // check if dot is not the first character after @ 
    let dots = emailArr[1].split('.')
    let dot = emailArr[1].indexOf(".")
    
    if(dot ==-1 || dot<2){
        return false
    }
    // check if the dot is not the last character in the email
    console.log(dots.length);
    for(let i=0;i<dots.length; i++){
        if(dots[i].length == 0){
            return false
        }
    }
    
}


/* Ex.7
   Write a function called "whatDayIsIt" that should return the current day of the week.
*/

function whatDayIsIt(){
    let week = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    let day=new Date().getDay()
    return week[day-1]
}


/* Ex.8
    Write a function called "rollTheDices" which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a "sum" property holding the sum of all values extracted
    and a "values" array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/

function rollTheDices(num){
    let diceInfo ={
        sum:0,
        values:[],
    }
    for (let i=0;i<num;i++){
        diceInfo.values[i] = dice()
        diceInfo.sum+=diceInfo.values[i];
    }
    return diceInfo
}


/* Ex.9
   Write a function called "howManyDays" which receives a date as a parameter and should return the number of days passed since that date.
*/
function howManyDays(d){
    let oneDay = 1000 * 60*60*24;
    let today = new Date()
    let someDate = new Date(d)
    console.log(someDate.getFullYear());

    let dayDiff = Math.floor((today.getTime() - someDate.getTime())/oneDay);
    console.log(`${today} - ${someDate} = ${dayDiff}`);
 

    return dayDiff
}
console.log(howManyDays('2021,6,25'));
/* Ex.10
   Write a function called "isTodayMyBirthday" which should return true if today's your birthday, false otherwise.
*/

function isTodayMyBirthday(){
    const today = new Date()
    const myBday = new Date('1989,4,21')
    return myBday.getDate()== today.getDate() && myBday.getMonth()==today.getMonth() == myBday.getFullYear() == today.getFullYear()
}

// JS Arrays // Objs
// NOTE: movies array is defined at the end of this file!

/* Ex.11
   Write a function called "deleteProp" which receives an object and a string as parameters, 
   and returns the given object after deleting its property named as the given string.
*/

function deleteProp(obj,str){
    return delete obj[str];
}

/* Ex.12 
    Write a function called "olderMovie" which finds the oldest movie in the array provided at the end of this file.
*/
function olderMovie(){
    let oldest = movies[0];
    
    for(let i =0; i<movies.length;i++){
        if(movies[i].Year<oldest.Year){
            oldest = movies[i]
        }
    }
    return oldest
}
/* Ex.13
    Write a function called "countMovies" which returns the number of movies contained in the array provided at the end of this file.
*/
function countMovies() {
    return movies.length
}

/* Ex.14
    Write a function called "onlyTheTitles" which creates an array with just the titles of the movies provided in the array at the end of the file.
*/
function onlyTheTitles() {
    let titleArr=[]
    for(let movie of movies){
        titleArr.push(movie.Title)
    }
    return titleArr
}
/* Ex.15
   Write a function called "onlyInThisMillennium" which returns only the movies produced in this millennium.
*/
function onlyInThisMilennium() {
    return movies.filter(movie=> movie.Year>1999?console.log(movie):movie++)
}

/* Ex.16 
    Write a function called "getMovieById" which receives an id as a parameter and returns the movie with the given id.
*/
function getMovieById(id){
    
    let idResult = movies.find(movie => movie.imdbID === id)
    return idResult
}
/* Ex.17
    Write a function called "sumAllTheYears" which returns the sum of all the years in which the movies provided have been produced.
*/

function sumAllTheYears(){
    let sumYears=0;
    for(let movie of movies){
        sumYears += +(movie.Year)
    }
    return sumYears
}

/* Ex.18
    Write a function called "searchByTitle" which receives a string as a parameter and returns all the movies which contain that string in the title.
*/

function searchByTittle(str){
    let matchingMovies = []
    movies.filter(movie =>movie.Title.toLowerCase().includes(str.toLowerCase())?matchingMovies.push(movie):movie++ )
    return matchingMovies

}

/* Ex.19
    Write a function called "searchAndDivide" which receives a string as a parameter and returns an object;
    this object should contain an array called "match", made by all the movies which contain the given string in the title,
    and another array "unmatch" with all the remaining ones.
*/

function searchAndDivide(str){
    let sortedByStr={
    matchingMovies:[],
    notMatchingMovies: [],
    }

    movies.filter(movie =>movie.Title.toLowerCase().includes(str.toLowerCase())?sortedByStr.matchingMovies.push(movie):sortedByStr.notMatchingMovies.push(movie))
    return sortedByStr
}

/* Ex.20
   Write a function called "removeIndex" which receives a number as a parameter and returns 
   the movies array without the element in the given position.
*/

function removeIndex(num){
     movies.splice(num,1);
     return movies
}

// [EXTRAS] JS Advanced

/* Ex.21
  Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.
  Example:
  halfTree(3)
  *
  **
  ***
*/
function halfTree(num){
    for(let row =0;row<=num;row++){
        let star = ''
        for(let col=0;col<1;col++){
            star+=' ';
        }
        for(let j=0;j<row;j++){
            star+='*';
        }
        console.log(star);
    }
}

/* Ex.22 
  Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/
function tree(num){
    for(let row =0;row<=num;row++){
        let star = ''
        for(let col=row;col<=num;col++){
            star+=' ';
        }
        for(let j=0;j<(row*2)-1;j++){
            star+='*';
        }
        console.log(star);
    }

}

/* Ex.23
  Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.
*/

// Prime number can only be divided by 1 and itself
function isItPrime(num){
    // to set the range
    let s = Math.sqrt(num)
    for (let i = 2 ; i <= s; i++){
        console.log(i);
        if (num % i === 0) {
            return false;
        }
    } 
    // number is bigger than 1
    return num > 1;
}

/* This movies array is used throughout the exercises. Please don't change it :)  */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
]

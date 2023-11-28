// // showNumbers(10);

// // function showNumbers(limit) {
// //     for (let i = 0; i <= limit; i++) {
// //     //     if (i % 2 === 0) console.log(i, 'EVEN')
// //     //     else console.log(i, 'ODD')
// //     // }
// //     const message = (i % 2 === 0) ? 'EVEN' : 'ODD'
// //     console.log(i, message)
// // }
// // }

// // const person = {
// //     name: 'Mosh',
// //     age: 30
// // }

// // for (let key in person)
// // console.log(key, person[key])

// // function createCircle (radius, location) {
// //     return {
// //         radius,
// //         location,
// //         draw: function() {
// //             console.log('draw');
// //         }
// //     };
// // }

// // const circle1 = createCircle(1, 1);
// // console.log(circle1);

// // function Circle (radius, location) {
// //     this.radius = radius,
// //     this.location = location,
// //     this.draw = function() { {
// //         console.log('draw')
// //     }
// // }
// // }

// // const circle = new Circle(1, 1);
// // console.log(circle);

// // const circle = {
// //     radius: 1,
// //     draw() {
// //         console.log('draw')
// //     }
// // }

// // for (let key in circle)
// //         console.log(key, circle[key]);

// // for (let key of Object.keys (circle))
// //     console.log(key, [key]);

// // for (let entry of Object.entries(circle))
// //     console.log(entry)

// // if ('radius' in circle) console.log('yes')

// // const another = {};

// // for (let key in circle)
// //     another[key] = circle[key]
// //     console.log(another)


// // const person = {
// //     name: 'Hassan',
// //     age: 30,
// //     fullName() {
// //         console.log('Hassan Adetola Olaitan')
// //     }
// // }

// // const human = {... person}

// // const human = Object.assign({}, person);

// // for (let key in person)
// //     human[key] = person[key];
//     // console.log(human)


// // const address = {
// //     street: 'Omojuwa',
// //     city: 'Mile 12',
// //     zipCode: 210
// // }



// // function showAddress(address) {
// //     for (let key in address)
// //     console.log(key, address[key])
// // }

// // showAddress(address)


// // function factoryAddress(street, city, zipCode) {
// //     return {
// //         street,
// //         city,
// //         zipCode
// //     };
// // };

// // const showAddress = factoryAddress('Omojuwa', 'Lagos', 'c')
// // console.log(showAddress)

// // function Constructor(street, city, zipCode) {
// //     this.street = street;
// //     this.city = city;
// //     this.zipCode = zipCode;
// // }

// // const showAddress2 = new Constructor('a', 'b', 'c')
// // const showAddress3 = new Constructor('a', 'b', 'c');

// // function areEqual(showAddress2, showAddress3) {
// //     return showAddress2.street === showAddress3.street &&
// //     showAddress2.city === showAddress3.city &&
// //     showAddress2.zipCode === showAddress3.zipCode
// // }

// // function areSame(showAddress2, showAddress3) {
// //     return showAddress2 === showAddress3
// // }

// // console.log(areEqual(showAddress2, showAddress3))
// // console.log(areSame(showAddress2, showAddress3))


// // const blogPost = {
// //     title: 'Updates',
// //     body: 'Ball',
// //     author: 'Hassan',
// //     views: "10million+ Views",
// //     comments: [
// //         {author: 'a', body:'b'},
// //     ],
// //     isLive: true
// // };

// // console.log(blogPost)

// //ARRAYS

// // const numbers = [3, 4, 1]

// // numbers.push(5, 6)

// // numbers.splice(2, 0, 'a', 'b')

// // numbers.unshift(1, 2)

// // console.log(numbers.indexOf(1, 5))
// // console.log(numbers.includes(1))
// // console.log(numbers.lastIndexOf(1))


// // const courses = [
// //     { id: 1, name: 'a' },
// //     { id: 2, name: 'b' },
// // ];

// // const course = courses.find(function(courses){
// //     return courses.name === 'a';
// // })

// // console.log(course)

// // const courses1 = [
// //     { id: 1, name: 'a' },
// //     { id: 2, name: 'b' },
// // ];

// // const course1 = courses.find(course1 => course1.id === 2);


// // console.log(course1)


// //Emptying an array

// // numbers = [1, 2, 3, 4]
// // let another = numbers;

// // Solution 1
// // numbers = [];


// // solution 2

// // numbers.length = 0;

// //solution 3

// // while (numbers.length > 0) 
// //     numbers.pop();


// // console.log(numbers)

// // const first = [1, 2, 3]
// // const second = [4, 5, 6]

// // const combined = [...first, ...second]
// // console.log(combined)


//  const numbers = [2, 1, 3];

// // for (let number of numbers)
// //     console.log(number);

// // numbers.forEach(function(number) {
// //     console.log(number)
// // });

// // numbers.forEach((number, index) => console.log(number, index))

// // const joined = numbers.join(',')
// // console.log(joined)


// // const message = 'This is my first message';
// // const parts = message.split(" ")
// // const join = parts.join(',')
// // console.log(join)


// // numbers.sort()
// // console.log(numbers);

// // numbers.reverse();
// // console.log(numbers);


// // const courses = [
// //     {id: 1, name: 'Hassan'},
// //     {id: 2, name: 'Adam'}
// // ];



// // courses.sort(function(a, b) {

// //     const nameA = a.name.toLowerCase();
// //     const nameB = b.name.toLowerCase();

// //     if(nameA > nameB) return 1;
// //     if(nameB > nameA) return -1;
// //     return 0 ;
// // });

// // console.log(courses);
// // courses.lastIndexOf

// let myArray = [ "Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri" ];

// // Add your code here

// myArray.pop()
// myArray.push('Azeez', 'Adam')

// let index = 0;
// myArray.forEach((item) => (item.index = index++));

// console.log(myArray)


// let a = ['1', '2', '3'];
// let b = ['4', '5', '6'];

// let combined = a.push.apply(a, b);
// console.log(combined)


// let originalArray = ['1', '2', '3'];
// let appendingArray = ['4', '5', '6'];

// let newArray = originalArray.concat(appendingArray);

// console.log(newArray); // returns ['1', '2', '3', '4', '5', '6']
// console.log(originalArray); // returns ['1', '2', '3']



// const numbers = [1, -1, 2, 3]

// const allPositive = numbers.every(function(value) {
//     return value >= 0;
// })

// console.log(allPositive)

// const atLeastOnePositive = numbers.some(function(value) {
//     return value >= 0;
// })

// console.log(atLeastOnePositive)

// const filtered = numbers.filter(v => v >= 0)

// const items = filtered.map(v => '<li>' + v + '</li')
// const html = items.join(' ')
// console.log(html)


// EXERCICES


// const numbers = arrayFromRange(-10, 10);

// console.log(numbers);

// function arrayFromRange(min, max) {
//     const output = [];
//     for(let i = min; i <= max; i++)
//         output.push(i)
//     return output;
// }


// const numbers = [1, 2, 3, 4];

// console.log(numbers.includes(1));

// function includes(array, searchElement) {
//     for (element in array)
//       if (element === searchElement)
//          return true;
//     return false;
// }


// const numbers = [1, 2, 3, 4];

// const output = except(numbers, [1]);

// console.log(output);

// function except(array, excluded) {
//   const output = [];
//   for (let element of array)
//     if (!excluded.includes(element))
//       output.push(element);
//   return output;
// }

// const alpha = ['a', 'b', 'c', 'd', 'e', 'f'];

// const result = except(alpha, ['a', 'c']);

// console.log(result);

// function except(array, notPartOf) {
//   const result = [];
//   for (let element of array)
//     if (!notPartOf.includes(element))
//       result.push(element);
//   return result;
// }


// const numbers = [1, 2, 3, 4];

// const output = move(numbers, 0, 0);

// console.log(output);

// function move(array, index, offset) {
//   const position = index + offset;
//   if (position >= array.length || position < 0) {
//     console.error('Invalid offset.');
//     return;
//   }

//   const output = [...array];
//   const element = output.splice(index, 1)[0];
//   output.splice(position, 0, element);
//   return output;
// }


// const numbers = [1, 2, 3, 4];

// const count = countOccurences(numbers, 1);

// console.log(count);

// function countOccurences(array, searchElement) {
//   // let count = 0;
//   // for (let n of array)
//   //   if (n === searchElement)
//   //     count++;
//   // return count;

//   return array.reduce ((accumulator, current) => {
//     const occurence = (current === searchElement) ? 1 : 0;
//     // console.log(current, accumulator, searchElement)
//     return accumulator + occurence;
//   }, 0);
// }









// FUNCTIONS


// HOISTING => This is the process of moving all function declarations to the top of the file and this is done automatically by the javascript engine excuting the code.

// ARGUMENTS

// function sum(...args) {
//   let total  = 0;
//   for (let elements of arguments)
//     total += elements;
//   return total; 
// }

// console.log(sum(1, 2, 3, 4, 5));


// REST OPERATOR
// function sum(discount, ...prices) {
//   const total = prices.reduce((a, b) => a + b) ;
//   return total * (1 - discount);
// }

// console.log(sum(0.1, 20, 30));


// function interest (principal, rate = 3.5, years = 5) {
//   // rate = rate || 3.5;
//   // years = years || 5;
//   return principal * rate / 100 * years;
// }

// console.log(interest(10000))
 
// GETTERS AND SETTERS

// const person = {
//   firstName: 'Mosh',
//   lastName: 'Hamedani',
//    set fullName(value) {
//     if (typeof value !== 'string')
//       throw new Error('Value is not a string')

//     const parts = value.split(' ')
//     if (parts.length !== 2)
//       throw new Error('Enter a first and last name'); 

//     this.firstName = parts[0];
//     this.lastName = parts[1]; 
//   }
// };

// try{
// person.fullName = 'Hassan Olaitan';
// }
// catch(e) {
//   alert(e);
// }

// console.log(person.fullName);



// this keyword
// function Video(title) {
//     this.title = title;
//     console.log(this);
// }

// const v = new Video('a');



// const video = {
//     title: 'a',
//     tags: ['a', 'b', 'c'],
//     showTags() {
//         this.tags.forEach(tag => {
//             console.log(this.title, tag)
//         }, this);
//     }
// }

// video.showTags();


// function playVideo(a, b){
//     console.log(this);
// }

// playVideo.apply({name: 'Hassan'}, [1, 2]);
// playVideo.call({ name: 'Adetola'}, 1, 2);
// playVideo.bind({name: 'Olaitan'})();

// EXERCISES

// console.log(sum([1, 2, 3, 40]));

// function sum(...items) {
//     if (items.length === 1 && Array.isArray(items[0]))
//         items = [...items[0]]

//     return items.reduce((a, b) => a + b);
// }


// const circle = {
//     radius: 2,

// }



// const numbers = [1, 2, 3, 4];

// const count = countOccurences(numbers, 1);

// console.log(count);

// function countOccurences(array, searchElement) {
//   let count = 0;
//   for (let n of array)
//     if (n === searchElement)
//       count++;
//   return count;

//   return array.reduce ((accumulator, current) => {
//     const occurence = (current === searchElement) ? 1 : 0;
//     console.log(current, accumulator, searchElement)
//     return accumulator + occurence;
//   }, 0);
// }



// const myImage = document.querySelector("img");

// myImage.onclick = () => {
//   const mySrc = myImage.getAttribute("src");
//   if (mySrc === "images/firefox-icon.png") {
//     myImage.setAttribute("src", "images/firefox2.png");
//   } else {
//     myImage.setAttribute("src", "images/firefox-icon.png");
//   }
// };


  
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function () {
//         console.log('draw')
//     }
// }

// const circle = new Circle(10);

// for (let key in circle) {
//     if (typeof circle[key] !== "function")
//     console.log(key, circle[key])
// }

// const double = (numbers) => {
//     let result = []
//     for (const number of numbers) {
//         result.push(number * 2)
//     }
    
//     return result
// }

// console.log(double([1, 2, 3, 4, 5, 6]))


// const letterCounter = () => {
//     const phrase = prompt('write your phrase')
//    return {result: phrase.length}
// }

// console.log(letterCounter())

// const sumArray = (nums) => {
//     result = 0;
//      for (const number of nums) {
//         console.log(number)
//         result = number + result
//     }
//     return { result }

// }

// let nums = [1, 2, 3, 4, 5];
// console.log(sumArray(nums))

const maxNumber = (a, b) => {
    return (a > b) ;
}

console.log(maxNumber(1, 2))



// const max = (numbers) => {
//     let result = numbers[0]


//     for (const number of numbers) {
//         if (number > result) {
//         result = number
//         }
//     }
//     return { result }
// }

// console.log(max([10000, 212, 379, 401]))




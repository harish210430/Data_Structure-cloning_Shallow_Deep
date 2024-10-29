/*

const person = {
    firstName: 'John',
    lastName: 'Doe',
  };
  
  let person2 = person;
  
  person.firstName = 'Arya';
  
  console.log(person2.firstName); // Arya, Becoz Person2 holds the Address of Person.
  console.log(person.firstName); // Arya
  console.log(person.lastName); // Doe
  console.log(person == person2); // true, Becoz Both have same Address So if one is update Another alse be Updated.
  console.log(person === person2); // true, Becoz both have same Address. 
  console.log(person.lastName === person2.lastName); // true, Becoz both have same Address. 

// 

let person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
      street: 'North 1st',
      city: 'San Jose',
      state: 'CA',
      country: 'USA',
    },
  };
  
  let personTwo = { ...person };
  
  person.firstName = 'Arya';
  person.city = 'Navada';
  console.log(personTwo);
  
  console.log(personTwo.firstName); // John, Becoz Person cloned/copy in personTwo.
  console.log(person.firstName); // Arya
  console.log(personTwo.lastName); // Doe, 
  console.log(person.firstName === personTwo.firstName); // false
  console.log(person == personTwo); // false
  console.log(person === personTwo); // false
  console.log(person.address === personTwo.address); // true
  console.log(person.address == personTwo.address) // true
  console.log(personTwo.address.city); // San Jose
  console.log(person.address.city); // San Jose
  console.log(person.address.city == personTwo.address.city); // true, Becoz Person cloned in PersonTwo


//  
let person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
      street: 'North 1st',
      city: 'San Jose',
      state: 'CA',
      country: 'USA',
    },
  };
  
  let personTwo = { ...person, address: { ...person.address } };
  
  person.firstName = 'Arya';
  person.city = 'Navada';
  
  console.log(personTwo.firstName); // John
  console.log(person.firstName); // Arya
  console.log(personTwo.lastName); // Doe
  console.log(person.firstName === personTwo.firstName); // false, Becoz they have diff. values.
  console.log(person == personTwo); // false, Becoz Both have diff. Address.
  console.log(person === personTwo); // false, Becoz Both have diff. Address.
  console.log(person.address === personTwo.address); // false, Becoz they have diff. Address. 
  console.log(person.address == personTwo.address); // false, Becoz they have diff. Address.
  console.log(personTwo.address.city); // San Jose
  console.log(person.address.city); // San Jose
  console.log(person.address.city == personTwo.address.city);// true, Becoz both have same value.
  

// 
let blogs = [
    {
      id: 1,
      title: 'Post #1',
      body: 'My first blog post',
    },
    {
      id: 2,
      title: 'Post #2',
      body: 'My second blog post',
    },
    {
      id: 3,
      title: 'Post #3',
      body: 'My third blog post',
    },
  ];
  
  // Your code goes here
  
  let clonedBlogs = [{...blogs[0]}, {...blogs[1]}, {...blogs[2]}];
  console.log(clonedBlogs);


// 
var questions = [
    {
      prompt: 'Why is the sky blue?',
      responses: [
        'Because the color blue was on sale at Wallmart',
        'Because blue is the prettiest color',
        'Because the air molecules difract blue light more than any other color',
      ],
    },
    {
      prompt: 'Why are leaves usually green?',
      responses: [
        'So green caterpillars can hide better.',
        'Because leaves can more easily make energy with green light',
        "Because leaves absorb red and blue light so it's green that is reflected",
      ],
    },
  ];
  
  // Your code goes here
  
  let questionClone = [{...questions[0], responses: [...questions[0].responses]}, {...questions[1], responses: [...questions[1].responses]} ];
  console.log(questionClone); 


// 
var allBlogs = {
    id: 1,
    title: 'Alamofire JSON Serialization',
    body: 'All about serialization in Alamofire...',
    author: {
      id: 1,
      fullName: 'Jeff Potter',
      username: 'jpotts18',
    },
    comments: [
      {
        id: 1,
        body: 'Thanks for the help Jeff, this saved me hours',
      },
      {
        id: 2,
        body: 'Your welcome. I am happy to help!',
      },
    ],
  };
  
  // Your code goes here
  
  let   allBlogsClone = {...allBlogs, author: {...allBlogs.author}, comments: [{...allBlogs.comments[0]}, {...allBlogs.comments[1]}]};
  console.log(allBlogsClone);


// 7.

let person = [
    {
      input: { name: 'Ryan' },
      output: { name: 'Ryan' },
    },
    {
      input: { name: { first: 'Ryan', last: 'Haskell-Glatz' } },
      output: { firstName: 'Ryan', lastName: 'Haskell-Glatz' },
    },
    {
      input: { name: 'Ryan', age: 24 },
      output: { name: 'Ryan', age: 24 },
    },
    {
      input: {
        name: { first: 'Ryan', last: 'Haskell-Glatz' },
        birthday: { year: 1993, month: 'Nov' },
      },
      output: {
        firstName: 'Ryan',
        lastName: 'Haskell-Glatz',
        birthdayYear: 1993,
        birthdayMonth: 'Nov',
      },
    },
  ];
  
  // Your code goes here
  
  let clonedPerson = [...person];
  console.log(clonedPerson);
  
*/
// 8. Write a function named cloneObject that accepts an object and returns the clone of the object

function cloneObject(stdInfo) {
    return {...stdInfo};
  }

  // Run the test below to check your function
   
  let stdInfo = {
    name: "Sam bahadur",
    age: 31,
    // isAdult: age > 18 ? true: false,
    friends: ["Mj. Ramachandra", "Mj. RamaSwami", "col. Rajiv Sinha"]
  };

//   cloned Obj.

let newStdInfo = {
    ...stdInfo, friends: [...stdInfo.friends]
};
console.log(cloneObject());
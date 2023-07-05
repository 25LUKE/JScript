//////////////////////// DOCUMENT OBJECT MODEL(DOM) //////////////////////
const view1 = document.getElementById("view1");
console.log(view1); 

const view2 = document.querySelector("#view2");
console.log(view2)


const view = document.querySelectorAll("div")
console.log(view)

const views = document.getElementsByClassName("view")
console.log(views)
const someView = document.querySelectorAll(".view")
console.log(someView)

const divs = view1.querySelectorAll("div")
console.log(divs)

const sameDiv = view1.getElementsByTagName('div')
console.log(sameDiv)

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)")
console.log(evenDivs);

for (let i = 0; i < evenDivs.length; i++) {
    evenDivs[i].style.backgroundColor = "darkblue";
    /* evenDivs[i].style.width = "200px";
    evenDivs[i].style.height = "200px"; */
}

const navText = document.querySelector("nav")
console.log(navText)
navText.textContent = "Hello"
const navbar = document.querySelector("nav")
navbar.innerHTML = `<h1>Hello World!</h1> <p>This should align right</>`
console.log(navbar)
navbar.style.justifyContent = "space-between"
//navbar.style.justifyContent = "space-evenly"
//navbar.style.justifyContent = "flex-start"
//navbar.style.justifyContent = "flex-end"
console.log(evenDivs[0])
console.log(evenDivs[0].parentElement)
console.log(evenDivs[0].parentElement.children)
console.log(evenDivs[0].parentElement.childNodes)
console.log(evenDivs[0].parentElement.hasChildNodes())
console.log(evenDivs[0].parentElement.lastChild)
console.log(evenDivs[0].parentElement.lastElementChild)
console.log(evenDivs[0].parentElement.firstChild)
console.log(evenDivs[0].parentElement.firstElementChild)
console.log(evenDivs[0].nextSibling)
console.log(evenDivs[0].nextElementSibling)
console.log(evenDivs[0].previousSibling)
console.log(evenDivs[0].previousElementSibling)

view1.style.display = "flex";
view2.style.display = "flex";
view2.style.flexDirection = 'row';
view2.style.flexWrap = 'wrap';
view2.style.margin = '10px';

while (view2.lastChild) {
    view2.lastChild.remove()
}

const createDivs = (parent, iter) => {
    const newDiv = document.createElement("div")
    newDiv.textContent = iter;
    newDiv.style.backgroundColor = "#000";
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.margin = "10px";
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center";
    parent.append(newDiv);
};
//createDivs(view2, 10)
for (let i = 1; i <= 12; i++) {
    createDivs(view2, i)
}

/////////////////////////// EVENT LISTENERS //////////////////////////
view3.style.display = "none"
const vie3 = document.querySelector("div")
console.log(vie3)

const div = document.querySelector("#view3")
console.log(div)

const h3 = div.querySelector("h3")
console.log(h3)

while (h3.lastChild) {
    h3.lastChild.remove()
}

const createView3 = (parent, iter) => {
    const newView = document.createElement("div")
    newView.textContent = iter;
    newView.style.backgroundColor = "brown";
    newView.style.width = "100px";
    newView.style.height = "100px";
    newView.style.margin = "10px";
    newView.style.display = "flex";
    newView.style.justifyContent = " center"
    newView.style.alignItems = "center";
    parent.append(newView);
}
createView3(h3, 1);

/* const doSomeThing = () => {
    alert("Doing Something");
}; 

h3.addEventListener("click", doSomeThing, false)
h3.removeEventListener("click", doSomeThing, false)

h3.addEventListener("click", (event) => {
    console.log(event.target);
    event.target.textContent = "Clicked";
}); */

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        console.log("ReadyState: complete")
        initApp()
    }
})

const initApp = () => {
    const view = document.querySelector("#view3");
    const div = view.querySelector("div");
    const h3 = div.querySelector("h3")

    view.addEventListener("click", (event) => {
        view.classList.toggle("purple");
        view.classList.toggle("darkblue");
    }, true)

    div.addEventListener("click", (event) => {
        view.classList.toggle("blue");
        view.classList.toggle("dark");
    }, true)

    h3.addEventListener("click", (event) => {
        const myText = event.target.textContent;
        myText === "My 2nd view"
            ? (event.target.textContent = "Clicked")
            : (event.target.textContent = "My 2nd view");
    }, true)

        
    const nav = document.querySelector("div");
    nav.addEventListener("mouseover", (event) => {
        event.target.classList.add ("height100");
    });
    nav.addEventListener("mouseover", (event) => {
        event.target.classList.remove('height100')
    });
};

///////////////////////////// WEB STORAGE ////////////////////////////
// Web Storage API;

// Not part of the DOM - refers to the Window API;
// Available to JS via global variable: window
// We do not have to type window. It is implied;
/* window.alert(window.location);
alert(location) */

const myArray = ["eat", "sleep", "code"]
const myObj = {
    name: "Dave",
    hobbies: ["eat", "sleep", "code"],
    logName: function() {
        console.log(this.name)
    }
}
//myObj.logName()

/* sessionStorage.setItem("mySession", JSON.stringify(myObj))
const mySessionData = JSON.parse(sessionStorage.getItem("mySession"))
console.log(mySessionData) */

localStorage.setItem("myLocalStorage", JSON.stringify(myArray));
//localStorage.removeItem("myLocalStorage")// nill
//localStorage.clear(); //null
const key = localStorage.key(0)
const myLocalData = JSON.parse(localStorage.getItem("myLocalStorage"));
console.log(myLocalData);

/////////////////////////// MODULES ////////////////////////////////////

/* import playGuiter from './guiters.js'
import { Shredding as shred, plucking as pluck } from './guiters.js'; */
// Another way to import
import * as Guiters from './guiters.js';
import User from './User.js';

const me = new User ("email@Dave.com", "Dave")
console.log(me)
console.log(me.greetings())
console.log(Guiters.default());
console.log(Guiters.Shredding());
console.log(Guiters.plucking());

/////////////////////// HIGHER ORDER FUNCTIONS ///////////////////////
// A higher order functions is a function that does at least one of the following
// ** Takes one or more functions as an argument (parameter) or
// ** Returns a function as its result.
import { posts } from './posts.js';
// forEach: This is going to fetch the posts in the Array
posts.forEach((post) => {
    console.log(post);
});
//console.clear();
// filter: This is going to return an Array
const filteredPosts = posts.filter((post) => {
    return post.userId === 1;
});
console.log(filteredPosts)

const mappedPost = filteredPosts.map(post => {
    return post.id *11;
})
console.log(mappedPost)
                                            //Accumulator
const reducePostValue = mappedPost.reduce((sum, post) => {
    return sum + post;
});
console.log(reducePostValue)
console.clear();

///////////////////////// FETCH/ ASYNC/ AWAIT ///////////////////////
// fetch API requires a discussion of...
// Callback, Promises, Thenables, and Async/Await
////////////////
// **callbacks
// Callbacks are just functions really that are passed to other function as perimeters.
// So they will call that function after they finish doing their other stuff.
// That allows us to call a function that in turn will call another funtion.
// **Promises: they can have three state, promises will return Async Code
// 3 state: Pending, fulfilled, Rejected

const myPromise = new Promise((resolve, reject) => {
    const error = false;
    if(!error) {
        resolve("Yes! resolve the promise")
    } else{
        reject("No! reject the promise")
    }
})
console.log(myPromise);

myPromise.then(value => {
    return value + 1;
})
.then(newValue => {
    console.log(newValue);
})
// If we change the False to True then we catch the err
.catch(err => {
    console.error(err);
})

/// Another method of a fetch API.
/// To delay the execution of some codes.
const myNextPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve("myNextPromises resolve")
    }, 3000);
});
myNextPromise.then(myValue => {
    console.log(myValue)
});
myPromise.then(newValue => {
    console.log(newValue);
});
/// Pending state
const users = fetch("https://jsonplaceholder.typicode.com/users")
console.log(users) // Calling in pending 

/* fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        return response.json();
    })
    .then(data => {
        data.forEach(user => {
            console.log(user)
        })
    }) */


/* Async / Await */
const myUser = {
    userList: []
}

const myCoolFunction = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
    //console.log(jsonUserData);
    return jsonUserData;
}
// myCoolFunction()

const anotherFunc = async() => {
    const data = await myCoolFunction();
    //console.log(data) // or
    myUser.userList = data;
    console.log(myUser.userList)
}
anotherFunc();
console.log(myUser.userList)

/* Workflow Function */
const getAllUserEmails = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonData = await response.json();
    
    const userEmail = jsonData.map(user => {
        return user.email;
    });
    //console.log(userEmail)
    postToWebPage(userEmail)
}

const postToWebPage = (data) => {
    console.log(data)
}
getAllUserEmails();
//console.log(getAllUserEmails()); /// return Pending

/* 2nd parameter of fetch is a object */
const getDataJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {
        method: "GET",
        headers: {
            Accept: "application/json"
        }
    });
    const jsonJokeData = await response.json();
    console.log(jsonJokeData)
}
getDataJoke();
/* fetch POST obj */
const jokeObject = {
    id: 'TfVvX0wscib', 
    joke: 'How do you know if there’s an elephant under your bed? Your head hits the ceiling!',
}

const postData = async (jokeObj) => {
    const response = await fetch("https://httpbin.org/post", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jokeObj)
    });
    const jsonResponse = await response.json()
    console.log(jsonResponse)
}
postData(jokeObject)

/* request Obj */
const requestJoke = async (firstName, lastName) => {
    const response = await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`);
    const jokeResponse = await response.json();

    console.log(jokeResponse.value.joke);
}
requestJoke("Clint", "Eastwood");










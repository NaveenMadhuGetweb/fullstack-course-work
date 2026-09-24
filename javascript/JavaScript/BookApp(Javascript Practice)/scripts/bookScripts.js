


document.addEventListener("DOMContentLoaded", function(params) {
    
    console.log("helo");


    let addBtn = document.getElementById("addBtn");
    let bookFormContainer = document.querySelector(".bookFormContainer");
    let bookAddBtn = document.getElementById("bookAddBtn");
    let bookCancelBtn = document.getElementById("bookCancelBtn");

    addBtn.addEventListener("click", function(){
        bookFormContainer.style.display = "block";
    });

    bookCancelBtn.addEventListener("click", function(event){
        event.preventDefault();                                 // For avoid form submit and reloading page.
        bookFormContainer.style.display = "none";
    });



    var bookContainer = document.querySelector(".bookContainer");
    var bookTitle = document.getElementById("bookTitle");
    var bookAuthor = document.getElementById("bookAuthor");
    var bookDescription = document.getElementById("bookDescription");
    
    bookAddBtn.addEventListener("click", function(event){
        event.preventDefault();

        var cards = document.createElement("div");
        cards.setAttribute("class", "cards");
        cards.innerHTML = `<h2>${ bookTitle.value }</h2>
                            <dl>
                                <dt>${ bookAuthor.value }</dt>
                                <dd>${ bookDescription.value }</dd>
                            </dl>
                            <button onclick="Dismiss(event)" class="dismissBtn">Dismiss</button>
                            `;
        console.log("Created:" , cards);
        bookContainer.append( cards);

    });


    // Dismiss Feature
    let cards = document.querySelector(".cards");
    let dismissBtn = document.querySelector(".dismissBtn");
/*
    dismissBtn.addEventListener("click", function(event){   // This method will not run because it Gives "null" before we create the book
        console.log("jj");                                  // Solution: create external function for dynamically creating buttons. 
    });
*/

});

    

    function Dismiss(event){
        // event.target.parentElement.remove();
        event.target.closest("div").remove();   // It will find the nearby div element
    }








/*

// My Extra Traials "Clone THe Element " And Access the Elements

    function Dismiss(event){
        var bookContainer = document.querySelector(".bookContainer");
        console.log("hii");
        // event.target.parentElement.remove();
        // event.target.closest("div").remove();   // It will find the nearby div element
        
        var currentRow = event.target.closest("div");

        var clonedRow = currentRow.cloneNode(true);

        console.log("Selected Row:" , clonedRow);
        console.log("Selected specific Access<h2>:", clonedRow.querySelector("h2"));

        var newElemntOne  = clonedRow.querySelector("h2");
        newElemntOne.setAttribute("class", "extraStyleTest");
        // newElemntOne.removeAttribute("class", "extraStyleTest");

        var newElemntTow  = clonedRow.querySelector("dl");
        // newElemntTow.disabled = true;    // will work if it is input field
       
        var newElemntThree =  newElemntTow.querySelector("dd")
        console.log("Third Elemt:", newElemntThree);


        var newElemntFour  = clonedRow.querySelector("dt");  // Access Directly nested elemt | All Elements Can Directly Access By QuerySelector 
        console.log("Nested Elemnt:", newElemntFour );
        

        var currentRowCopy = event.target.closest("div");
        console.log("Testing closet(): ", currentRowCopy.querySelector("dt"));

        bookContainer.append(clonedRow);
    }

*/






// window.onload = function(){
        
//     function Dismiss(event){
//         console.log("hii");
//     }
// }



/*

Attribute Methods 

setAttribute(name, value)
getAttribute(name);
hasAttribute(name);                 // returns  true/false
removeAttribute(name);

element.checked = true
element.disabled = true
if(element.checked){}



// Advanced Alternatives:
    img = document.querySelector('img');
    img.src =  'photo.jpg';
    img.id = 'main-image';
    img.className = 'rounded';

// Css Property
element.style.color = "red";


Example: hasAttribute(name);

const button = document.querySelector('button');
if(button.hasAttribute("disabled")){
    // console.log(button.hasAttribute("disabled"));    // output: true
}





classList Property

Ex:
const element = document.getElementById("myElement");
element.classList.add("newClass"); // Adds "newClass" to the element
element.classList.remove("oldClass"); // Removes "oldClass" from the element
element.classList.toggle("toggleClass"); // Toggles "toggleClass" on and off
console.log(element.classList.contains("newClass")); // Checks if "newClass" is present

Methods

1. add()
    - Adds one or more classes to the element.
    
    element.classList.add("class1", "class2");

2. remove()
    - Removes one or more classes from the element.
    
    element.classList.remove("class1", "class2");

3. toggle()
    - Toggles a class on or off.

    element.classList.toggle("class1");

4. contains()
    - Checks if an element contains a specific class.

    console.log(element.classList.contains("class1"));

5. replace()
    - Replaces an existing class with a new one.

    element.classList.replace("oldClass", "newClass");







Closest Method in JavaScript
    - The closest() method in JavaScript is used to find the closest ancestor of an element that matches a given CSS selector.


    Example

const el = document.getElementById("div-03");
console.log(el.closest("#div-02")); // <div id="div-02">

Usage
    = The closest() method is particularly useful when you need to find a parent element with a specific class, ID, or attribute without knowing the exact structure of the DOM.

Syntax
    = element.closest(selectors);
                    // selectors: A string containing one or more CSS selectors to match against.


                    




*/


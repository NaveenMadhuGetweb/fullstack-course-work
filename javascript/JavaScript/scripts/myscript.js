

document.addEventListener("DOMContentLoaded",function(){



// we can get or set the elements
// using textContent,innerHTML,innerText

var txt = document.getElementById("txt")

console.log("select elemts:" , txt);
console.log("use textContent:", txt.textContent);
console.log("use innerHTML:", txt.innerHTML);
console.log("use innerText:", txt.innerText);


// console.log("select elemts:" , txt="custom texts");
console.log("use textContent:", txt.textContent = "naveen" );
console.log("use innerText:", txt.innerText = "kumar");
console.log("use innerHTML:", txt.innerHTML= "<b><i>Hi</i></b>");



// task-1 change the content

var tsk1 = document.getElementById("t1");
console.log("Before Change:" , tsk1.textContent );
tsk1.textContent = "custom";

// task-2 Events

var tsk2 = document.getElementById("btn");

tsk2.addEventListener("click", function(){
    document.getElementById("t2").textContent = "Changed by DOM";
});


// task-3 Calculate Addition from input

var inp1 = document.getElementById("inp1");
var inp2 = document.getElementById("inp2");
var tsk3 = document.getElementById("t3");
var t3btn = document.getElementById("t3btn");

t3btn.addEventListener("click",function(){
    let res = Number(inp1.value) + Number(inp2.value);          // defaultly input tag returns string type so convert into number to perform calulation
    tsk3.textContent = res; 
});


// Math Functions - Generate Random Number
var m1 = Math.random();                                         // return from 0.0 to 0.9 by generate
var m2 = Math.floor(7.490);                                     // will do this like, 7.88 -> 7,  0.66 -> 0,  
// var m3 = Math.random();
// var m4 = Math.random();

console.log("Math.random():" , m1);
console.log("Math.floor():" , m2);
console.log("Operation-1:" , Math.floor(m1*10));                   // generate between 1 to 9
console.log("Operation-2:" , Math.floor(m1*10) + 1);


// task-4 Guess the Number By - Math Functions

var tsk4 = document.getElementById("t4");
var inp3 = document.getElementById("inp3");
var t4btn = document.getElementById("t4btn");
t4btn.addEventListener("click", function(){
    let inp4 = Number(inp3.value);
    if(inp4 == Math.floor((Math.random()*10))){
        tsk4.textContent="Right"; alert("Welcome-!!!");
    }else{
        tsk4.textContent="Wrong";
    }  
})


// task-5 Guess the Number By - Math Functions And Like Score 

var inp4 = document.getElementById("inp4");
var t5btn = document.getElementById("t5btn");
var tsk4 = document.getElementById("t5");
var scoreEl = document.getElementById("score");

var score = 10;
t5btn.addEventListener("click", function(){
    let inp5 = Number(inp4.value);
    if(inp5 == Math.floor((Math.random()*10))){
        tsk4.textContent="Right"; alert("Welcome-!!!");

    }else{
        tsk4.textContent="Wrong";
        score = score-1;
        scoreEl.textContent = score;
        if(score<1){
            console.log("Disabled Btn");
            t5btn.disabled = true;
        }
    }  
})


// task-6 Change the div box bg color when click buttons 

var box =  document.getElementById("box");
var t6btn = document.getElementById("t6btn");

t6btn.addEventListener("click", function(){
    if(box.style.backgroundColor == "blue"){
        box.style.backgroundColor = "green";        
    }else{
        box.style.backgroundColor = "blue";
    }
});




/*
// task-7  oninput 

var inp5 = document.getElementById("inp5");
var t7 = document.getElementById("t6");
var sms = "";
console.log("hellow");

inp5.addEventListener("oninput", function(){
    console.log("hellow00");
    sms = sms + inp5.value;
    t7.textContent = sms;

});

*/



});





window.onload = function () {                              // This is for run code after external files like css file loaded
    console.log("Fully loaded");
 
    // task-6 Change the div box bg color when click buttons 
    var boox =  document.getElementById("boox");
    var t7btn = document.getElementById("t7btn");

    t7btn.addEventListener("click", function(){
        if(boox.style.backgroundColor == "red"){           // this will check the inline css first that's why else part running when executing first time.
            console.log("if");
            // boox.setAttribute("class","bgChange");      // This will change from <div id="boox"> to  <div id="boox" class="bgChange">       // This is executing but the css has id stylings and also class stylings so id has higher preference so id always running so alternative change from .bgChange to #boox.bgChange
            boox.classList.add("bgChange");             // This adds the class without removing existing classes                          // can also use .add() , .remove()
            // boox.classList = "bgChange";                // This will remove all other classes  
            // boox.classList.toggle("bgChange");        // instead use above 3 lines use this.  Toggle = .add and .remove
            boox.style.backgroundColor = "orange";      // What happens is colors changes but value of css doesn't set it as orange.      
        }else{
            console.log("else");
            boox.style.backgroundColor = "red";
            boox.classList.remove("bgChange"); 
        }
    });



    // task-7  oninput 
    var inp5 = document.getElementById("inp5");
    var t7 = document.getElementById("t6");
    var sms = "";

    inp5.addEventListener("input", function(){
        sms = sms + inp5.value;
        t7.textContent = sms;
    }); 


    // task-8   Append content line by line 
    var btnt8 = document.getElementById("btnt8");
    var t8 = document.getElementById("t8");
   
    btnt8.addEventListener("click", function(){
        // t8.textContent ="hellow";
        // t8.append("hello");
        // t8.append("<h1>hello</h1>");                     // append will only add txts inside (), will not create element so try below,

        // create elements
        var h1Elmt = document.createElement("h1");   // <h1></h1>             // method to create element 
        h1Elmt.textContent = "hello";             // <h1>hello</h1>
        
        t8.append(h1Elmt);                         // adding element as like executing instad of texts
    });


    // task-9 
    var btnt9 = document.getElementById("btnt9"); 
    btnt9.addEventListener("click", function(){
        btnt9.style.backgroundColor = "blue";
    });

    // task-10 Get button Caption  
    var t9 = document.getElementById("t9");
    var btn10 = document.getElementsByClassName("btn10");
    // t9.textContent = event.target.textContent;        

    for (var i = 0; i < btn10.length; i++) {                       // Important: here, using loop because of selecting elements by className
        btn10[i].addEventListener("click", function(event) {       // event haivng the details about btn
            t9.textContent = event.target.textContent;
        });
        console.log("I value:", i);   // chk when and how may times loop running    
    };

    
    // task-10 Get button Caption  
    function getCaption(event){
        document.getElementById("t9").innerHTML = event.target.textContent;
    }


    /*  This method working but not preferable by selecting ID
    // task-11 Remove clicked button
    var removeElms = document.querySelectorAll("#remove");     
    removeElms.forEach(item =>{
        item.addEventListener("click", function(event){
            event.target.remove();
            console.log("helo", event);
        });
    });
    */

    // task-11 Remove clicked button
    var removeElms = document.querySelectorAll(".remove");     
    removeElms.forEach(item =>{
        item.addEventListener("click", function(){
            item.remove();
            // this.remove();   // also use
        });
    });


    // innerHTML | innerText | textContent  
   var t10 = document.getElementById("t10");
    console.log("element: ", t10);
    console.log("elm.textContent:", t10.textContent);
    console.log("elm.innerText:", t10.innerText);
    console.log("elm.innerHTML:", t10.innerHTML);

    t10.innerHTML = "Bye";
    // t10.innerHTML = "<h1>Bye</h1>";
    t10.textContent = "<h1>Bye</h1>";       //  only text


    /*
        Know the Concepts of
            document.querySelector()           - accept css selectors & return first matching element
            document.querySelectorAll()        - accept css selectors & return all matching elements and supports forEach()
            document.getElementById()          - select only id(should be unique in document) & return only single element
            document.getElementByClassName()   - select mulitple(all) elements & access by using index & mostly using with for loop & return node list means like array[]
            document.getElementByTagName()     - 
    */


    // array 
    var fruits = ["apple", "banana", "grapse", "orange"];
    for(let i =0; i<fruits.length; i++){
        console.log(fruits[i]);
    }


    // creating HTML Element      | elements should create when adding elements by append,prepend, insertadjacentHtml
    var t11 = document.getElementById("t11");
    var newElm = document.createElement("h2");
    newElm.innerHTML = "hello";                         // can use innerText, innerHTML, textContent
    console.log("Creating New Element:" , newElm);      // created <h2>hello</hello>
    
    // append   // if element->bottom,  if texts->right side
    t11.append(newElm);                                 // will add elmt in to div
                                                        // append will inserting elements in bottom of box
    t11.append("helo");             // append will inseting texts in right side of already texts
    t11.append("world");

    //prepend
    t11.prepend("prepend texts");   // prepend will inserting texts in top of element

    // insertadjacentHtml
    
    // Below This will generate error "hellowww" not a Element |  the 2nd parameter should be Element which is need to create manually or get by already existing elements like... and Its should not text 
    //t11.insertAdjacentElement("beforebegin", "texts");    // can use afterbegin, afterend, beforebegin, beforeend

    var newElm2 = document.createElement("h2");
    newElm2.textContent = "beforebegin Elmt";
    newElm2.style.color = "orange";
    t11.insertAdjacentElement("beforebegin", newElm2);

    var newElm3 = document.createElement("h2");
    newElm3.textContent = "beforeend Elmt";
    newElm3.style.color = "red";
    t11.insertAdjacentElement("beforeend", newElm3);

    var newElm4 = document.createElement("h2");
    newElm4.textContent = "afterbegin Elmt";
    newElm4.style.color = "blue";
    t11.insertAdjacentElement("afterbegin", newElm4);

    var newElm5 = document.createElement("h2");
    newElm5.textContent = "afterend Elmt";
    newElm5.style.color = "green";
    t11.insertAdjacentElement("afterend", newElm5);

    // Example of insertAdjacentElement("", Element) Element By already running HTML Element
    var running = document.getElementById("running");
    var adjElement = document.getElementById("adjElement");
    adjElement.insertAdjacentElement("beforeend", running);

    // Deleting HTML Element
    // emet.remove()
    var p = document.getElementById("p");
    p.remove();

    // Task- 12 Add and Remove Elements that entered input box when click add button and delete button

    var inp6 = document.getElementById("inp6");
    var addBtn = document.getElementById("addBtn");    
    var UnOrList = document.getElementById("UnOrList");
    

    addBtn.addEventListener("click", function(){
        // UnOrList.append("hello");  // fine
/*
        var ListItem = document.createElement("li");
        ListItem.innerText = "hello";
        UnOrList.append(ListItem);
*/

/*
        var ListItem = document.createElement("li");
        ListItem.innerHTML = inp6.value;
        UnOrList.append(ListItem);
*/
        var ListItem = document.createElement("li");
        ListItem.innerHTML = inp6.value + `<button class="ListdelBtn">Delete</button>` /* `<button onclick="RemoveFn(event)">Delete</button>` */;           // here we should not create "Id" because when create button will be multiple times but id's may genereate multiple times but id is unique so, created "class"
        UnOrList.append(ListItem);
        // UnOrList.insertAdjacentElement("beforebegin", ListItem);

    });


    //     event.target.remove();               // current button will remove
    //     event.target.parentElement.remove();    // will remove with parent containg elements

/*
    // // Tried codes-1
    // Below code btnDel will Return error Code Because of `<button id="btnDel">Delete</button>` is added after page loads so will not initialize so js doc will get "null" value || also This will created by dynamically generated button.
    // `<button id="btnDel">Delete</button>` ;           // here we should not create "Id" because when create button will be multiple times but id's may genereate multiple times but id is unique so, created "class"
    var btnDel = document.getElementById("btnDel");      // This will be remove only first delete button.    
    btnDel.addEventListener("click", function(event){
        event.target.parentElement.remove();
    });

*/

/*  
    // Tried codes-2 
    // Below method is also will not work because ListdelBtn class will never initialize when document loaded, instead it's creating dynamically so, will generate error when document loaded.
    var ListdelBtn = document.getElementsByClassName("ListdelBtn");
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@", ListdelBtn);
    for(let i=0; i<ListdelBtn.length; i++){
        console.log("%%%%%%%%%%%%%%%%%%%%%%%%%5");
        ListdelBtn[i].addEventListener("click", function(){
            console.log(ListdelBtn[i], "********");
        });
    }
*/


    // Working method 
    //  we should make create addEventListener when user click enitre List and find out when delete button clicked.
    UnOrList.addEventListener("click", function (event) {

        // console.log("hlo");
        // console.log(event.target);
        // console.log(event.target.className);

        if (event.target.classList.contains("ListdelBtn")) {
            // console.log("hloooo");
            event.target.parentElement.remove();
        }
    });





    
// Task -13 Student Form Save and Delete Functionalities

var StudentTable = document.getElementById("StudentTable");

var Name = document.getElementById("name");
var Age = document.getElementById("age");
var Gender = document.getElementsByClassName("gender");

var Course = document.getElementById("course");
var Email = document.getElementById("email");
var SaveBtn = document.getElementById("saveBtn");
 
var ResultTable = document.getElementById("ResultTable");

var gen = "";

SaveBtn.addEventListener("click", function(){

for(var i=0; i<Gender.length; i++){
    // if(Gender[i]){
        // console.log("inside if condition", Gender[i].value);
        if(Gender[i].checked){
            // console.log("JJJJJJJJ", Gender[i].value);
           gen =  Gender[i].value;
        }
    // }
}


var TableRow = document.createElement("tr");
/*
TableRow.innerHTML = `
<td>${Name.value}</td>
<td>${Age.value}</td>
<td>${gen}</td>
<td>${Course.value}</td>
<td>${Email.value}</td>
`;
*/

TableRow.innerHTML = `
<td>${Name.value}</td>
<td>${Age.value}</td>
<td>${gen}</td>
<td>${Course.value}</td>
<td>${Email.value}</td>
<td><button class="deleteBtn">Delete</button></td>
`;

ResultTable.insertAdjacentElement("beforeend", TableRow);

/*  // Tried-1
<td><button id="deleteBtn">Delete</button></td>
var deleteBtn = document.getElementById("deleteBtn");

deleteBtn.addEventListener("click", function(event){
     event.target.parentElement.remove();         // This will remove current button with parent element "tr" too. but not remove entire selected row.
    // event.target.closet('tr').remove();
});
*/

ResultTable.addEventListener("click", function(event){
        if (event.target.classList.contains("deleteBtn")) {
            // console.log("hloooo");
            event.target.parentElement.parentElement.remove();  // This may also work
            //event.target.closest("tr").remove();                // This may also work
        }
       
        
        console.log("You Are Clicking: " , event.target.textContent);   // For My Reference

        if(event.target.textContent){
            // logics
        }
});

/*
            ResultTable.addEventListener("click", function(event)   ->  "Listen for clicks anywhere inside ResultTable." 
            (event) -> Have the behaviour of clicked location; then event.target -> <button class="deleteBtn">Delete</button> |  event.target.classList -> meaning deleteBtn class
            // Note: event.target.closest("tr")     ->  finds the nearest <tr> containing the clicked button.  Then: .remove() removes that entire row.

*/


});







};




// task-2 Events code Without inside DOM 
function Change(){
    document.getElementById("t2").innerHTML = "Changed by Normal FN";
}

// Task- 12 
function RemoveFn(event){
    console.log("heloooo");
    event.target.parentElement.remove();
}



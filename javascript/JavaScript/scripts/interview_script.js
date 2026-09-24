
document.addEventListener("DOMContentLoaded", function(){

});

window.onload = function(){


 console.log("helo"); 

let ResultTableBody = document.getElementById("ResultTableBody");

let addBtn = document.getElementById("addBtn");

// let cloneBtn = document.getElementById("cloneBtn");
// let dropBtn = document.getElementById("dropBtn");
// let groupBtn = document.getElementById("groupBtn");



addBtn.addEventListener("click", function(){
   console.log("helo");

  var newRow = document.createElement('tr');
      newRow.innerHTML = 
        `<td>
          <div class="mb-3">
              <div class="form-check">
                  <input class="form-check-input checkBox" type="checkbox">
              </div>
          </div>
        </td>
        <td>
          <div class="mb-3">
              <input type="number" class="form-control sno">
          </div>
        </td>
        <td>
          <div class="mb-3">
              <input type="number" class="form-control batchInp" >
          </div>
        </td>
        <td>
          <div class="mb-3">
              <input type="number" class="form-control weightInp" >
          </div>
        </td>
        <td>
          <div class="mb-3">
              <input type="number" class="form-control rangeInp" >
          </div>
        </td>
        <td>
          <div class="mb-3">
              <input type="number" class="form-control qtyInp" >
          </div>
        </td>
        <td>
          <div class="mb-3">
              <input type="number" class="form-control totalInp" >
          </div>
        </td>
        <td>
          <div class="mb-3">
              <input type="number" id="avgInp" class="form-control" >
          </div>
        </td>
        <td><button class="btn btn-success cloneBtn">Clone</button><button class="btn btn-success dropBtn" >Drop</button></td>`; 

    // ResultTableBody.insertAdjacentElement("afterbegin", newRow);   
       ResultTableBody.append(newRow);
    });



    // let cloneBtn = document.getElementById("cloneBtn");
    // let dropBtn = document.getElementById("dropBtn");
    // let groupBtn = document.getElementById("groupBtn");

    // cloneBtn.addEventListener("click", function(){
    //     console.log("clone");
    // });

    // dropBtn.addEventListener("click", function(){
    //     console.log("drop");
    // });

    ResultTableBody.addEventListener("click", function(event){
    
        console.log("tablebody", event.target);

        if(event.target.classList.contains("dropBtn")){
            // event.target.closest("tr").remove();
            event.target.parentElement.parentElement.remove();
        }

        if(event.target.classList.contains("cloneBtn")){
            var currentRow = event.target.closest("tr");
            var clonedRow = currentRow.cloneNode(true);
            ResultTableBody.append(clonedRow);
        }

    });



    groupBtn.addEventListener("click", function(){


    var chkBox = document.querySelectorAll(".checkBox");
    var sNo = document.querySelectorAll(".sno");
    var batch = document.querySelectorAll(".batchInp");
    var weight = document.querySelectorAll(".weightInp");
    var range = document.querySelectorAll(".rangeInp");
    var qty = document.querySelectorAll(".qtyInp");
    var total = document.querySelectorAll(".totalInp");
    var avg = document.querySelectorAll(".avgInp");


        console.log("group");
        var countOfChk=0, weightTot = 0, qtyTot=0, totTot= 0, avgTot=0;


        chkBox.forEach(item => {
            if(item.checked){
                countOfChk++;
            var selectedRow = item.closest("tr");    
                console.log("Counting", selectedRow)
                // console.log("SNO COUNT:");

                var weightInp = selectedRow.querySelector(".weightInp");
                console.log("weightInp:", weightInp.value);
                if (weightInp) {
                     weightTot = weightTot + Number(weightInp.value);  
                    // console.log("weightInp", weightInp.value);
                }
                
                var qtyInp = selectedRow.querySelector(".qtyInp");
                if(qtyInp){
                    qtyTot = qtyTot + Number(qtyInp.value);  
                }

                var totalInp = selectedRow.querySelector(".totalInp");
                if(totalInp){
                    totTot = totTot + Number(totalInp.value);
                }


        // console.log("cCOUNT TIEMS :", countOfChk);
        // weight.forEach(item => {
        //     if(item){
        //       weightTot = weightTot + Number(item.value);  
        //     }
        //     console.log("Weight Tot:", weightTot)
        // });        
        // qty.forEach(item => {
        //     if(item){
        //         qtyTot = qtyTot + Number(item.value);
        //     }
        //     console.log("Quantity Tot:", qtyTot)
        // });
        // total.forEach(item => {
        //     if(item){
        //         totTot = totTot + Number(item.value);
        //     }
        //     console.log("Total Tot:", totTot)
        // });

        }
    });        
   
   
    avgTot = totTot / qtyTot;

        console.log("Count: ", countOfChk, "Average:" , avgTot);

 

          var newRow = document.createElement('tr');
      newRow.innerHTML = 
        `<td>
          <div class="mb-3">
              <div class="form-check">
                  <input class="form-check-input checkBox d-none" type="checkbox">
              </div>
          </div>
        </td>
        <td>
          <div class="mb-3">
              <input type="number" class="form-control sno" disabled>
          </div>
        </td>
        <td>
          <div class="mb-3">
              <input type="number" class="form-control batchInp " disabled >
          </div>
        </td>
        <td>
          <div class="mb-3">
              <input type="number" class="form-control weightInp" value="${ weightTot }">
          </div>
        </td>
        <td>
          <div class="mb-3">
              <input type="number" class="form-control rangeInp" disabled>
          </div>
        </td>
        <td>
          <div class="mb-3">
              <input type="number" class="form-control qtyInp" value="${ qtyTot }">
          </div>
        </td>
        <td>
          <div class="mb-3">
              <input type="number" class="form-control totalInp" value="${ totTot }">
          </div>
        </td>
        <td>
          <div class="mb-3">
              <input type="number" id="avgInp" class="form-control" value="${ avgTot }">
          </div>
        </td>
        <td><button class="btn btn-success cloneBtn d-none">Clone</button><button class="btn btn-success dropBtn" >Drop</button></td>`; 

    // ResultTableBody.insertAdjacentElement("afterbegin", newRow);   
       ResultTableBody.append(newRow);


        
    });


};























/*

Notes:
cloneNode(true) means:
    Copy this <tr> and all of its child elements.
So:
    Original row
         ↓
    cloneNode(true)
         ↓
    Copied row





*/
/** function addIngredient() {
    const div = document.createElement('div');
    div.className = "mb-3 input-group removeBtn";
    div.innerHTML = `
        <input type="text" class="form-control" />
        <button type="button" class="btn btn-outline-danger input-group-prepend" onclick="removeIngredient(this)">Remove</button>
    `;
    document.getElementById('ingredientDiv').appendChild(div);
  }
  
function removeIngredient(input) {
    document.querySelector('.removeBtn').remove(this);
}


document.getElementsByTagName("button").addEventListener("click", function(){
    event.preventDefault();
    handleFireButton();
}); **/

// TESTING
// INGREDIENT FUNCTION
function addIngredient() {
    const div = document.createElement('div');
    div.className = "mb-3";
    div.innerHTML = `
      <input type="text" class="form-control mb-3" />
      <button type="button" class="btn btn-primary mr-3" onclick="addIngredient()">Add Ingredient</button>
      <button type="button" class="btn btn-danger" onclick="removeIngredient(this)">Remove Ingredient</button>
    `;
    document.getElementById('ingredientDiv').appendChild(div);
  }
  
  function removeIngredient(input) {
    document.getElementById('ingredientDiv').removeChild(input.parentNode);
  }
// INSTRUCTION FUNCTION
  function addInstruction() {
    const div = document.createElement('div');
    div.className = "mb-3";
    div.innerHTML = `
      <input type="text" class="form-control mb-3" />
      <button type="button" class="btn btn-primary mr-3" onclick="addInstruction()">Add Instruction</button>
      <button type="button" class="btn btn-danger" onclick="removeInstruction(this)">Remove Instruction</button>
    `;
    document.getElementById('instructionDiv').appendChild(div);
  }

  function removeInstruction(input) {
    document.getElementById('instructionDiv').remove(this);
  }


// CURRENTLY PRESSING BUTTON RESETS THE PAGE AND RETURNS TO THE TOP
document.querySelector("button").addEventListener("click", function(event){
    event.preventDefault();
    handleFireButton();
});


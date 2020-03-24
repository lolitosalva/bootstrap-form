// TESTING
// INGREDIENT FUNCTION
function addIngredient() {
    const div = document.createElement('div');
    div.className = "mb-3";
    div.setAttribute("style", "transition: 0.3s");
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
    div.setAttribute("style", "transition: 0.3s");
    div.innerHTML = `
      <input type="text" class="form-control mb-3" />
      <button type="button" class="btn btn-primary mr-3" onclick="addInstruction()">Add Instruction</button>
      <button type="button" class="btn btn-danger" onclick="removeInstruction(this)">Remove Instruction</button>
    `;
    document.getElementById('instructionDiv').appendChild(div);
  }

  function removeInstruction(input) {
    document.getElementById('instructionDiv').removeChild(input.parentNode);
  }


// CURRENTLY PRESSING BUTTON RESETS THE PAGE AND RETURNS TO THE TOP
document.getElementByElement("button").addEventListener("click", function(event){
    event.preventDefault();
    handleFireButton();
});

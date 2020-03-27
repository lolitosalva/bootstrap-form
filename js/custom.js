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
    div.className = "mb-3 input-group removeBtn";
    div.innerHTML = `
        <input type="text" class="form-control" />
        <button type="button" class="btn btn-outline-danger input-group-prepend" onclick="removeIngredient(this)">Remove</button>
    `;
    document.getElementById('ingredientDiv').appendChild(div);
    event.preventDefault();
    // handleFireButton();
  }
  
function removeIngredient(input) {
    document.querySelector('.removeBtn').remove(this);
}

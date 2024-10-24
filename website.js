
function getCurrentDate() {  
    const date = new Date();
    let day = date.getDay();
    let month = date.getMonth()+1;   // because starts at zero
    let year = date.getFullYear();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    let currentDate = day + "/" + month + "/" + year + "  |  " + hour + ":" + minute + ":" + second;
    
    document.getElementById("FA").innerHTML = currentDate;

  }
  setInterval(getCurrentDate, 1000);


 
function validateFindPetForm() {
    
    var animal = document.querySelectorAll('input[name="pet"]:checked');
    var breed = document.querySelectorAll('input[name="breed"]:checked');
    var age = document.getElementById("age").value;
    var gender = document.querySelectorAll('input[name="gender"]:checked');
    var getAlong = document.querySelectorAll('input[name="preference"]:checked');
  
  
    // Check if any required fields are blank
    if (animal.length == 0 || breed.length == 0 || age == "" || gender.length == 0 || getAlong.length == 0) {
      alert("Please fill all fields.")
      return false;
    } else {
        alert("Form has been successfully submited.")
      return true;
    }
  }

  function submitFindPetForm(event) {
    // Call the validation function
    if (validateFindPetForm()) {
        // If validation passes, reset the form
        document.getElementById("findPetForm").reset();
    } else {
          // If validation fails, prevent default form submission behavior
          event.preventDefault();
    }
}

function validatePetToGiveForm() {
    
    var animal = document.querySelectorAll('input[name="pet"]:checked');
    var breed = document.querySelectorAll('input[name="breed"]:checked');
    var age = document.getElementById("age").value;
    var gender = document.querySelectorAll('input[name="gender"]:checked');
    var getAlongDogs = document.querySelectorAll('input[name="withDogs"]:checked');
    var getAlongCats = document.querySelectorAll('input[name="withCats"]:checked');
    var getAlongChildren = document.querySelectorAll('input[name="withChildren"]:checked');
    var moreAboutPet = document.getElementById("moreAboutPet").value;
    var firstName = document.getElementById("firstName").value;
    var familyName = document.getElementById("familyName").value;
    var email = document.getElementById("email").value;
  
     var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if any required fields are blank
    if (animal.length == 0 || breed.length == 0 || age == "" || gender.length == 0 || getAlongDogs.length == 0  
        ||getAlongCats == 0 || getAlongChildren == 0 || moreAboutPet.trim() == "" || firstName == 0 || familyName == 0 
        || !emailRegex.test(email)) {
      alert("Please fill all fields.")
      return false;
    } else {
        alert("Form has been successfully submited.")
      return true;
    }
  }

  function submitPetToGiveForm(event) {
    // Call the validation function
    if (validatePetToGiveForm()) {
        // If validation passes, reset the form
        document.getElementById("petToGiveForm").reset();
    } else {
          // If validation fails, prevent default form submission behavior
          event.preventDefault();
    }
}

  
  
  
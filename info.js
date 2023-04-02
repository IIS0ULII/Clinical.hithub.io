// storing data
function addPatient(){

let firstN = document.getElementById("firstName").value;

let middleN = document.getElementById("middleName").value;

let lastN = document.getElementById("lastName").value;

let addressInput = document.getElementById("address").value;

let mobileN = document.getElementById("pNumber").value;


let birthdayInput = document.getElementById("birthday").value;

let currentSymptoms = document.querySelector(`#currentSymptoms`).value;
alert(currentSymptoms)

let genderInput = document.querySelector(`input[name="gender"]:checked`).value;


let medictaking = document.querySelector(`input[name="check"]:checked`).value;
alert(medictaking)

let comments =  document.getElementById("comments").value;

let medicalHistoryI = []
let checkboxes = document.getElementsByName(`medicalHistory[]`)
for(let i = 0; i < checkboxes.length; i++){
    if(checkboxes[i].checked){
        medicalHistoryI.push(checkboxes[i].value);
    }
}

let patients =[]
 
        let patient ={
            firstname: firstN,
            middlename: middleN ,
            lastname: lastN,
            birthday: birthdayInput,
            phoneNumber: mobileN,
            address: addressInput,
            medicalHistory: medicalHistoryI,
            gender: genderInput,
            symptoms:  currentSymptoms,
            taking_medication: comments,
            medicine_taking: medictaking

        }
    patients.push(patient);
    

    localStorage.setItem('person', JSON.stringify(patients));
    alert(patient.firstname + patient.lastname +" Successfully Added");
}
// "person" key 


window.onload = function(){
    //get the id of the form
    let patientFormId = document.getElementById('forms');
    patientFormId.onsubmit = addPatient;
}

function choose(){
    let answer = document.querySelector(`input[name="check"]:checked`).value;
    console.log(answer);
    if (answer === 'yes')
    {
        document.getElementById("comments").disabled = false;
    }
    else{
        document.getElementById("comments").disabled = true;
    }
}


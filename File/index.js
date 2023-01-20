const getFormValue=()=>{
 const nameInput=document.getElementById('name');
 const nameinputValue=nameInput.value;
 const emailInput=document.getElementById('email');
 const emailInputValue=emailInput.value;
 const errorTextName=document.getElementById('errorTextName')
 errorTextName.innerHTML="<p>Please write Name</p>"
 const errorTextEmail=document.getElementById('errorTextemail')
 errorTextEmail.innerHTML="<p>Please write Email</p>"
 console.log(errorTextEmail,errorTextName)
 if(nameinputValue && emailInputValue !=""){
    const allformInformation={
        nameinputValue,emailInputValue
     }
   errorTextName.innerHTML=''
   errorTextEmail.innerHTML=''
   nameInput.value='';
   emailInput.value=''
     console.log(allformInformation)
 }else{
     alert("Please complete the full form")
 }

}
const submitbutton=document.getElementById('submitButton').addEventListener('click',myfunction);

function myfunction(){
    console.log("Button has submitted")
}
const submittButton=document.getElementById('submitButton');
console.log(submittButton);
submittButton.addEventListener('click',()=>{
    const nameInput=document.getElementById('name');
    const emailInput=document.getElementById('email');
    const addressInput=document.getElementById('address')
    console.log(addressInput)
    console.log(nameInput,emailInput);
    const nameInputValue=nameInput.value;
    const emailInputValue=emailInput.value;
    const addressInputValue=addressInput.value;
    console.log(nameInputValue,emailInputValue,addressInputValue);
    const nameInpuError=document.getElementById('errorTextName');
    const emailInputError=document.getElementById('errorTextemail');
    console.log(nameInpuError,emailInput);

    const formData=document.getElementById('form-data');
    console.log(formData)

   if(nameInputValue && emailInputValue &&addressInputValue !=""){
    formData.innerHTML=
    `<p>
      Form submitted By ${nameInputValue} Email:${emailInputValue} address:${addressInputValue}
    </p>`
     nameInput.value=''
     emailInput.value=''
     addressInput.value=''
     nameInpuError.innerHTML=''
     emailInputError.innerHTML=''
     addressInput.innerHTML=''
   }else{
    nameInpuError.innerHTML="<p>Please give Name</p>"
    emailInputError.innerHTML="<p>Please give Email</p>"
    
   }

})

const calculateButton=document.getElementById('calculateButton').addEventListener('click',()=>{
const income=document.getElementById('income');
const rentinput=document.getElementById('rent');
const foodInput=document.getElementById('food');
const utilitiesInput=document.getElementById('utilities');
const insuranceInput=document.getElementById('Insurance');
const expressDiv=document.getElementById('expense')
const balanceDiv=document.getElementById('balance')
console.log(income,foodInput,utilitiesInput,insuranceInput,rentinput);

const incomeValue=parseInt(income);
rentInputValue=parseInt(rentinput.value);
foodInputvalue= parseInt(foodInput.value);
utilitiesInputValue=parseInt(utilitiesInput.value);
insuranceInputValue= parseInt(utilitiesInput.value)
 if(rentInputValue >=0 
    && foodInputvalue>=0 
    && utilitiesInputValue>=0 
    && insuranceInput>=0  ){
    console.log(rentInputValue,foodInputvalue,utilitiesInputValue,insuranceInputValue);
    const cost=rentInputValue+foodInputvalue+utilitiesInputValue+insuranceInputValue;
    const balance=incomeValue-cost
    expressDiv.innerText=cost;
    balanceDiv.innerText=balance;
    console.log(cost,balance)
 }

})















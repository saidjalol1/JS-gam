let elForm = document.querySelector("#form-js");
let elInput = elForm.querySelector("#input-js");
let elSend = elForm.querySelector("#input-btn");
let elChance = document.querySelector("#chance");
let elRefresh = document.querySelector("#refresh");
let elResult = document.querySelector("#result");
let random = Math.round(Math.random() * 101);

elChance.textContent = 5
elForm.addEventListener("submit" , (evt) =>{
    evt.preventDefault();
    
    let strton = Number(elInput.value);
    let chance = elChance.textContent--
    
    if (random === strton ){
      elResult.textContent = `topdingiz rostandham ${strton} edi , Kundaligizi apkesez 5 qo'yberaman`;
      elSend.disabled = true;
      elInput.disabled = true;
   }
     else if(chance === 0 || chance < 2){
        elSend.disabled = true;
        elInput.disabled = true;
        elResult.textContent = `You have spent all your chances, The Number was ${random}`;
     }
     else if (strton > 100 || strton < 0){
        elResult.textContent = "TITLE ni o'qing yahshilab";
     }
     else if (random > strton){
        elResult.textContent = "SIZ kiritgan son computer o'ylagandan kakichkina";
     }
     else if (random < strton){
        elResult.textContent = "SIZ kiritgan son computer o'ylagandan katta";
     }
     
    
})

elRefresh.addEventListener("click", ()=>{
    window.location.reload()
})
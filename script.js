let inputNumber = document.getElementById("number");
let convertBtn = document.getElementById("convert-btn");
let outputDiv = document.getElementById("output");
let commentParagraph = document.getElementById("comment");
let resetBtn = document.getElementById("reset-btn")

function romanConverter(){
    convertBtn.classList.add("hidden");
    resetBtn.classList.add("reset-button");
    resetBtn.classList.remove("hidden");
    outputDiv.classList.remove("hidden");
    inputNumber.blur();

    if(Number.isInteger(Number(inputNumber.value)) === false){
        outputDiv.innerText = "Please enter a valid integer";
    }else if(inputNumber.value === ""){
        outputDiv.innerText = "Please enter a valid number";
    }else if(parseInt(inputNumber.value) === 0){
        outputDiv.classList.add("output");
        outputDiv.innerText = "NULLA";
        commentParagraph.classList.remove("hidden");
        commentParagraph.innerText = "The Roman numeral system does not have an equivalent for zero(0), however, the word NULLA (the Latin word meaning 'none' or 'nothing') was used to represent what we call the number zero.";
    }else if(parseInt(inputNumber.value) < 0){
        outputDiv.innerText = "Please enter a number greater than or equal to 1";
        commentParagraph.classList.remove("hidden");
        commentParagraph.innerText = "The Roman numeral system does not have a representation for negative numbers.";
    }else if(parseInt(inputNumber.value) > 0 && parseInt(inputNumber.value) < 4000) {
        outputDiv.classList.add("output");
        outputDiv.innerText = convertToRoman(parseInt(inputNumber.value));
    }else if(parseInt(inputNumber.value) >= 4000 && parseInt(inputNumber.value) < 4000000) {
        const regex =/[a-zA-Z]/g
        outputDiv.classList.add("output");
        outputDiv.innerText = extConvertToRoman(parseInt(inputNumber.value));
        if(extConvertToRoman(parseInt(inputNumber.value)).match(regex).length > 16 && extConvertToRoman(parseInt(inputNumber.value)).match(regex).length <= 23){
            outputDiv.style.fontSize = "170%";
            outputDiv.style.padding = "8px 12px";
        }else if(extConvertToRoman(parseInt(inputNumber.value)).match(regex).length > 23){
            outputDiv.style.fontSize = "145%";
            outputDiv.style.padding = "10px 12px";
        }
    }else if(parseInt(inputNumber.value) >= 4000000){
        outputDiv.innerText = "Please enter a number less than or equal to 3 999 999";
    }
}

function convertToRoman(inputNumber){
 const romanNumerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
 const arabicNumerals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

 let romanResult = "";

 for(let i = 0; i < arabicNumerals.length; i++){
    while(inputNumber >= arabicNumerals[i]){
        romanResult += romanNumerals[i];
        inputNumber -= arabicNumerals[i];
    }
 }

return romanResult;
};

// seperate function because the numbers above 3999 denote 1000 as I̅ rather than M.
function extConvertToRoman(inputNumber){
    const extRomanNumerals = ["M̅", "C̅M̅", "D̅", "C̅D̅", "C̅", "X̅C̅", "L̅", "X̅L̅", "X̅", "I̅X̅", "V̅", "I̅V̅", "I̅", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    const extArabicNumerals = [1000000, 900000, 500000, 400000, 100000, 90000, 50000, 40000, 10000, 9000, 5000, 4000, 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    let extRomanResult = "";

    for(let i = 0; i < extArabicNumerals.length; i++){
       while(inputNumber >= extArabicNumerals[i]){
           extRomanResult += extRomanNumerals[i];
           inputNumber -= extArabicNumerals[i];
       }
    }

   return extRomanResult;
};

inputNumber.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      convertBtn.click();
      resetBtn.focus();
    }
  });

function myReset(){
    outputDiv.classList.add("hidden");
    outputDiv.innerText = "";
    commentParagraph.classList.add("hidden");
    commentParagraph.innerText = "";
    inputNumber = "";
    convertBtn.classList.remove("hidden");
    resetBtn.classList.add("hidden");
    resetBtn.classList.remove("reset-button");
};

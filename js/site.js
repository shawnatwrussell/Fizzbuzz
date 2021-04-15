//Take User Input and Prints Numbers to the Page
function printNumbers() {
    let fizz = parseInt(document.getElementById("numOne").value);
    let buzz = parseInt(document.getElementById("numTwo").value);
    let numbers = getRange(fizz, buzz);


    displayData(numbers).limit(50000);
}

//Gets the Range of Numbers = Business Logic
function getRange(fizz, buzz) {
    let numberArray = [];
    //FizzBuzz Things Go Here
    for (let i = 1; i <= 100; i++) {
        if (i % fizz == 0 && i % buzz == 0) {
            numberArray.push("FizzBuzz");

        } else if (i % fizz == 0) {
            numberArray.push("Fizz");

        } else if (i % buzz == 0) {
            numberArray.push("Buzz");

        } else {
            numberArray.push(`${i}`);
        }
    }
    //Fizz Buzz things go here

    return numberArray;
}

//Displays the Numbers on the Page = Display Code

function displayData(numbers) {
    const rowTemplate = document.getElementById("Data-Template");
    const resultsBody = document.getElementById("resultsBody");
    let colCount = rowTemplate.content.cloneNode(true).querySelectorAll("td").length;

    //Clear the Table
    resultsBody.innerHTML = ""

    //Loop Over Every Element in the Numbers Array
    //Get the Value and Write Them to the Page
    for (let i = 0; i < numbers.length; i += colCount) {
        let dataRow = rowTemplate.content.cloneNode(true);

        //Returning an Array of Columns
        let cols = dataRow.querySelectorAll("td");

        //Loop Over the Columns
        for (let colIndex = 0; colIndex < cols.length; colIndex++) {
            // let value = numbers[colIndex + colIndex];
            if (numbers[i + colIndex] == "FizzBuzz") {
                cols[colIndex].classList.add("fizzBuzz");
                cols[colIndex].textContent = "FizzBuzz";

            } else if (numbers[i + colIndex] == "Fizz") {
                cols[colIndex].classList.add("fizz");
                cols[colIndex].textContent = "Fizz";

            } else if (numbers[i + colIndex] == "Buzz") {
                cols[colIndex].classList.add("buzz");
                cols[colIndex].textContent = "Buzz";

            } else {
                cols[colIndex].textContent = numbers[i + colIndex];
            }
        }
        //Adds the Row to the Page
        resultsBody.appendChild(dataRow);
    }
}
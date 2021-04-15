//Take User Input and Prints Numbers to the Page
function printNumbers() {
    let start = parseInt(document.getElementById("numOne").value);
    let end = parseInt(document.getElementById("numTwo").value);
    let numbers = getRange(start, end);


    displayData(numbers).limit(50000);
}

//Gets the Range of Numbers = Business Logic
function getRange(start, end) {
    let numberArray = [];
    for (let index = start; index <= end; index++) {
        //Fizz Buzz things go here
        numberArray.push(index);

    }
    return numberArray;
}

//Displays the Numbers on the Page = Display Code

function displayData(numbers) {
    const rowTemplate = document.getElementById("Data-Template");
    const resultsBody = document.getElementById("resultsBody");
    let colCount = rowTemplate.content.cloneNode(true).querySelectorAll("td").length;
    //importNode can also access a different document
    //Clear the Table
    resultsBody.innerHTML = ""

    //Loop Over Every Element in the Numbers Array
    //Get the Value and Write Them to the Page
    for (let rowIndex = 0; rowIndex < numbers.length; rowIndex += colCount) {
        let dataRow = rowTemplate.content.cloneNode(true);

        //Returning an Array of Columns
        let cols = dataRow.querySelectorAll("td");

        //Loop Over the Columns
        for (let colIndex = 0; colIndex < cols.length; colIndex++) {
            let value = numbers[rowIndex + colIndex];
            if (typeof value === "undefined") {
                value = "";
            } else if (value % 15 == 0) {
                cols[colIndex].classList.add("fizzBuzz");
                cols[colIndex].textContent = "fizzBuzz";

            } else if (value % 3 == 0) {
                cols[colIndex].classList.add("fizz");
                cols[colIndex].textContent = "fizz";
            } else if (value % 5 == 0) {
                cols[colIndex].classList.add("buzz");
                cols[colIndex].textContent = "buzz";
            }


            //Note: td's use textContent to set content
            else {
                cols[colIndex].textContent = value;
            }

        }
        //Adds the Row to the Page
        resultsBody.appendChild(dataRow);

    }

}

//cols[colsIndex].textContent "fizz";
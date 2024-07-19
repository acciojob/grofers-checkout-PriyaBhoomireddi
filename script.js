const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    // Get all elements with class "price"
    const prices = document.querySelectorAll(".price");
    
    // Calculate the sum of all prices
    let total = 0;
    prices.forEach(price => {
        total += parseFloat(price.textContent);
    });

    // Create a new row
    const newRow = document.createElement("tr");

    // Create a new cell with the total price
    const totalCell = document.createElement("td");
    totalCell.colSpan = 2; // Span across both columns
    totalCell.textContent = `Total Price: Rs ${total}`;

    // Append the new cell to the new row
    newRow.appendChild(totalCell);

    // Append the new row to the table
    document.querySelector("table").appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);

const expenseForm = document.getElementById('expenseForm')
const expenseList = document.getElementById('expenseList')

expenseForm.addEventListener('submit',
    function(event){
        event.preventDefault();
            const description = document.getElementById('description').value;
            const category = document.getElementById('category').value;
            const amount = document.getElementById('amount').value;

            if(document && category && !isNaN(amount)){
                const newRow = document.createElement('tr')

                newRow.innerHTML = `<td>${description}</td> 
                <td>${category}</td>  
                <td>${amount}</td> `;

                expenseList.appendChild(newRow);
                
                description.value='';
                category.value='';
                amount.value='';
            }else{
                alert("Please fill out alll fields with valid data")
            }
    })
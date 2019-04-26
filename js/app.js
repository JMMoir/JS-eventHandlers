document.addEventListener('DOMContentLoaded', () =>{
  console.log('javascript loaded');

  const form = document.querySelector('#new-stock');
  const handleFormSubmit = function(event){
    event.preventDefault();
    console.log(form);

    // Get form values
    const stock = event.target.company.value;
    const amount = event.target.amountOfShares.value;
    const price = event.target.PricePerShare.value;


    // Create unordered list element
    const listContainer = document.createElement('ul')

    // Get list reference
    const portfolio = document.querySelector('#displayPortfolio');

    // Add list element to portfolio element
    portfolio.appendChild(listContainer);

    // add the form data to portfolio
    const investment = document.createElement('li');
    investment.textContent = `${stock} ${amount} ${price}`;
    listContainer.appendChild(investment);


  form.reset()
  }
  form.addEventListener('submit', handleFormSubmit);






})

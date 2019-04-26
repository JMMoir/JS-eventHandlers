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
    const listContainer = document.createElement('div');
    listContainer.setAttribute('id', 'holdings')
    // Get list reference
    const portfolio = document.querySelector('#displayPortfolio');

    // Add list element to portfolio element
    portfolio.appendChild(listContainer);

    // add the form data to portfolio
    const investment = document.createElement('p');
    investment.textContent = `Company:${stock} No. of shares:${amount} Price: ${price}`;
    listContainer.appendChild(investment);



  form.reset()
  }
  form.addEventListener('submit', handleFormSubmit);

  //////////////////////////////

  // Delete all
  // create button
  const deleteAllButton = document.createElement('button');
  deleteAllButton.id = 'deleteAllButton';
  deleteAllButton.innerHTML = 'Delete All';
  document.body.appendChild(deleteAllButton);

  // make it delete stuff
  const deleteAll = document.querySelector('#deleteAllButton');
  const handleDeleteAll = function(){
    const portfolio = document.querySelector('#displayPortfolio');
     portfolio.remove()
     location.reload(true)
  };

  // add addEventListener
  deleteAll.addEventListener('click', handleDeleteAll);





})

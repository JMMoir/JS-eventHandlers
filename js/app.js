document.addEventListener('DOMContentLoaded', () =>{
  console.log('javascript loaded');

  const form = document.querySelector('#new-stock');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(form);

    // Get form values
    const stock = event.target.company.value;
    const amount = event.target.amountOfShares.value;
    const price = event.target.PricePerShare.value;


    // Create unordered list element
    const listContainer = document.createElement('div');
    listContainer.setAttribute('id', 'holdings')
    // Get list references
    const portfolio = document.querySelector('#displayPortfolio');
    const watchlist = document.querySelector('#displayWatchlist');

    // Add list element to portfolio of watchlist element
    if (portfolio.style.display === "block"){
    portfolio.appendChild(listContainer);
    };
    if (watchlist.style.display === "block"){
      watchlist.appendChild(listContainer);
    }
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
  const handleDeleteAll = () => {
    const portfolio = document.querySelector('#displayPortfolio');
     portfolio.remove()
     location.reload(true)
  };

  // add addEventListener
  deleteAll.addEventListener('click', handleDeleteAll);

  ///////////////////////

  // Radio buttons select which div(portfolio/watchlist) is displayed and added to.
  //  couldn't get radios to switch divs

  // buttons instead
  // control portfolio view
  const portfolioView = document.getElementById('#pButton');

  const handlePortfolioView =function(){
    console.log(portfolioView);
    const portfolio = document.querySelector('#displayPortfolio');
    const watchlist = document.querySelector('#displayWatchlist');
    portfolio.style.display = 'block';
    watchlist.style.display = 'none';
  };
  // event handler
  portfolioView.addEventListener('click', handlePortfolioView);

  // control watchlist view

  const watchlistView = document.getElementById('#wButton');

  const handleWatchlistView =function(){
    console.log(watchlistView);
    const watchlist = document.querySelector('#displayWatchlist');
    const portfolio = document.querySelector('#displayPortfolio');
    watchlist.style.display = 'block';
    portfolio.style.display = 'none';
  };
  // event handler
  watchlistView.addEventListener('click', handleWatchlistView);

})

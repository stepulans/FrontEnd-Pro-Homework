
let url = "https://dummyjson.com/products"
let div_wrapper = document.querySelector('.product_wrapper');
fetch(url)
    .then(res => res.json())
    .then(data => {
        render(data.products)
        console.log(data);
    })

function render(products) {
    for (let product of products) {
      let itemElem = document.createElement('div');
      itemElem.className = 'item';
      let item_img = document.createElement('img');
      item_img.className = 'item_img';
      let p_title = document.createElement('p');
      p_title.className = 'title';
      let p_price = document.createElement('p');
      p_price.className = 'price'
     
      p_title.innerText = 'Title: ' + product.title;
      p_price.innerText = 'Price: ' + product.price +'$';
      item_img.setAttribute('src', product.thumbnail);
      let rating_span = document.createElement('span');
      rating_span.className = 'rating';
      rating_span.appendChild(rating(product.rating));
      itemElem.append(item_img, p_title, p_price, rating_span);
      div_wrapper.append(itemElem);
    }
  
    document.body.append(div_wrapper);
}
function rating(n) {
    const ratingContainer = document.createElement('span');
    ratingContainer.className = 'rating-container';
  
    for (let i = 1; i <= 5; i++) {
      const starIcon = document.createElement('i');
      starIcon.className = `fa fa-star${i <= n ? ' active' : ''}`;
      ratingContainer.appendChild(starIcon);
    }
  
    return ratingContainer;
  }
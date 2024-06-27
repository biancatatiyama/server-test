var addToCartButton = document.getElementById("home_click");

addToCartButton.addEventListener("click", function (e) {
  console.log(`oi`);
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({'event': 'home_click'});
});

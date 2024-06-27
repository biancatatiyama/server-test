const homeClickBtn = document.getElementById("homeClickBtn");
const depositBtn = document.getElementById("depositBtn");


homeClickBtn.addEventListener("click", function (e) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({'event': 'home_click'});
});

depositBtn.addEventListener("click", function (e) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'deposit',
        'value': 1,
        'payment_method': 'pix'
    });
  });
  
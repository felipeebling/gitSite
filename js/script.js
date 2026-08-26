var banners = ["As melhores pizzas da Italia!", "Qualidade e preço alto!"];
var banner = 0;
function trocaBanner(){
banner = (banner + 1) % 2;
document.querySelector("h2#mensagem").textContent = banners[banner]
}
setInterval(trocaBanner,1000);
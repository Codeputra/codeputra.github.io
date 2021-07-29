const sMerah = document.querySelector("input[name=sMerah]");

sMerah.addEventListener("input", function(){
    const r = sMerah.value;
    document.body.style.backgroundColor = "rgb( "+ r +", 100, 100)";
});
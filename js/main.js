"use strict";
{
  let slider = document.getElementById("slider");
  let label = document.getElementById("label");
  let result = document.getElementById("result");
  let btn = document.getElementById("btn");
  let numbers = document.getElementById("numbers");
  let symbols = document.getElementById("symbols");

  function getPassword(){
    let seed_letters= "abcdefghijklmnopqrstuvwxyz";
    let seed_numbers = "1234567890";
    let seed_symbols = "~+-=/*._"
    let seed;

    let len = slider.value;
    let pwd = ""

    seed = seed_letters + seed_letters.toUpperCase();
    if(numbers.checked){
      seed += seed_numbers;
    }
    if(symbols.checked){
      seed += seed_symbols;
    }


    while(len--){
      pwd += seed[Math.floor(Math.random()*seed.length)];
    }
    result.value = pwd;
  }


  slider.addEventListener("change", function() {
    label.innerHTML = this.value;
  });

  btn.addEventListener("click", () =>{
    getPassword();
  });

  result.addEventListener("click", () =>{
    this.select();
  });

  getPassword();

}

window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    
    let minor = document.getElementById("minor");
    minor.setAttribute("class", "hidden")

    let oldEnough = document.getElementById("old-enough");
    oldEnough.setAttribute("class", "hidden")

    const age = parseInt(document.querySelector("input#age").value);

    if (age >= 18) {
      oldEnough.removeAttribute("class");
    } else {
      minor.removeAttribute("class");
    }
  }
}
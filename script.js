console.log("Hello World");

document.addEventListener("DOMContentLoaded", () => {
  const apiUrl = "https://restcountries.com/v2/all";
  const dropDown = document.querySelector("#country");
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      let str = "";
      data.forEach((country) => {
        str += `<option>${country.name}</option>
        
        <div class="image">
        ${country.flags.png}
            
        </div>`;

        console.log(country.flags.png);
      });
      dropDown.innerHTML = str;
    });
});

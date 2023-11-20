function data(){
    const cardsContainer = document.getElementById("cards-container");
    var jsondata = JSON.parse(cardData);
    let htmlContent = "";
    jsondata.map((item) => {
        htmlContent += `
        <div class="col ">
        <div class="card  border-0">
          <img src="${item.imageSrc}" class="card-img-top" alt="...">
          <a type="button" class="btn btn-primary" href="./bestdeals.html">
          ${item.txt}
            <i class="fa fa-external-link ms-2"></i>
          </a>
          </div>
      </div>
    `;
    console.log("hdgh");
       
      });
      cardsContainer.innerHTML = htmlContent;


      $( function() {
        var availableTags = [
          "Apple Laptops",
          "Laptops",
          "Lenovo Laptops",
          "Dell Laptops",
          "hp Laptops",
          "laptop",
          "Mouses",
          "Keyboards",
          "screen covers",
          "chargers",
          "samsung laptops",
          "asus laptops",
          "skins",
          "Java"
        ];
        $( "#tags" ).autocomplete({
          source: availableTags
        });
      } );
    
}
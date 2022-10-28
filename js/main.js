let elForm = document.querySelector(".form");
let elSearchInput = document.querySelector(".textinput");
let elSelectAll = document.querySelector(".selectAll");
let elYearStartInput = document.querySelector(".startyearinput");
let elYearEndInput = document.querySelector(".endyearinput");
let elList = document.querySelector(".lists");




// Template ichidagi classlarni chaqirib olyabmiz

function createList(item) {
    elList.innerHTML = "";

    let newFragment = document.createDocumentFragment();
    let elTemplate = document.querySelector(".template").content;

    for (const book of item) {
        let cloneTemplate = elTemplate.cloneNode(true);

        cloneTemplate.querySelector(".title").textContent = book.title;
        cloneTemplate.querySelector(".book").src = book.imageLink;
        cloneTemplate.querySelector(".page").textContent = book.pages;
        cloneTemplate.querySelector(".author").textContent = book.author;
        cloneTemplate.querySelector(".year").textContent = book.year;
        cloneTemplate.querySelector(".language").textContent = book.language;
        cloneTemplate.querySelector(".ahref").href = book.link;

        newFragment.appendChild(cloneTemplate)
    }

    elList.appendChild(newFragment);

}

// Searching fn
function showSearchMovies(items) {

    return books.filter(movie => {

        let meetsCriteria = movie.title.match(items);

        return meetsCriteria;
    });
}


function sortingAll(sortedList, select) {
    if (select === "aazz") {
      sortedList.sort((a,b) => a.title.localeCompare(b.title))
    }else if(select === "zzaa") {
      sortedList.sort((a,b) => b.title.localeCompare(a.title))
  
    }else if (select === "yearstart") {
      sortedList.sort((a,b) => a.year - b.year)
  
    }else if (select === "yearend") {
      sortedList.sort((a,b) => b.year - a.year)
    }else if (select === "pagestart") {
      sortedList.sort((a,b) => a.pages - b.pages)
    }else if (select === "pageend") {
      sortedList.sort((a,b) => b.pages - a.pages)
    }
  }

elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();

    let searchElement = new RegExp(elSearchInput.value.trim(), "gi");
    let absd = showSearchMovies(searchElement);

    
    // let fromYearValue = elYearStartInput.value;
    // let toYearValue = elYearEndInput.value;

    if (absd.length > 0) {
        sortingAll(absd, elSelectAll.value);
        createList(absd);
    } else {
        alert("Movie not found");
    }

})

createList(books);
// showSearchMovies()
// elInput.value = "";
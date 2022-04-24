document.getElementById("search").addEventListener("click", () => {
    el = document.getElementById("searchinput");
    if (el.style.display == "block") {
      document.getElementById("searchinput").style.display = "none";
      document.getElementById("search").src = "images/search.png";
    } else {
      console.log(el.style.display);
      document.getElementById("searchinput").style.display = "flex";
      document.getElementById("search").src = "images/close.png";
    }

  });
  


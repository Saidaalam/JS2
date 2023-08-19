let searchInput = document.querySelector('.searchInput');
        let searchBtn = document.querySelector('#searchBtn');

        searchBtn.addEventListener("click", function () {
            if (searchInput.style.display == "none") {
                searchInput.style.display = "block";
            } else {
                searchInput.style.display = "none";
            }
        });


let menuBtn =  document.querySelector(`.menuBtn`);
  let sidebar = document.querySelector(`aside`);

  function toggleSidebar(){
    sidebar.classList.toggle("sidebarActive");

    if (sidebar.classList.contains("sidebarActive") == false) {
        menuBtn.innerHTML = `<i class="bi bi-list-nested"></i>`;
    } else {
        menuBtn.innerHTML = `<i class="bi bi-x-lg"></i>`;
    }
  }

menuBtn.addEventListener('click', toggleSidebar) 
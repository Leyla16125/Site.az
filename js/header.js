const ulVeb = document.getElementById("ulVeb");
const ulDom = document.getElementById("ulDom");
const ulHost = document.getElementById("ulHost");
const ulServ = document.getElementById("ulServ");
const ulAbout = document.getElementById("ulAbout");
const barMenu = document.getElementById("barMenu")

// acilib-baglamaq
let isVebOpen = false;
let isDomenOpen = false;
let isHostOpen = false;
let isServOpen = false;
let isAboutOpen = false;

function closeAllLists() {
    ulVeb.innerHTML = '';
    ulDom.innerHTML = '';
    ulHost.innerHTML = '';
    ulServ.innerHTML = '';
    ulAbout.innerHTML = '';

    isVebOpen = false;
    isDomenOpen = false;
    isHostOpen = false;
    isServOpen = false;
    isAboutOpen = false;
}

// umumi li yaratmaq
function generateList(items) {
    return items.map((item) => {
      // calculatora yonlendiren li ni tap
      const isCalculator = item.title === "Sayt Kalkulyatoru";
  
      return `
        <li class="cursor-pointer p-3 hover:bg-blue-50 rounded-md transition-all duration-200">
          <a ${isCalculator ? 'href="calculator.htm"' : ''} class="flex items-center gap-4">
            <div class="p-2 rounded-sm bg-blue-100">
              <img class="w-8 h-8" src="${item.icon}">
            </div>
            <div>
              <p class="text-slate-700 font-medium text-base">${item.title}</p>
              <p class="text-slate-500 text-sm">${item.description}</p>
            </div>
          </a>
        </li> 
      `;
    }).join("");
  }
  



function vebList() {
    if (isVebOpen) {
        closeAllLists();
    } else {
        closeAllLists();
        ulVeb.innerHTML = generateList(veb);
        isVebOpen = true;
    }
}

function domList() {
    if (isDomenOpen) {
        closeAllLists();
    } else {
        closeAllLists();
        ulDom.innerHTML = generateList(domen);
        isDomenOpen = true;
    }
}

function hostList() {
    if (isHostOpen) {
        closeAllLists();
    } else {
        closeAllLists();
        ulHost.innerHTML = generateList(host);
        isHostOpen = true;
    }
}

function servList() {
    if (isServOpen) {
        closeAllLists();
    } else {
        closeAllLists();
        ulServ.innerHTML = generateList(services);
        isServOpen = true;
    }
}

function aboutList() {
    if (isAboutOpen) {
        closeAllLists();
    } else {
        closeAllLists();
        ulAbout.innerHTML = generateList(about);
        isAboutOpen = true;
    }
}


//mobile menu acilib baglamaq
//biri aciqdisa o birilerini bagla
function toggleBarMenu(){
    const barMenu = document.getElementById("barMenu");
    if (barMenu.classList.contains("translate-x-[300%]")) {
        barMenu.classList.remove("translate-x-[300%]");
        barMenu.classList.add("translate-x-0");
    } else {
        barMenu.classList.remove("translate-x-0");
        barMenu.classList.add("translate-x-[300%]");
    }
}
function toggleSubList(id, items) {
  const target = document.getElementById(id);

  const allIds = ['ulVebBar', 'ulDomBar', 'ulHostBar', 'ulServBar', 'ulAboutBar'];
  allIds.forEach(menuId => {
    const el = document.getElementById(menuId);
    if (menuId !== id) {
      el.classList.add("hidden");
      el.innerHTML = "";
    }
  });

  if (target.classList.contains("hidden")) {
    target.innerHTML = generateList(items);
    target.classList.remove("hidden");
  } else {
    target.innerHTML = "";
    target.classList.add("hidden");
  }
}


  
  
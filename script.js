const selectElem = document.getElementById('domainSelect');
let domains  = [ '.az','.com', '.net', '.info', '.biz', '.org', '.us', '.in', '.ws', '.mobi', '.tv', '.me', '.ru',
             '.de', '.com.az', '.co', '.site.az', '.sayt.az', '.ureb.com', '.org.az', 'info.az', '.biz.az', 'net.az'];

selectElem.innerHTML = domains.map(domain =>
     `<option value="${domain}">${domain}</option>`).join('');

function handleSelectChange(select) {
    const selectedDomain = select.value;
    document.getElementById('display').textContent = 'Seçilmiş domen: ' + selectedDomain;
}

function color(id) {
  const buttons = document.querySelectorAll(".flex-1");
  buttons.forEach(button => {
      button.classList.remove("bg-[#a271f2]", "text-white");
      button.classList.add("bg-white", "text-gray-600");
  });

  document.getElementById(id).classList.add("bg-[#a271f2]", "text-white");
  document.getElementById(id).classList.remove("bg-white", "text-gray-600");

 if(all.classList.contains("bg-[#a271f2]")){
        birayil.innerHTML = 5
        ikiayil.innerHTML = 10
        ucayil.innerHTML = 20
 }else{
        birayil.innerHTML = 60
        ikiayil.innerHTML = 120
        ucayil.innerHTML = 240
 }
}

function showMembers(){
    let member =''
    teamMembers.map(item =>{
        member +=
        `
        <div class="max-w-xs  shadow-md border-2  rounded-2xl border-[#a271f2] p-2">
	        <img src="${item.img}" alt="" class="object-cover object-center w-full rounded-t-md h-60 rounded-2xl dark:bg-gray-500">
	        <div class="flex flex-col justify-between p-2 space-y-2">
                <div class="space-y-2 text-center">
                    <h2 class="font-medium text-xl text-[#300B60]">${item.name}</h2>
                    <p class="font-medium text-[#300B60]">${item.position}</p>
                </div>
	        </div>
        </div>
            
        `
    })


    membersList.innerHTML = member
}
showMembers()

function showPortfolio(){
    let portfolio =''
    portfolioProjects.map(item =>{
        portfolio +=
        `
        <div class="max-w-lg p-4 bg-[#faf4ff] rounded-3xl">
	        <div class="space-y-4">
		        <div class="space-y-2">
			        <img src="${item.img}"class="block object-cover object-center w-full rounded-md h-72 py-6 dark:bg-gray-500">
		        </div>
                <div class="space-y-2">
                    <a class="block">
                        <h3 class="font-medium text-[#300B60]">${item.title}</h3>
                    </a>
                </div>
        </div>
       </div>     
        `
    })


    portfolioList.innerHTML = portfolio
}
showPortfolio()
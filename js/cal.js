const statik = document.getElementById('statik');
const inp1 = document.getElementById('inp1');
const inp2 = document.getElementById('inp2'); 
const inp3 = document.getElementById("inp3")
const ball = document.querySelector(".ball");
const light = document.getElementById("light");
const src = document.getElementById("src")
const axtaris = document.getElementById("axtaris")


//static xerc
function updateXerc() {
  statik.innerHTML = inp1.value + " səhifə / " + " ₼ " + (inp1.value * inp2.value * 100) ;
  const qiymet = inp1.value * inp2.value * 100;
  tklfstatik.innerHTML = `₼ ${qiymet}`;// teklif qiymetleri arasinada elave olunsun
  updateTotal();// her defe deyisende umumi meblegide deyis

}

updateXerc();


//veb sayt elaveleri
const inps = document.getElementById('inps')  
const elaveler = document.getElementById('elaveler')

rangeData.map(item => {
    inps.innerHTML += `
      <div class="flex items-center justify-between mb-3">
        <label class="text-gray-700">${item.name}</label>
        <div class="toggle relative bg-[#e5e7eb] w-[44px] h-[22px] rounded-xl cursor-pointer" onclick="elave(this, ${item.price})">
          <div class="ball absolute left-[2px] top-[1px] bg-white h-[20px] w-[20px] rounded-full transition-all duration-300"></div>
        </div>
      </div>
    `;
  });
  
  let sum = 0;
  
  function elave(toggle, prc) {
    const ball = toggle.querySelector(".ball");
  
    const isActive = toggle.classList.toggle("active");
  
    if (isActive) {
      sum += prc;
      toggle.style.backgroundColor = "#a271f2"; 
      ball.style.left = "calc(100% - 22px)";
    } else {
      sum -= prc;
      toggle.style.backgroundColor = "#e5e7eb"; 
      ball.style.left = "2px";
    }
  
    elaveler.innerHTML = sum + " ₼";
    tklfelave.innerHTML = sum + " ₼";
    updateTotal();// her defe deyisende umumi meblegide deyis

  }
  

  //Axtarış motorunun optimallaşdırılması  
  checkData.map(item => {
    src.innerHTML += `
      <div class="mb-3">
        <input class="hover:border-[#a271f2]" onclick="arasdir(this, ${item.price})" id="inp${item.id}" type="checkbox" />
        <label for="inp${item.id}">${item.name}</label>
      </div>
    `;
  });
  
  let sum2 = 0;
  
  function arasdir(self, prc) {
    if (self.checked) sum2 += prc;
    else sum2 -= prc;
    
    axtaris.innerHTML = sum2 + " ₼";
    tklfseo.innerHTML = sum2 + " ₼";
    updateTotal();// her defe deyisende umumi meblegide deyis
  }
  

  
  // eccomerceData 
eccomerceData.map(item => {
  tcrt.innerHTML += `
    <div class="flex items-center justify-between mb-3">
      <label class="text-gray-700">${item.name}</label>
      <div class="toggle relative bg-[#e5e7eb] w-[44px] h-[22px] rounded-xl cursor-pointer" onclick="elaveTicaret(this, ${item.price})">
        <div class="ball absolute left-[2px] top-[1px] bg-white h-[20px] w-[20px] rounded-full transition-all duration-300"></div>
      </div>
    </div>
  `;
});

  let sum3 = 0;
  
  function elaveTicaret(toggle, prc) {
    const ball = toggle.querySelector(".ball");
    const isActive = toggle.classList.toggle("active");
  
    if (isActive) {
      sum3 += prc;
      toggle.style.backgroundColor = "#a271f2";
      ball.style.left = "calc(100% - 22px)";
    } else {
      sum3 -= prc;
      toggle.style.backgroundColor = "#e5e7eb";
      ball.style.left = "2px";
    }
  
    elektron.innerHTML = sum3 + " ₼";
    tklfticaret.innerHTML = sum3 + " ₼";
    updateTotal();// her defe deyisende umumi meblegide deyis
  }
  

//cost
function updateCost() {
  cost.innerHTML = inp3.value  + " ₼ "  ;
  tklflogo.innerHTML = inp3.value  + " ₼ "  ;
  updateTotal();// her defe deyisende umumi meblegide deyis
}

updateCost();

//teklif
function updateTotal() {
  const statik = parseInt(tklfstatik.innerText.replace("₼", "").trim());
  const elave = parseInt(tklfelave.innerText.replace("₼", "").trim());
  const seo = parseInt(tklfseo.innerText.replace("₼", "").trim());
  const ticaret = parseInt(tklfticaret.innerText.replace("₼", "").trim());
  const logo = parseInt(tklflogo.innerText.replace("₼", "").trim());

  let toplam = statik + elave + seo + ticaret + logo;

  if (toplam < 450) toplam = 450;

  result.innerText = `₼ ${toplam}`;
}

updateTotal()

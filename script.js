const select = document.querySelector('select');
let array = ['.com', '.net', '.info', '.biz', '.org', '.us', '.in', '.ws', '.mobi', '.tv', '.me', '.ru',
             '.de', '.com.az', '.co', '.site.az', '.sayt.az', '.ureb.com', '.org.az', 'info.az', '.biz.az', 'net.az'];

let isListOpen = false; 
function azList() {
    if (!isListOpen) {
        select.innerHTML = `<option selected>.az</option>` + array.map(item => `<option>${item}</option>`).join('');
    } else {
        select.innerHTML = `<option selected>.az</option>`;
    }
    isListOpen = !isListOpen;
}

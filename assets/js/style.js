const input = document.querySelector('input')
const btn = document.querySelector('button')
const ol = document.querySelector('ul')
const form = document.querySelector('form')
const arr = []


const todoApp = (e) => {
    e.preventDefault()
    if (!input.value) {
        alert('Please, open the task')
    } else {
        //li yaratmaq
        const li = document.createElement('li');
        li.innerHTML = input.value;
        li.className = 'd-flex align-items-center justify-content-between mt-2 ps-3';
        li.style.backgroundColor = 'rgba(213, 217, 216)';
        li.style.width = '590px';
        input.value = null;
        ol.appendChild(li);

        //checkbox yaratmaq
        const input1 = document.createElement('input');
        input1.type = 'checkbox';
        li.appendChild(input1);

        //zibilqabi icon-u yaratmaq
        const a = document.createElement('a');
        a.style.width = '200px';
        a.className = 'ms-5';
        li.appendChild(a);
        const icon = document.createElement('i');
        icon.className = 'fa-solid fa-trash-can px-2 py-2 text-light bg-danger ms-3';
        a.appendChild(icon);

        //localStorage-e yazmaq
        arr.push(li.textContent)
        localStorage.setItem('li', JSON.stringify(arr))
        console.log(JSON.parse(localStorage.getItem('li')));

        //zibilqabi-na clickliyende silmek
        icon.onclick = () => {
            li.remove();
            const liIndex = arr.indexOf(li.textContent);
            arr.splice(liIndex, 1);
            localStorage.setItem('li', JSON.stringify(arr));
        };
    }
}
form.addEventListener('submit', todoApp)

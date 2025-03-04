const card = document.getElementById('card');
const btn = document.getElementById('btn');

async function fetchApi() {
    try {
        const url = await fetch('https://randomuser.me/api/');
        const res = await url.json();
        const data = res.results[0];

        card.removeChild(btn);
        card.innerHTML = '';

        const img = document.createElement('img');
        img.src = data.picture.large;

        const name = document.createElement('h2');
        name.textContent = `${data.name.first} ${data.name.last}`;

        const number = document.createElement('p');
        number.textContent =`phone: ${data.phone}`;

        const location = document.createElement('p');
        location.textContent = `location: ${data.location.city}`;

        const age = document.createElement('p');
        age.textContent = `age: ${data.dob.age}`;

        const email = document.createElement('p');
        email.textContent = `email: ${data.email}`;

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(number);
        card.appendChild(location);
        card.appendChild(age);
        card.appendChild(email);
        card.appendChild(btn);

    } catch (error) {
        console.log('Какая-то ошибка', error);
    }
}

fetchApi();

btn.addEventListener('click', fetchApi);

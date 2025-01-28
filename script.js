document.getElementById('weatherForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const cidade = document.getElementById('cidade').value;
    const apiKey = 'e1b8dc80450819ffc32f984ad72be11e';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const cityName = data.name;
                const temperatura = data.main.temp;
                const descricao = data.weather[0].description;
                const Umidade = data.main.humidity;

                document.getElementById('cityName').textContent = `Clima em ${cityName}`;
                document.getElementById('temperatura').textContent = `Temperatura: ${temperatura}°C`;
                document.getElementById('descricaoClima').textContent = `Condição: ${descricao}`;
                document.getElementById('Umidade').textContent = `Umidade: ${Umidade}%`;

                document.getElementById('weatherResult').style.display = 'block';
            } else {
                alert('Cidade não encontrada!');
            }
        })
        .catch(error => {
            alert('Erro ao buscar dados do clima, Tente novamente!');
            console.error(error);
        });
});

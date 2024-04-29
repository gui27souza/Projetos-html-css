// Inicialização das variáveis necessárias

    let temp_celsius = 0
    let temp_fahrenheit = 0
    let temp_kelvin = 0

    let temp = 0
    let temp_unit = ''

//



// Função de chamada para a conversão dos valores e faz a saída

    document.getElementById('input-form').addEventListener('submit', function(event) {
        // Impede a página de recarregar no submit e perder as mudanças
        event.preventDefault()

        temp_unit = document.getElementsByName('temperatureUnit')[0].value
        temp = document.getElementsByName('temperature')[0].value

        convertTemperature(temp, temp_unit)

        document.getElementById('span-celsius').textContent = Number(temp_celsius).toFixed(0) + ' °C'
        document.getElementById('span-fahrenheit').textContent = Number(temp_fahrenheit).toFixed(0) + ' °F'
        document.getElementById('span-kelvin').textContent = Number(temp_kelvin).toFixed(0) + ' K'
    })

//



// Função que converte as temperaturas de acordo com a unidade 

    function convertTemperature(temp, temp_unit) {
        switch (temp_unit) {
            case 'C':
                temp_celsius = temp
                temp_fahrenheit = (temp * 9/5) + 32
                temp_kelvin = Number(temp) + 273

                termometerPercentage(temp_celsius, temp_unit)
            break

            case 'F':
                temp_fahrenheit = temp
                temp_celsius = (temp - 32) * 5/9
                temp_kelvin = (temp - 32) * 5/9 + 273

                termometerPercentage(temp_celsius, temp_unit)
            break

            case 'K':
                temp_kelvin = temp
                temp_celsius = temp - 273
                temp_fahrenheit = (temp - 273) * 9/5 + 32

                termometerPercentage(temp_celsius, temp_unit)
            break
        }
    }

//



// Função que modifica o termômetro (max, min e porcentagem da height)

    function termometerPercentage(temp, unit) {
        
        switch (unit) {
            case 'C':
                document.getElementById('max').textContent = 100
                document.getElementById('min').textContent = 0
            break

            case 'F':
                document.getElementById('max').textContent = 212
                document.getElementById('min').textContent = 32
            break

            case 'K':
                document.getElementById('max').textContent = 373
                document.getElementById('min').textContent = 273
            break
        }


        if (temp <= -20) {
            document.getElementById('termometer-progress').style.height = 0
            return
        }
        if (temp >= 115) {
            document.getElementById('termometer-progress').style.height = '97.915%'
            return
        }


        let percentage = (Number(temp) * 0.721) + 15
        percentage = String(percentage) + '%'
        document.getElementById('termometer-progress').style.height = percentage
    }

//
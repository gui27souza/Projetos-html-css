function atualizarCorBase() {
    const dataAtual = new Date()
    const horas = dataAtual.getHours()
    const minutos = dataAtual.getMinutes()

    const totalMinutos = horas * 60 + minutos

    const hue = (totalMinutos / 1440) * 360

    document.getElement.style.setProperty('--cor-base', `${hue}, 70%`)
}

document.addEventListener('DOMContentLoaded', atualizarCorBase);

setInterval(atualizarCorBase, 300000)
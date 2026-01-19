// Zadanie 3: Napisz obsługę otwierania i zamykania modala

// 1. Pobierz elementy do zmiennych (btnOpen, btnClose, overlay)

// 2. Dodaj nasłuchwianie kliknięcia na btnOpen -> pokaż overlay (display = 'block' lub 'flex')

// 3. Dodaj nasłuchwianie kliknięcia na btnClose -> ukryj overlay (display = 'none')

const btnOpen = document.querySelector('#openModal')
const btnClose = document.querySelector('#closeModal')
const overlay = document.querySelector('.overlay')

btnOpen.addEventListener('click', () => {
    overlay.style = "display: block"
})

btnClose.addEventListener('click', () => {
    overlay.style = "display: none"
})
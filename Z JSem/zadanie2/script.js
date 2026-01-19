// Zadanie 4: Obsługa scrollowania

// 1. Pobierz nawigację (nav)

// 2. Dodaj event listener na 'scroll' dla obiektu window
const navigation = document.querySelector('nav') 

window.addEventListener("scroll", function () {
  // 3. Sprawdź pozycję scrolla (window.scrollY)
  // Jeśli scroll > 50 -> dodaj klasę 'scrolled' do nav
  // Jeśli scroll <= 50 -> usuń klasę 'scrolled' z nav
  if (window.scrollY > 50){
    navigation.classList.add(".scrolled")
  }
  else {
    navigation.classList.remove(".scrolled")
  }
});

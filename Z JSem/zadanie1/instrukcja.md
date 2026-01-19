# Zadanie 1: Modal (Okno wyskakujące)

## Cel

Nauczysz się wyśrodkowywać element na ekranie używając pozycjonowania absolutnego oraz stworzysz prostą logikę JS do pokazywania i ukrywania tego elementu.

## Krok 1: Analiza HTML

Otwórz plik `index.html`. Zobaczysz tam:

1.  Przycisk `id="openModal"` - służy do otwierania okna.
2.  Kontener `div` o klasie `overlay` - to będzie tło przykrywające całą stronę.
3.  Wewnątrz `overlay` znajduje się `div` o klasie `modal` - to jest właściwe okienko z treścią i przyciskiem zamknięcia (`id="closeModal"`).

## Krok 2: Stylowanie CSS (Pozycjonowanie)

Otwórz plik `style.css` i wykonaj poniższe kroki (szukaj komentarzy `/* ZADANIE */`):

1.  **Overlay (Tło)**:

    - Nadaj klasie `.overlay` właściwość `position: fixed`. To sprawi, że tło będzie zawsze widoczne względem okna przeglądarki.
    - Ustaw `top: 0`, `left: 0`, `width: 100%`, `height: 100%`. To rozciągnie tło na cały ekran.
    - Ustaw `background-color: rgba(0,0,0,0.5)` (półprzezroczysty czarny) i `z-index: 1000` (by było na wierzchu).
    - Początkowo chcemy, aby modal był ukryty. Dodaj `display: none`. Będziemy to zmieniać w JS.

2.  **Modal (Okienko)**:
    - Nadaj klasie `.modal` właściwość `position: absolute`.
    - Ustaw `top: 50%` i `left: 50%`. To przesunie lewy górny róg okienka na środek ekranu (ale to nie jest idealny środek okienka!).
    - Użyj `transform: translate(-50%, -50%)`. To przesunie okienko w lewo i w górę o połowę jego własnej szerokości i wysokości. Teraz jest idealnie na środku!
    - Dodaj białe tło (`background-color: white`), `padding: 20px`, i `border-radius: 8px` dla wyglądu.

## Krok 3: Logika JavaScript

Otwórz plik `script.js`. Napisz kod obsługujący przyciski:

1.  Pobierz elementy do zmiennych: przycisk otwierania (`#openModal`), przycisk zamykania (`#closeModal`), oraz tło (`.overlay`).
2.  Dodaj nasłuchiwanie zdarzenia `click` na przycisk otwierania. W funkcji obsługi zmień styl `display` elementu `.overlay` na `'block'` (lub `'flex'`).
3.  Dodaj nasłuchiwanie zdarzenia `click` na przycisk zamykania. W funkcji obsługi zmień styl `display` elementu `.overlay` na `'none'`.

## Sprawdzenie

Kliknij przycisk "Otwórz ofertę". Powinno pojawić się okno na środku ekranu z przyciemnionym tłem. Kliknij "Zamknij", aby wrócić.

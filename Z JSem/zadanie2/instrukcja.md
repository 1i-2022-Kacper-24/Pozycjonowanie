# Zadanie 2: Sticky Navigation (Przyklejone menu)

## Cel

Nauczysz się używać właściwości `position: sticky` oraz zmieniać wygląd elementu w zależności od przewijania strony (scroll) za pomocą JavaScript.

## Krok 1: Analiza HTML

Otwórz `index.html`. Mamy tam:

1.  `header` - nagłówek strony (jakiś banner).
2.  `nav` - pasek nawigacji z linkami, który chcemy "przykleić".
3.  `main` - długa treść strony, żeby było co przewijać.

## Krok 2: Stylowanie CSS (Sticky)

Otwórz `style.css`:

1.  Znajdź selektor `nav`.
2.  Ustaw `position: sticky`. To sprawia, że element zachowuje się normalnie, dopóki nie dotknie krawędzi określonej przez...
3.  Ustaw `top: 0`. To oznacza: "przyklej się do samej góry okna przeglądarki, gdy do niej dotrzesz".
4.  Dodaj wysoki `z-index` (np. `100`), aby menu przykrywało treść podczas przewijania.
5.  Zdefiniuj również klasę `.scrolled` dla `nav` (np. zmień `background-color` na ciemniejszy lub dodaj `box-shadow`). Użyjemy jej w JS.

## Krok 3: Logika JavaScript (Scroll effect)

Otwórz `script.js`:

1.  Pobierz element `nav` do zmiennej.
2.  Dodaj nasłuchiwanie zdarzenia `scroll` na obiekcie `window` (całe okno).
3.  Wewnątrz funkcji sprawdzaj `window.scrollY` (obecna pozycja przewijania).
4.  Jeśli `window.scrollY` jest większe niż 50 (pikseli):
    - Dodaj do paska nawigacji klasę `.scrolled` (użyj `classList.add`).
5.  W przeciwnym wypadku (else):
    - Usuń klasę `.scrolled` (użyj `classList.remove`).

## Sprawdzenie

Przewiń stronę w dół. Pasek menu powinien najpierw być pod nagłówkiem, a po dotarciu do góry ekranu - przykleić się i (dzięki JS) zmienić lekko wygląd.

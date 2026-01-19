# Zadanie 3: "Lista Kontaktów" - Position Sticky

**Cel:** Zrozumienie nowoczesnego pozycjonowania `sticky`, które jest hybrydą między `relative` a `fixed`.

**Czas:** 20 minut

---

## Wstęp Teoretyczny
`position: sticky` sprawia, że element zachowuje się jak zwykły element (`relative`), dopóki nie zostanie przewinięty do określonej pozycji na ekranie (np. `top: 0`). Wtedy "przykleja się" i zachowuje jak `fixed`, ale tylko w obrębie swojego rodzica! Jest to idealne do nagłówków tabel czy list.

---

## Kroki do wykonania

### Krok 1: Analiza
Otwórz `index.html`. To długa lista kontaktów podzielona na sekcje literowe (A, B, C). Każda sekcja ma nagłówek z literą (`<div class="letter-header">`). Przewiń listę – nagłówki znikają wraz z przewijaniem.

### Krok 2: Przyklejanie Nagłówków
W pliku `style.css` znajdź klasę `.letter-header`.
1. Dodaj: `position: sticky;`.
   *Samo sticky nie zadziała bez podania progu przyklejenia!*
2. Dodaj: `top: 0;`.
   *To oznacza: "gdy element dotrze do samej góry okna (0px od góry), przyklej go tam".*

### Krok 3: Dopracowanie Wyglądu
Nagłówki mogą być przezroczyste i tekst pod nimi będzie brzydko prześwitywał.
1. Upewnij się, że w `.letter-header` jest ustawione tło (np. `background-color: #eee;` lub inny kolor).
2. Dodaj delikatny cień, aby oddzielić przyklejony nagłówek od reszty listy: `box-shadow: 0 2px 5px rgba(0,0,0,0.1);`.

### Krok 4: Testowanie
Przewijaj powoli listę w dół.
- Gdy przewijasz sekcję "A", nagłówek "A" powinien być przyklejony na górze.
- Gdy sekcja "A" się kończy i zaczyna "B", nagłówek "B" powinien "wypchnąć" nagłówek "A" i zająć jego miejsce.
To jest unikalna cecha `sticky` – działa w kontekście swojego rodzica (sekcji).

---

## Oczekiwany Efekt
Podczas przewijania listy kontaktów, litera aktualnie przeglądanej sekcji (np. A, B, C) jest zawsze widoczna na samej górze ekranu, dopóki nie przewiniemy do kolejnej sekcji.

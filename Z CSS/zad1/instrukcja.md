# Zadanie 1: "Celownik" - Relacje Rodzic-Dziecko

**Cel:** Zrozumienie, jak element z `position: absolute` pozycjonuje się względem rodzica z `position: relative`.

**Czas:** 15 minut

---

## Wstęp Teoretyczny
Domyślnie wszystkie elementy mają `position: static`. Jeśli nadasz elementowi podrzędnemu `position: absolute`, będzie on szukał najbliższego rodzica, który ma pozycję inną niż `static`. Jeśli takiego nie znajdzie, ustawi się względem całego okna przeglądarki!
Aby "uwięzić" element absolutny wewnątrz konkretnego pudełka, musimy temu pudełku nadać `position: relative`.

---

## Kroki do wykonania

### Krok 1: Analiza
Otwórz plik `index.html`. Zobaczysz tam kontener (`.game-area`) oraz element celownika (`.crosshair`). Obecnie celownik znajduje się w standardowym miejscu (lewy górny róg kontenera lub poniżej tekstu, zależnie od flow).

### Krok 2: Przygotowanie Rodzica (Kontenera)
W pliku `style.css` znajdź klasę `.game-area`.
1. Dodaj właściwość `position: relative;`.
   *To sprawi, że ten element stanie się punktem odniesienia dla elementów absolutnych wewnątrz niego.*

### Krok 3: Ustawienie Celownika
Znajdź klasę `.crosshair`.
1. Dodaj właściwość `position: absolute;`.
2. Teraz chcemy go wyśrodkować. Ustaw:
   - `top: 50%;` (przesuwa górną krawędź elementu na środek wysokości rodzica)
   - `left: 50%;` (przesuwa lewą krawędź elementu na środek szerokości rodzica)

*Sprawdź w przeglądarce. Czy celownik jest idealnie na środku? Prawdopodobnie nie - jego środek jest przesunięty, bo pozycjonujemy jego lewy górny róg.*

### Krok 4: Idealne Centrowanie
Aby celownik był idealnie na środku, musimy go cofnąć o połowę jego własnej szerokości i wysokości.
1. W klasie `.crosshair` dodaj:
   - `transform: translate(-50%, -50%);`

### Krok 5: Cel Dodatkowy (Bonus)
W HTML znajduje się też `.score-badge` (Odznaka z wynikiem).
1. W CSS dla `.score-badge` ustaw `position: absolute`.
2. Umieść go w **prawym dolnym rogu** kontenera, używając właściwości `bottom` i `right`. (np. `bottom: 20px;`, `right: 20px;`).

---

## Oczekiwany Efekt
- Szary obszar gry (kontener) jest w centrum uwagi.
- Czerwony celownik jest idealnie na środku szarego obszaru.
- Odznaka z wynikiem jest "przyklejona" do prawego dolnego rogu szarego obszaru (wewnątrz niego!).

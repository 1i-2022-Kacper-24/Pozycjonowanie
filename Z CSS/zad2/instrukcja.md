# Zadanie 2: "Panel Boczny" - Zawsze Widoczny

**Cel:** Zrozumienie działania `position: fixed`, który "przykleja" element względem okna przeglądarki (viewportu), niezależnie od przewijania strony.

**Czas:** 15 minut

---

## Wstęp Teoretyczny
Gdy używamy `position: fixed`, element jest wyjmowany z normalnego przepływu dokumentu. Jego pozycja jest określana względem krawędzi okna przeglądarki. Nawet jeśli strona ma 10 000 pikseli wysokości i przewijasz ją w dół, element fixed pozostanie w tym samym miejscu na ekranie (np. przyklejony do prawej krawędzi).

---

## Kroki do wykonania

### Krok 1: Analiza
Otwórz `index.html`. Zobaczysz tam stronę z dużą ilością akapitów "Lorem Ipsum". Przewiń stronę w dół, aby zobaczyć, jak długa ona jest.
Zauważ element `<aside class="social-sidebar">` w kodzie HTML. Na razie jest on na samym górze i znika, gdy przewijasz stronę.

### Krok 2: Przyklejenie Panelu
W pliku `style.css` znajdź klasę `.social-sidebar`.
1. Dodaj: `position: fixed;`.
   *Teraz przewiń stronę. Zauważysz, że pasek "oderwał się" od reszty treści, ale wciąż jest w lewym górnym rogu.*

### Krok 3: Pozycjonowanie
Chcemy, aby panel był po **prawej** stronie i wyśrodkowany w pionie.
1. W `.social-sidebar` dodaj:
   - `right: 0;` (przyklei go do prawej krawędzi)
   - `top: 50%;` (góra paska będzie w połowie wysokości ekranu)

### Krok 4: Korekta Środka
Podobnie jak w Zadaniu 1, `top: 50%` ustawia górną krawędź elementu na środku. Aby środek paska był na środku ekranu:
1. Dodaj: `transform: translateY(-50%);`

### Krok 5: Efekt Wysuwania (Interakcja CSS)
Sprawmy, by panel był częściowo ukryty i wysuwał się po najechaniu.
1. Zmień `right: 0;` na `right: -40px;` (schowaj go trochę poza ekran).
2. Dodaj: `transition: right 0.3s;` (aby animacja była płynna).
3. Dopisz nową regułę pod spodem:
   ```css
   .social-sidebar:hover {
       right: 0;
   }
   ```

---

## Oczekiwany Efekt
- Podczas przewijania długiej strony, kolorowy pasek z ikonami (kwadratami) jest cały czas widoczny przy prawej krawędzi.
- Pasek jest mniej więcej na środku wysokości ekranu.
- Gdy najedziesz myszką na pasek, wysuwa się on w całości.

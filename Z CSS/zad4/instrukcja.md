# Zadanie 4: "Karta Postaci" - Warstwy (Z-index)

**Cel:** Nauka zarządzania kolejnością nakładania się elementów (`z-index`) oraz pozycjonowania wielu elementów względem jednego rodzica.

**Czas:** 25 minut

---

## Wstęp Teoretyczny
Często chcemy, aby elementy nachodziły na siebie (np. napis na zdjęciu, ozdobna ramka nad zdjęciem). Gdy używamy `position: absolute`, elementy nakładają się na siebie w kolejności występowania w kodzie HTML (ostatni jest na wierzchu). Możemy to zmienić za pomocą `z-index`.
`z-index` działa tylko na elementach z pozycją (relative, absolute, fixed, sticky).

---

## Kroki do wykonania

### Krok 1: Analiza
Mamy kartę postaci (`.card`), która zawiera obrazek, ozdobną ramkę (`.frame`), odznakę poziomu (`.level-badge`) i statystyki (`.stats`). Obecnie wszystko jest "rozsypane".

### Krok 2: Ustawienie Karty (Rodzic)
W pliku `style.css` znajdź klasę `.card`.
1. Ustaw: `position: relative;`. Dzięki temu elementy wewnątrz nie "uciekną" poza kartę.

### Krok 3: Ramka
Znajdź klasę `.frame`. To jest przezroczysta ramka PNG, która ma być **NA** zdjęciu.
1. Ustaw: `position: absolute;`.
2. Rozciągnij ją na całą kartę: `top: 0; left: 0; width: 100%; height: 100%;`.
   *Dzięki temu ramka pokryje obrazek.*
3. Aby mieć pewność, że jest nad obrazkiem, ustaw: `z-index: 2;`.

### Krok 4: Odznaka Poziomu
Znajdź klasę `.level-badge`.
1. Ustaw: `position: absolute;`.
2. Umieść ją w lewym górnym rogu, ale lekko wysuniętą: `top: -10px; left: -10px;`.
3. Chcemy, aby była **NAJWYŻEJ**, nawet nad ramką. Ustaw: `z-index: 3;`.

### Krok 5: Statystyki
Znajdź klasę `.stats`.
1. Ustaw: `position: absolute;`.
2. Przyklej je do dołu karty: `bottom: 0; left: 0;`.
3. Ustaw szerokość na 93,5%.
4. Statystyki mają być nad obrazkiem, ale pod ramką (opcjonalnie, lub na równi). Ustawmy bezpiecznie: `z-index: 2;`.

---

## Oczekiwany Efekt
- Karta wygląda jak spójna całość.
- Złota ramka jest nałożona NA zdjęcie postaci.
- Niebieska odznaka z poziomem wystaje lekko poza lewy górny róg i jest NAJWYŻEJ (zakrywa róg ramki).
- Statystyki są na dole karty, na półprzezroczystym czarnym tle.

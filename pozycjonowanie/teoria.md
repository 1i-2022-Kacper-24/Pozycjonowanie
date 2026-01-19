# Teoria: Pozycjonowanie elementów (CSS Position) i manipulacja stylem w JS

## 1. Właściwość `position` w CSS

Właściwość `position` określa, w jaki sposób element jest umiejscowiony w dokumencie. Używamy jej razem z właściwościami koordynatów: `top`, `bottom`, `left`, `right` oraz `z-index`.

### Główne wartości:

- **`static` (domyślna)**: Element jest pozycjonowany zgodnie z normalnym przepływem dokumentu. Właściwości `top`, `bottom`, `left`, `right`, `z-index` **nie działają**.
- **`relative`**: Element jest pozycjonowany względem swojej **pierwotnej pozycji**. Przesunięcie nie wpływa na układ sąsiednich elementów (miejsce po elemencie pozostaje zarezerwowane).
  - _Użycie_: Często używane jako kontener dla elementu pozycjonowanego absolutnie (`position: absolute`).
- **`absolute`**: Element jest wyjęty z normalnego przepływu dokumentu (nie zajmuje miejsca). Jest pozycjonowany względem **najbliższego pozycjonowanego przodka** (innego niż `static`). Jeśli takiego nie ma, pozycjonuje się względem okna przeglądarki (`body`/`html`).
  - _Użycie_: Menu rozwijane, dymki powiadomień, nakładki na zdjęcia.
- **`fixed`**: Element jest wyjęty z normalnego przepływu. Jest pozycjonowany względem **okna przeglądarki (viewport)**. Nie przesuwa się podczas przewijania strony.
  - _Użycie_: Paski nawigacyjne przyklejone do góry ("sticky header"), przyciski "Wróć do góry", reklamy/powiadomienia.
- **`sticky`**: Hybryda `relative` i `fixed`. Element zachowuje się jak `relative`, dopóki nie zostanie przewinięty do określonego punktu (np. `top: 0`), wtedy "przykleja się" jak `fixed` w obrębie swojego rodzica.

## 2. Warstwy: `z-index`

Właściwość `z-index` określa kolejność nakładania się elementów (oś Z).

- Działa tylko na elementy z `position` innym niż `static`.
- Większa liczba = element "bliżej" użytkownika (na wierzchu).
- Może przyjmować wartości ujemne.

## 3. Manipulacja pozycją w JavaScript

Aby zmieniać pozycję elementu dynamicznie w JS, modyfikujemy obiekt `style` elementu.

```javascript
const element = document.querySelector(".box");

// Zmiana pozycji
element.style.position = "absolute";
element.style.top = "50px";
element.style.left = "100px";

// Czytanie pozycji (uwaga: style.left zwróci pusty ciąg, jeśli styl jest zdefiniowany w CSS, a nie inline.
// Do odczytu obliczonego stylu używamy getComputedStyle, ale do zapisu zawsze style)
element.style.left = "200px";
```

### Przykład przesuwania przyciskiem:

```javascript
let positionX = 0;
const box = document.getElementById("box");

function moveRight() {
  positionX += 10;
  box.style.left = positionX + "px"; // Ważne: dodanie jednostki 'px'
}
```

## 4. Centrowanie elementu absolutnego (Triki)

Aby wyśrodkować element absolutnie względem rodzica (`relative`):

```css
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(
    -50%,
    -50%
  ); /* Przesuwa element o połowę jego własnej szerokości/wysokości w górę i w lewo */
}
```

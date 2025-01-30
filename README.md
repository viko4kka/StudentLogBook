# Dokumentacja Frontend Aplikacji

## Opis projektu 
Aplikacja webowa została zaprojektowana z myślą o dwóch rolach użytkowników: nauczycielu (teacher) oraz studencie (student).
Nauczyciel ma możliwość pełnego zarządzania przedmiotami, tj. dodawania, edytowania i usuwania przedmiotów. Student ma jedynie dostęp do przeglądania szczegółów przedmiotów.

## Technologie
- React
- Vite
- React Router
- React Hooks
- Tailwind CSS
  
## Opis funckjalności
### App.jsx
Plik** App.jsx** jest głównym plikiem aplikacji, w którym zarządzany jest routing oraz struktura komponentów w zależności od roli użytkownika. W tym pliku aplikacja decyduje, które komponenty i strony będą wyświetlane na podstawie autoryzacji użytkownika (np. panel nauczyciela lub studenta). Routing za pomocą React Router umożliwia dynamiczne ładowanie różnych widoków, takich jak przedmioty, formularze, szczegóły przedmiotów, w zależności od tego, czy użytkownik jest nauczycielem, czy studentem.

### Autoryzacja użytkownika
W aplikacji implementowana jest logika autoryzacji, umożliwiająca rejestrację, logowanie oraz weryfikację roli użytkownika. Proces autoryzacji opiera się na tokenach (np. JWT), które są przechowywane w **localStorage** i używane do uwierzytelniania zapytań do serwera.

### Rejestracja i logowanie użytkownika
Użytkownik rejestruje się poprzez formularz, podając swoje dane (nazwa, email, hasło, potwierdzenie hasła i rola). Po zarejestrowaniu użytkownik loguje się, a aplikacja wysyła dane do API. Po udanym logowaniu otrzymuje token, który jest przechowywany w localStorage. Token ten jest używany do uwierzytelniania zapytań do API, zapewniając, że tylko zalogowani użytkownicy mają dostęp do chronionych zasobów.

### API Auth
Plik apiAuth.js zawiera funkcje do rejestracji i logowania użytkowników. registerUser: Wysyła zapytanie do API, aby zarejestrować nowego użytkownika. loginUser: Wysyła zapytanie do API, aby zalogować użytkownika, a po otrzymaniu odpowiedzi zapisuje token w localStorage. getUser: Używa tokena do pobrania danych zalogowanego użytkownika, co pozwala na weryfikację roli i danych.

## Zarządzanie przedmiotami
Nauczyciel, posiadający odpowiednią rolę, ma pełny dostęp do zarządzania przedmiotami. Może tworzyć, edytować, usuwać kursy oraz przypisywać studentów do przedmiotów. Natomiast student ma jedynie dostęp do przeglądania szczegółów kursów, do których jest przypisany.

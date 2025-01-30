# Dokumentacja Frontend Aplikacji

## Opis projektu 
Aplikacja webowa została zaprojektowana z dwoma rolami użytkowników: nauczyciel (teacher) oraz student (student).
Nauczyciel ma możliwość pełnego zarządzania przedmiotami, tj. dodawania, edytowania i usuwania przedmiotów. Student ma jedynie dostęp do przeglądania szczegółów przedmiotów.

## Technologie
- React
- Vite
- React Router
- React Hooks
- Tailwind CSS
  
## Opis funckjalności
### App.jsx
Plik **App.jsx** jest głównym plikiem aplikacji, w którym zarządzany jest routing oraz struktura komponentów w zależności od roli użytkownika. W tym pliku aplikacja decyduje, które komponenty i strony będą wyświetlane na podstawie autoryzacji użytkownika (np. panel nauczyciela lub studenta). Routing za pomocą React Router umożliwia dynamiczne ładowanie różnych widoków, takich jak przedmioty, formularze, szczegóły przedmiotów, w zależności od tego, czy użytkownik jest nauczycielem, czy studentem.

### Autoryzacja użytkownika
W aplikacji implementowana jest logika autoryzacji, umożliwiająca rejestrację, logowanie oraz weryfikację roli użytkownika. Proces autoryzacji opiera się na tokenach, które są przechowywane w **localStorage** i używane do uwierzytelniania zapytań do serwera.

### Rejestracja i logowanie użytkownika
Użytkownik rejestruje się poprzez formularz, podając swoje dane (nazwa, email, hasło, potwierdzenie hasła i rola). Po zarejestrowaniu użytkownik loguje się, a aplikacja wysyła dane do API. Po udanym logowaniu otrzymuje token, który jest przechowywany w localStorage. 

### API Auth
Plik apiAuth.js zawiera funkcje do rejestracji i logowania użytkowników. **registerUser** - wysyła zapytanie do API, aby zarejestrować nowego użytkownika, **loginUser** - wysyła zapytanie do API, aby zalogować użytkownika, a po otrzymaniu odpowiedzi zapisuje token w localStorage, **getUser** - używa tokena do pobrania danych zalogowanego użytkownika, co pozwala na weryfikację roli i danych.

## Zarządzanie przedmiotami
Nauczyciel, posiadający odpowiednią rolę, ma pełny dostęp do zarządzania przedmiotami. Może tworzyć, edytować, usuwać przedmioty oraz przypisywać studentów do przedmiotów. Natomiast student ma jedynie dostęp do przeglądania szczegółów przedmiotow, do których jest przypisany. Plik **apiCourses.js** zawiera funkcje - pobierania przedmiotu (getCourses), tworzenia przedmiotu (createCourse), aktualizowania przedmiotu (updateCourse), usuwania przedmiotu (deleteCourse), pobierania szczegółów przedmiotu (getCourseById), dodawania studentów do przedmiotu (addStudentInCourse)

## UI/UX 
Do interfejsu użytkownika wykorzystywane są **modale** do wyświetlania formularzy (np. do rejestracji, logowania, dodawania kursów), co zapewnia estetyczne i intuicyjne zarządzanie danymi bez przeładowywania strony. Aplikacja używa Tailwind CSS do stylowania, co pozwala na szybkie dostosowanie wyglądu aplikacji. W zależności od roli użytkownika, aplikacja dynamicznie zmienia dostępne opcje. Dodatkowo, aplikacja posiada stronę 404, która jest wyświetlana, gdy użytkownik próbuje przejść do nieistniejącej strony.

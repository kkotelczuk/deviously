---
path: "/react-native-history"
date: "2018-01-22"
title: "Skąd wziął się React Native?"
category: "javascript"
tags: ['js', 'react', 'react-native', 'architecture']
excerpt: "Kiedy to się zaczęło i dlaczego to w ogóle przetrwało?"
---


#### Historia powstania React Native nie jest może czymś niezwykłym, ale uważam, że posiadając wgląd w podstawy pochodzenia frameworku, motywacje jakie kierowały jego twórcami u podstaw łatwiej zrozumieć jego obecny stan i stwierdzić czy podąża w dobrym czy może złym kierunku. Poniżej przedstawiam krótki zarys historii powstania React Native.
Przygotowując się do prezentacji na meetup [Mobile Białystok](https://www.facebook.com/mobilebialystok/), trafiłem na [wystąpienie Christophera Chedeau z 2015 roku](https://www.youtube.com/watch?v=7rDsRXj9-cU). Ta prezentacja była pierwszym oficjalnym przedstawieniem architektury RN.

## Od szalonej idei do projektu
Latem 2013 roku miał miejsce hackathon, podczas którego zrodził się pomysł narzędzia pozwalającego **tworzyć aplikacje mobilne korzystając z JavaScriptu**. Należy mieć na uwadze, że w tym czasie istniały już narzędzia pozwalające tworzyć aplikacje hybrydowe, jak PhoneGap, ale nie pozwalały na pisanie natywnych aplikacji. Ideą React Native było przeniesienie wszsytkich najlpeszy aspektów web delepomentu do mobile. Wszystko po to by móc szybciej przechodzić od pomysłu do produktu.

> The idea of React Native meant we could bring all the things we loved
> about developing for the web — such as fast iterations and having a
> single team build the whole product — to mobile. It meant we could
> move faster.

Do połowy 2014 roku nad rozwijaniem React Native pracowało wciąż bardzo niewiele osób. Wszystko uległo zmianie kiedy zespół dostał pierwsze duże zadanie: **przygotowanie aplikacji Ads Manager dla iOS**. Celem było wypuszczenie pierwszej pełnoprawnej aplikacji w React Native działającej jak napisana w Objective-C. W drugiej połowie 2014 roku został powołany zespół odpowiedzialny za stworzenie aplikacji Androidowej w oparciu o React Native.
## It's alive!
Pierwsza wersja aplikacji iOS została wypuszczona w lutym 2015 roku, po zaledwie **6 miesiącach pracy!** W styczniu tego roku miała też miejsce konferencja podczas której przedstawiony został React Native. Fragment tej właśnie konferencji przytoczyłem we wstępie. Christopher opowiadał o 3 fundamentach jakie przyświecały twórcom RN: *Touch handling, Native Components, Style & Layout*. Większą część prezentacji poświęcił temu ostatniemu bo to właśnie to odróznia aplikację mobilne od stron www. O dwóch pierwszych filarach napiszę szerzej przy okazji kolejnego artykułu.

Warto jednak zwrócić uwagę na część poświęconą layoutowi. Należy przy tym pamiętać, że CSS jest ściśle powiązany z przeglądarką, z której nie korzystamy w React Native. Layout wyznacza położenie elementów ich wysokości, szerokości etc. Zamiast prób implementacji floatów, tabel czy innych potworków, wybór padł na **flexbox**. Dzięki temu można było wykorzystać wbudowane mechanizmy iOS do ustawienia elementów w widoku. Ale chwila, flexbox jest przecież związany ściśle z przeglądarką i tu pojawia się magia. Christopher Chedeau zaimplementował flexbox od zera w React Native **używając hardcorowej metody TDD**. Zaczął generować losowe testy frontendowe. Sprawdzał jaki będzie wynik w jego implementacji oraz w przeglądarce. Następnie znajdował pierwszy przypadek, który się wysypał, naprawiał i znów zaczynał od początku. Robił tak dopóki wszystkie testy nie zakończyły się powodzeniem. Całość tego procesu zajęła mu dwa tygodnie! Pamiętajmy, że na początku zaimplementowane zostały tylko najważniejsze rzeczy, czyli model flexbox, marginesy, paddingi oraz bordery.

**W marcu 2015 React Native został projektem Open Source!** Latem tego samego roku światło dzienne ujrzała aplikacja Ads Manager na Android. Po udanym deploymencie, nadszedł czas na udostępnieni kodu pozwalającego tworzyć aplikacje Android przy użyciu RN. W sierpniu 2015 wydana została wersja 0.11 wspierająca budowanie natywnych aplikacji dla Android.

![React Native history timeline](https://scontent-vie1-1.xx.fbcdn.net/v/t39.2365-6/12057200_1295196337174768_31095688_n.jpg?oh=3d2041a10bba6205f20c734f8a9a087f&oe=5B22D8D3)

## Już bardziej znana historia
Dalszą część historii już znamy. Nagły skok popularności za oceanem, sceptycznie nastawione środowisko, jak wcześniej do Reacta, przełom i RN zaczyna wznosić się na wyżyny popularności.

## Tak, da się!
React Native zaczął jako szalony koncept w 2013 roku i od tamtej chwili do pierwszej publicznej wersji minęły zaledwie 2 lata. W między czasie udało się udowodnić jego działanie tworząc od podstaw aplikacje na iOS i Android.
> Write once, run anywhere



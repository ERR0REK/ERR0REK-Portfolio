// Skrypty/translate.js

const translations = {
    en: {
        // Index.html
        page_title: "ERR0REK - Personal Portfolio",
        nav_home: "Home",
        nav_fav_games: "Favorite Games",
        nav_projects: "Projects",
        nav_membership: "Membership",
        nav_history: "My History",
        lang_label: "Language:",
        home_greeting: "Hi, my name is <span>ERR0R/Macio</span>",
        info_heading: "Basic Information",
        info_intro: "I come from Poland, I am 17 years old and interested in foreign languages such as:",
        lang_slavic: "Slavic languages (Czech, Slovak, etc.)",
        lang_german: "German language",
        lang_english: "English language (I'm a bit less interested)",
        info_programming: "I am also interested in programming (I know a bit of C++ and JavaScript).",
        additional_info: "Additional Information",
        info_owner_neo: "I am the owner / creator of N.E.O (New Elite Organization)",
        info_roblox: "I started playing Roblox in 2019...",
        info_technology: "I am also interested in modern technology.",
        politics_view: "I am a nationalist, conservative, and patriot.",
        timezone_info: "Timezone: Loading...",
        current_time: "Current time: Loading...",
        all_rights_reserved: "All rights reserved.",

        // fav-games.html
        page_title_fav_games: "ERR0REK - Favorite Games",
        fav_games_heading: "Favorite Games",
        category_nicks: "Nicks in Games",
        category_roblox_games: "Roblox Games",
        category_computer_games: "Computer Games",
        nick_roblox: "Roblox - <strong>ERR0R_Gl1tchTV</strong>",
        nick_rockstar: "Rockstar (GTA) - <strong>ERR0R_Gl1tchTV</strong>",
        nick_minecraft_java: "Minecraft (Java) - <strong>ERR0R_Gl1tchTV</strong>",
        nick_minecraft_bedrock: "Minecraft (Bedrock) - <strong>XherobrineYT</strong>",

        // projects.html
        page_title_projects: "ERR0REK - Projects",
        projects_heading: "My Projects",
        project1_title: "Group Assistant (Discord Bot)",
        project1_description: "A Discord bot created for server management, task automation, moderation, and providing entertainment for community members. Facilitates organization and interaction within the group.",
        project2_title: "Polish MC Mod Translation (Texture Pack)",
        project2_description: "A resource pack (texture pack) containing comprehensive Polish translations for many popular Minecraft modifications. The goal is to facilitate gameplay for Polish-speaking users and ensure linguistic consistency.",
        project3_title: "Veinminer (Extended Datapack)",
        project3_description: "A datapack inspired by the popular Veinminer mod. Allows simultaneous extraction of all connected ores of the same type after destroying one of them. This version will be extended with support for modded ores, enhancing gameplay comfort.",
        status_in_progress: "Status: In Progress",
        status_completed: "Status: Completed",
        status_planned: "Status: Planned",
        status_on_hold: "Status: On Hold",

        // membership.html (NOWO DODANE KLUCZE)
        page_title_membership: "Membership",
        membership_heading: "Memberships in Roblox Communities",
        membership_heading2: "Clan Membership in Roblox (In-game)",
        membership_small_info: "This refers to in-game Clans, such as in War Tycoon and other games.",
        community_lockedup: "LockedUp Community",
        desc_lockedup: "I have been a member of the LockedUp community since August 2023. I was most active in 2023–2024, but in August 2024, after the release of LockedUp, I left the community. Later I returned, but I am not as active as before.",
        community_wanted: "Wanted Community",
        desc_wanted: "I have been a member of the Wanted community since August 2024, when I left the LockedUp community after the game's release. I am moderately active in this community and still participate.",
        community_elita: "Artificial Elite",
        desc_elita: "I am a former member of the Artificial Elite – a group formed in 2020, although it never had an official owner. It dominated games like MM2 (Murder Mystery 2) and MadCity. After two years, in 2022, with the release of MadCity: Chapter 2, the members parted ways, and the Artificial Elite ultimately disbanded.",
        community_neo: "N.E.O (New Elite Organization)",
        desc_neo: "I am the owner of the New Elite Organization (N.E.O), which is a continuation of the former Artificial Elite. N.E.O was born in December 2023, a year after the release of MadCity: Chapter 2. Initially, it was called 'New Elite', but over time I transformed it into an organization.",
        clan_ipf_title: "[IPF⚡] InterPolishForces",
        clan_ipf_description: "I am a member of IPF, which is in the top 1 leaderboard in War Tycoon (and arguably the strongest faction)."
    },
    pl: {
        // Index.html
        page_title: "ERR0REK - Osobista Wizytówka",
        nav_home: "Strona Główna",
        nav_fav_games: "Ulubione Gry",
        nav_projects: "Projekty",
        nav_membership: "Członkostwo",
        nav_history: "Moja Historia",
        lang_label: "Język:",
        home_greeting: "Cześć, nazywam się <span>ERR0R/Macio</span>",
        info_heading: "Podstawowe informacje",
        info_intro: "Pochodzę z Polski, mam 17 lat i interesuję się językami obcymi takimi jak:",
        lang_slavic: "Języki Słowiańskie (Czeski, Słowacki itd.)",
        lang_german: "Język Niemiecki",
        lang_english: "Język Angielski (trochę mniej mnie interesuje)",
        info_programming: "Interesuję się też programowaniem (znam trochę C++ i JavaScript).",
        additional_info: "Dodatkowe Informacje",
        info_owner_neo: "Jestem właścicielem / twórcą N.E.O (Nowa Elitarna Organizacja)",
        info_roblox: "Zacząłem grać w Robloxa w 2019 roku...",
        info_technology: "Interesuję się również nowoczesną technologią.",
        politics_view: "Jestem narodowcem, konserwatystą i patriotą.",
        timezone_info: "Strefa czasowa: Ładowanie...",
        current_time: "Aktualna godzina: Ładowanie...",
        all_rights_reserved: "Wszystkie prawa zastrzeżone.",

        // fav-games.html
        page_title_fav_games: "ERR0REK - Ulubione Gry",
        fav_games_heading: "Ulubione Gry",
        category_nicks: "Nicki w Grach",
        category_roblox_games: "Gry w Robloxie",
        category_computer_games: "Gry Komputerowe",
        nick_roblox: "Roblox - <strong>ERR0R_Gl1tchTV</strong>",
        nick_rockstar: "Rockstar (GTA) - <strong>ERR0R_Gl1tchTV</strong>",
        nick_minecraft_java: "Minecraft (Java) - <strong>ERR0R_Gl1tchTV</strong>",
        nick_minecraft_bedrock: "Minecraft (Bedrock) - <strong>XherobrineYT</strong>",

        // projects.html
        page_title_projects: "ERR0REK - Projekty",
        projects_heading: "Moje Projekty",
        project1_title: "Asystent Grupki (Discord Bot)",
        project1_description: "Bot Discordowy stworzony do zarządzania serwerem, automatyzacji zadań, moderacji oraz dostarczania rozrywki dla członków społeczności. Ułatwia organizację i interakcję w grupie.",
        project2_title: "Polskie tłumaczenie modyfikacji MC (Texture Pack)",
        project2_description: "Pakiet zasobów (texture pack) zawierający kompleksowe polskie tłumaczenia dla wielu popularnych modyfikacji do Minecrafta. Celem jest ułatwienie gry polskojęzycznym użytkownikom i zapewnienie spójności językowej.",
        project3_title: "Veinminer (rozbudowany Datapack)",
        project3_description: "Datapack zainspirowany popularnym modem Veinminer. Pozwala na jednoczesne wydobycie wszystkich połączonych rud tego samego typu po zniszczeniu jednej z nich. Wersja ta będzie rozbudowana o wsparcie dla rud z modyfikacji, co zwiększy komfort gry.",
        status_in_progress: "Status: W Trakcie",
        status_completed: "Status: Ukończony",
        status_planned: "Status: Planowany",
        status_on_hold: "Status: Wstrzymany",

        // membership.html (NOWO DODANE KLUCZE)
        page_title_membership: "Członkostwo",
        membership_heading: "Członkostwa w społecznościach Roblox",
        membership_heading2: "Członkowstwo w klanach w Robloxie (In-game)",
        membership_small_info: "Tutaj jest mowa o Klanach (in-game) typu War Tycoon i inne gry.",
        community_lockedup: "LockedUp Community",
        desc_lockedup: "Jestem członkiem społeczności LockedUp od sierpnia 2023 roku. Najbardziej aktywny byłem w latach 2023–2024, jednak w sierpniu 2024, po premierze LockedUp, opuściłem społeczność. Później do niej wróciłem, ale nie jestem już tak aktywny jak wcześniej.",
        community_wanted: "Wanted Community",
        desc_wanted: "Jestem członkiem społeczności Wanted od sierpnia 2024 roku, kiedy opuściłem społeczność LockedUp po premierze gry. W tej społeczności jestem umiarkowanie aktywny i do dziś się w niej udzielam.",
        community_elita: "Sztuczna Elita",
        desc_elita: "Jestem byłym członkiem Sztucznej Elity – grupy, która powstała w 2020 roku, choć nigdy nie miała oficjalnego właściciela. Dominowała w takich grach jak MM2 (Murder Mystery 2) i MadCity. Po dwóch latach, w 2022 roku, wraz z premierą MadCity: Chapter 2, członkowie się rozstali, a Sztuczna Elita ostatecznie się rozpadła.",
        community_neo: "N.E.O (Nowa Elitarna Organizacja)",
        desc_neo: "Jestem właścicielem Nowej Elitarnej Organizacji (N.E.O), która jest kontynuacją dawnej Sztucznej Elity. N.E.O narodziła się w grudniu 2023 roku, czyli rok po premierze MadCity: Chapter 2. Początkowo nosiła nazwę „Nowa Elita”, jednak z czasem przekształciłem ją w organizację.",
        clan_ipf_title: "[IPF⚡] InterPolishForces",
        clan_ipf_description: "Jestem członkiem IPF który jest w top 1 leaderboardzie w War Tycoonie (I może i też miarę najsilniejszej frakcji)"
    },
    cs: { // Czeski
        // Index.html
        page_title: "ERR0REK - Osobní Portfolio",
        nav_home: "Hlavní Strana",
        nav_fav_games: "Oblíbené Hry",
        nav_projects: "Projekty",
        nav_membership: "Členství",
        nav_history: "Moje Historie",
        lang_label: "Jazyk:",
        home_greeting: "Ahoj, jmenuji se <span>ERR0R/Macio</span>",
        info_heading: "Základní Informace",
        info_intro: "Pocházím z Polska, je mi 17 let a zajímám se o cizí jazyky jako jsou:",
        lang_slavic: "Slovanské jazyky (čeština, slovenština atd.)",
        lang_german: "Německý jazyk",
        lang_english: "Anglický jazyk (zajímám se méně)",
        info_programming: "Zajímám se také o programování (trochu znám C++ a JavaScript).",
        additional_info: "Další Informace",
        info_owner_neo: "Jsem majitel / tvůrce N.E.O (Nová Elitní Organizace)",
        info_roblox: "Začal jsem hrát Roblox v roce 2019...",
        info_technology: "Zajímám se také o moderní technologie.",
        politics_view: "Jsem nacionalista, konzervativec a vlastenec.",
        timezone_info: "Časové pásmo: Načítání...",
        current_time: "Aktuální čas: Načítání...",
        all_rights_reserved: "Všechna práva vyhrazena.",

        // fav-games.html
        page_title_fav_games: "ERR0REK - Oblíbené Hry",
        fav_games_heading: "Oblíbené Hry",
        category_nicks: "Přezdívky ve hrách",
        category_roblox_games: "Hry na Robloxu",
        category_computer_games: "Počítačové Hry",
        nick_roblox: "Roblox - <strong>ERR0R_Gl1tchTV</strong>",
        nick_rockstar: "Rockstar (GTA) - <strong>ERR0R_Gl1tchTV</strong>",
        nick_minecraft_java: "Minecraft (Java) - <strong>ERR0R_Gl1tchTV</strong>",
        nick_minecraft_bedrock: "Minecraft (Bedrock) - <strong>XherobrineYT</strong>",

        // projects.html
        page_title_projects: "ERR0REK - Projekty",
        projects_heading: "Moje Projekty",
        project1_title: "Asistent Skupiny (Discord Bot)",
        project1_description: "Discord bot vytvořený pro správu serveru, automatizaci úkolů, moderování a poskytování zábavy členům komunity. Usnadňuje organizaci a interakci ve skupině.",
        project2_title: "Polský překlad MC modifikací (Texture Pack)",
        project2_description: "Balíček zdrojů (texture pack) obsahující komplexní polské překlady pro mnoho populárních modifikací do Minecraftu. Cílem je usnadnit hru polsky mluvícím uživatelům a zajistit jazykovou konzistenci.",
        project3_title: "Veinminer (rozšířený Datapack)",
        project3_description: "Datapack inspirovaný populárním modem Veinminer. Umožňuje současnou těžbu všech propojených rud stejného typu po zničení jedné z nich. Tato verze bude rozšířena o podporu rud z modifikací, což zvýší komfort hry.",
        status_in_progress: "Stav: Probíhá",
        status_completed: "Stav: Dokončeno",
        status_planned: "Stav: Plánováno",
        status_on_hold: "Stav: Pozastaveno",

        // membership.html (NOWO DODANE KLUCZE)
        page_title_membership: "Členství",
        membership_heading: "Členství v komunitách Roblox",
        membership_heading2: "Členství v klanech v Robloxu (Ve hře)",
        membership_small_info: "Toto se týká klanů ve hře, jako je War Tycoon a další hry.",
        community_lockedup: "Komunita LockedUp",
        desc_lockedup: "Jsem členem komunity LockedUp od srpna 2023. Nejaktivnější jsem byl v letech 2023–2024, ale v srpnu 2024, po vydání hry LockedUp, jsem komunitu opustil. Později jsem se vrátil, ale už nejsem tak aktivní jako dříve.",
        community_wanted: "Komunita Wanted",
        desc_wanted: "Jsem členem komunity Wanted od srpna 2024, kdy jsem opustil komunitu LockedUp po vydání hry. V této komunite jsem středně aktivní a stále se účastním.",
        community_elita: "Umělá Elita",
        desc_elita: "Jsem bývalým členem Umělé Elity – skupiny, která vznikla v roce 2020, i když nikdy neměla oficiálního vlastníka. Dominovala ve hrách jako MM2 (Murder Mystery 2) i MadCity. Po dvou letech, v roce 2022, s vydáním MadCity: Kapitola 2, se členové rozešli a Umělá Elita se nakonec rozpadla.",
        community_neo: "Nová Elitní Organizace (N.E.O)",
        desc_neo: "Jsem vlastníkem Nové Elitní Organizace (N.E.O), která navazuje na bývalú Umelú Elitu. N.E.O vznikla v prosinci 2023, rok po vydání MadCity: Kapitola 2. Původně se jmenovala „Nová Elita“, ale postupem času jsem ji přetvořil v organizaci.",
        clan_ipf_title: "[IPF⚡] InterPolishForces",
        clan_ipf_description: "Jsem členem IPF, která je v top 1 žebříčku v War Tycoonu (a možná i nejsilnější frakcí)."
    },
    sk: { // Słowacki
        // Index.html
        page_title: "ERR0REK - Osobné Portfólio",
        nav_home: "Hlavná Stránka",
        nav_fav_games: "Obľúbené Hry",
        nav_projects: "Projekty",
        nav_membership: "Členstvo",
        nav_history: "Moja História",
        lang_label: "Jazyk:",
        home_greeting: "Ahoj, volám sa <span>ERR0R/Macio</span>",
        info_heading: "Základné Informácie",
        info_intro: "Pochádzam z Poľska, mám 17 rokov a zaujímam sa o cudzie jazyky ako sú:",
        lang_slavic: "Slovanské jazyky (Čeština, Slovenčina atď.)",
        lang_german: "Nemecký jazyk",
        lang_english: "Anglický jazyk (menej ma zaujíma)",
        info_programming: "Zaujímam sa aj o programovanie (trochu ovládam C++ a JavaScript).",
        additional_info: "Ďalšie Informácie",
        info_owner_neo: "Som vlastník / tvorca N.E.O (Nová Elitná Organizácia)",
        info_roblox: "Začal som hrať Roblox v roku 2019...",
        info_technology: "Zaujímam sa aj o moderné technológie.",
        politics_view: "Som nacionalista, konzervatívec a vlastenec.",
        timezone_info: "Časové pásmo: Načítava sa...",
        current_time: "Aktuálny čas: Načítava sa...",
        all_rights_reserved: "Všetky práva vyhradené.",

        // fav-games.html
        page_title_fav_games: "ERR0REK - Obľúbené Hry",
        fav_games_heading: "Obľúbené Hry",
        category_nicks: "Prezývky v hrách",
        category_roblox_games: "Hry na Robloxu",
        category_computer_games: "Počítačové Hry",
        nick_roblox: "Roblox - <strong>ERR0R_Gl1tchTV</strong>",
        nick_rockstar: "Rockstar (GTA) - <strong>ERR0R_Gl1tchTV</strong>",
        nick_minecraft_java: "Minecraft (Java) - <strong>ERR0R_Gl1tchTV</strong>",
        nick_minecraft_bedrock: "Minecraft (Bedrock) - <strong>XherobrineYT</strong>",

        // projects.html
        page_title_projects: "ERR0REK - Projekty",
        projects_heading: "Moje Projekty",
        project1_title: "Asistent Skupiny (Discord Bot)",
        project1_description: "Discord bot vytvorený na správu servera, automatizáciu úloh, moderovanie a poskytovanie zábavy členom komunity. Uľahčuje organizáciu a interakciu v skupine.",
        project2_title: "Poľský preklad MC modifikácií (Texture Pack)",
        project2_description: "Balíček zdrojov (texture pack) obsahujúci komplexné poľské preklady pre mnoho populárnych modifikácií do Minecrafta. Cieľom je uľahčiť hru poľsky hovoriacim používateľom a zabezpečiť jazykovú konzistęcję.",
        project3_title: "Veinminer (rozšírený Datapack)",
        project3_description: "Datapack inšpirovaný populárnym modom Veinminer. Umožňuje súčasné ťaženie všetkých prepojených rúd rovnakého typu po zničení jednej z nich. Táto verzia bude rozšírená o podporu rúd z modifikácií, čo zvýši komfort hry.",
        status_in_progress: "Stav: V Procese",
        status_completed: "Stav: Dokončené",
        status_planned: "Stav: Plánované",
        status_on_hold: "Stav: Pozastavené",

        // membership.html (NOWO DODANE KLUCZE)
        page_title_membership: "Členstvo",
        membership_heading: "Členstvá v komunitách Roblox",
        membership_heading2: "Členstvo v klanoch v Robloxe (V hre)",
        membership_small_info: "Toto sa týka klanov v hre, ako napríklad War Tycoon a iné hry.",
        community_lockedup: "Komunita LockedUp",
        desc_lockedup: "Som členom komunity LockedUp od augusta 2023. Najaktívnejší som bol v rokoch 2023–2024, ale v auguste 2024, po vydaní hry LockedUp, som komunitu opustil. Neskôr som sa vrátil, ale už nie som taký aktívny ako predtým.",
        community_wanted: "Komunita Wanted",
        desc_wanted: "Som členom komunity Wanted od augusta 2024, keď som opustil komunitu LockedUp po vydaní hry. V tejto komunite som mierne aktívny a stále sa zapájam.",
        community_elita: "Umelá Elita",
        desc_elita: "Som bývalým členom Umelej Elity – skupiny, ktorá vznikla v roku 2020, aj keď nikdy nemala oficiálneho vlastníka. Dominovala v hrách ako MM2 (Murder Mystery 2) i MadCity. Po dvoch rokoch, v roku 2022, s vydaním MadCity: Kapitola 2, sa členovia rozdelili a Umelá Elita sa nakoniec rozpadla.",
        community_neo: "Nová Elitná Organizácia (N.E.O)",
        desc_neo: "Som vlastníkom Novej Elitnej Organizácie (N.E.O), ktorá je pokračovaním bývalej Umelej Elity. N.E.O vznikla v decembri 2023, rok po vydaní MadCity: Kapitola 2. Pôvodne sa volala „Nová Elita“, ale časom som ju pretransformoval na organizáciu.",
        clan_ipf_title: "[IPF⚡] InterPolishForces",
        clan_ipf_description: "Som členom IPF, ktorá je v top 1 rebríčku vo War Tycoone (a možno aj najsilnejšou frakciou)."
    },
    de: { // Niemiecki
        // Index.html
        page_title: "ERR0REK - Persönliches Portfolio",
        nav_home: "Startseite",
        nav_fav_games: "Lieblingsspiele",
        nav_projects: "Projekte",
        nav_membership: "Mitgliedschaft",
        nav_history: "Meine Geschichte",
        lang_label: "Sprache:",
        home_greeting: "Hallo, mein Name ist <span>ERR0R/Macio</span>",
        info_heading: "Grundlegende Informationen",
        info_intro: "Ich komme aus Polen, bin 17 Jahre alt und interessiere mich für Fremdsprachen wie:",
        lang_slavic: "Slawische Sprachen (Tschechisch, Slowakisch, etc.)",
        lang_german: "Deutsche Sprache",
        lang_english: "Englische Sprache (interessiert mich etwas weniger)",
        info_programming: "Ich interessiere mich auch für Programmierung (ich kenne etwas C++ und JavaScript).",
        additional_info: "Zusätzliche Informationen",
        info_owner_neo: "Ich bin der Besitzer / Schöpfer von N.E.O (New Elite Organization)",
        info_roblox: "Ich habe 2019 angefangen, Roblox zu spielen...",
        info_technology: "Ich interessiere mich auch für moderne Technologie.",
        politics_view: "Ich bin Nationalist, Konservativer und Patriot.",
        timezone_info: "Zeitzone: Lädt...",
        current_time: "Aktuelle Uhrzeit: Lädt...",
        all_rights_reserved: "Alle Rechte vorbehalten.",

        // fav-games.html
        page_title_fav_games: "ERR0REK - Lieblingsspiele",
        fav_games_heading: "Lieblingsspiele",
        category_nicks: "Namen in Spielen",
        category_roblox_games: "Roblox Spiele",
        category_computer_games: "Computerspiele",
        nick_roblox: "Roblox - <strong>ERR0R_Gl1tchTV</strong>",
        nick_rockstar: "Rockstar (GTA) - <strong>ERR0R_Gl1tchTV</strong>",
        nick_minecraft_java: "Minecraft (Java) - <strong>ERR0R_Gl1tchTV</strong>",
        nick_minecraft_bedrock: "Minecraft (Bedrock) - <strong>XherobrineYT</strong>",

        // projects.html
        page_title_projects: "ERR0REK - Projekte",
        projects_heading: "Meine Projekte",
        project1_title: "Gruppenassistent (Discord Bot)",
        project1_description: "Ein Discord-Bot zur Serververwaltung, Aufgabenautomatisierung, Moderation und Unterhaltung für Community-Mitglieder. Erleichtert die Organisation und Interaktion in der Gruppe.",
        project2_title: "Polnische MC Mod-Übersetzung (Texturpaket)",
        project2_description: "Ein Ressourcenpaket (Texturpaket) mit umfassenden polnischen Übersetzungen für viele beliebte Minecraft-Modifikationen. Ziel ist es, polnischsprachigen Benutzern das Spielen zu erleichtern und Sprachkonsistenz zu gewährleisten.",
        project3_title: "Veinminer (Erweitertes Datapack)",
        project3_description: "Ein Datapack, inspiriert vom beliebten Veinminer-Mod. Ermöglicht das gleichzeitige Abbauen aller verbundenen Erze desselben Typs nach der Zerstörung eines davon. Diese Version wird um Unterstützung für Mod-Erze erweitert, was den Spielkomfort erhöht.",
        status_in_progress: "Status: In Bearbeitung",
        status_completed: "Status: Abgeschlossen",
        status_planned: "Status: Geplant",
        status_on_hold: "Status: Angehalten",

        // membership.html (NOWO DODANE KLUCZE)
        page_title_membership: "Mitgliedschaft",
        membership_heading: "Mitgliedschaften in Roblox-Communitys",
        membership_heading2: "Mitgliedschaft in Clans in Roblox (Im Spiel)",
        membership_small_info: "Dies bezieht sich auf Clans im Spiel, wie in War Tycoon und anderen Spielen.",
        community_lockedup: "LockedUp Community",
        desc_lockedup: "Ich bin Mitglied der LockedUp Community seit August 2023. Am aktivsten war ich in den Jahren 2023–2024, jedoch verließ ich die Community im August 2024 nach der Veröffentlichung von LockedUp. Später kehrte ich zurück, bin aber nicht mehr so aktiv wie früher.",
        community_wanted: "Wanted Community",
        desc_wanted: "Ich bin Mitglied der Wanted Community seit August 2024, nachdem ich die LockedUp Community nach der Veröffentlichung des Spiels verließ. In dieser Community bin ich mäßig aktiv und engagiere mich noch heute.",
        community_elita: "Künstliche Elite",
        desc_elita: "Ich bin ein ehemaliges Mitglied der Künstlichen Elite – einer Gruppe, die 2020 gegründet wurde, aber nie einen offiziellen Besitzer hatte. Sie dominierte in Spielen wie MM2 (Murder Mystery 2) und MadCity. Nach zwei Jahren, im Jahr 2022, nach der Veröffentlichung von MadCity: Kapitel 2, trennten sich die Mitglieder, und die Künstliche Elite löste sich endgültig auf.",
        community_neo: "Neue Elitäre Organisation (N.E.O)",
        desc_neo: "Ich bin der Besitzer der Neuen Elitären Organisation (N.E.O), die eine Fortsetzung der alten Künstlichen Elite ist. N.E.O wurde im Dezember 2023 gegründet, also ein Jahr nach der Veröffentlichung von MadCity: Kapitel 2. Zunächst trug sie den Namen „Neue Elite“, aber im Laufe der Zeit habe ich sie in eine Organisation umgewandelt.",
        clan_ipf_title: "[IPF⚡] InterPolishForces",
        clan_ipf_description: "Ich bin Mitglied der IPF, die in den Top 1 der Rangliste in War Tycoon steht (und möglicherweise auch die stärkste Fraktion)."
    }
};

function translatePage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        // Sprawdź, czy element nie jest dynamicznym tekstem, który ma być obsługiwany przez własną logikę
        if (el.classList.contains('dynamic-text')) {
            return;
        }

        if (translations[lang] && translations[lang][key]) {
            // Użyj innerHTML dla kluczy, które mogą zawierać HTML (np. strong, span)
            // lub textContent dla prostego tekstu
            // Rozszerzono warunek o klucze z membership.html, które mogą mieć HTML
            if (key.startsWith('nick_') || key.includes('home_greeting') || key === 'clan_ipf_title') {
                el.innerHTML = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });

    // Ustaw tytuł strony
    const pageTitleElement = document.querySelector('title[data-i18n]');
    if (pageTitleElement) {
        const key = pageTitleElement.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            document.title = translations[lang][key];
        }
    }

    // Po zmianie języka, upewnij się, że dynamiczny tekst zostanie zaktualizowany
    if (typeof updateDynamicText === 'function') {
        updateDynamicText();
    }
}


// Nasłuchiwanie na niestandardowe zdarzenie 'languageChanged' (jeśli translatePage
// jest wywoływane w translate.js, a nie bezpośrednio w index.html po kliknięciu)
document.addEventListener('languageChanged', (event) => {
    const newLang = event.detail.lang;
    if (typeof updateDynamicText === 'function') {
        updateDynamicText();
    }
});

// Wczytaj preferowany język z localStorage po załadowaniu strony
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLanguage') || 'pl';
    
    // Inicjalizacja Select2 i obsługa zmiany języka dla selectora
    const languageSelect = document.getElementById("language-select");
    
    if (languageSelect) { // Upewnij się, że element istnieje (dla stron używających select)
        // Inicjalizacja Select2
        // Sprawdź, czy Select2 nie został już zainicjowany, aby uniknąć błędów
        if (!$(languageSelect).data('select2')) {
            $(languageSelect).select2({
                minimumResultsForSearch: Infinity // Ukrywa pole wyszukiwania
            });
        }

        // Ustawienie początkowego języka na podstawie localStorage
        $(languageSelect).val(savedLang).trigger('change.select2');
        
        // Obsługa zmiany języka przez Select2
        // Użyj 'select2:select' zamiast 'change' dla Select2, aby mieć pewność
        // że to zdarzenie wywoływane przez Select2, a nie ogólna zmiana
        $(languageSelect).on("select2:select", function() {
            const selectedLang = $(this).val();
            localStorage.setItem("selectedLanguage", selectedLang);
            translatePage(selectedLang);
        });
        // Ważne: Wywołaj translatePage po inicjalizacji Select2 i ustawieniu wartości
        // aby upewnić się, że strona jest przetłumaczona na domyślny język po załadowaniu
        translatePage(savedLang);

    } else { // Dla stron używających przycisku językowego (np. index.html)
        // Ustawia aktywną opcję w dropdownie na podstawie zapisanego języka
        document.querySelectorAll('.lang-option').forEach(option => {
            if (option.dataset.lang === savedLang) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });

        // Ustawia tekst przycisku językowego
        const dropbtn = document.getElementById('current-language');
        const langTextMap = {
            pl: 'PL',
            en: 'EN',
            cs: 'CS',
            sk: 'SK',
            de: 'DE'
        };
        if (dropbtn) { // Sprawdzamy, czy element istnieje
            dropbtn.innerHTML = `${langTextMap[savedLang]} <i class="fas fa-caret-down"></i>`;
        }
        // Wywołaj translatePage dla stron bez selectora Select2
        translatePage(savedLang);
    }
});
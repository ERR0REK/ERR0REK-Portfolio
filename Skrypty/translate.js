// Skrypty/translate.js

const translations = {
  en: {
    // Index.html
    page_title: "ERR0REK - Personal Portfolio",
    nav_home: "Home",
    nav_fav_games: "Favorite Games",
    nav_projects: "Projects",
    nav_membership: "Membership",
    nav_gallery: "Gallery",
    nav_history: "My History",
    lang_label: "Language:",
    home_greeting: "Hi, my name is <span>ERR0R/Macio</span>",
    info_heading: "Basic Information",
    info_intro:
      "I come from Poland, I am 17 years old and interested in foreign languages such as:",
    lang_slavic: "Slavic languages (Czech, Slovak, etc.)",
    lang_german: "German language",
    lang_english: "English language (I'm a bit less interested)",
    info_programming:
      "I am also interested in programming (I know a bit of C++ and JavaScript).",
    additional_info: "Additional Information",
    info_owner_neo:
      "I am the owner / creator of N.E.O (New Elite Organization)",
  info_roblox: "I started playing Roblox in 2019... (fun fact: my oldest Roblox account dates back to December 2018 but I don't remember anything from that account)",
  info_technology: "I am also interested in modern technology.",
  politics_view: "I am a nationalist, conservative, and patriot. I also sometimes shift my views — for example, from the right to the far right and back.",
    timezone_info: "Timezone: Loading...",
    current_time: "Current time: Loading...",
    all_rights_reserved: "All rights reserved.",
    info_member_DSX:
      "I am a member of the [DSX🔱] Death Squadron X faction in a war tycoon since June 1, 2025.",
  info_co_leader_dsx: "I am responsible for the complete rebuild of the DSX faction (Death Squadron X), acting as the temporary (server) owner of DSX on Discord. I am also responsible for introducing new systems to the DSX faction's server :>",
    info_member_gk: "	I am a former member of the [GK] Glorious Kingdom faction in a war tycoon since September 27, 2025. (Yes, I was a GK member for just 1 day lol)",

    // fav-games.html
    page_title_fav_games: "ERR0REK - Favorite Games",
    fav_games_heading: "Favorite Games",
    category_nicks: "Nicks in Games",
    category_roblox_games: "Roblox Games",
    category_computer_games: "Computer Games",
    nick_roblox: "Roblox - <strong>ERR0R_Gl1tchTV</strong>",
    nick_rockstar: "Rockstar (GTA) - <strong>ERR0R_Gl1tchTV</strong>",
    nick_minecraft_java: "Minecraft (Java) - <strong>ERR0R_Gl1tchTV</strong>",
    nick_minecraft_bedrock:
      "Minecraft (Bedrock) - <strong>XherobrineYT</strong>",

    // projects.html
    page_title_projects: "ERR0REK - Projects",
    projects_heading: "My Projects",
    project1_title: "Group Assistant (Discord Bot)",
    project1_description:
      "A Discord bot created for server management, task automation, moderation, and providing entertainment for community members. Facilitates organization and interaction within the group.",
    project2_title: "Polish MC Mod Translation (Texture Pack)",
    project2_description:
      "A resource pack (texture pack) containing comprehensive Polish translations for many popular Minecraft modifications. The goal is to facilitate gameplay for Polish-speaking users and ensure linguistic consistency.",
    project3_title: "Veinminer (Extended Datapack)",
    project3_description:
      "A datapack inspired by the popular Veinminer mod. Allows simultaneous extraction of all connected ores of the same type after destroying one of them. This version will be extended with support for modded ores, enhancing gameplay comfort.",
    status_in_progress: "Status: In Progress",
    status_completed: "Status: Completed",
    status_planned: "Status: Planned",
    status_on_hold: "Status: On Hold",

    // membership.html (NOWO DODANE KLUCZE)
    page_title_membership: "Membership",
    membership_heading: "Memberships in Roblox Communities",
    membership_heading2: "Clan Membership in Roblox (In-game)",
    membership_small_info:
      "This refers to in-game Clans, such as in War Tycoon and other games.",
    join_date_label: "Join Date:",
    status_label: "Status:",
    status_current: "Current",
    status_former: "Former",
    status_returned: "Returned",
    status_dissolved: "Dissolved",
  status_inactive: "Inactive",
  status_banned: "Banned",
  status_founder: "Founder",
  status_leader: "Leader",
  status_honorary: "Honorary",
    community_lockedup: "LockedUp Community",
    desc_lockedup:
      "I have been a member of the LockedUp community since August 2023. I was most active in 2023–2024, but in August 2024, after the release of LockedUp, I left the community. Later I returned, but I am not as active as before.",
    community_wanted: "Wanted Community",
    desc_wanted:
     "I am a former member of the Wanted community since August 2024, when I returned to the LockedUp community (after the game's release, I returned in 2025). I am no longer active in that community and have not participated until today.",
    community_elita: "Artificial Elite",
    desc_elita:
      "I am a former member of the Artificial Elite – a group formed in 2020, although it never had an official owner. It dominated games like MM2 (Murder Mystery 2) and MadCity. After two years, in 2022, with the release of MadCity: Chapter 2, the members parted ways, and the Artificial Elite ultimately disbanded.",
    community_neo: "N.E.O (New Elite Organization)",
    desc_neo:
      "I am the owner of the New Elite Organization (N.E.O), which is a continuation of the former Artificial Elite. N.E.O was born in December 2023, a year after the release of MadCity: Chapter 2. Initially, it was called 'New Elite', but over time I transformed it into an organization.",
    clan_DSX_title: "[DSX🔱] Death Squadron X",
    clan_DSX_description:
        "I am a member of DSX, the Polish faction in a war tycoon :>",
  dsx_show_more: "Show more",
  dsx_modal_title: "[DSX🔱] Death Squadron X — Details",

  dsx_modal_content: "This is a Polish Faction (in fact, it's international but the majority are Poles) in War Tycoon, and this faction has won many wars (including big ones), such as: [GK] Glorious Kingdom and [CRC] Command Raid Conquer. I have been a member of DSX since June 1, 2025, and I was a temporary (server) owner of DSX on Discord. I am also responsible for the entire rebuild of the DSX faction and the implementation of new systems on the DSX faction server :>",
  modal_close_label: "Close",

     
    
      // gallery.html
    gallery_title: "Gallery of memories (and strange ones) from games",
    gallery_folder_madcity: "MadCity - Suspicious Things",
    gallery_folder_madcity_desc:
      "Suspicious things captured during the boss fight in Season 2 Ch2",
    gallery_folder_count: "6 photos",
    gallery_open_btn: "View photos",
    gallery_folder_madcity_archive: "MadCity - Archive",
    gallery_folder_madcity_archive_desc: "Archived photos from MadCity",
    gallery_folder_count2: "24 photos",
    gallery_folder_war_tycoon: "War tycoon fucked up actions and etc",
    gallery_folder_war_tycoon_desc: "Fucked up actions and etc. in a war tycoon",
    gallery_folder_count3: "0 photos",
    gallery_folder_count4: "0 videos",
    gallery_open_media_btn: "View photos and videos",
    // UWAGA: nav_neo_docs I button_neo_docs NIE MAJĄ BYĆ W TYM JĘZYKU!
  },
  pl: {
    // Index.html
    page_title: "ERR0REK - Osobista Wizytówka",
    nav_home: "Strona Główna",
    nav_fav_games: "Ulubione Gry",
    nav_projects: "Projekty",
    nav_membership: "Członkostwo",
    nav_gallery: "Galeria",
    nav_history: "Moja Historia",
    // Poniżej dodany nowy klucz dla zakładki nawigacyjnej
    nav_neo_docs: "NEO Dokumentacja",
    lang_label: "Język:",
    home_greeting: "Cześć, nazywam się <span>ERR0R/Macio</span>",
    info_heading: "Podstawowe informacje",
    info_intro:
      "Pochodzę z Polski, mam 17 lat i interesuję się językami obcymi takimi jak:",
    lang_slavic: "Języki Słowiańskie (Czeski, Słowacki itd.)",
    lang_german: "Język Niemiecki",
    lang_english: "Język Angielski (trochę mniej mnie interesuje)",
    info_programming:
      "Interesuję się też programowaniem (znam trochę C++ i JavaScript).",
    additional_info: "Dodatkowe Informacje",
    info_owner_neo:
      "Jestem właścicielem / twórcą N.E.O (Nowa Elitarna Organizacja)",
  info_roblox: "Zacząłem grać w Robloxa w 2019 roku... (fun fact jest taki że moje najstarsze konto na robloxie pochodziło z grudnia 2018 ale nie pamiętam nic z tego konta)",
  info_technology: "Interesuję się również nowoczesną technologią.",
  politics_view: "Jestem narodowcem, konserwatystą i patriotą. Trochę też zmieniam poglądy czyli: prawicę na skrajną prawicę i odwrotnie.",
    timezone_info: "Strefa czasowa: Ładowanie...",
    current_time: "Aktualna godzina: Ładowanie...",
    all_rights_reserved: "Wszystkie prawa zastrzeżone.",
    info_member_DSX:
      "Jestem członkiem frakcji [DSX🔱] Death Squadron X w war tycoonie od 1 czerwca 2025.",
    info_co_leader_dsx: "Jestem odpowiedzialny za cały rebuild frakcji DSX'u (Death Squadron X), jako chwilowy właściciel (serwerowy) DSX na discordzie. Oraz odpowiedzialny za wprowadzenie nowych systemów do serwera frakcji DSX :>",
    info_member_gk: "Jestem byłym członkiem frakcji [GK] Glorious Kingdom w war tycoonie od 27 września 2025. (Tak przez 1 dzień byłem członkiem GK lol)",

    // fav-games.html
    page_title_fav_games: "ERR0REK - Ulubione Gry",
    fav_games_heading: "Ulubione Gry",
    category_nicks: "Nicki w Grach",
    category_roblox_games: "Gry w Robloxie",
    category_computer_games: "Gry Komputerowe",
    nick_roblox: "Roblox - <strong>ERR0R_Gl1tchTV</strong>",
    nick_rockstar: "Rockstar (GTA) - <strong>ERR0R_Gl1tchTV</strong>",
    nick_minecraft_java: "Minecraft (Java) - <strong>ERR0R_Gl1tchTV</strong>",
    nick_minecraft_bedrock:
      "Minecraft (Bedrock) - <strong>XherobrineYT</strong>",

    // projects.html
    page_title_projects: "ERR0REK - Projekty",
    projects_heading: "Moje Projekty",
    project1_title: "Asystent Grupki (Discord Bot)",
    project1_description:
      "Bot Discordowy stworzony do zarządzania serwerem, automatyzacji zadań, moderacji oraz dostarczania rozrywki dla członków społeczności. Ułatwia organizację i interakcję w grupie.",
    project2_title: "Polskie tłumaczenie modyfikacji MC (Texture Pack)",
    project2_description:
      "Pakiet zasobów (texture pack) zawierający kompleksowe polskie tłumaczenia dla wielu popularnych modyfikacji do Minecrafta. Celem jest ułatwienie gry polskojęzycznym użytkownikom i zapewnienie spójności językowej.",
    project3_title: "Veinminer (rozbudowany Datapack)",
    project3_description:
      "Datapack zainspirowany popularnym modem Veinminer. Pozwala na jednoczesne wydobycie wszystkich połączonych rud tego samego typu po zniszczeniu jednej z nich. Wersja ta będzie rozbudowana o wsparcie dla rud z modyfikacji, co zwiększy komfort gry.",
    status_in_progress: "Status: W Trakcie",
    status_completed: "Status: Ukończony",
    status_planned: "Status: Planowany",
    status_on_hold: "Status: Wstrzymany",

    // membership.html (NOWO DODANE KLUCZE)
    page_title_membership: "Członkostwo",
    membership_heading: "Członkostwa w społecznościach Roblox",
    membership_heading2: "Członkowstwo w klanach w Robloxie (In-game)",
    membership_small_info:
      "Tutaj jest mowa o Klanach (in-game) typu War Tycoon i inne gry.",
    join_date_label: "Data dołączenia:",
    status_label: "Status:",
    status_current: "Obecny",
    status_former: "Były",
    status_returned: "Powracający",
  status_dissolved: "Rozwiązana",
    status_inactive: "Nieaktywny",
    status_banned: "Zbanowany",
    status_founder: "Założyciel",
    status_leader: "Lider",
    status_honorary: "Honorowy",
    community_lockedup: "LockedUp Community",
    desc_lockedup:
      "Jestem członkiem społeczności LockedUp od sierpnia 2023 roku. Najbardziej aktywny byłem w latach 2023–2024, jednak w sierpniu 2024, po premierze LockedUp, opuściłem społeczność. Później do niej wróciłem, ale nie jestem już tak aktywny jak wcześniej.",
    community_wanted: "Wanted Community",
    desc_wanted:
      "Jestem członkiem społeczności Wanted od sierpnia 2024 roku, kiedy opuściłem społeczność LockedUp po premierze gry. W tej społeczności jestem umiarkowanie aktywny i do dziś się w niej udzielam.",
    community_elita: "Sztuczna Elita",
    desc_elita:
      "Jestem byłym członkiem Sztucznej Elity – grupy, która powstała w 2020 roku, choć nigdy nie miała oficjalnego właściciela. Dominowała w takich grach jak MM2 (Murder Mystery 2) i MadCity. Po dwóch latach, w 2022 roku, wraz z premierą MadCity: Chapter 2, członkowie się rozstali, a Sztuczna Elita ostatecznie się rozpadła.",
    community_neo: "N.E.O (Nowa Elitarna Organizacja)",
    desc_neo:
      "Jestem właścicielem Nowej Elitarnej Organizacji (N.E.O), która jest kontynuacją dawnej Sztucznej Elity. N.E.O narodziła się w grudniu 2023 roku, czyli rok po premierze MadCity: Chapter 2. Początkowo nosiła nazwę „Nowa Elita”, jednak z czasem przekształciłem ją w organizację.",
    // Poniżej dodany nowy klucz dla przycisku na stronie członkostwa
    button_neo_docs: "Przejdź do Dokumentacji NEO",
    clan_DSX_title: "[DSX🔱] Death Squadron X",
    clan_DSX_description:
      "Jestem członkiem DSX, Polska frakcja w war tycoonie :>",
    dsx_show_more: "Pokaż więcej",
    dsx_modal_title: "[DSX🔱] Death Squadron X — Szczegóły",
    dsx_modal_content: "To Polska Frakcja (wsumie i też międzynarodowa ale większość stanowią polacy) w war tycoonie, i ta frakcja wiele wojen wygrało (także duże) między innymi: [GK] Glorious Kingdom i [CRC] Command Raid Conquer. Jestem członkiem DSX'u od 1 czerwca 2025 roku oraz byłem chwilowym właścicielem (serwerowym) DSX'a na discordzie. Oraz jestem odpowiedzialny za cały rebuild frakcji DSX'u oraz wprowadzenie nowych systemów na serwerze frakcji DSX :>",
    
      // gallery.html
    gallery_title: "Galeria wspomnień (i dziwnych) z gier",
    gallery_folder_madcity: "MadCity - Podejrzane Rzeczy",
    gallery_folder_madcity_desc:
      "Podejrzane rzeczy uchwycone podczas boss fightu w sezonie 2 ch2",
    gallery_folder_count: "6 zdjęć",
    gallery_open_btn: "Zobacz zdjęcia",
    gallery_folder_madcity_archive: "MadCity - Archiwum",
    gallery_folder_madcity_archive_desc: "Archiwalne zdjęcia z MadCity",
    gallery_folder_count2: "24 zdjęć",
    gallery_folder_war_tycoon: "War tycoon pojebane akcje i itd",
    gallery_folder_war_tycoon_desc: "Pojebane akcje i itd w war tycoonie",
    gallery_folder_count3: "0 zdjęć",
    gallery_folder_count4: "0 filmów",
    gallery_open_media_btn: "Zobacz zdjęcia i filmy",
  },
  cs: {
    // Czeski
    // Index.html
    page_title: "ERR0REK - Osobní Portfolio",
    nav_home: "Hlavní Strana",
    nav_fav_games: "Oblíbené Hry",
    nav_projects: "Projekty",
    nav_membership: "Členství",
    nav_gallery: "Galerie",
    nav_history: "Moje Historie",
    lang_label: "Jazyk:",
    home_greeting: "Ahoj, jmenuji se <span>ERR0R/Macio</span>",
    info_heading: "Základní Informace",
    info_intro:
      "Pocházím z Polska, je mi 17 let a zajímám se o cizí jazyky jako jsou:",
    lang_slavic: "Slovanské jazyky (čeština, slovenština atd.)",
    lang_german: "Německý jazyk",
    lang_english: "Anglický jazyk (zajímám se méně)",
    info_programming:
      "Zajímám se také o programování (trochu znám C++ a JavaScript).",
    additional_info: "Další Informace",
    info_owner_neo: "Jsem majitel / tvůrce N.E.O (Nová Elitní Organizace)",
  info_roblox: "Začal jsem hrát Roblox v roce 2019... (fun fact: můj nejstarší účet na Roblox pochází z prosince 2018, ale nic si z něj nepamatuji)",
  info_technology: "Zajímám se také o moderní technologie.",
  politics_view: "Jsem nacionalista, konzervativec a vlastenec. Trochu také měním názory — například z pravice na krajní pravici a zpět.",
    timezone_info: "Časové pásmo: Načítání...",
    current_time: "Aktuální čas: Načítání...",
    all_rights_reserved: "Všechna práva vyhrazena.",
    info_member_DSX:
  "Jsem členem frakce [DSX🔱] Death Squadron X ve war tycoonu od 1. června 2025.",
  info_co_leader_dsx: "Jsem zodpovědný za kompletní rebuild frakce DSX (Death Squadron X) jako dočasný (serverový) vlastník DSX na Discordu. Také mám na starosti zavedení nových systémů na server frakce DSX :>",
    info_member_gk: "Jsem členem frakce [GK] Glorious Kingdom ve válečném tycoonu od 27. září 2025.",
  info_member_gk: "Jsem bývalým členem frakce [GK] Glorious Kingdom ve war tycoonu od 27. září 2025. (Ano, byl jsem členem GK jen 1 den lol)",

    // fav-games.html
    page_title_fav_games: "ERR0REK - Oblíbené Hry",
    fav_games_heading: "Oblíbené Hry",
    category_nicks: "Přezdívky ve hrách",
    category_roblox_games: "Hry na Robloxu",
    category_computer_games: "Počítačové Hry",
    nick_roblox: "Roblox - <strong>ERR0R_Gl1tchTV</strong>",
    nick_rockstar: "Rockstar (GTA) - <strong>ERR0R_Gl1tchTV</strong>",
    nick_minecraft_java: "Minecraft (Java) - <strong>ERR0R_Gl1tchTV</strong>",
    nick_minecraft_bedrock:
      "Minecraft (Bedrock) - <strong>XherobrineYT</strong>",

    // projects.html
    page_title_projects: "ERR0REK - Projekty",
    projects_heading: "Moje Projekty",
    project1_title: "Asistent Skupiny (Discord Bot)",
    project1_description:
      "Discord bot vytvořený pro správu serveru, automatizaci úkolů, moderování a poskytování zábavy členům komunity. Usnadňuje organizaci a interakci ve skupině.",
    project2_title: "Polský překlad MC modifikací (Texture Pack)",
    project2_description:
      "Balíček zdrojů (texture pack) obsahující komplexní polské překlady pro mnoho populárních modifikací do Minecraftu. Cílem je usnadnit hru polsky mluvícím uživatelům a zajistit jazykovou konzistenci.",
    project3_title: "Veinminer (rozšířený Datapack)",
    project3_description:
      "Datapack inspirovaný populárním modem Veinminer. Umožňuje současnou těžbu všech propojených rud stejného typu po zničení jedné z nich. Tato verze bude rozšířena o podporu rud z modifikací, což zvýší komfort hry.",
    status_in_progress: "Stav: Probíhá",
    status_completed: "Stav: Dokončeno",
    status_planned: "Stav: Plánováno",
    status_on_hold: "Stav: Pozastaveno",

    // membership.html (NOWO DODANE KLUCZE)
    page_title_membership: "Členství",
    membership_heading: "Členství v komunitách Roblox",
    membership_heading2: "Členství v klanech v Robloxu (Ve hře)",
    membership_small_info:
      "Toto se týká klanů ve hře, jako je War Tycoon a další hry.",
    join_date_label: "Datum připojení:",
    status_label: "Stav:",
    status_current: "Aktuální",
    status_former: "Bývalý",
    status_returned: "Navrácený",
  status_dissolved: "Rozpuštěna",
    status_inactive: "Neaktivní",
    status_banned: "Zabanovaný",
    status_founder: "Zakladatel",
    status_leader: "Lídr",
    status_honorary: "Čestný",
    community_lockedup: "Komunita LockedUp",
    desc_lockedup:
      "Jsem členem komunity LockedUp od srpna 2023. Nejaktivnější jsem byl v letech 2023–2024, ale v srpnu 2024, po vydání hry LockedUp, jsem komunitu opustil. Později jsem se vrátil, ale už nejsem tak aktivní jako dříve.",
    community_wanted: "Komunita Wanted",
    desc_wanted:
        "Jsem bývalý člen komunity Wanted od srpna 2024, kdy jsem se vrátil do komunity LockedUp (po vydání hry, vrátil jsem se v roce 2025). V této komunitě už nejsem aktivní a dodnes se neangažuji.",
    community_elita: "Umělá Elita",
    desc_elita:
      "Jsem bývalým členem Umělé Elity – skupiny, která vznikla v roce 2020, i když nikdy neměla oficiálního vlastníka. Dominovala ve hrách jako MM2 (Murder Mystery 2) i MadCity. Po dvou letech, v roce 2022, s vydáním MadCity: Kapitola 2, se členové rozešli a Umělá Elita se nakonec rozpadla.",
    community_neo: "Nová Elitní Organizace (N.E.O)",
    desc_neo:
      "Jsem vlastníkem Nové Elitní Organizace (N.E.O), která navazuje na bývalú Umelú Elitu. N.E.O vznikla v prosinci 2023, rok po vydání MadCity: Kapitola 2. Původně se jmenovala „Nová Elita“, ale postupem času jsem ji přetvořil v organizaci.",
    clan_DSX_title: "[DSX🔱] Death Squadron X",
    clan_DSX_description:
  "Jsem členem DSX, polská frakce ve war tycoonu :>",
  dsx_show_more: "Zobrazit více",
  dsx_modal_title: "[DSX🔱] Death Squadron X — Detaily",
  dsx_modal_content: "Toto je polská frakce (vlastně i mezinárodní, ale většinu tvoří Poláci) ve War Tycoonu, a tato frakce vyhrála mnoho válek (včetně velkých), mimo jiné proti: [GK] Glorious Kingdom a [CRC] Command Raid Conquer. Jsem členem DSX od 1. června 2025 a byl jsem dočasným (serverovým) majitelem DSX na Discordu. Jsem také zodpovědný za celou přestavbu frakce DSX a zavedení nových systémů na serveru frakce DSX :>",
    
      // gallery.html
    gallery_title: "Galerie vzpomínek (a podivných) ze her",
    gallery_folder_madcity: "MadCity - Podezřelé věci",
    gallery_folder_madcity_desc:
      "Podezřelé věci zachycené během souboje s bossem v sezóně 2 ch2",
    gallery_folder_count: "6 fotek",
    gallery_open_btn: "Zobrazit fotky",
    gallery_folder_madcity_archive: "MadCity - Archiv",
    gallery_folder_madcity_archive_desc: "Archivované fotky z MadCity",
    gallery_folder_count2: "24 fotek",
    gallery_folder_war_tycoon: "War tycoon zkurvené akce a atd",
    gallery_folder_war_tycoon_desc: "Zkurvené akce a atd. ve war tycoonu",
    gallery_folder_count3: "0 fotek",
    gallery_folder_count4: "0 videí",
    gallery_open_media_btn: "Zobrazit fotky a videa",
    // UWAGA: nav_neo_docs I button_neo_docs NIE MAJĄ BYĆ W TYM JĘZYKU!
  },
  sk: {
    // Słowacki
    // Index.html
    page_title: "ERR0REK - Osobné Portfólio",
    nav_home: "Hlavná Stránka",
    nav_fav_games: "Obľúbené Hry",
    nav_projects: "Projekty",
    nav_membership: "Členstvo",
    nav_gallery: "Galéria",
    nav_history: "Moja História",
    lang_label: "Jazyk:",
    home_greeting: "Ahoj, volám sa <span>ERR0R/Macio</span>",
    info_heading: "Základné Informácie",
    info_intro:
      "Pochádzam z Poľska, mám 17 rokov a zaujímam sa o cudzie jazyky ako sú:",
    lang_slavic: "Slovanské jazyky (Čeština, Slovenčina atď.)",
    lang_german: "Nemecký jazyk",
    lang_english: "Anglický jazyk (menej ma zaujíma)",
    info_programming:
      "Zaujímam sa aj o programovanie (trochu ovládam C++ a JavaScript).",
    additional_info: "Ďalšie Informácie",
    info_owner_neo: "Som vlastník / tvorca N.E.O (Nová Elitná Organizácia)",
  info_roblox: "Začal som hrať Roblox v roku 2019... (fun fact: môj najstarší účet na Roblox je z decembra 2018, ale nič z neho si nepamätám)",
  info_technology: "Zaujímam sa aj o moderné technológie.",
  politics_view: "Som nacionalista, konzervatívec a vlastenec. Trochu tiež mením názory — napríklad z pravice na extrémnu pravicu a späť.",
    timezone_info: "Časové pásmo: Načítava sa...",
    current_time: "Aktuálny čas: Načítava sa...",
    all_rights_reserved: "Všetky práva vyhradené.",
    info_member_DSX:
  "Som členom frakcie [DSX🔱] Death Squadron X vo war tycoone od 1. júna 2025.",
  info_co_leader_dsx: "Som zodpovedný za kompletný rebuild frakcie DSX (Death Squadron X) ako dočasný (serverový) vlastník DSX na Discorde. Tiež som zodpovedný za zavedenie nových systémov na server frakcie DSX :>",
    info_member_gk: "Som členom frakcie [GK] Glorious Kingdom vo war tycoone od 27. septembra 2025.",
  info_member_gk: "Som bývalým členom frakcie [GK] Glorious Kingdom vo war tycoone od 27. septembra 2025. (Áno, bol som členom GK len 1 deň lol)",

    // fav-games.html
    page_title_fav_games: "ERR0REK - Obľúbené Hry",
    fav_games_heading: "Obľúbené Hry",
    category_nicks: "Prezývky v hrách",
    category_roblox_games: "Hry na Robloxu",
    category_computer_games: "Počítačové Hry",
    nick_roblox: "Roblox - <strong>ERR0R_Gl1tchTV</strong>",
    nick_rockstar: "Rockstar (GTA) - <strong>ERR0R_Gl1tchTV</strong>",
    nick_minecraft_java: "Minecraft (Java) - <strong>ERR0R_Gl1tchTV</strong>",
    nick_minecraft_bedrock:
      "Minecraft (Bedrock) - <strong>XherobrineYT</strong>",

    // projects.html
    page_title_projects: "ERR0REK - Projekty",
    projects_heading: "Moje Projekty",
    project1_title: "Asistent Skupiny (Discord Bot)",
    project1_description:
      "Discord bot vytvorený na správu servera, automatizáciu úloh, moderovanie a poskytovanie zábavy členom komunity. Uľahčuje organizáciu a interakciu v skupine.",
    project2_title: "Poľský preklad MC modifikácií (Texture Pack)",
    project2_description:
      "Balíček zdrojov (texture pack) obsahujúci komplexné poľské preklady pre mnoho populárnych modifikácií do Minecrafta. Cieľom je uľahčiť hru poľsky hovoriacim používateľom a zabezpečiť jazykovú konzistęcję.",
    project3_title: "Veinminer (rozšírený Datapack)",
    project3_description:
      "Datapack inšpirovaný populárnym modom Veinminer. Umožňuje súčasné ťaženie všetkých prepojených rúd rovnakého typu po zničení jednej z nich. Táto verzia bude rozšírená o podporu rúd z modifikácií, čo zvýši komfort hry.",
    status_in_progress: "Stav: V Procese",
    status_completed: "Stav: Dokončené",
    status_planned: "Stav: Plánované",
    status_on_hold: "Stav: Pozastavené",

    // membership.html (NOWO DODANE KLUCZE)
    page_title_membership: "Členstvo",
    membership_heading: "Členstvá v komunitách Roblox",
    membership_heading2: "Členstvo v klanoch v Robloxe (V hre)",
    membership_small_info:
      "Toto sa týka klanov v hre, ako napríklad War Tycoon a iné hry.",
    join_date_label: "Dátum pripojenia:",
    status_label: "Stav:",
    status_current: "Aktuálny",
    status_former: "Bývalý",
    status_returned: "Navrátený",
  status_dissolved: "Rozpustená",
    status_inactive: "Neaktívny",
    status_banned: "Zabanovaný",
    status_founder: "Zakladateľ",
    status_leader: "Líder",
    status_honorary: "Čestný",
    community_lockedup: "Komunita LockedUp",
    desc_lockedup:
      "Som členom komunity LockedUp od augusta 2023. Najaktívnejší som bol v rokoch 2023–2024, ale v auguste 2024, po vydaní hry LockedUp, som komunitu opustil. Neskôr som sa vrátil, ale už nie som taký aktívny ako predtým.",
    community_wanted: "Komunita Wanted",
    desc_wanted:
      "Som bývalý člen komunity Wanted od augusta 2024, keď som sa vrátil do komunity LockedUp (po vydaní hry, vrátil som sa v roku 2025). V tejto komunite už nie som aktívny a dodnes sa nezapájam.",
    community_elita: "Umelá Elita",
    desc_elita:
      "Som bývalým členom Umelej Elity – skupiny, ktorá vznikla v roku 2020, aj keď nikdy nemala oficiálneho vlastníka. Dominovala v hrách ako MM2 (Murder Mystery 2) i MadCity. Po dvoch rokoch, v roku 2022, s vydaním MadCity: Kapitola 2, sa členovia rozdelili a Umelá Elita sa nakoniec rozpadla.",
    community_neo: "Nová Elitná Organizácia (N.E.O)",
    desc_neo:
      "Som vlastníkom Novej Elitnej Organizácie (N.E.O), ktorá je pokračovaním bývalej Umelej Elity. N.E.O vznikla v decembri 2023, rok po vydaní MadCity: Kapitola 2. Pôvodne sa volala „Nová Elita“, ale časom som ju pretransformoval na organizáciu.",
    clan_DSX_title: "[DSX🔱] Death Squadron X",
    clan_DSX_description:
  "Som členom DSX, poľská frakcia vo war tycoone :>",
  dsx_show_more: "Zobraziť viac",
  dsx_modal_title: "[DSX🔱] Death Squadron X — Detaily",
  dsx_modal_content: "Toto je Poľská Frakcia (v podstate aj medzinárodná, ale väčšinu tvoria Poliaci) vo War Tycoone, a táto frakcia vyhrala mnoho vojen (aj veľkých), okrem iného proti: [GK] Glorious Kingdom a [CRC] Command Raid Conquer. Som členom DSX od 1. júna 2025 a bol som dočasným (serverovým) majiteľom DSX na Discorde. Taktiež som zodpovedný za celú prestavbu frakcie DSX a zavedenie nových systémov na serveri frakcie DSX :>",
    
      // gallery.html
    gallery_title: "Galéria spomienok (a zvláštnych) z hier",
    gallery_folder_madcity: "MadCity - Podozrivé Veci",
    gallery_folder_madcity_desc:
      "Podozrivé veci zachytené počas boss fightu v sezóne 2 ch2",
    gallery_folder_count: "6 fotiek",
    gallery_open_btn: "Zobraziť fotky",
    gallery_folder_madcity_archive: "MadCity - Archív",
    gallery_folder_madcity_archive_desc: "Archivované fotky z MadCity",
    gallery_folder_count2: "24 fotiek",
    gallery_folder_war_tycoon: "War tycoon posraté akcie a atď",
    gallery_folder_war_tycoon_desc: "Posraté akcie a atď. vo war tycoone",
    gallery_folder_count3: "0 fotiek",
    gallery_folder_count4: "0 videí",
    gallery_open_media_btn: "Zobraziť fotky a videá",
    // UWAGA: nav_neo_docs I button_neo_docs NIE MAJĄ BYĆ W TYM JĘZYKU!
  },
  de: {
    // Niemiecki
    // Index.html
    page_title: "ERR0REK - Persönliches Portfolio",
    nav_home: "Startseite",
    nav_fav_games: "Lieblingsspiele",
    nav_projects: "Projekte",
    nav_membership: "Mitgliedschaft",
    nav_gallery: "Galerie",
    nav_history: "Meine Geschichte",
    lang_label: "Sprache:",
    home_greeting: "Hallo, mein Name ist <span>ERR0R/Macio</span>",
    info_heading: "Grundlegende Informationen",
    info_intro:
      "Ich komme aus Polen, bin 17 Jahre alt und interessiere mich für Fremdsprachen wie:",
    lang_slavic: "Slawische Sprachen (Tschechisch, Slowakisch, etc.)",
    lang_german: "Deutsche Sprache",
    lang_english: "Englische Sprache (interessiert mich etwas weniger)",
    info_programming:
      "Ich interessiere mich auch für Programmierung (ich kenne etwas C++ und JavaScript).",
    additional_info: "Zusätzliche Informationen",
    info_owner_neo:
      "Ich bin der Besitzer / Schöpfer von N.E.O (New Elite Organization)",
  info_roblox: "Ich habe 2019 angefangen, Roblox zu spielen... (Fun Fact: Mein ältester Roblox-Account stammt aus Dezember 2018, aber ich erinnere mich an nichts davon)",
  info_technology: "Ich interessiere mich auch für moderne Technologie.",
  politics_view: "Ich bin Nationalist, Konservativer und Patriot. Manchmal ändere ich auch meine Ansichten — zum Beispiel von der Rechten zur extremen Rechten und wieder zurück.",
    timezone_info: "Zeitzone: Lädt...",
    current_time: "Aktuelle Uhrzeit: Lädt...",
    all_rights_reserved: "Alle Rechte vorbehalten.",
    info_member_DSX:
  "Ich bin Mitglied der Fraktion [DSX🔱] Death Squadron X in War Tycoon seit dem 1. Juni 2025.",
  info_co_leader_dsx: "Ich bin verantwortlich für den kompletten Wiederaufbau der Fraktion DSX (Death Squadron X) und fungiere als vorübergehender (Server-)Inhaber von DSX auf Discord. Außerdem bin ich dafür verantwortlich, neue Systeme auf dem DSX-Server einzuführen :>",
    info_member_gk: "Ich bin ein Mitglied der [GK] Glorious Kingdom Fraktion in einem War Tycoon seit dem 27. September 2025.",
  info_member_gk: "Ich bin ein ehemaliges Mitglied der Fraktion [GK] Glorious Kingdom in War Tycoon seit dem 27. September 2025. (Ja, ich war nur 1 Tag lang Mitglied bei GK lol)",

    // fav-games.html
    page_title_fav_games: "ERR0REK - Lieblingsspiele",
    fav_games_heading: "Lieblingsspiele",
    category_nicks: "Namen in Spielen",
    category_roblox_games: "Roblox Spiele",
    category_computer_games: "Computerspiele",
    nick_roblox: "Roblox - <strong>ERR0R_Gl1tchTV</strong>",
    nick_rockstar: "Rockstar (GTA) - <strong>ERR0R_Gl1tchTV</strong>",
    nick_minecraft_java: "Minecraft (Java) - <strong>ERR0R_Gl1tchTV</strong>",
    nick_minecraft_bedrock:
      "Minecraft (Bedrock) - <strong>XherobrineYT</strong>",

    // projects.html
    page_title_projects: "ERR0REK - Projekte",
    projects_heading: "Meine Projekte",
    project1_title: "Gruppenassistent (Discord Bot)",
    project1_description:
      "Ein Discord-Bot zur Serververwaltung, Aufgabenautomatisierung, Moderation und Unterhaltung für Community-Mitglieder. Erleichtert die Organisation und Interaktion in der Gruppe.",
    project2_title: "Polnische MC Mod-Übersetzung (Texturpaket)",
    project2_description:
      "Ein Ressourcenpaket (Texturpaket) mit umfassenden polnischen Übersetzungen für viele beliebte Minecraft-Modifikationen. Ziel ist es, polnischsprachigen Benutzern das Spielen zu erleichtern und Sprachkonsistenz zu gewährleisten.",
    project3_title: "Veinminer (Erweitertes Datapack)",
    project3_description:
      "Ein Datapack, inspiriert vom beliebten Veinminer-Mod. Ermöglicht das gleichzeitige Abbauen aller verbundenen Erze desselben Typs nach der Zerstörung eines davon. Diese Version wird um Unterstützung für Mod-Erze erweitert, was den Spielkomfort erhöht.",
    status_in_progress: "Status: In Bearbeitung",
    status_completed: "Status: Abgeschlossen",
    status_planned: "Status: Geplant",
    status_on_hold: "Status: Angehalten",

    // membership.html (NOWO DODANE KLUCZE)
    page_title_membership: "Mitgliedschaft",
    membership_heading: "Mitgliedschaften in Roblox-Communitys",
    membership_heading2: "Mitgliedschaft in Clans in Roblox (Im Spiel)",
    membership_small_info:
      "Dies bezieht sich auf Clans im Spiel, wie in War Tycoon und anderen Spielen.",
    join_date_label: "Beitrittsdatum:",
    status_label: "Status:",
    status_current: "Aktuell",
    status_former: "Ehemalig",
    status_returned: "Zurückgekehrt",
  status_dissolved: "Aufgelöst",
    status_inactive: "Inaktiv",
    status_banned: "Gesperrt",
    status_founder: "Gründer",
    status_leader: "Anführer",
    status_honorary: "Ehrenmitglied",
  status_dissolved: "Dissolved",
    community_lockedup: "LockedUp Community",
    desc_lockedup:
      "Ich bin Mitglied der LockedUp Community seit August 2023. Am aktivsten war ich in den Jahren 2023–2024, jedoch verließ ich die Community im August 2024 nach der Veröffentlichung von LockedUp. Später kehrte ich zurück, bin aber nicht mehr so aktiv wie früher.",
    community_wanted: "Wanted Community",
    desc_wanted:
      "	Ich bin seit August 2024 ein ehemaliges Mitglied der Wanted-Community, als ich zur LockedUp-Community zurückkehrte (nach der Spielveröffentlichung, ich bin im Jahr 2025 zurückgekehrt). Ich bin in dieser Community nicht mehr aktiv und beteilige mich bis heute nicht.",
    community_elita: "Künstliche Elite",
    desc_elita:
      "Ich bin ein ehemaliges Mitglied der Künstlichen Elite – einer Gruppe, die 2020 gegründet wurde, aber nie einen offiziellen Besitzer hatte. Sie dominierte in Spielen wie MM2 (Murder Mystery 2) und MadCity. Nach zwei Jahren, im Jahr 2022, nach der Veröffentlichung von MadCity: Kapitel 2, trennten sich die Mitglieder, und die Künstliche Elite löste sich endgültig auf.",
    community_neo: "Neue Elitäre Organisation (N.E.O)",
    desc_neo:
      "Ich bin der Besitzer der Neuen Elitären Organisation (N.E.O), die eine Fortsetzung der alten Künstlichen Elite ist. N.E.O wurde im Dezember 2023 gegründet, also ein Jahr nach der Veröffentlichung von MadCity: Kapitel 2. Zunächst trug sie den Namen „Neue Elite“, aber im Laufe der Zeit habe ich sie in eine Organisation umgewandelt.",
    clan_DSX_title: "[DSX🔱] Death Squadron X",
    clan_DSX_description:
  "Ich bin Mitglied der DSX, polnische Fraktion in War Tycoon :>",
dsx_show_more: "Mehr anzeigen",
dsx_modal_title: "[DSX🔱] Death Squadron X — Details",
  dsx_modal_content: "Das ist eine polnische Fraktion (eigentlich auch international, aber die Mehrheit sind Polen) in War Tycoon, und diese Fraktion hat viele Kriege (auch große) gewonnen, unter anderem gegen: [GK] Glorious Kingdom und [CRC] Command Raid Conquer. Ich bin seit dem 1. Juni 2025 Mitglied von DSX und war ein vorübergehender (Server-)Besitzer von DSX auf Discord. Ich bin auch verantwortlich für den gesamten Wiederaufbau der DSX-Fraktion und die Einführung neuer Systeme auf dem DSX-Fraktionsserver :>",
 
    
      // gallery.html
    gallery_title: "Galerie der Erinnerungen (und seltsamen) aus Spielen",
    gallery_folder_madcity: "MadCity - Verdächtige Dinge",
    gallery_folder_madcity_desc:
      "Verdächtige Dinge, die während des Bosskampfs in Staffel 2 Ch2 aufgenommen wurden",
    gallery_folder_count: "6 Fotos",
    gallery_open_btn: "Fotos ansehen",
    gallery_folder_madcity_archive: "MadCity - Archiv",
    gallery_folder_madcity_archive_desc: "Archivierte Fotos aus MadCity",
    gallery_folder_count2: "24 Fotos",
    gallery_folder_war_tycoon: "War tycoon verrückte Aktionen und so",
    gallery_folder_war_tycoon_desc: "Verrückte Aktionen und so in War Tycoon",
    gallery_folder_count3: "0 Fotos",
    gallery_folder_count4: "0 Videos",
    gallery_open_media_btn: "Fotos und Videos ansehen",
    // UWAGA: nav_neo_docs I button_neo_docs NIE MAJĄ BYĆ W TYM JĘZYKU!
  },
};

// Formatowanie dat z atrybutu datetime zgodnie z lokalizacją
function formatDateForLang(lang, datetime) {
  try {
    const date = new Date(datetime);
    // Mapujemy języki na locale strings
    const localeMap = {
      pl: 'pl-PL',
      en: 'en-GB',
      cs: 'cs-CZ',
      sk: 'sk-SK',
      de: 'de-DE'
    };
    const locale = localeMap[lang] || 'pl-PL';
    // Wybieramy format: jeśli string zawiera tylko rok, pokaż tylko rok
    if (/^\d{4}$/.test(datetime)) {
      return new Intl.DateTimeFormat(locale, { year: 'numeric' }).format(date);
    }
    // jeśli format YYYY-MM
    if (/^\d{4}-\d{2}$/.test(datetime)) {
      return new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'long' }).format(date);
    }
    // fallback do pełnej daty
    return new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'long', day: 'numeric' }).format(date);
  } catch (e) {
    return datetime;
  }
}

function formatAllDates(lang) {
  document.querySelectorAll('time[datetime]').forEach(t => {
    const dt = t.getAttribute('datetime');
    t.textContent = formatDateForLang(lang, dt);
  });
}

// Funkcja translatePage jest globalna, aby mogła być wywołana z innych skryptów lub stron
function translatePage(lang) {
  // Tłumaczenie elementów z data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    // Sprawdź, czy element nie jest dynamicznym tekstem, który ma być obsługiwany przez własną logikę
    if (el.classList.contains("dynamic-text")) {
      return;
    }

    // Sprawdzamy, czy klucz tłumaczenia istnieje dla danego języka
    if (translations[lang] && translations[lang][key] !== undefined) {
      // Użyj innerHTML dla kluczy, które mogą zawierać HTML (np. strong, span)
      // lub textContent dla prostego tekstu
      if (
        key.startsWith("nick_") ||
        key.includes("home_greeting") ||
        key === "clan_DSX_title"
      ) {
        el.innerHTML = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });

  // Ustaw tytuł strony (jeśli istnieje element <title data-i18n>)
  const pageTitleElement = document.querySelector("title[data-i18n]");
  if (pageTitleElement) {
    const key = pageTitleElement.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      document.title = translations[lang][key];
    }
  }

  // LOGIKA: Obsługa elementów ograniczonych językowo
  // Wyszukuje wszystkie elementy z klasą 'language-restricted-item'
  const restrictedItems = document.querySelectorAll(
    ".language-restricted-item"
  );
  restrictedItems.forEach((item) => {
    const restrictedLangs = item.getAttribute("data-lang-restricted");
    // Sprawdza, czy bieżący język znajduje się na liście języków dozwolonych dla tego elementu
    if (restrictedLangs && restrictedLangs.split(",").includes(lang)) {
      item.style.display = ""; // Pokaż element (ustawia domyślny 'display' przeglądarki)
    } else {
      item.style.display = "none"; // Ukryj element
    }
  });

  // Po zmianie języka, upewnij się, że dynamiczny tekst zostanie zaktualizowany
  if (typeof updateDynamicText === "function") {
    updateDynamicText();
  }
  // Upewnij się, że cytaty również się odświeżą
  if (typeof startDynamicQuoteInterval === "function") {
    startDynamicQuoteInterval();
  }

  // Formatowanie wszystkich <time datetime=> zgodnie z wybranym językiem
  if (typeof formatAllDates === "function") {
    formatAllDates(lang);
  }

  // Dispatch custom event to notify other scripts about language change
  // Przekazuje aktualny język jako detal zdarzenia
  document.dispatchEvent(
    new CustomEvent("languageChanged", { detail: { lang: lang } })
  );
}

// Wczytaj preferowany język z localStorage po załadowaniu strony
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("selectedLanguage") || "pl";

  // Inicjalizacja Select2 i obsługa zmiany języka dla selectora
  const languageSelect = document.getElementById("language-select");

  if (languageSelect) {
    // Upewnij się, że element istnieje (dla stron używających select)
    // Inicjalizacja Select2
    // Sprawdź, czy Select2 nie został już zainicjowany, aby uniknąć błędów
    if (typeof jQuery !== "undefined" && !$(languageSelect).data("select2")) {
      // Dodano sprawdzenie jQuery
      $(languageSelect).select2({
        minimumResultsForSearch: Infinity, // Ukrywa pole wyszukiwania
      });
    }

    // Ustawienie początkowego języka na podstawie localStorage
    $(languageSelect).val(savedLang).trigger("change.select2");

    // Obsługa zmiany języka przez Select2
    // Użyj 'select2:select' zamiast 'change' dla Select2, aby mieć pewność
    // że to zdarzenie wywoływane przez Select2, a nie ogólna zmiana
    $(languageSelect).on("select2:select", function () {
      const selectedLang = $(this).val();
      localStorage.setItem("selectedLanguage", selectedLang);
      translatePage(selectedLang);
      // Ponieważ Select2 ma własną logikę, nie dispatchujemy 'languageChanged' stąd
      // translatePage już to robi.
    });
    // Ważne: Wywołaj translatePage po inicjalizacji Select2 i ustawieniu wartości
    // aby upewnić się, że strona jest przetłumaczona na domyślny język po załadowaniu
    translatePage(savedLang);
  } else {
    // Dla stron używających przycisku językowego (np. index.html)
    // Ustawia aktywną opcję w dropdownie na podstawie zapisanego języka
    document.querySelectorAll(".lang-option").forEach((option) => {
      if (option.dataset.lang === savedLang) {
        option.classList.add("active");
      } else {
        option.classList.remove("active");
      }
    });

    // Ustawia tekst przycisku językowego
    const dropbtn = document.getElementById("current-language");
    const langTextMap = {
      pl: "PL",
      en: "EN",
      cs: "CS",
      sk: "SK",
      de: "DE",
    };
    if (dropbtn) {
      // Sprawdzamy, czy element istnieje
      dropbtn.innerHTML = `${langTextMap[savedLang]} <i class="fas fa-caret-down"></i>`;
    }
    // Wywołaj translatePage dla stron bez selectora Select2
    translatePage(savedLang);
  }
});

// Nasłuchiwanie na niestandardowe zdarzenie 'languageChanged' (przeniesione z index.html)
// Dzięki temu ta logika jest centralna i wywoływana niezależnie od tego,
// czy język zmieniono przez Select2 czy przez customowy dropdown.
document.addEventListener("languageChanged", (event) => {
  const newLang = event.detail.lang;
  // Aktualizuj obecny język w zmiennej globalnej, jeśli istnieje,
  // aby dynamiczne teksty i cytaty mogły działać poprawnie.
  if (typeof currentLang !== "undefined") {
    currentLang = newLang;
  }

  // Wywołaj funkcje odpowiedzialne za dynamiczne treści, które zależą od języka
  if (typeof updateDynamicText === "function") {
    updateDynamicText();
  }
  if (typeof startDynamicQuoteInterval === "function") {
    startDynamicQuoteInterval();
  }

  // Dodatkowo, jeśli używasz dropbtn na stronie, zaktualizuj jego tekst
  const dropbtn = document.getElementById("current-language");
  const langTextMap = {
    pl: "PL",
    en: "EN",
    cs: "CS",
    sk: "SK",
    de: "DE",
  };
  if (dropbtn) {
    dropbtn.innerHTML = `${langTextMap[newLang]} <i class="fas fa-caret-down"></i>`;
  }

  // Zaktualizuj aktywne klasy dla opcji w drop-downie, jeśli istnieje
  document.querySelectorAll(".lang-option").forEach((option) => {
    if (option.dataset.lang === newLang) {
      option.classList.add("active");
    } else {
      option.classList.remove("active");
    }
  });
});

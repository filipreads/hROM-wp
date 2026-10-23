export interface TeamMember {
  id: string;
  name: string;
  role: string;
  badgeColor: string;
  photo: string;
  quote: string;
  bio: string;
  email?: string;
  phone?: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'jan-horvath',
    name: 'Jan Horváth',
    role: 'Předseda spolku',
    badgeColor: '#ED7503',
    photo: '/src/assets/images/portrait_jan_horvath_1792789964926.jpg',
    quote: 'Smysl své práce vidím ve vytváření prostoru, kde se můžeme bez předsudků poznávat a lépe chápat naše odlišnosti.',
    bio: 'Jako předseda hROM CB z.s. se podílím na propojování lidí, komunit a organizací, které by se jinak možná vůbec nepotkaly. Věřím, že právě otevřený dialog pomáhá budovat společnost, ve které má každý možnost cítit se bezpečně a být respektovaný.',
    email: 'hrom.cb@gmail.com',
    phone: '+420 721 305 009',
  },
  {
    id: 'tereza-koutska',
    name: 'Tereza Koutská',
    role: 'Místopředsedkyně',
    badgeColor: '#0CACDB',
    photo: '/src/assets/images/portrait_tereza_koutska_1792789966813.jpg',
    quote: 'Společnost je jen tak silná, jak silná je její odpovědnost za nejzranitelnější skupiny obyvatel.',
    bio: 'Slyším příběhy, které jsou velmi silné, slyším naději na lepší život, ale i beznaděj rodičů. Cítím odpovědnost a věřím, že vedle sebe mohou žít rozdílní lidé spojení lidstvím, a proto podporuji aktivity vedoucí k vzájemnému přijetí.',
    email: 'hrom.cb@gmail.com',
    phone: '+420 605 783 196',
  },
  {
    id: 'nadezda-nanarova',
    name: 'Naděžda Nanárová',
    role: 'Práce s dětmi a komunitou',
    badgeColor: '#CE2E85',
    photo: '/src/assets/images/portrait_nadezda_nanarova_1792789966734.jpg',
    quote: 'Od dětství je klíčové učit se respektu, empatii a vnímání rozmanitosti jako přirozené součásti života.',
    bio: 'Věnuji se práci s dětmi a rodinami v komunitách, vytvářím příležitosti pro společné setkávání a sdílení zkušeností. Vedu taneční a tvořivé kroužky i tábory, které dávají dětem sebevědomí a radost.',
  },
  {
    id: 'katerina-sihelnikova',
    name: 'Kateřina Sihelníková',
    role: 'Koordinace a provoz spolku',
    badgeColor: '#FAC503',
    photo: '/src/assets/images/portrait_katerina_sihelnikova_1792789967248.jpg',
    quote: 'Smyslem mé práce je bourat bariéry, posilovat vztahy a stavět mosty mezi světy, které si často nerozumí.',
    bio: 'Propojuji všechny složky spolku a dohlížím na to, aby všechny projekty, dílny a akce běžely hladce. Každý člověk má svůj příběh a každá komunita má svůj skrytý potenciál, který pomáháme rozvíjet.',
  },
  {
    id: 'veronika-zvanovcova',
    name: 'Veronika Zvánovcová',
    role: 'Koordinátorka dobrovolníků',
    badgeColor: '#669538',
    photo: '/src/assets/images/portrait_veronika_zvanovcova_1792789981517.jpg',
    quote: 'Vytvářím stabilní základnu dobrovolníků, která rozumí své cestě a chápe hluboké poslání pomoci.',
    bio: 'Mým cílem je propojovat motivované dobrovolníky a dobrovolnice s rodinami a dětmi, kterým podpora pomůže v rozvoji, studiu i začlenění do běžného života města.',
  },
  {
    id: 'hana-doneeova',
    name: 'Hana Donéeová',
    role: 'Správa webu & IT podpora',
    badgeColor: '#1F4E9E',
    photo: '/src/assets/images/portrait_hana_doneeova_1792789982515.jpg',
    quote: 'Věřím v otevřenou společnost, v níž mají lidé prostor být sami sebou bez obav ze stigmatizace.',
    bio: 'Poskytuji technickou podporu při řešení správy webových stránek i sociálních sítí. Usiluji o to, aby informace o činnosti hROMu byly přístupné, přehledné a moderní pro každého návštěvníka.',
  },
  {
    id: 'kristyna-mercer',
    name: 'Kristýna Mercer',
    role: 'Sociální sítě & Komunikace',
    badgeColor: '#E63312',
    photo: '/src/assets/images/portrait_kristyna_mercer_1792789983595.jpg',
    quote: 'Mám ráda pestrost života a lidí. Věřím v sílu lidské pospolitosti a kultury.',
    bio: 'Mám na starosti sociální sítě a komunikaci s veřejností. Hledám cesty, jak co nejlépe sounáležitost a pestrost propojovat skrze autentické příběhy a živé video výstupy.',
  },
];

export interface Article {
  id: string;
  slug: string;
  title: string;
  category: 'Akce' | 'Projekty' | 'Děti & Mládež' | 'Kultura';
  date: string;
  isoDate: string;
  image: string;
  lead: string;
  content: string[];
  readTime: string;
}

export const ARTICLES: Article[] = [
  {
    id: 'primestsky-tabor-2025',
    slug: 'uspesny-primestsky-tabor-ceske-budejovice',
    title: 'Příměstský tábor v Českých Budějovicích přinesl týden plný tvoření, tance a přátelství',
    category: 'Děti & Mládež',
    date: '14. srpna 2025',
    isoDate: '2025-08-14',
    image: '/src/assets/images/hrom_dance_workshop_1792789912579.jpg',
    lead: 'Více než 25 dětí z různých rodin strávilo společný týden plný sportovních her, tanečních workshopů i výtvarné dílny v prostorách našeho komunitního centra.',
    readTime: '3 min čtení',
    content: [
      'Během horkých letních dnů se naše zázemí v Českých Budějovicích proměnilo v barevnou dílnu plnou hudby, smíchu a radosti. Cílem příměstského tábora bylo vytvořit pro děti bezpečné místo, kde mohou rozvíjet své schopnosti bez ohledu na to, z jakých sociálních poměrů pocházejí.',
      'Každý den byl věnován jinému tématu: od tradičních romských tanců a perkusí vedených lektorkou Naďou Nanárovou, přes základy divadelní improvizace, až po výlet do jihočeské přírody.',
      'Děkujeme všem dobrovolníkům a dárcům, díky nimž měly všechny děti zajištěné zdravé teplé obědy a čerstvé svačiny po celou dobu trvání akce. Již nyní plánujeme podzimní navazující kroužky!',
    ],
  },
  {
    id: 'ehmk-2028-magic-carpets',
    slug: 'partnerstvi-ehmk-2028-magic-carpets',
    title: 'hROM CB se zapojuje do projektu České Budějovice – Evropské hlavní město kultury 2028',
    category: 'Kultura',
    date: '28. června 2025',
    isoDate: '2025-06-28',
    image: '/src/assets/images/hrom_culture_ehmk_1792789913284.jpg',
    lead: 'V rámci mezinárodního programu Magic Carpets a příprav EHMK 2028 spolupořádáme komunitní umělecké rezidence a živé instalace v ulicích Budějovic.',
    readTime: '4 min čtení',
    content: [
      'Zapojení spolku hROM CB do projektu České Budějovice – Evropské hlavní město kultury 2028 (EHMK) představuje klíčový krok k otevření městské kultury všem vrstvám obyvatel.',
      'Společně s mezinárodními umělci vytváříme prostor pro to, aby se romská hudba, textilní výtvarnictví a živá vyprávění staly přirozenou a oceňovanou součástí kulturního tepu Jihočeského kraje.',
      '„Kultura je mostem, po kterém můžeme přejít přes jakékoli předsudky,“ uvedl na úvodním sympoziu předseda spolku Jan Horváth. V září se můžete těšit na veřejná vystoupení přímo na náměstí Přemysla Otakara II.',
    ],
  },
  {
    id: 'vyrocni-zprava-2024-zverejnena',
    slug: 'vyrocni-zprava-2024-hrom-cb',
    title: 'Výroční zpráva spolku za rok 2024 je oficiálně zveřejněna',
    category: 'Projekty',
    date: '10. března 2025',
    isoDate: '2025-03-10',
    image: '/src/assets/images/hrom_team_volunteers_1792789913176.jpg',
    lead: 'Transparentní přehled o hospodaření spolku, zrealizovaných workshopech a dopadu naší činnosti v jihočeském regionu je nyní ke stažení pro veřejnost i dárce.',
    readTime: '2 min čtení',
    content: [
      'Předkládáme kompletní Výroční zprávu hROM České Budějovice, z.s. za kalendářní rok 2024. Zpráva mapuje desítky setkání, rozšíření dobrovolnického týmu i úspěšné pokračování spolupráce se školami a kulturními institucemi.',
      'V uplynulém roce jsme zapojili přes stovku dětí do pravidelných volnočasových aktivit a uspořádali sérii diskusních večerů o toleranci.',
      'Dokument je k dispozici v plném znění ve formátu PDF v sekci Dokumenty na tomto webu.',
    ],
  },
  {
    id: 'dobrovolnici-hledame-posily',
    slug: 'hledame-dobrovolniky-na-skolni-rok',
    title: 'Hledáme dobrovolníky a lektory: Přidejte se k naší budějovické partě',
    category: 'Akce',
    date: '18. ledna 2025',
    isoDate: '2025-01-18',
    image: '/src/assets/images/hrom_hero_community_1792789911839.jpg',
    lead: 'Máte chuť pomoci s doučováním dětí, vedením sportovního kroužku nebo organizací akcí? Zveme vás na úvodní setkání dobrovolníků.',
    readTime: '3 min čtení',
    content: [
      'Dobrovolnictví v hROMu není jen o předávání znalostí, ale především o vzájemném lidském obohacení. Každý náš dobrovolník má podporu zkušených koordinátorů a možnost realizovat vlastní nápady.',
      'Pokud máte pár hodin týdně a chuť měnit České Budějovice k lepšímu, ozvěte se nám přes kontaktní formulář nebo přímo koordinátorce Veronice Zvánovcové.',
    ],
  },
];

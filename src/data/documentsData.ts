export interface LegalDocument {
  id: string;
  title: string;
  category: string;
  year: string;
  fileSize: string;
  format: string;
  description: string;
  downloadUrl: string;
  iconType: 'report' | 'statute' | 'sdg' | 'finance';
}

export const LEGAL_DOCUMENTS: LegalDocument[] = [
  {
    id: 'vyrocni-zprava-2024',
    title: 'Výroční zpráva spolku hROM CB za rok 2024',
    category: 'Výroční zprávy',
    year: '2024',
    fileSize: '3.1 MB',
    format: 'PDF',
    description: 'Kompletní přehled hospodaření, zpráva o činnosti, statistiky zapojených rodin a přehled podpořených projektů za rok 2024.',
    downloadUrl: '#stahnout-vyrocni-zpravu-2024',
    iconType: 'report',
  },
  {
    id: 'stanovy-spolku',
    title: 'Platné stanovy hROM České Budějovice, z.s.',
    category: 'Oficiální dokumenty',
    year: '2023',
    fileSize: '480 kB',
    format: 'PDF',
    description: 'Oficiální registrace spolku, účel a poslání organizace, členská práva a vnitřní struktura spolku zapsaného u Krajského soudu v Č. Budějovicích.',
    downloadUrl: '#stahnout-stanovy-spolku',
    iconType: 'statute',
  },
  {
    id: 'sdgs-deklarace',
    title: 'Deklarace cílů udržitelného rozvoje (SDGs)',
    category: 'Strategie',
    year: '2024–2030',
    fileSize: '820 kB',
    format: 'PDF',
    description: 'Hlášení se k naplňování cílů OSN pro udržitelný rozvoj: SDG 4 (Kvalitní vzdělání), SDG 10 (Méně nerovností) a SDG 16 (Mír a spravedlnost).',
    downloadUrl: '#stahnout-sdgs-deklaraci',
    iconType: 'sdg',
  },
  {
    id: 'financni-transparentnost',
    title: 'Pravidla hospodaření a etický kodex dárce',
    category: 'Hospodaření',
    year: '2024',
    fileSize: '310 kB',
    format: 'PDF',
    description: 'Pravidla pro přijímání a vyúčtování finančních i materiálních darů a závazek k maximální hospodárnosti a transparentnosti.',
    downloadUrl: '#stahnout-pravidla-hospodareni',
    iconType: 'finance',
  },
];

export const changelog: ChangelogItem[] = [
  {
    version: '1.0.2',
    type: 'patch',
    fixed: [
      'Eingebundene Videos führen nun nicht mehr dazu, dass nachfolgende Postinhalte nicht sichtbar sind.',
      'Code-Blöcke und Tabellen erlauben nun horizontales scrollen.',
      'Posts werden im "Hobelware"-Design nun korrekt angezeigt.',
    ],
  },
  {
    version: '1.0.1',
    type: 'patch',
    fixed: [
      'Die Fußleiste nimmt auf iOS nun nicht mehr Raum ein als vorgesehen.',
    ],
  },
  {
    version: '1.0.0',
    type: 'major',
    added: ['Release! 🍾 🥳 🎉'],
  },
];

export interface ChangelogItem {
  version: string;
  type: ChangelogItemType;
  added?: string[];
  changed?: string[];
  removed?: string[];
  fixed?: string[];
}

export type ChangelogItemType = 'major' | 'minor' | 'patch';
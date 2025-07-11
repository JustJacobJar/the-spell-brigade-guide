export type Tier = {
  tierId: string;
  tierName: string;
  tierClassname: string;
  tierItems: Spell[];
};
export type Spell = { spellName: string }; //Spell name should match api for images and such
export const GITSPRITEURL = (spellName: string) =>
  `https://raw.githubusercontent.com/JustJacobJar/the-spell-brigade-sprites/master/sprites/spells/${spellName}.png`;

export type SpellAboutInput = {
  intro: string;
  mageInfo: string;
  augments: string[];
  upgrades: string[];
  overview: string;
};

export type SpellBuildInput = {
  augmentsDps: buildAugmentInfo[];
  augmentsSub: buildAugmentInfo[];
  augmentsSup: buildAugmentInfo[];

  upgradeDps: string[];
  upgradeSub: string[];
  upgradeSup: string[];

  elementsDps: SpellElement[];
  elementsSub: SpellElement[];
  elementsSup: SpellElement[];
};

export interface buildAugmentInfo {
  name: string;
  description: string;
}

export type SpellElement =
  | "Wildfire"
  | "Thunder"
  | "Venom"
  | "Frost"
  | "Void"
  | "Plasma"
  | "Corrosion"
  | "Coldfire"
  | "Hellfire"
  | "Flux"
  | "White Lightning"
  | "Blackbolt"
  | "Frostbite"
  | "Blight"
  | "Soulfrost"
  | "DEFAULT";

export const SpellElementList = [
  "Wildfire",
  "Thunder",
  "Venom",
  "Frost",
  "Void",
  "Plasma",
  "Corrosion",
  "Coldfire",
  "Hellfire",
  "Flux",
  "White Lightning",
  "Blackbolt",
  "Frostbite",
  "Blight",
  "Soulfrost",
];

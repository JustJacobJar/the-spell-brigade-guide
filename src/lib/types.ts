
export type Tier = {
  tierId: string;
  tierName: string;
  tierClassname: string;
  tierItems: Spell[];
};
export type Spell = { spellName: string }; //Spell name should match api for images and such
export const GITSPRITEURL = (spellName: string) =>
  `https://raw.githubusercontent.com/JustJacobJar/the-spell-brigade-sprites/master/sprites/spells/${spellName}.png`;

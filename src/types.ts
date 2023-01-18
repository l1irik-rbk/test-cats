export interface ICard {
  cardID: number;
  cardDescription: string;
  cardTitle: string;
  cardSubtitle: string;
  cardInfo: { cardInfoID: number; cardInfoNumber: number; cardInfoText: string }[];
  cardWeight: string;
  status: {
    available: { available: boolean; availableText: string };
    selected: { selected: boolean; selectedText: string };
  };
}

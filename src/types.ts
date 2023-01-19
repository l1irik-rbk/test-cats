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

export interface ICardInfo extends IStatus {
  card: ICard;
}

export interface ICardStatus extends IStatus {
  cardID: number;
  selectedText: string;
  isNotAvailableText: string;
}

interface IHandleCard {
  handleCard: (cardID: number) => void;
}

interface IStatus extends IHandleCard {
  isSelected: boolean;
  isNotAvailable: boolean;
}

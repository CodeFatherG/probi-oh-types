export enum ConditionOperator {
    EXACTLY = "",
    AT_LEAST = "+",
    NO_MORE = "-"
}

export enum ConditionLocation {
    HAND = "hand",
    DECK = "deck"
}

export enum ConditionType {
    OR = "or",
    AND = "and"
}

export interface CardCondition {
    cardName: string;
    cardCount: number;
    operator: ConditionOperator;
    location: ConditionLocation;
}

export interface LogicCondition {
    type: ConditionType;
    conditionA: CardCondition;
    conditionB: CardCondition;
}

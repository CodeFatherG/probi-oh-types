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
    kind: 'card';
    cardName: string;
    cardCount: number;
    operator: ConditionOperator;
    location: ConditionLocation;
}

export interface LogicCondition {
    kind: 'logic';
    type: ConditionType;
    conditionA: Condition;
    conditionB: Condition;
    render?: {
        hasParentheses?: boolean;
    }
}

export type Condition = CardCondition | LogicCondition;

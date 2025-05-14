import { CardCondition, LogicCondition } from "./condition";

export interface SimulationConditionResult {
    Condition: CardCondition | LogicCondition;
    successes: number;
}
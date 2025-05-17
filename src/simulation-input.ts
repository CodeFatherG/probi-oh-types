import { CardDetails } from "./card-details";
import { Condition } from "./condition";

export interface SimulationInput {
    deckName?: string;
    deck: Map<string, CardDetails>;
    conditions: Condition[];
}
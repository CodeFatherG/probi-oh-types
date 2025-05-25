import { CardDetails } from "./card-details";
import { Condition } from "./condition";

export interface SimulationInput {
    deckName?: string;
    deck: Record<string, CardDetails>;
    conditions: Condition[];
}
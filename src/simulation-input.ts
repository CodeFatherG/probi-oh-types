import { CardDetails } from "./card-details";

export interface SimulationInput {
    deckName?: string;
    deck: Map<string, CardDetails>;
    conditions: string[];
}
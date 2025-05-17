import { FreeCardDetails } from "./free-card-details";

/**
 * Represents the details of a card in the game.
 * @interface
 */
export interface CardDetails {
    /**
     * The quantity of the card in the deck.
     */
    qty?: number;
    /**
     * The tags associated with the card.
     */
    tags?: string[];
    /**
     * The details of a free card.
     */
    free?: FreeCardDetails;
}

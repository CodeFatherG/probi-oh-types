export interface CardAnalytics {
    /**
     * The name of the card
     */
    cardName: string;

    /**
     * Array of id's this card was used in
     */
    simulationIds: string[];

    /**
     * Qty statistics for the card. The key is the number of cards used and the value is the number of times that qty was used
     */
    qtyStats: Record<number, number>;

    /**
     * Cards that were used with this card
     */
    usedWith: CardAnalytics[];

    /**
     * Average success rate of simulations that used this card
     */
    averageSuccessRate: number;
}
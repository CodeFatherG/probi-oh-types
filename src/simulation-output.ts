/**
 * Represents the statistics for a card
 */
export interface CardStats {
    /**
     * The number of times the card appeared in the hand.
     * This is a map of the number of times the card appeared 
     * in the hand to the number of times it appeared that many times.
     */
    seenCount: Record<number, number>;

    /**
     * The number of times the card was seen in a concurrent branch that 
     * is not the initial branch. Meaning that we drew it.
     */
    drawnCount?: number;
}

/**
 * Represents the statistics for a free card
 * @interface
 */
export interface FreeCardStats {
    /**
     * These statistics are aggregated on a per condition basis
     */
    conditions: {
        /**
         * The number of times the free card appeared in the played cards for a successful branch.
         * This is incremented when the free card is used in a successful branch. This means the
         * total times this count is evaluated is the number of iterations * the condition count as
         * if you have 1 iteration and 3 conditions, where 2 conditions used this card to succeed,
         * then this count will be 2, but techincally it was drawn 3 times (since the hand is the same).
         */
        usedToWinCount?: number;

        /**
         * The number of times the free card was in the hand of a successful branch.
         * This is incremented when the free card is in the final hand of a successful branch. 
         * This means the card was not used to win the game.
         */
        unusedCount?: number;
    };

    /**
     * These statistics are aggregated on a per iteration basis
     */
    overall: {
        /**
         * The number of times the free card appeared in the played cards for a successful branch of an iteration.
         * If a condition has already succeeded with an unused count, then this statistic will not increment.
         * This means that if a iteration has 3 conditions, and 2 of them use the free card to win, then this count
         * will be 1, even if the third branch also used the free card but failed as it helped you win the overall iteration.
         * However, if a iteration has both succeeded with a free card and succeeded without one, then this count is not
         * incremented and unused count is incremented.
         */
        usedToWinCount?: number;

        /**
         * The number of times any condition of an iteration passed with the free card in the hand. This means
         * that if on a iteration, 2/5 conditions passed with the free card in the hand, then this count will be 1,
         * even if some conditions failed.
         */
        unusedCount?: number;
    };
}

/**
 * Represents the statistics for a condition
 * @interface
 */
export interface ConditionStats {
    /**
     * The number of successful evaluations of the condition
     * Whilst the simulation will branch to explore permutations of cards and free card usage, 
     * this is the number of times the condition was successful which is only counted once 
     * per simulation regardless of branches.
     */
    successCount?: number;

    /**
     * The statistics for the conditions that build this condition
     */
    subConditionStats?: Record<string, ConditionStats>;
}

/**
 * Represents the report generated from a set of simulations
 * @interface
 */
export interface SimulationOutput {
    /**
     * The number of iterations that were run
     */
    iterations: number;

    /**
     * The number of successful simulations
     * A successful simulation is a where any condition passed for that simulation.
     */
    successfulSimulations: number;

    /**
     * The statistics for the cards drawn
     */
    cardNameStats: Record<string, CardStats>;

    /**
     * The statistics for the tags of the cards drawn
     */
    cardTagStats: Record<string, CardStats>;

    /**
     * The statistics for the free cards used
     */
    freeCardStats?: Record<string, FreeCardStats>;

    /**
     * The statistics for the cards banished
     */
    banishedCardNameStats?: Record<string, CardStats>;

    /**
     * The statistics for the tags of the cards banished
     */
    banishedCardTagStats?: Record<string, CardStats>;

    /**
     * The statistics for the cards discarded
     */
    discardedCardNameStats?: Record<string, CardStats>;

    /**
     * The statistics for the tags of the cards discarded
     */
    discardedCardTagStats?: Record<string, CardStats>;

    /**
     * The statistics for the conditions evaluated
     */
    conditionStats: Record<string, ConditionStats>;
}

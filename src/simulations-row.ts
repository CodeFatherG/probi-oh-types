import { SimulationInput } from "./simulation-input";
import { SimulationOutput } from "./simulation-output";

export interface SimulationRow {
    id: string;
    user_id: string;
    env_id: string;
    data_hash: string;
    data: SimulationInput;
    result: number;
    summary: SimulationOutput;
    created_at: string;
}
import { SimulationInput } from "./simulation-input";
import { SimulationOutput } from "./simulation-output";

export interface SimulationPostData {
    id: string;
    user_id: string;
    env_id: string;
    data: SimulationInput;
    result: number;
    summary: SimulationOutput;
}
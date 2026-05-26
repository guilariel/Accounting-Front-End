import axios from "axios";
import type {
  BalanceBranchRequest,
  GeneralBalance
} from "../types/Balance";

export async function getBranchBalance(
  request: BalanceBranchRequest
): Promise<GeneralBalance> {

  const response = await axios.get<GeneralBalance>(
    "https://localhost:7248/Balance/GetBranchBalance",
    {
      params: request
    }
  );

  return response.data;
}
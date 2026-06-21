import { api } from "../App";
import type { GetLedgerByTime, GetLedger, LedgerEntry } from "../types/Ledger";
import axios from "axios";

export async function getLatestLedger(ledgerRequest: GetLedger): Promise<LedgerEntry> {
    const response = await api.get<LedgerEntry>(
        "/ledger/latest",
        {
            params: ledgerRequest
        }
    );
    return response.data;
}

export async function getLedgerByTime(ledgerRequest: GetLedgerByTime): Promise<LedgerEntry> {
    const response = await api.get<LedgerEntry>(
        "/ledger/by-time",
        {
            params: ledgerRequest     
        }
    );
    return response.data;
}
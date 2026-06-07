import { api } from "../App";
import type { GetLedgerByTime, GetLedgerDto, LedgerEntryDto } from "../types/Ledger";
import axios from "axios";

export async function getLatestLedger(ledgerRequest: GetLedgerDto): Promise<LedgerEntryDto[]> {
    const response = await api.get<LedgerEntryDto[]>(
        "/ledger/latest",
        {
            params: ledgerRequest
        }
    );
    return response.data;
}

export async function getLedgerByTime(ledgerRequest: GetLedgerByTime): Promise<LedgerEntryDto[]> {
    const response = await api.get<LedgerEntryDto[]>(
        "/ledger/by-time",
        {
            params: ledgerRequest     
        }
    );
    return response.data;
}
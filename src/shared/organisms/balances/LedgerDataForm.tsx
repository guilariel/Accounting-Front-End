import { useEffect, useState } from "react";
import type { LedgerEntry } from "../../../types/Ledger";
import { getLatestLedger, getLedgerByTime } from "../../../api/LedgerApi";
import { LabeledInput } from "../../molecules/LabeledInput";
import { AlertMessage } from "../../atoms/AlertMessage";
import { P } from "../../molecules/P";

export function LedgerDataForm({ accountName, branchName, createdBy }: {
    accountName: string;
    branchName: string;
    createdBy: string;
}) {
    const [LedgerData, setLedgerData] = useState<LedgerEntry | null>(null);
    const [searchDate, setSearchDate] = useState<string>("");

    useEffect(() => {
        async function loadData() {
            if (searchDate === "") {
                const params = {
                    account_name: accountName,
                    branch_name: branchName,
                    created_by: createdBy
                };
                try {
                    const LatestLedger = await getLatestLedger(params);
                    setLedgerData(LatestLedger);
                } catch (error) {
                    setLedgerData(null);
                    console.error("Error fetching ledger data by time:", error);
                }
            } else {
                const params = {
                    account_name: accountName,
                    entry_date: searchDate
                };

                try {
                    const LedgerByTime = await getLedgerByTime(params);
                    setLedgerData(LedgerByTime);
                } catch (error) {
                    setLedgerData(null);
                    console.error("Error fetching ledger data by time:", error);
                }
            }
        }
        loadData();
    }, [searchDate, accountName, branchName, createdBy]);
    return (
        <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <LabeledInput
                    text="Search by Date"
                    placeholder="YYYY-MM-DD"
                    onChange={setSearchDate}
                    value={searchDate}
                />
            </div>

            {LedgerData ? (
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-xl font-semibold text-slate-800">
                            Ledger Entry
                        </h2>
                        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                            Updated
                        </span>
                    </div>

                    <div className="space-y-3">
                        <P title="Created By" text={LedgerData.created_by} />
                        <P title="Description" text={LedgerData.description} />
                        <P title="Entry Date" text={LedgerData.entry_date} />
                        <P
                            title="Running Balance"
                            text={`$${LedgerData.running_balance.toLocaleString()}`}
                        />
                    </div>
                </div>
            ) : (
                <div className="rounded-2xl border border-red-200 bg-red-50 p-4">
                    <AlertMessage text="No ledger entry found for the specified date." />
                </div>
            )}
        </div>
    );
}
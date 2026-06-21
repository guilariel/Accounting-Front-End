import { useState, useEffect } from "react";
import type { LedgerEntry } from "../../../types/Ledger";
import { getLatestLedger, getLedgerByTime } from "../../../api/LedgerApi";

export function LedgerSearch({ accountName, branchName, createdBy }: {
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
                try{
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
         <div className="max-w-2xl mx-auto p-6">
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
                Ledger Search
            </h1>

            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Search by Date
                </label>

                <input
                    type="text"
                    placeholder="YYYY-MM-DD"
                    value={searchDate}
                    onChange={(e) => setSearchDate(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl
                    focus:outline-none focus:ring-2 focus:ring-blue-500
                    focus:border-blue-500 transition"
                />
            </div>

            {LedgerData ? (
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                        Ledger Entry
                    </h2>

                    <div className="space-y-3">
                        <div className="flex justify-between border-b pb-2">
                            <span className="font-medium text-gray-600">
                                Created By
                            </span>
                            <span className="text-gray-800">
                                {LedgerData.created_by}
                            </span>
                        </div>

                        <div className="flex justify-between border-b pb-2">
                            <span className="font-medium text-gray-600">
                                Description
                            </span>
                            <span className="text-gray-800">
                                {LedgerData.description}
                            </span>
                        </div>

                        <div className="flex justify-between border-b pb-2">
                            <span className="font-medium text-gray-600">
                                Entry Date
                            </span>
                            <span className="text-gray-800">
                                {LedgerData.entry_date}
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span className="font-medium text-gray-600">
                                Running Balance
                            </span>
                            <span className="font-bold text-green-600">
                                ${LedgerData.running_balance.toLocaleString()}
                            </span>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <p className="text-red-600 text-center">
                        No ledger entry found for the specified date.
                    </p>
                </div>
            )}
        </div>
    </div>
    );
}
import { useEffect, useMemo, useState } from "react";
import type { JournalEntryLines } from "../../../types/JournalEntry";
import { getTransactionsByAccount } from "../../../api/AccountApi";

export function JournalCard({ accountName, branchName }: { accountName: string, branchName: string }) {
    const [journalEntries, setJournalEntries] = useState<JournalEntryLines[] | null>(null);
    const [searchDate, setSearchDate] = useState("");

    useEffect(() => {
        async function LoadData() {
            const journalEntries = await getTransactionsByAccount({
                branch_name: branchName,
                name: accountName
            });
            setJournalEntries(journalEntries);
        }
        LoadData();
    }, [accountName, branchName]);

    const filteredJournalEntries = useMemo(() => {
        if (!journalEntries) {
            return [];
        }

        const normalizedSearchDate = searchDate.trim();

        if (!normalizedSearchDate) {
            return journalEntries;
        }

        return journalEntries.filter((item) => item.date?.startsWith(normalizedSearchDate));
    }, [journalEntries, searchDate]);

    return (
    <div className="max-w-4xl mx-auto p-6">
        <div className="mb-6 flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm md:flex-row md:items-end md:justify-between">
            <div>
                <h1 className="text-3xl font-bold text-gray-800">
                    Journal Entries
                </h1>
                <p className="text-sm text-gray-500 mt-1">
                    Busca transacciones por fecha.
                </p>
            </div>

            <label className="flex flex-col gap-1 text-sm text-gray-700 md:w-72">
                Fecha
                <input
                    type="date"
                    value={searchDate}
                    onChange={(event) => setSearchDate(event.target.value)}
                    className="rounded-xl border border-gray-300 bg-gray-50 px-3 py-2 text-gray-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                />
            </label>
        </div>

        {(filteredJournalEntries.length ?? 0) > 0 ? (
            <div>
                <div className="space-y-4">
                    {filteredJournalEntries.map((item, index) => (
                        <div
                            key={`${item.account_name}-${index}`}
                            className="bg-white rounded-2xl shadow-md border border-gray-200 p-5 hover:shadow-lg transition"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <p>
                                    <span className="font-semibold text-gray-700">
                                        Account:
                                    </span>{" "}
                                    {accountName}
                                </p>

                                <p>
                                    <span className="font-semibold text-gray-700">
                                        Branch:
                                    </span>{" "}
                                    {branchName}
                                </p>

                                <p className="md:col-span-2">
                                    <span className="font-semibold text-gray-700">
                                        Description:
                                    </span>{" "}
                                    {item.description}
                                </p>

                                <p>
                                    <span className="font-semibold text-gray-700">
                                        Date:
                                    </span>{" "}
                                    {item.date}
                                </p>

                                <p>
                                    <span className="font-semibold text-gray-700">
                                        Created By:
                                    </span>{" "}
                                    {item.created_by}
                                </p>

                                <p>
                                    <span className="font-semibold text-green-600">
                                        Credit:
                                    </span>{" "}
                                    {item.credit}
                                </p>

                                <p>
                                    <span className="font-semibold text-red-600">
                                        Debit:
                                    </span>{" "}
                                    {item.debit}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ) : (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
                <p className="text-red-600 font-medium">
                    {searchDate
                        ? "No journal entries found for the selected date."
                        : "Journal not found or has 0 elements"}
                </p>
            </div>
        )}
    </div>
);
}
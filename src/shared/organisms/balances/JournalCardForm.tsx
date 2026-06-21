import { useEffect, useMemo, useState } from "react";
import { AlertMessage } from "../../atoms/AlertMessage";
import { P } from "../../molecules/P";
import { LabeledInput } from "../../molecules/LabeledInput";
import { getTransactionsByAccount } from "../../../api/AccountApi";
import type { JournalEntryLines } from "../../../types/JournalEntry";

export function JournalCardForm({ accountName, branchName }: { accountName: string, branchName: string }) {
    const [journalEntries, setJournalEntries] = useState<JournalEntryLines[] | null>(null);
    const [searchDate, setSearchDate] = useState("");
    const [showAllEntries, setShowAllEntries] = useState(false);

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

        const filtered = normalizedSearchDate
            ? journalEntries.filter((item) => item.date?.startsWith(normalizedSearchDate))
            : journalEntries;

        return filtered;
    }, [journalEntries, searchDate]);

    const visibleJournalEntries = showAllEntries
        ? filteredJournalEntries
        : filteredJournalEntries.slice(0, 3);
    const hasMoreEntries = filteredJournalEntries.length > 3;

    return (
        <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <LabeledInput
                    text="Fecha"
                    value={searchDate}
                    onChange={setSearchDate}
                    placeholder="YYYY-MM-DD"
                />
            </div>

            {(filteredJournalEntries.length ?? 0) > 0 ? (
                <div className="space-y-3">
                    <p className="text-sm text-slate-500">
                        Showing {visibleJournalEntries.length} of {filteredJournalEntries.length} entries
                    </p>
                    <div className="space-y-4">
                        {visibleJournalEntries.map((item, index) => (
                            <div
                                key={`${item.account_name}-${index}`}
                                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
                            >
                                <div className="mb-3 flex items-center justify-between">
                                    <h3 className="text-sm font-semibold text-slate-700">
                                        Journal Entry
                                    </h3>
                                    <span className="rounded-full bg-sky-100 px-2.5 py-1 text-xs font-medium text-sky-700">
                                        {item.date}
                                    </span>
                                </div>

                                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                                    <P title="Account:" text={accountName} />
                                    <P title="Branch:" text={branchName} />
                                    <P title="Description:" text={item.description} />
                                    <P title="Created By:" text={item.created_by} />
                                    <P title="Credit:" text={item.credit} />
                                    <P title="Debit:" text={item.debit} />
                                </div>
                            </div>
                        ))}
                    </div>
                    {hasMoreEntries && (
                        <button
                            type="button"
                            onClick={() => setShowAllEntries((prev) => !prev)}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                        >
                            {showAllEntries ? "Show less" : `Show all (${filteredJournalEntries.length})`}
                        </button>
                    )}
                </div>
            ) : (
                <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-center">
                    <AlertMessage
                        text={
                            searchDate
                                ? "No journal entries found for the selected date."
                                : "Journal not found or has 0 elements"
                        }
                    />
                </div>
            )}
        </div>
    );
}
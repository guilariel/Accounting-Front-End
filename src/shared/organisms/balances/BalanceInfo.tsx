import type { GeneralBalance } from "../../../types/Balance";
import { AlertMessage } from "../../atoms/AlertMessage";

export function BalanceInfo({ balance }: { balance: GeneralBalance | undefined }) {
    return (
        <div className="mb-5">
            {balance ? (
                <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
                    <div className="mb-3 flex items-center justify-between">
                        <h3 className="text-sm font-semibold text-slate-700">
                            Balance Summary
                        </h3>
                        <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700">
                            {new Date(balance.date).toLocaleDateString()}
                        </span>
                    </div>

                    <div className="space-y-2 text-sm text-slate-600">
                        <p>
                            <span className="font-semibold text-slate-700">Net Worth:</span>{" "}
                            {balance.net_worth}
                        </p>
                        <p>
                            <span className="font-semibold text-slate-700">Liabilities:</span>{" "}
                            {balance.total_liabilities}
                        </p>
                        <p>
                            <span className="font-semibold text-slate-700">Assets:</span>{" "}
                            {balance.total_assets}
                        </p>
                    </div>
                </div>
            ) : (
                <AlertMessage
                    text="No balance available"
                />
            )}
        </div>
    );
}
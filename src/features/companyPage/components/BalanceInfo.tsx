import type { GeneralBalance } from "../../../types/Balance";

export function BalanceInfo({ balance }: { balance: GeneralBalance | undefined }) {
        return (
            <div>
                {balance ? (
                            <div className="mt-4 mb-4 border-t pt-3 space-y-1">
                                <p>
                                    <span className="font-semibold">
                                        Net Worth:
                                    </span>{" "}
                                    {balance.net_worth}
                                </p>

                                <p>
                                    <span className="font-semibold">
                                        Liabilities:
                                    </span>{" "}
                                    {balance.total_liabilities}
                                </p>

                                <p>
                                    <span className="font-semibold">
                                        Assets:
                                    </span>{" "}
                                    {balance.total_assets}
                                </p>

                                <p>
                                    <span className="font-semibold">
                                        Date:
                                    </span>{" "}
                                    {new Date(
                                        balance.date
                                    ).toLocaleDateString()}
                                </p>
                            </div>
                        ) : (
                            <p className="mt-4 mb-4 text-red-500">
                                No balance available
                            </p>
                        )}
            </div>
        );
    }
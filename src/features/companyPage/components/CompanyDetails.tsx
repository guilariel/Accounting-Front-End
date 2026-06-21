import type { GeneralBalance } from "../../../types/Balance";
export function CompanyDetails({ companyBalance }: { companyBalance: GeneralBalance }) {
    return (
        <div className="mt-6 border-t pt-6">
            <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-700">
                        Net Worth
                    </h3>
                    <p className="text-xl font-bold">
                        {companyBalance.net_worth}
                    </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-red-700">
                        Liabilities
                    </h3>
                    <p className="text-xl font-bold">
                        {companyBalance.total_liabilities}
                    </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-700">
                        Assets
                    </h3>
                    <p className="text-xl font-bold">
                        {companyBalance.total_assets}
                    </p>
                </div>
            </div>
        </div>
    );
}
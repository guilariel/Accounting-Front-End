export interface JournalEntryLines {
    branch_name: string;
    created_by: string;
    date: string;
    description: string;
    account_name: string;
    credit: number;
    debit: number;
}

export interface AddJournalEntryLine {
    branch_name: string;
    created_by: string;
    description: string;
    account_name: string;
    credit: number;
    debit: number;
}

/*using System.ComponentModel.DataAnnotations;

namespace Accounting.Application.Dtos
{
    public class JournalEntryLinesDto
    {
        public string branch_name { get; set; }
        public string created_by { get; set; } = null!;
        public DateTimeOffset date { get; set; }
        public string description { get; set; } = null!;
        public string account_name { get; set; }
        public decimal credit { get; set; }
        public decimal debit { get; set; }
    }
    public class AddJournalEntryLineDto
    {
        public string branch_name { get; set; }
        public string created_by { get; set; } = null!;
        public string description { get; set; } = null!;
        public string account_name { get; set; }
        public decimal credit { get; set; }
        public decimal debit { get; set; }
    }
}
 */
export interface Company {
    name: string;
    cuit: string;
    start_date: string;
}

export interface AddCompany {
    name: string;
    cuit: string;
}

export interface UpdateCompany {
    name: string;
    newName: string;
}


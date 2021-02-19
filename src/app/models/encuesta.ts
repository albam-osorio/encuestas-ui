export interface Encuesta {
    id?: number;
    documentNumber: number;
    email: string;

    comments: string;
    idBrand: number;
    code?: string;
    fechaCreacion?: Date;

    version: number;
}

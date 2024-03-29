type ContributorInfo = {
  [key: string]: string | Array<string> | { [key: string]: string };
};

type MonthlyTicket = {
  mes: string;
  honorarioBruto: string;
  retencionTerceros: string;
  ppm: string;
};

type TicketInfo = {
  totales: {
    honorarioBruto: string;
    retencionTerceros: string;
    ppm: string;
  };
  porMes: Array<MonthlyTicket>;
};

export type CompanyInfo = {
  nombre: string;
  rut: string;
  fechaIncorporacion: string;
};

type PropertyInfo = {
  comuna: string;
  rol: string;
  direccion: string;
  destino: string;
  avaluoFiscal: string;
  cuentasVencidasPorPagar: boolean;
  cuentasVigentesPorPagar: boolean;
  condicion: string;
};

type IvaNameValueInfo = {
  [nombre: string]: {
    nombre: string;
    valor: string;
  };
};

type IvaDeclarationInfo = {
  periodo: string;
  piePagina: IvaNameValueInfo;
  [codigo: string]:
    | string // needed for periodo
    | IvaNameValueInfo // needed for piePagina
    | {
        codigo: string;
        nombre: string;
        valor: string;
      };
};

type IncomeDeclarationInfo = {
  folio: string;
  periodo: string;
  [codigo: string]:
    | string // needed for folio & periodo
    | {
        codigo: string;
        nombre: string;
        valor: string;
        operacion?: string;
        linea?: string;
      };
};

export default interface DataTaxFolder {
  nombre: string;
  rut: string;
  fechaGeneracion: string;
  contribuyente: ContributorInfo;
  boletas: TicketInfo;
  empresas: {
    [x: string]: Array<CompanyInfo>;
  };
  propiedadesBienesRaices: Array<PropertyInfo>;
  iva: Array<IvaDeclarationInfo>;
  renta: Array<IncomeDeclarationInfo>;
}

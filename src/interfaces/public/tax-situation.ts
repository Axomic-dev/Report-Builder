type EconomicActivityInfo = {
  nombre: string;
  codigo: string;
  categoria: string;
  afectaIVA: boolean;
  fecha: string;
};

type StampedDocumentInfo = {
  nombre: string;
  ultimoTimbraje: number;
};

export default interface DataTaxSituation {
  razonSocial: string;
  fechaConsulta: string;
  contribuyenteInicioActividades: boolean;
  fechaInicioActividades?: string;
  autorizadoImpuestosMonedaExtranjera: boolean;
  esEmpresaMenorTamanoProPyme: boolean;
  actividadesEconomicas: Array<EconomicActivityInfo>;
  documentosTimbrados: Array<StampedDocumentInfo>;
}

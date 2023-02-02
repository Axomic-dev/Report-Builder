type EconomicActivity = {
  nombre: string;
  codigo: string;
  categoria: string;
  afectaIVA: boolean;
  fecha: string;
};

type StampedDoc = {
  nombre: string;
  ultimoTimbraje: number;
};

export default interface DocumentTaxSituation {
  razonSocial: string;
  fechaConsulta: string;
  contribuyenteInicioActividades: boolean;
  fechaInicioActividades?: string;
  autorizadoImpuestosMonedaExtranjera: boolean;
  esEmpresaMenorTamanoProPyme: boolean;
  actividadesEconomicas: Array<EconomicActivity>;
  documentosTimbrados: Array<StampedDoc>;
}

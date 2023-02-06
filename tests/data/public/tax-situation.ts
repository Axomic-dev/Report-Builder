import { TaxSituation } from '../../../src/interfaces/reports';

export const correct: TaxSituation = {
  razonSocial: 'inserte_razon_social',
  fechaConsulta: '01-01-2021 17:01',
  contribuyenteInicioActividades: true,
  fechaInicioActividades: '01-01-2021',
  autorizadoImpuestosMonedaExtranjera: false,
  esEmpresaMenorTamanoProPyme: false,
  documentosTimbrados: [
    {
      nombre: 'Patricia Lorca',
      ultimoTimbraje: 879654
    }
  ],
  actividadesEconomicas: [
    {
      nombre: 'Patricia Lorca',
      codigo: 'inserte_codigo',
      categoria: 'inserte_categoria',
      afectaIVA: false,
      fecha: 'inserte_fecha'
    }
  ]
};

const dataTaxSituation = { correct };
export default dataTaxSituation;

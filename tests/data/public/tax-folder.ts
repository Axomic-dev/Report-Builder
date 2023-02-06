import { TaxFolder } from '../../../src/interfaces/reports';

export const correct: TaxFolder = {
  nombre: 'Patricia Lorca',
  rut: '12.292.349-5',
  fechaGeneracion: '01/02/2023 01:50',
  contribuyente: {
    'Fecha de Inicio de Actividades': '01-02-2018',
    'Actividades Económicas': ['Home'],
    'Categoría tributaria': 'Segunda Categoría',
    Domicilio: 'Pasaje Anibal 851',
    Sucursales: 'Avenida Alcalde Carlos Valdovinos 0171',
    'Últimos documentos timbrados': {
      FACTURAS: '04-08-2022',
      'FACTURA NO AFECTA O EXENTA IVA': '30-08-2022',
      'FACTURA ELECTRONICA': '23-03-2022',
      'FACTURA NO AFECTA O EXENTA ELECTRONICA': '13-02-2022',
      'BOLETAS DE VENTAS Y SERVICIOS': '30-04-2022'
    },
    'Observaciones tributarias': 'No tiene observaciones.'
  },
  empresas: {
    'Representante(s) Legal(es)': [
      {
        nombre: 'Ernesto Jaramillo',
        rut: '78.731.928-9',
        fechaIncorporacion: '2022-09-05'
      }
    ],
    'Conformación de la sociedad': [
      {
        nombre: 'Hermosilla radio taxis Ltda',
        rut: '78.120.093-K',
        fechaIncorporacion: '2022-02-28'
      }
    ],
    'Participación en sociedades vigentes': [
      {
        nombre: 'TRANSELEC S.A.',
        rut: '78.782.727-6',
        fechaIncorporacion: '2022-04-30'
      },
      {
        nombre: 'Alfredo y Lorena Hermanos Ltda',
        rut: '75.035.073-9',
        fechaIncorporacion: '2023-01-01'
      },
      {
        nombre: 'Edgardo y Gonzalo Hermanos Ltda',
        rut: '81.562.401-7',
        fechaIncorporacion: '2022-10-05'
      }
    ]
  },
  propiedadesBienesRaices: [
    {
      comuna: 'QUELLÓN',
      rol: '46014-16285',
      direccion: 'Pasaje Portugal 3286',
      destino: 'BODEGA Y ALMACENAJE',
      avaluoFiscal: '2.434.801',
      cuentasVencidasPorPagar: true,
      cuentasVigentesPorPagar: true,
      condicion: 'AFECTO'
    },
    {
      comuna: 'LOS ÁNGELES',
      rol: '8229-38681',
      direccion: 'Diagonal Santa Rosa 488',
      destino: 'BODEGA Y ALMACENAJE',
      avaluoFiscal: '3.046.700',
      cuentasVencidasPorPagar: true,
      cuentasVigentesPorPagar: true,
      condicion: 'AFECTO'
    }
  ],
  boletas: {
    porMes: [
      {
        mes: 'mayo-14',
        honorarioBruto: '683044',
        retencionTerceros: '81965',
        ppm: '0'
      }
    ],
    totales: {
      honorarioBruto: '683044',
      retencionTerceros: '81965',
      ppm: '0'
    }
  },
  iva: [
    {
      '15': {
        codigo: '15',
        nombre: 'PERIODO',
        valor: '08 /2022'
      },
      periodo: '202208',
      piePagina: {
        'Fecha de Presentación': {
          nombre: 'Fecha de Presentacion',
          valor: '31/08/2022'
        }
      }
    }
  ],
  renta: [
    {
      '94': {
        codigo: '94',
        nombre: 'TOTAL A PAGAR (Líneas 71+72+73)',
        valor: '888779',
        operacion: '=',
        linea: '74'
      },
      '119': {
        codigo: '119',
        nombre:
          'Remanente de crédito por Reliquidación del Impuesto Único de Segunda Categoría y/o por Ahorro Neto Positivo, proveniente de líneas 40 y/o 41.',
        valor: '38509'
      },
      folio: '83298044',
      periodo: '2022'
    }
  ]
};

const dataTaxFolder = { correct };
export default dataTaxFolder;

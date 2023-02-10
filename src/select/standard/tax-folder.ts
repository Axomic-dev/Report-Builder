import { TaxFolder } from '../../interfaces/reports';
import { CompanyInfo } from '../../interfaces/public/tax-folder';

export default function selectTaxFolder(doc: TaxFolder) {
  const { empresas, propiedadesBienesRaices } = doc;
  let sociedades: Array<CompanyInfo> = [];
  let attribute: string;
  for (attribute in empresas) {
    if (attribute.includes('ociedad')) {
      sociedades = sociedades.concat(empresas[attribute]);
    }
  }
  const bienesRaices = propiedadesBienesRaices.map((prop) => {
    const { rol, direccion } = prop;
    return { rol, direccion };
    // const pagosRestantes = prop.cuentasVigentesPorPagar ? 'En pago' : 'Pagado';
    // const pagosMorososRestantes = prop.cuentasVencidasPorPagar ? 'Moroso' : 'Al día';
    // return { rol, direccion, avaluoFiscal, destino, pagosRestantes, pagosMorososRestantes };
  });
  return { sociedades, bienesRaices };
}

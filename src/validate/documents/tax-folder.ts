import Joi from 'joi';

const contributorInfo = Joi.object().pattern(Joi.string(), [
  Joi.string().required(),
  Joi.array().items(Joi.string()).required(),
  Joi.object().pattern(Joi.string(), Joi.string()).required()
]);

const monthlyTicket = Joi.object({
  mes: Joi.string().required(),
  honorarioBruto: Joi.string().required(),
  retencionTerceros: Joi.string().required(),
  ppm: Joi.string().required()
});

const ticketInfo = Joi.object({
  totales: Joi.object({
    honorarioBruto: Joi.string().required(),
    retencionTerceros: Joi.string().required(),
    ppm: Joi.string().required()
  }).required(),
  porMes: Joi.array().items(monthlyTicket).required()
});

const companyInfo = Joi.object().pattern(
  Joi.string(),
  Joi.object({
    nombre: Joi.string().required(),
    rut: Joi.string().required(),
    fechaIncorporacion: Joi.string().required()
  })
);

const propertyInfo = Joi.object({
  comuna: Joi.string().required(),
  rol: Joi.string().required(),
  direccion: Joi.string().required(),
  destino: Joi.string().required(),
  avaluoFiscal: Joi.string().required(),
  cuentasVencidasPorPagar: Joi.boolean().required(),
  cuentasVigentesPorPagar: Joi.boolean().required(),
  condicion: Joi.string().required()
});

const ivaNameValueInfo = Joi.object().pattern(
  Joi.string(),
  Joi.object({
    nombre: Joi.string().required(),
    valor: Joi.string().required()
  })
);

const ivaDeclaration = Joi.object({
  periodo: Joi.string().required(),
  piePagina: ivaNameValueInfo.required()
}).pattern(Joi.string(), [
  Joi.string().required(),
  ivaNameValueInfo.required(),
  Joi.object({
    codigo: Joi.string().required(),
    nombre: Joi.string().required(),
    valor: Joi.string().required()
  }).required()
]);

const incomeDeclaration = Joi.object({
  folio: Joi.string().required(),
  periodo: Joi.string().required()
}).pattern(Joi.string(), [
  Joi.string(),
  Joi.object({
    codigo: Joi.string().required(),
    nombre: Joi.string().required(),
    valor: Joi.string().required(),
    operacion: Joi.string(),
    linea: Joi.string()
  })
]);

const schemaTaxFolder = Joi.object({
  nombre: Joi.string().required(),
  rut: Joi.string().required(),
  fechaGeneracion: Joi.string().required(),
  contribuyente: contributorInfo.required(),
  boletas: ticketInfo.required(),
  empresas: Joi.array().items(companyInfo).required(),
  propiedadesBienesRaices: Joi.array().items(propertyInfo).required(),
  iva: Joi.array().items(ivaDeclaration).required(),
  renta: Joi.array().items(incomeDeclaration).required()
});

export default schemaTaxFolder;

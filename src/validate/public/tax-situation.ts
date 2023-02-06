import Joi from 'joi';

const economicActivity = Joi.object({
  nombre: Joi.string().required(),
  codigo: Joi.string().required(),
  categoria: Joi.string().required(),
  afectaIVA: Joi.boolean().required(),
  fecha: Joi.string().required()
});

const stampedDoc = Joi.object({
  nombre: Joi.string().required(),
  ultimoTimbraje: Joi.number().required()
});

const schemaTaxSituation = Joi.object({
  razonSocial: Joi.string().required(),
  fechaConsulta: Joi.string().required(),
  contribuyenteInicioActividades: Joi.boolean().required(),
  fechaInicioActividades: Joi.string(),
  autorizadoImpuestosMonedaExtranjera: Joi.boolean().required(),
  esEmpresaMenorTamanoProPyme: Joi.boolean().required(),
  actividadesEconomicas: Joi.array().items(economicActivity).required(),
  documentosTimbrados: Joi.array().items(stampedDoc).required()
});

export default schemaTaxSituation;

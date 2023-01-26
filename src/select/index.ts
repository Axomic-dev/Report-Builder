import { Action, DocumentTier } from '../interfaces/boufin';
import selectConsolidate from './standard/consolidate';
import selectDebt from './standard/debt';
import selectTaxFolder from './standard/tax-folder';
import defaultValues from '../tools/default';
import { AnySelectFunction } from '../interfaces/reports';

const select: Record<DocumentTier, Record<Action, AnySelectFunction>> = {
  standard: {
    ...defaultValues,
    consolidate: selectConsolidate,
    debt: selectDebt,
    'tax-folder': selectTaxFolder
  },
  plus: {
    ...defaultValues
  },
  premium: {
    ...defaultValues
  }
};

export default select;

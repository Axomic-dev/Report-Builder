import selectConsolidate from './standard/consolidate';
import selectDebt from './standard/debt';
import selectTaxFolder from './standard/tax-folder';

const select = {
  standard: {
    consolidate: selectConsolidate,
    debt: selectDebt,
    taxFolder: selectTaxFolder
  }
};

export default select;

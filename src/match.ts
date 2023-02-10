import { Action } from './interfaces/boufin';
import { BoufinResponse } from './interfaces/reports';
import select from './select';
import validate from './validate';

export default function match(res: BoufinResponse, action: Action) {
  if (action === Action.CONSOLIDATE) {
    const { value, error } = validate.consolidate(res.results.data);
    if (error) throw new Error('Error: Failed at validate consolidate action.');
    return select.standard.consolidate(value);
  } else if (action === Action.DEBT) {
    const { value, error } = validate.debt(res.results.data);
    if (error) throw new Error('Error: Failed at validate debt action.');
    return select.standard.debt(value);
  } else if (action === Action.TAX_FOLDER) {
    const { value, error } = validate.taxFolder(res.results.data);
    if (error) throw new Error('Error: Failed at validate taxFolder action.');
    return select.standard.taxFolder(value);
  } else {
    throw new Error('Error: Action received has not been implemented yet.');
  }
}

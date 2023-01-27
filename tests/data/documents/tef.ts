import { DocumentTef } from '../../../src/interfaces/reports';
import { BankCode, EntityId } from '../../../src/interfaces/boufin';

export const correct: DocumentTef = {
  name: 'Ingrid Pozo',
  rut: '17.588.456-4',
  bankName: EntityId.FALABELLA,
  bankCode: BankCode.FALABELLA,
  accountNumber: '28690089',
  accountType: 'corriente',
  email: 'ingrid.pozo@email.com',
  alias: 'ingrid'
};

const dataTef = { correct };
export default dataTef;

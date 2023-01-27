import { DocumentMovement } from '../../../src/interfaces/reports';

export const correct: DocumentMovement = {
  type: 'inflow',
  date: '2022-07-27',
  accountNumber: '1111430862763',
  description: 'Vel inventore quaerat officiis.',
  amount: 426351304,
  balance: 750378704,
  channel: 'MÓVIL',
  documentNumber: '173906519'
};

const dataMovement = { correct };
export default dataMovement;

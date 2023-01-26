import { AnyObject, PersonalInformation } from '../../../interfaces/reports';

export default function selectPersonalInformation(doc: AnyObject): AnyObject {
  const now = new Date();
  const year = now.getFullYear();
  const { name, rut, birthDate, phone, email } = doc as PersonalInformation;
  const bday = new Date(birthDate);
  const age = year - bday.getFullYear();
  const phoneNumber = phone ? phone : '-';
  const mail = email ? email : '-';
  const { street, number, extra, region, commune } = doc as PersonalInformation;
  let direction = `${street} #${number}, `;
  if (extra && extra.length > 0) {
    direction += `${extra}, `;
  }
  direction += `${commune}, ${region}`;
  return { name, rut, birthDate, age, phoneNumber, mail, direction };
}

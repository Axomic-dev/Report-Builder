import { AnyObject, PersonalInformation } from '../../../interfaces/reports';
import { ageFrom } from '../../../tools/age-calc';
import { phoneFormat } from '../../../tools/format';

export default function selectPersonalInformation(doc: AnyObject): AnyObject {
  const { name, rut, birthDate, phone, email } = doc as PersonalInformation;
  const bday = new Date(birthDate);
  const age = ageFrom(bday);
  const phoneNumber = phone ? phoneFormat(phone) : '-';
  const mail = email ? email : '-';
  const { street, number, extra, region, commune } = doc as PersonalInformation;
  let direction = `${street} #${number}, `;
  if (extra && extra.length > 0) {
    direction += `${extra}, `;
  }
  direction += `${commune}, ${region}`;
  return { name, rut, birthDate, age, phoneNumber, mail, direction };
}

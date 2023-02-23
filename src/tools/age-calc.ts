function dayOfYear(date: Date) {
  return date.getMonth() * 100 + date.getDate();
}

export function ageFrom(birthDate: string) {
  const [dd, mm, yyyy] = birthDate.split('-');
  const bday = new Date(`${yyyy}-${mm}-${dd}`);
  const now = new Date();
  const year = now.getFullYear();
  const diff = dayOfYear(now) >= dayOfYear(bday) ? 0 : 1;
  return `${year - bday.getFullYear() - diff} años`;
}

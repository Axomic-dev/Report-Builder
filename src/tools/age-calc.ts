function dayOfYear(date: Date) {
  return date.getMonth() * 100 + date.getDate();
}

export function ageFrom(birthDate: Date) {
  const now = new Date();
  const year = now.getFullYear();
  const diff = dayOfYear(now) >= dayOfYear(birthDate) ? 0 : 1;
  return `${year - birthDate.getFullYear() - diff} años`;
}

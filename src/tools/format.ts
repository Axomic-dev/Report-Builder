export function phoneFormat(phone: string) {
  return `(+56) ${phone[0]} ${phone.slice(1, 5)} ${phone.slice(5)}`;
}

function strReverse(str: string) {
  return str.split('').reverse().join('');
}

export function clpFormat(money: number) {
  const rev = strReverse(money.toString());
  const units = rev
    .match(/.{1,3}/g)
    ?.map(strReverse)
    .reverse();
  if (!units) {
    return `$${money} CLP`;
  }
  return `$${units.join('.')} CLP`;
}

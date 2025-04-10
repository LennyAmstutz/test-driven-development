export function isValid(isbn: string): boolean {
  if (!/^\d{13}$/.test(isbn)) return false;

  const digits = isbn.split('').map(Number);
  const checksum = digits[12];

  const sum = digits
      .slice(0, 12)
      .reduce((acc, digit, index) => acc + digit * (index % 2 === 0 ? 1 : 3), 0);

  const calculatedCheck = (10 - (sum % 10)) % 10;

  return checksum === calculatedCheck;
}

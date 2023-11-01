export function isExpirationYear(value: string): boolean {
  const yearNumber = parseInt(value, 10);
  const dateCurrent = new Date();
  const dateExpiration = dateCurrent.getFullYear() + 5;
  return (
    yearNumber <= dateExpiration && yearNumber >= dateCurrent.getUTCFullYear()
  );
}

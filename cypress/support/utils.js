// Generiert eine zufällige E-Mail-Adresse
export function generateRandomEmail() {
  const timestamp = new Date().getTime();
  return `testuser-${timestamp}@test.com`;
}
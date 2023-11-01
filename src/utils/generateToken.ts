export const generateToken = (): string => {
  const caracteres =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let token = "";

  for (let i = 0; i < 16; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    token += caracteres.charAt(indiceAleatorio);
  }

  return token;
};

const generator = ({ length, numbers, symbols, uppercase }) => {
  let chars = "abcdefghijklmnopqrstuvwxyz";

  if (numbers) {
    chars += "1234567890";
  }
  if (symbols) {
    chars += "!@#$%^&*()-_=+[]{};:,.<>?";
  }
  if (uppercase) {
    chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  let password = "";

  for (let i = 0; i < length; i++) {
    let index = Math.floor(Math.random() * chars.length);
    password += chars[index];
  }
  return password;
};

export default generator;

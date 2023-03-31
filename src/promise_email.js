function sendEmail(email, subject, body) {
  // Tu código aquí 👈
  return new Promise((resolve, reject) => {
    if (email === "" || subject === "" || body === "") {
      reject(new Error("Error: Hacen falta campos para enviar el email"));
      return;
    }

    window.setTimeout(() => {
      const mail = { email, subject, body };
      resolve(mail);
    }, 2000);
  });
}

sendEmail("test@mail.com", "Nuevo reto", "Únete a los 30 días de JS")
  .then(result => console.log(result))
  .catch(error => console.log(error));

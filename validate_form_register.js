function validateForm(formData, registeredUsers) {
  // Tú código aquí 👈

  const requiredData = ["name", "lastname", "email", "password"];

  const missingData = requiredData.filter(item => !Object.keys(formData).includes(item));

  if (!!missingData.length) {
    throw new Error(`Faltan los siguientes campos requeridos: ${missingData.join(", ")}`);
  }

  const {name, lastname, email} = formData

  if (registeredUsers.some(item => item.email === email)) {
    throw new Error(`Email  ya existe: ${email}`);
  }
  
  registeredUsers.push({name, lastname, email});
  
  return `Tu registro fue exitoso ${name} ${lastname}`;
}

const formData = {
  name: "Juan",
  lastname: "Perez",
  email: "juan@example.com",
  password: "123456"
}

const registeredUsers = [
  { name: "Pedro", lastname: "Gomez", email: "pedro@example.com" },
  { name: "Maria", lastname: "Garcia", email: "maria@example.com" },
]

validateForm(formData, registeredUsers)

console.log(registeredUsers);

const formData2 = {
  name: "Juan",
  password: "123456",
};

const registeredUsers2 = [
  { name: "Pedro", lastname: "Gomez", email: "pedro@example.com" },
  { name: "Maria", lastname: "Garcia", email: "maria@example.com" },
]

validateForm(formData2, registeredUsers2)

console.log(registeredUsers2);
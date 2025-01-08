db = db.getSiblingDB("dbtest");

db.createUser({
  user: "antoine",
  pwd: "antoinelecrack12345",
  roles: [{ role: "readWrite", db: "dbtest" }],
});

db.createCollection("users");

const generateRandomName = () => {
  const names = [
    "John",
    "Alice",
    "Bob",
    "Charlie",
    "Diana",
    "Eve",
    "Frank",
    "Grace",
  ];
  return names[Math.floor(Math.random() * names.length)];
};

const generateRandomEmail = () => {
  return `${generateRandomName().toLowerCase()}@example.com`;
};

const users = [];
for (let i = 0; i < 10; i++) {
  users.push({
    name: generateRandomName(),
    email: generateRandomEmail(),
    password: "password" + (i + 1),
    createdAt: new Date(),
  });
}

db.users.insertMany(users);

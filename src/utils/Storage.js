

const userSchema = {
  id: String,
  name: String,
  email: String,
  role: String,
};

const assetSchema = {
  id: String,
  name: String,
  description: String,
  status: String,
};

const requestSchema = {
  id: String,
  user: String,
  asset: String,
  status: String,
};

const setStorageData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};


export function getStorageData(key) {
  return global.localStorage.getItem(key);
}

// Set the data in the storage
setStorageData("users", [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "admin",
  },
  {
    id: "2",
    name: "Jane Doe",
    email: "jane.doe@example.com",
    role: "procurement manager",
  },
  {
    id: "3",
    name: "Bill Smith",
    email: "bill.smith@example.com",
    role: "employee",
  },
  {
    id: "4",
    name: "Mark Chains",
    email: "mark.chains@example.com",
    role: "employee",
  },
]);

setStorageData("assets", [
  {
    id: "1",
    name: "Computer",
    description: "A Dell XPS 13 laptop",
    status: "available",
  },
  {
    id: "2",
    name: "Printer",
    description: "A HP LaserJet printer",
    status: "available",
  },
  {
    id: "3",
    name: "Scanner",
    description: "A Canon imageFORMULA scanner",
    status: "available",
  },
]);

setStorageData("requests", [
  {
    id: "1",
    user: "1",
    asset: "1",
    status: "pending",
  },
  {
    id: "2",
    user: "2",
    asset: "2",
    status: "pending",
  },
]);

// Get the data from the storage
const users = getStorageData("users");
const assets = getStorageData("assets");
const requests = getStorageData("requests");

// Use the data
console.log(users);
console.log(assets);
console.log(requests);

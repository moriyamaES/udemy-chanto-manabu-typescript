type User = {
  name: string;
};

async function greetUser(getUser: () => Promise<User>) {
  const user = await getUser();
  console.log(`Hello, ${user.name}`);
}

function fetchUserFromDB(): Promise<User> {
  return new Promise<User>((resolve) => {
    setTimeout(() => {
      resolve({ name: "太郎" });
    }, 1000);
  });
}

greetUser(fetchUserFromDB);

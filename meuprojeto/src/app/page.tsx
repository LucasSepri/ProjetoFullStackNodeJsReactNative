"use client";

async function getData() {
  const response = await fetch('https://api.github.com/users/LucasSepri/repos');

  return response.json();
}

interface DataProps {
  id: number;
  name: string;
  full_name: string;
  owner: {
    login: string;
    id: number;
    avatar_url: string;
    url: string;
  };
}


export default async function Home() {
  const data: DataProps[] = await getData();
  const myArray = [0, 1, 2, 3, 4, 5];
  console.log(myArray);
  
  return (
    <main>
      <h1>Home</h1>
      <span>Seja bem vindo a pagina home</span>
      <br />

      <h3>Meus Repositórios</h3>
      {data.map((item) => (
        <div key={item.id}>
          <strong>Repositório: </strong><a>{item.name}</a>
          <br /><br />
        </div>
      ))}
    </main>
  );
}
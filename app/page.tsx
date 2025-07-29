import { Developer } from "./data";

async function getAllDeveloper() {
  const res = await fetch("http://localhost:3000/api/developers");
  const dev = await res.json();
  return dev.data; // success, data
}

export default async function Home() {
  const data = await getAllDeveloper();

  return (
    <div className="flex flex-col gap-12 justify-center items-center min-h-screen">
      <div className="flex flex-col gap-12">
        <p>WELCOME TO MY WEBSITE</p>
        <button>TES</button>
      </div>
      <div className="flex gap-12">
        {data.map((dev: Developer) => (
          <div key={dev.id}>{dev.username}</div>
        ))}
      </div>
    </div>
  );
}

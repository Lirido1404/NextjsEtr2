import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>
        Bienvenue sur ce site, vous pouvez voir des voitures en cliquant sur ce bouton
      </h1>
      <Link href="/car">
        <button className="border-2 border-black py-1 px-4 bg-red-500 rounded text-white">
            Page voiture
        </button>
      </Link>
    </main>
  );
}

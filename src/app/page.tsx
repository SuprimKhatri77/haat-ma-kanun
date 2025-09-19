import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="p-6">
        <h1 className="text-3xl font-bold text-gray-950">
          Welcome to Haat Ma Kanun
        </h1>
        <p className="mt-2 text-gray-600">
          Your one-stop platform to access laws and regulations easily.
        </p>
      </main>
    </>
  );
}

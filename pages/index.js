export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-8">
      <h1 className="text-6xl font-bold text-center mb-10">Bem-vindo a Austelar</h1>
      <p className="text-2xl text-center max-w-2xl mb-12">
        Se estás cansado da incompetência e insensibilidade dos governantes do seu país, faça como eu: não perca tempo lutando contra o sistema corrompido, mude-se para <strong>Austelar</strong>.
      </p>
      <div className="flex flex-col space-y-4">
        <button className="bg-white text-gray-900 px-6 py-3 rounded-2xl shadow-md hover:bg-gray-200 transition">
          Quero ser cidadão fundador
        </button>
        <button className="bg-gray-700 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-gray-600 transition">
          Quero investir
        </button>
      </div>
    </main>
  );
}

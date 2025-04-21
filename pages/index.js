
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 p-8">
      <h1 className="text-5xl font-bold text-center mb-8">Bem-vindo a Austelar</h1>
      <p className="text-xl text-center max-w-2xl mb-10">
        Se estás cansado da incompetência e insensibilidade dos governantes do seu país, faça como eu: não perca tempo lutando contra o sistema corrompido, mude-se para <strong>Austelar</strong>.
      </p>
      <div className="flex space-x-4">
        <button className="bg-black text-white px-6 py-3 rounded-2xl shadow-md hover:bg-gray-900 transition">
          Quero ser cidadão fundador
        </button>
        <button className="bg-gray-200 text-black px-6 py-3 rounded-2xl shadow-md hover:bg-gray-300 transition">
          Quero investir
        </button>
      </div>
    </main>
  );
}

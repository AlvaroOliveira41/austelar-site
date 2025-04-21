export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-8">
      <h1 className="text-7xl font-extrabold text-center mb-12">Bem-vindo a Austelar</h1>
      <p className="text-3xl text-center max-w-3xl mb-14">
        Se estás cansado da incompetência e insensibilidade dos governantes do seu país, faça como eu: não perca tempo lutando contra o sistema corrompido, mude-se para <strong>Austelar</strong>.
      </p>
      <div className="flex flex-col space-y-6">
        <button className="bg-white text-gray-900 px-8 py-4 rounded-2xl shadow-md hover:bg-gray-200 transition text-xl">
          Quero ser cidadão fundador
        </button>
        <button className="bg-gray-700 text-white px-8 py-4 rounded-2xl shadow-md hover:bg-gray-600 transition text-xl">
          Quero investir
        </button>
      </div>
    </main>
  );
}

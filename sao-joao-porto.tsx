import React, { useState, useEffect } from 'react';
import { Flame, Music, Heart, Star, Sparkles, MapPin, Calendar, Users } from 'lucide-react';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [fireworks, setFireworks] = useState([]);
  const [balloonHits, setBalloonHits] = useState(0);
  const [dancing, setDancing] = useState(false);
  const [saintBlessing, setSaintBlessing] = useState(false);

  const createFirework = () => {
    const newFirework = {
      id: Date.now(),
      x: Math.random() * window.innerWidth,
      y: Math.random() * 300 + 100,
      color: ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'][Math.floor(Math.random() * 5)]
    };
    setFireworks(prev => [...prev, newFirework]);
    setTimeout(() => {
      setFireworks(prev => prev.filter(fw => fw.id !== newFirework.id));
    }, 2000);
  };

  const openModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const getModalContent = () => {
    switch(modalContent) {
      case 'historia':
        return {
          title: '🎭 História de São João no Porto',
          content: `A festa de São João no Porto é uma das mais antigas e populares celebrações da cidade, com origens que remontam ao século XIV. 

A tradição começou quando os habitantes do Porto adotaram rituais pagãos de celebração do solstício de verão, posteriormente cristianizados em honra a São João Batista.

O martelo de plástico tornou-se símbolo da festa nos anos 80, substituindo os antigos martelos de alho-porro que eram usados para "benzer" as pessoas. As cascatas, os balões de São João e as fogueiras completam esta celebração única que atrai milhares de pessoas às ruas do Porto todos os anos!`
        };
      case 'tradicoes':
        return {
          title: '🔨 Tradições Populares',
          content: `🔨 **Martelinhos**: Pequenos martelos coloridos usados para dar "marteladas" carinhosas na cabeça das pessoas, trazendo sorte e proteção.

🎈 **Balões de São João**: Balões de papel soltos no céu durante a madrugada, levando pedidos e desejos.

🌿 **Cascatas**: Arranjos decorativos feitos com flores, papel e outros materiais, expostos nas janelas e varandas.

🔥 **Fogueiras**: Acesas nas ruas para purificação e celebração, mantendo viva a tradição ancestral.

💕 **Manjerico**: Vaso de manjericão oferecido tradicionalmente como prenda de amor, acompanhado de quadras populares.`
        };
      case 'quadras':
        return {
          title: '📝 Quadras de São João',
          content: `As quadras são versos populares recitados durante a festa:

"São João bonito,
São João formoso,
Dai-me um marido
Rico e bondoso!"

"O meu manjerico
Cheira, cheira bem,
Cheira a Lisboa
E a Santarém!"

"Pela noite de São João
Há fogueiras pelo chão,
E as moças todas na rua
Cantam versos ao luar!"

Estas quadras são parte fundamental da tradição, expressando desejos de amor, prosperidade e felicidade!`
        };
      default:
        return { title: '', content: '' };
    }
  };

  const hitBalloon = () => {
    setBalloonHits(prev => prev + 1);
    createFirework();
    if (balloonHits > 0 && balloonHits % 5 === 0) {
      setSaintBlessing(true);
      setTimeout(() => setSaintBlessing(false), 3000);
    }
  };

  const startDancing = () => {
    setDancing(true);
    setTimeout(() => setDancing(false), 3000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.3) createFirework();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Estrelas de fundo */}
      <div className="absolute inset-0">
        {Array.from({length: 50}).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-200 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Fogos de artifício */}
      {fireworks.map(fw => (
        <div
          key={fw.id}
          className="absolute pointer-events-none"
          style={{ left: fw.x, top: fw.y }}
        >
          <div className="relative">
            {Array.from({length: 8}).map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-full animate-ping"
                style={{
                  backgroundColor: fw.color,
                  transform: `rotate(${i * 45}deg) translateY(-20px)`,
                  animationDuration: '1s'
                }}
              />
            ))}
          </div>
        </div>
      ))}

      {/* Header */}
      <header className="relative z-10 text-center py-8 px-4">
        <h1 className="text-6xl font-bold text-yellow-300 mb-4 animate-bounce">
          🎉 SÃO JOÃO DO PORTO 🎉
        </h1>
        <p className="text-xl text-white mb-6">
          A festa mais mágica da cidade invicta!
        </p>
        <div className="flex justify-center items-center gap-4 text-white">
          <Calendar className="w-5 h-5" />
          <span>23-24 de Junho</span>
          <MapPin className="w-5 h-5 ml-4" />
          <span>Porto, Portugal</span>
        </div>
      </header>

      {/* Seção de Bênção do Santo */}
      {saintBlessing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gradient-to-br from-yellow-200 to-yellow-400 p-8 rounded-full animate-pulse">
            <div className="text-6xl text-center">🙏</div>
            <p className="text-center font-bold text-purple-800 mt-4">
              São João te abençoa!
            </p>
          </div>
        </div>
      )}

      {/* Contador de balões */}
      <div className="fixed top-4 right-4 z-20 bg-yellow-400 text-purple-800 px-4 py-2 rounded-full font-bold">
        Balões estourados: {balloonHits} 🎈
      </div>

      {/* Seção Principal */}
      <main className="relative z-10 px-4 pb-8">
        {/* Cards informativos */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mb-12">
          <div 
            onClick={() => openModal('historia')}
            className="bg-gradient-to-br from-red-500 to-pink-600 p-6 rounded-xl cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-red-500/50"
          >
            <div className="text-center">
              <div className="text-4xl mb-4">🏰</div>
              <h3 className="text-xl font-bold text-white mb-2">História da Festa</h3>
              <p className="text-red-100">Descobre as origens desta tradição secular</p>
            </div>
          </div>

          <div 
            onClick={() => openModal('tradicoes')}
            className="bg-gradient-to-br from-green-500 to-emerald-600 p-6 rounded-xl cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-green-500/50"
          >
            <div className="text-center">
              <div className="text-4xl mb-4">🔨</div>
              <h3 className="text-xl font-bold text-white mb-2">Tradições</h3>
              <p className="text-green-100">Martelinhos, cascatas e muito mais!</p>
            </div>
          </div>

          <div 
            onClick={() => openModal('quadras')}
            className="bg-gradient-to-br from-blue-500 to-cyan-600 p-6 rounded-xl cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/50"
          >
            <div className="text-center">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-white mb-2">Quadras Populares</h3>
              <p className="text-blue-100">Versos tradicionais da festa</p>
            </div>
          </div>
        </div>

        {/* Área interativa */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-8 rounded-2xl shadow-2xl mb-8">
            <h2 className="text-3xl font-bold text-white text-center mb-6">
              🎪 Área Interativa da Festa 🎪
            </h2>
            
            {/* Botões de ação */}
            <div className="grid md:grid-cols-2 gap-6">
              <button
                onClick={hitBalloon}
                className="group bg-gradient-to-r from-yellow-400 to-orange-500 p-6 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-500/50"
              >
                <div className="text-center">
                  <div className="text-4xl mb-2 group-hover:animate-bounce">🎈</div>
                  <p className="font-bold text-white">Estourar Balão de São João</p>
                  <p className="text-yellow-100 text-sm mt-2">Faz um pedido!</p>
                </div>
              </button>

              <button
                onClick={startDancing}
                className={`group bg-gradient-to-r from-pink-500 to-red-500 p-6 rounded-xl transform transition-all duration-300 shadow-lg hover:shadow-pink-500/50 ${dancing ? 'animate-pulse scale-110' : 'hover:scale-105'}`}
              >
                <div className="text-center">
                  <div className={`text-4xl mb-2 ${dancing ? 'animate-spin' : 'group-hover:animate-bounce'}`}>💃</div>
                  <p className="font-bold text-white">Dançar Música Popular</p>
                  <p className="text-pink-100 text-sm mt-2">Anima a festa!</p>
                </div>
              </button>
            </div>

            {dancing && (
              <div className="mt-6 text-center">
                <div className="inline-block bg-white text-purple-800 px-6 py-3 rounded-full font-bold animate-bounce">
                  🎵 A dançar ao som dos populares! 🎵
                </div>
              </div>
            )}
          </div>

          {/* Manjerico virtual */}
          <div className="bg-gradient-to-br from-green-400 to-green-600 p-8 rounded-2xl shadow-2xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">🌿 Manjerico Virtual 🌿</h3>
            <div className="text-6xl mb-4 animate-pulse">🪴</div>
            <p className="text-green-100 mb-4">
              "O meu manjerico<br/>
              Cheira, cheira bem,<br/>
              Cheira a São João<br/>
              E a quem o mantém!"
            </p>
            <button
              onClick={() => {
                createFirework();
                alert('🌿 Recebeste a bênção do manjerico! Que São João te proteja! 🙏');
              }}
              className="bg-white text-green-600 px-6 py-3 rounded-full font-bold hover:bg-green-50 transition-colors duration-300"
            >
              Receber Bênção
            </button>
          </div>
        </div>
      </main>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-96 overflow-y-auto shadow-2xl">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-purple-800">
                  {getModalContent().title}
                </h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                {getModalContent().content}
              </div>
              <div className="mt-6 text-center">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors duration-300"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative z-10 text-center py-6 text-white">
        <p className="mb-2">⭐ São João do Porto 2025 ⭐</p>
        <p className="text-sm opacity-75">Tradição, alegria e festa na cidade invicta!</p>
        <div className="mt-4 flex justify-center items-center gap-2 text-yellow-300">
          <Heart className="w-4 h-4" />
          <span className="text-sm">Feito com amor para o Porto</span>
          <Heart className="w-4 h-4" />
        </div>
      </footer>
    </div>
  );
};

export default App;
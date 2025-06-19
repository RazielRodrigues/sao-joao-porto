import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Sparkles, Heart, Music, Flame, Info, Calendar, MapPin, Users, Star } from 'lucide-react'
import './App.css'

function App() {
  const [fireworks, setFireworks] = useState([])
  const [hammerHits, setHammerHits] = useState(0)
  const [balloonsPoppedCount, setBalloonsPoppedCount] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [confetti, setConfetti] = useState([])

  // Função para criar fogos de artifício
  const createFirework = () => {
    const newFirework = {
      id: Date.now(),
      x: Math.random() * 100,
      y: Math.random() * 50 + 10,
      color: ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'][Math.floor(Math.random() * 5)]
    }
    setFireworks(prev => [...prev, newFirework])
    setTimeout(() => {
      setFireworks(prev => prev.filter(fw => fw.id !== newFirework.id))
    }, 2000)
  }

  // Função para criar confetti
  const createConfetti = () => {
    const newConfetti = Array.from({ length: 20 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100,
      y: -10,
      color: ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'][Math.floor(Math.random() * 5)],
      rotation: Math.random() * 360
    }))
    setConfetti(prev => [...prev, ...newConfetti])
    setTimeout(() => {
      setConfetti(prev => prev.filter(c => !newConfetti.find(nc => nc.id === c.id)))
    }, 3000)
  }

  // Balões flutuantes
  const balloons = [
    { id: 1, color: '#FF6B6B', x: 10, y: 20 },
    { id: 2, color: '#4ECDC4', x: 85, y: 15 },
    { id: 3, color: '#FFD700', x: 70, y: 25 },
    { id: 4, color: '#45B7D1', x: 25, y: 10 },
    { id: 5, color: '#96CEB4', x: 50, y: 18 }
  ]

  const popBalloon = (balloonId) => {
    setBalloonsPoppedCount(prev => prev + 1)
    createConfetti()
    // Adicionar efeito visual de estouro
    const balloon = document.getElementById(`balloon-${balloonId}`)
    if (balloon) {
      balloon.style.transform = 'scale(0)'
      balloon.style.opacity = '0'
      setTimeout(() => {
        balloon.style.transform = 'scale(1)'
        balloon.style.opacity = '1'
      }, 1000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Fogos de artifício */}
      {fireworks.map(fw => (
        <div
          key={fw.id}
          className="absolute animate-ping"
          style={{
            left: `${fw.x}%`,
            top: `${fw.y}%`,
            color: fw.color
          }}
        >
          <Sparkles size={24} />
        </div>
      ))}

      {/* Confetti */}
      {confetti.map(c => (
        <div
          key={c.id}
          className="absolute animate-bounce"
          style={{
            left: `${c.x}%`,
            top: `${c.y}%`,
            color: c.color,
            transform: `rotate(${c.rotation}deg)`,
            animation: 'fall 3s linear forwards'
          }}
        >
          <Star size={12} />
        </div>
      ))}

      {/* Balões flutuantes */}
      {balloons.map(balloon => (
        <div
          key={balloon.id}
          id={`balloon-${balloon.id}`}
          className="absolute cursor-pointer hover:scale-110 transition-transform animate-bounce"
          style={{
            left: `${balloon.x}%`,
            top: `${balloon.y}%`,
            animationDelay: `${balloon.id * 0.5}s`,
            animationDuration: '3s'
          }}
          onClick={() => popBalloon(balloon.id)}
        >
          <div
            className="w-8 h-10 rounded-full shadow-lg"
            style={{ backgroundColor: balloon.color }}
          />
          <div className="w-px h-8 bg-gray-600 mx-auto" />
        </div>
      ))}

      {/* Header */}
      <header className="relative z-10 text-center py-8 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-300 mb-4 animate-pulse">
          🎉 Festa de São João do Porto 🎉
        </h1>
        <p className="text-xl text-white mb-6">
          A maior festa popular do Porto • 23-24 de Junho
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Badge variant="secondary" className="text-lg px-4 py-2">
            <Calendar className="w-4 h-4 mr-2" />
            23-24 Junho 2025
          </Badge>
          <Badge variant="secondary" className="text-lg px-4 py-2">
            <MapPin className="w-4 h-4 mr-2" />
            Porto, Portugal
          </Badge>
          <Badge variant="secondary" className="text-lg px-4 py-2">
            <Users className="w-4 h-4 mr-2" />
            Milhares de pessoas
          </Badge>
        </div>
      </header>

      {/* Área interativa */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 pb-8">
        {/* Estatísticas divertidas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="bg-yellow-400/20 border-yellow-400">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-yellow-300">{hammerHits}</div>
              <div className="text-white">Marteladas dadas</div>
            </CardContent>
          </Card>
          <Card className="bg-red-400/20 border-red-400">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-red-300">{balloonsPoppedCount}</div>
              <div className="text-white">Balões estourados</div>
            </CardContent>
          </Card>
          <Card className="bg-blue-400/20 border-blue-400">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-300">{fireworks.length}</div>
              <div className="text-white">Fogos ativos</div>
            </CardContent>
          </Card>
        </div>

        {/* Botões interativos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Button
            onClick={() => {
              setHammerHits(prev => prev + 1)
              createFirework()
            }}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 text-lg"
          >
            🔨 Bater com Martelo
          </Button>
          
          <Button
            onClick={createFirework}
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-4 text-lg"
          >
            🎆 Lançar Fogo
          </Button>
          
          <Button
            onClick={() => setIsPlaying(!isPlaying)}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 text-lg"
          >
            {isPlaying ? '⏸️' : '🎵'} Música
          </Button>
          
          <Button
            onClick={createConfetti}
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 text-lg"
          >
            🎊 Confetti
          </Button>
        </div>

        {/* Cards informativos com modais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* História da Festa */}
          <Dialog>
            <DialogTrigger asChild>
              <Card className="cursor-pointer hover:scale-105 transition-transform bg-gradient-to-br from-orange-500/20 to-red-500/20 border-orange-400">
                <CardHeader>
                  <CardTitle className="text-orange-300 flex items-center">
                    <Flame className="w-5 h-5 mr-2" />
                    História da Festa
                  </CardTitle>
                  <CardDescription className="text-orange-100">
                    Descubra as origens desta tradição milenar
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white">
                    Clique para conhecer a fascinante história por trás da Festa de São João do Porto...
                  </p>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl">História da Festa de São João</DialogTitle>
                <DialogDescription>
                  Uma tradição que atravessa séculos
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <p>
                  A Festa de São João do Porto tem origens que remontam à época medieval, combinando tradições pagãs do solstício de verão com celebrações cristãs em honra de São João Baptista.
                </p>
                <p>
                  Originalmente, as festividades tinham carácter pagão e marcavam o solstício de verão. Com a cristianização, a festa foi adaptada para celebrar São João Baptista, padroeiro da cidade do Porto.
                </p>
                <p>
                  A tradição dos martelos de plástico surgiu como uma evolução das antigas práticas de bater com alho-porro nas cabeças das pessoas, simbolizando boa sorte e proteção.
                </p>
                <p>
                  Hoje, a festa atrai milhares de pessoas às ruas do Porto, especialmente nos bairros históricos, criando uma atmosfera única de alegria e confraternização.
                </p>
              </div>
            </DialogContent>
          </Dialog>

          {/* Tradições */}
          <Dialog>
            <DialogTrigger asChild>
              <Card className="cursor-pointer hover:scale-105 transition-transform bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-blue-400">
                <CardHeader>
                  <CardTitle className="text-blue-300 flex items-center">
                    <Heart className="w-5 h-5 mr-2" />
                    Tradições
                  </CardTitle>
                  <CardDescription className="text-blue-100">
                    Os costumes únicos desta celebração
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white">
                    Explore as tradições que tornam esta festa tão especial...
                  </p>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl">Tradições de São João</DialogTitle>
                <DialogDescription>
                  Costumes únicos que definem a festa
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg mb-2">🔨 Martelos de Plástico</h3>
                  <p>A tradição mais icónica! As pessoas batem umas nas outras com martelos de plástico coloridos, simbolizando boa sorte e diversão.</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">🎈 Balões de São João</h3>
                  <p>Balões coloridos são soltos ao ar, levando desejos e pedidos para o santo. É tradição fazer um pedido antes de soltar o balão.</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">🔥 Fogueiras</h3>
                  <p>Fogueiras são acesas nas ruas e praças, onde as pessoas se reúnem para cantar, dançar e assar sardinhas.</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">🐟 Sardinhas Assadas</h3>
                  <p>O prato tradicional da festa! Sardinhas grelhadas são servidas com pão e pimentos, acompanhadas de vinho verde.</p>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {/* Música e Dança */}
          <Dialog>
            <DialogTrigger asChild>
              <Card className="cursor-pointer hover:scale-105 transition-transform bg-gradient-to-br from-green-500/20 to-teal-500/20 border-green-400">
                <CardHeader>
                  <CardTitle className="text-green-300 flex items-center">
                    <Music className="w-5 h-5 mr-2" />
                    Música e Dança
                  </CardTitle>
                  <CardDescription className="text-green-100">
                    Os sons que embalam a festa
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white">
                    Descubra a trilha sonora desta celebração única...
                  </p>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl">Música e Dança de São João</DialogTitle>
                <DialogDescription>
                  A trilha sonora da festa
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg mb-2">🎵 Música Popular</h3>
                  <p>As ruas enchem-se de música popular portuguesa, com destaque para as marchas populares e canções tradicionais do Porto.</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">🪗 Acordeão e Concertina</h3>
                  <p>Instrumentos tradicionais como o acordeão e a concertina animam as festividades, criando uma atmosfera autenticamente portuguesa.</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">💃 Danças Tradicionais</h3>
                  <p>Grupos folclóricos apresentam danças tradicionais do Norte de Portugal, vestindo trajes típicos coloridos.</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">🎤 Marchas Populares</h3>
                  <p>Cada bairro do Porto organiza a sua marcha popular, competindo em criatividade, música e coreografia.</p>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {/* Locais da Festa */}
          <Dialog>
            <DialogTrigger asChild>
              <Card className="cursor-pointer hover:scale-105 transition-transform bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-yellow-400">
                <CardHeader>
                  <CardTitle className="text-yellow-300 flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    Locais da Festa
                  </CardTitle>
                  <CardDescription className="text-yellow-100">
                    Onde a magia acontece
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white">
                    Conheça os principais pontos de celebração...
                  </p>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl">Locais da Festa</DialogTitle>
                <DialogDescription>
                  Os principais pontos de celebração
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg mb-2">🏛️ Centro Histórico</h3>
                  <p>O coração da festa! As ruas estreitas da Ribeira e do centro histórico enchem-se de pessoas, música e alegria.</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">🌉 Ponte Dom Luís I</h3>
                  <p>Local privilegiado para assistir aos fogos de artifício que iluminam o rio Douro durante a festa.</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">🏘️ Bairros Tradicionais</h3>
                  <p>Cada bairro organiza as suas próprias festividades: Cedofeita, Miragaia, Massarelos e muitos outros.</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">🎭 Avenida dos Aliados</h3>
                  <p>Palco principal dos concertos e espetáculos oficiais, com artistas nacionais e internacionais.</p>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {/* Gastronomia */}
          <Dialog>
            <DialogTrigger asChild>
              <Card className="cursor-pointer hover:scale-105 transition-transform bg-gradient-to-br from-red-500/20 to-pink-500/20 border-red-400">
                <CardHeader>
                  <CardTitle className="text-red-300 flex items-center">
                    <Info className="w-5 h-5 mr-2" />
                    Gastronomia
                  </CardTitle>
                  <CardDescription className="text-red-100">
                    Sabores tradicionais da festa
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white">
                    Delicie-se com os pratos típicos de São João...
                  </p>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl">Gastronomia de São João</DialogTitle>
                <DialogDescription>
                  Os sabores tradicionais da festa
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg mb-2">🐟 Sardinhas Assadas</h3>
                  <p>O prato estrela! Sardinhas frescas grelhadas na brasa, servidas com pão de broa e pimentos assados.</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">🍷 Vinho Verde</h3>
                  <p>A bebida tradicional que acompanha as sardinhas. Fresco e ligeiro, perfeito para as noites de verão.</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">🌶️ Pimentos Assados</h3>
                  <p>Pimentos vermelhos e verdes assados na brasa, temperados com azeite, alho e sal grosso.</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">🍞 Broa de Milho</h3>
                  <p>Pão tradicional português feito com farinha de milho, perfeito para acompanhar as sardinhas.</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">🧄 Caldo Verde</h3>
                  <p>Sopa tradicional portuguesa com couve galega, batata e chouriço, servida quente nas noites mais frescas.</p>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {/* Dicas para Visitantes */}
          <Dialog>
            <DialogTrigger asChild>
              <Card className="cursor-pointer hover:scale-105 transition-transform bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border-purple-400">
                <CardHeader>
                  <CardTitle className="text-purple-300 flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    Dicas para Visitantes
                  </CardTitle>
                  <CardDescription className="text-purple-100">
                    Como aproveitar ao máximo a festa
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white">
                    Conselhos essenciais para uma experiência inesquecível...
                  </p>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl">Dicas para Visitantes</DialogTitle>
                <DialogDescription>
                  Como aproveitar ao máximo a festa
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg mb-2">🕘 Chegue Cedo</h3>
                  <p>A festa começa ao final da tarde, mas os melhores locais enchem rapidamente. Chegue cedo para garantir um bom lugar.</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">👟 Calçado Confortável</h3>
                  <p>Use sapatos confortáveis! Vai caminhar muito pelas ruas de pedra do centro histórico.</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">🔨 Compre um Martelo</h3>
                  <p>Não se esqueça de comprar um martelo de plástico! É essencial para participar na tradição mais divertida da festa.</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">📱 Mantenha o Telemóvel Carregado</h3>
                  <p>Com tanta gente, é fácil perder-se dos amigos. Mantenha o telemóvel carregado para se manter em contacto.</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">💰 Leve Dinheiro</h3>
                  <p>Muitos vendedores ambulantes só aceitam dinheiro. Leve algumas moedas para comprar sardinhas e bebidas.</p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 py-8 border-t border-white/20">
          <p className="text-white/80 mb-4">
            Festa de São João do Porto 2025 • Uma tradição que une gerações
          </p>
          <p className="text-white/60 text-sm">
            Clique nos balões flutuantes para os estourar • Use os botões para interagir com a festa
          </p>
          <div className="mt-4 text-yellow-300">
            ⭐ Viva São João! ⭐
          </div>
        </footer>
      </div>

      {/* Estilos CSS para animações */}
      <style jsx>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
        
        .animate-fall {
          animation: fall 3s linear forwards;
        }
      `}</style>
    </div>
  )
}

export default App


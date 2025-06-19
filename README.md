# Festa de São João do Porto 2025 🎉

Um website interativo dedicado à tradicional Festa de São João do Porto, desenvolvido em React.js com Vite.

## 🎯 Sobre o Projeto

Este site celebra a maior festa popular do Porto, que acontece na noite de 23 para 24 de junho. O website oferece:

- **Modais informativos** sobre a história, tradições, música, locais e gastronomia da festa
- **Elementos interativos** como fogos de artifício, confetti, balões para estourar e contador de marteladas
- **Design responsivo** com tema festivo e cores tradicionais
- **Experiência imersiva** com animações e efeitos visuais

## 🚀 Funcionalidades Interativas

- 🔨 **Martelo de São João**: Clique para dar marteladas e lançar fogos
- 🎆 **Fogos de Artifício**: Crie espetáculos pirotécnicos
- 🎈 **Balões Flutuantes**: Clique nos balões para os estourar
- 🎊 **Confetti**: Lance confetti para celebrar
- 🎵 **Controle de Música**: Simule o controle da trilha sonora
- 📊 **Estatísticas em Tempo Real**: Acompanhe suas interações

## 🛠️ Tecnologias Utilizadas

- **React 19** - Framework principal
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Estilização
- **shadcn/ui** - Componentes de interface
- **Lucide React** - Ícones
- **Framer Motion** - Animações

## 📦 Instalação e Execução Local

```bash
# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 🌐 Deploy na Vercel

### Método 1: Deploy Automático via Git

1. Faça push do código para um repositório Git (GitHub, GitLab, Bitbucket)
2. Acesse [vercel.com](https://vercel.com) e faça login
3. Clique em "New Project"
4. Importe o repositório
5. A Vercel detectará automaticamente as configurações do Vite
6. Clique em "Deploy"

### Configurações Incluídas

O projeto já inclui o arquivo `vercel.json` com as configurações otimizadas:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## 📱 Responsividade

O site é totalmente responsivo e funciona perfeitamente em:
- 📱 Dispositivos móveis
- 📱 Tablets
- 💻 Desktops
- 🖥️ Monitores grandes

## 🎨 Características do Design

- **Tema noturno** com gradientes azul/roxo simulando o céu da festa
- **Cores vibrantes** inspiradas nas decorações tradicionais
- **Animações suaves** para uma experiência envolvente
- **Tipografia clara** e legível
- **Elementos flutuantes** que criam dinamismo

## 📚 Conteúdo Educativo

O site inclui informações detalhadas sobre:

- **História da Festa**: Origens medievais e evolução
- **Tradições**: Martelos, balões, fogueiras e sardinhas
- **Música e Dança**: Marchas populares e folclore
- **Locais**: Principais pontos de celebração no Porto
- **Gastronomia**: Pratos e bebidas tradicionais
- **Dicas**: Conselhos para visitantes

## 🎯 Público-Alvo

- Turistas que visitam o Porto durante a festa
- Locais que querem conhecer melhor as tradições
- Pessoas interessadas na cultura portuguesa
- Famílias procurando atividades interativas

## 📄 Licença

Este projeto foi desenvolvido para fins educativos e de celebração cultural.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir melhorias
- Adicionar novas funcionalidades
- Melhorar o conteúdo

---

**Viva São João! 🎉⭐**

*Que esta festa digital traga alegria e conhecimento sobre uma das mais belas tradições portuguesas.*


export const siteConfig = {
  // Informe o número com país e DDD, somente dígitos.
  whatsappNumber: '5567996073524',
  instagramUrl: 'https://www.instagram.com/anaile_ac100/',
  email: 'aguirredocarmoa@gmail.com',
}
export const categories = ['Todas', 'Amigurumis', 'Decoração', 'Acessórios', 'Personalizados'] as const
export type Category = typeof categories[number]
export type Creation = {
  id: string
  name: string
  category: Exclude<Category, 'Todas'>
  description: string
  note: string
  tone: 'rose' | 'sand' | 'wine' | 'clay'
  motif: 'loops' | 'arcs' | 'weave'
  image: string | null
  imageAlt: string
  gallery?: { image: string; alt: string }[]
  provisional: boolean
}

const pieces: Omit<Creation, 'note' | 'tone' | 'motif' | 'provisional'>[] = [
  {
    id: 'mocinha', name: 'Mocinha', category: 'Amigurumis',
    description: 'Uma bonequinha de vestido rosa com babados, cabelos cacheados e delicados detalhes de pérolas.',
    image: 'creations/mocinha.jpeg', imageAlt: 'Boneca de crochê com vestido rosa, cabelos castanhos e colar de pérolas.',
  },
  {
    id: 'porta-papel-higienico', name: 'Porta-papel higiênico', category: 'Decoração',
    description: 'Uma boneca de roupão rosa e toalha na cabeça que ajuda a organizar o banheiro com um toque divertido.',
    image: 'creations/portapapelhigienico.jpeg', imageAlt: 'Boneca de crochê com roupão rosa segurando um rolo de papel higiênico.',
  },
  {
    id: 'girassol-peso-de-porta', name: 'Girassol peso de porta', category: 'Decoração',
    description: 'Girassóis sorridentes em vasinhos de crochê para segurar a porta e alegrar os cantinhos da casa.',
    image: 'creations/girassolpesodeporta.jpeg', imageAlt: 'Três girassóis de crochê com pétalas amarelas e rostinhos sorridentes em vasos.',
  },
  {
    id: 'chaveiro-sapo', name: 'Chaveiro de sapinho', category: 'Acessórios',
    description: 'Um sapinho verde abraçando um coração vermelho: um carinho para levar nas chaves ou na bolsa.',
    image: 'creations/chaveirosapo.jpeg', imageAlt: 'Chaveiro de sapo verde em crochê segurando um coração vermelho.',
  },
  {
    id: 'gato', name: 'Gato de laço azul', category: 'Amigurumis',
    description: 'Um gatinho em tons de creme e marrom, com olhos azuis e um laço que combina com seu olhar.',
    image: 'creations/gato.jpeg', imageAlt: 'Gato de crochê creme e marrom com olhos azuis e laço azul-claro.',
  },
  {
    id: 'baiana', name: 'Baiana', category: 'Personalizados',
    description: 'Uma bonequinha de cabelos cacheados, faixa florida e vestido colorido inspirado na beleza das baianas.',
    image: 'creations/bahiana.jpeg', imageAlt: 'Boneca baiana de crochê com cabelos cacheados, faixa amarela e vestido branco e vermelho.',
  },
  {
    id: 'cachorro-colorido', name: 'Cachorrinho colorido', category: 'Amigurumis',
    description: 'Um cachorrinho amarelo com orelhas e patinhas de várias cores, cheio de alegria em cada ponto.',
    image: 'creations/cachorrocolorido.jpeg', imageAlt: 'Cachorrinho de crochê amarelo com orelhas azul e laranja e patas coloridas.',
  },
  {
    id: 'gatinho', name: 'Gatinho listrado', category: 'Amigurumis',
    description: 'Branquinho com listras pretas, este gatinho tem bigodes bordados e uma coleira vermelha com guizo.',
    image: 'creations/gatinho.jpeg', imageAlt: 'Gatinho branco de crochê com listras pretas e coleira vermelha com guizo dourado.',
  },
  {
    id: 'coelho', name: 'Coelhinho de jardineira', category: 'Amigurumis',
    description: 'Um coelhinho cinza de orelhas compridas, com jardineira amarela e uma pequena cenoura de crochê.',
    image: 'creations/coelho.jpeg', imageAlt: 'Coelho cinza de crochê com jardineira amarela decorada com uma cenoura.',
  },
  {
    id: 'bumba-meu-boi', name: 'Bumba meu boi', category: 'Personalizados',
    description: 'Flores, fitas e muitas cores dão vida a este boizinho de crochê inspirado na festa popular brasileira.',
    image: 'creations/bumbameuboi1.jpeg', imageAlt: 'Bumba meu boi de crochê com flores, fitas coloridas e saia vermelha.',
    gallery: [
      { image: 'creations/bumbameuboi1.jpeg', alt: 'Bumba meu boi de crochê em destaque, com outros boizinhos ao fundo.' },
      { image: 'creations/bumbameuboi2.jpeg', alt: 'Vista lateral do Bumba meu boi de crochê sobre fundo rosa ilustrado.' },
    ],
  },
  {
    id: 'brincos-girassol', name: 'Brincos de girassol', category: 'Acessórios',
    description: 'Pequenos girassóis de pétalas amarelas e miolo marrom para levar um pouco de sol ao seu visual.',
    image: 'creations/brincogirassol.jpeg', imageAlt: 'Par de brincos de girassol em crochê amarelo e marrom.',
  },
  {
    id: 'brincos-coracao', name: 'Brincos de coração', category: 'Acessórios',
    description: 'Corações vermelhos de crochê com detalhes de pérolas, para um toque delicado e romântico.',
    image: 'creations/brincocoracao.jpeg', imageAlt: 'Par de brincos com corações vermelhos de crochê e pequenas pérolas brancas.',
  },
]

export const creations: Creation[] = pieces.map(piece => ({
  ...piece,
  note: 'Converse com a gente sobre cores, detalhes e disponibilidade para a sua encomenda.',
  tone: 'rose',
  motif: 'loops',
  provisional: false,
}))

export const siteConfig = {
  // Informe o número com país e DDD, somente dígitos. Ex.: 55 + DDD + número.
  whatsappNumber: '5567996073524',
  instagramUrl: '',
  email: '',
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
  provisional: boolean
}
// A ordem abaixo define a ordem da galeria. Fotos podem ser colocadas em public/pecas/.
// Troque image por '/pecas/nome.jpg' e atualize imageAlt. Marque provisional: false
// somente quando nome, descrição e detalhes forem os da peça real.
export const creations: Creation[] = [
  { id: 'abraco', name: 'Um pequeno abraço', category: 'Amigurumis', description: 'Uma ideia de amigurumi para fazer companhia e transformar um presente em lembrança.', note: 'Personagem, cores e tamanho a definir em uma conversa.', tone: 'rose', motif: 'loops', image: null, imageAlt: '', provisional: true },
  { id: 'casa', name: 'Um canto de aconchego', category: 'Decoração', description: 'Uma proposta de crochê para levar textura e delicadeza aos cantinhos da casa.', note: 'Formato, dimensões e acabamento a definir.', tone: 'sand', motif: 'arcs', image: null, imageAlt: '', provisional: true },
  { id: 'junto', name: 'Carinho que vai junto', category: 'Acessórios', description: 'Uma possibilidade de acessório artesanal para acompanhar os pequenos momentos do dia.', note: 'Modelo, cores e uso a combinar.', tone: 'wine', motif: 'weave', image: null, imageAlt: '', provisional: true },
  { id: 'historia', name: 'Do seu jeitinho', category: 'Personalizados', description: 'Um espaço para imaginar uma criação a partir de uma história, de uma cor ou de alguém especial.', note: 'A viabilidade da ideia será avaliada antes de confirmar uma encomenda.', tone: 'clay', motif: 'loops', image: null, imageAlt: '', provisional: true },
  { id: 'companhia', name: 'Uma doce companhia', category: 'Amigurumis', description: 'Um segundo exemplo de amigurumi para explorar combinações e possibilidades de criação.', note: 'As características da peça serão definidas junto com você.', tone: 'sand', motif: 'weave', image: null, imageAlt: '', provisional: true },
  { id: 'detalhes', name: 'Morar nos detalhes', category: 'Decoração', description: 'Uma ideia de peça decorativa que encontra beleza na simplicidade de cada ponto.', note: 'Materiais e medidas serão confirmados no orçamento.', tone: 'rose', motif: 'arcs', image: null, imageAlt: '', provisional: true },
]

export const site = {
    hero: {
        title: '🧠 TESTE GRATUITO DE IDENTIFICAÇÃO DE TRAVAS MENTAIS',
        subtitle: 'Descubra quais padrões mentais e emocionais estão mantendo a ansiedade ativa na sua vida — com clareza e acompanhamento.',
        ctaText: '👉 Quero fazer o teste gratuito',
        waNumber: '5579999663270',
        waMessage: 'Oi Crislaine, quero fazer o teste gratuito de identificação de travas mentais.'
    },

    identification: {
        title: 'Você sente que a ansiedade te trava, mas não consegue identificar o porquê?',
        paragraphs: [
            'Você pode até dar conta da rotina… Mas por dentro sente que está sempre no limite.',
            'Talvez você: pense demais e descanse de menos, sinta um cansaço emocional constante, tente se controlar, mas volta sempre para o mesmo padrão, sinta que poderia estar mais avançada na vida, mas algo sempre trava.',
            '👉 A ansiedade raramente é o problema em si. Na maioria das vezes, ela é um sinal de travas emocionais não identificadas, que impactam tanto a vida pessoal quanto a profissional.'
        ]
    },

    method: {
        title: '🔬 O teste funciona como um "exame de sangue da mente"',
        paragraphs: [
            'Eu costumo explicar de forma simples: Assim como um exame de sangue não trata, mas mostra o que está em desequilíbrio, o Teste de Identificação de Travas Mentais faz isso no campo emocional.',
            'Ele identifica padrões mentais e emocionais ligados à ansiedade, mostra quais travas estão mais ativas neste momento da sua vida, revela como essas travas podem estar impedindo você de avançar na vida pessoal e profissional, e traz clareza por onde começar, sem achismos ou tentativas aleatórias.',
            '⚠️ Importante: Ele não trata e não diagnostica. Não é um teste genérico de internet. É uma ferramenta de autoconhecimento emocional, aplicada e interpretada por mim, dentro de uma sessão individual.'
        ]
    },

    process: {
        title: '🧭 Como funciona o teste gratuito (passo a passo)',
        items: [
            'Agendamento da sessão: Você clica no botão e agenda sua sessão comigo pelo WhatsApp.',
            'Envio do teste: Após o agendamento, eu envio o formulário para você responder com calma.',
            'Análise dos resultados: Eu analiso seus resultados antes da nossa conversa.',
            'Sessão online: Na sessão, eu explico cada indicador do teste, quais travas estão mais ativas, como elas impactam sua ansiedade, e por onde começar o processo de destrave.',
            '👉 Clareza emocional antes de qualquer decisão.'
        ],
        ctaText: 'Quero fazer o teste gratuito'
    },

    afterTest: {
        title: 'E depois do teste?',
        paragraphs: [
            'Após entender suas travas, você decide com tranquilidade.',
            'Se fizer sentido para você, eu explico como funciona o processo de destrave emocional e de que forma posso te acompanhar nesse caminho.',
            '❌ Sem pressão ❌ Sem obrigação ❌ Sem promessa',
            'O próximo passo só acontece se houver alinhamento e desejo da sua parte.'
        ]
    },

    forWho: {
        title: 'Para quem é esse teste',
        for: [
            'Mulheres entre 30 e 55 anos',
            'Que sentem ansiedade recorrente',
            'Que querem se entender emocionalmente',
            'Que percebem que algo interno está impedindo seus avanços',
            'Que buscam clareza antes de qualquer decisão'
        ],
        notFor: '❌ Não é para quem busca soluções rápidas ou mágicas.'
    },

    testimonials: [
        {
            type: 'text',
            quote: 'Me senti acolhida e consegui entender coisas sobre mim que antes estavam confusas.',
        },
        {
            type: 'text',
            quote: 'Foi a primeira vez que alguém me explicou com clareza o que eu sentia, sem julgamento.',
        },
        {
            type: 'text',
            quote: 'Não foi algo superficial. Me ajudou a olhar para mim com mais consciência.',
        },
    ],

    contact: {
        finalTitle: 'Você não precisa continuar tentando adivinhar o que está acontecendo com você.',
        finalText: '👉 Comece pela clareza.',
        ctaText: 'Quero fazer o teste gratuito',
        waNumber: '5579999663270',
        waMessage: 'Oi Crislaine, quero fazer o teste gratuito de identificação de travas mentais.',
        phone: '+55 79 99966-3270',
        email: 'crisccterapeuta@gmail.com',
        instagram: 'https://www.instagram.com/crislaine.terapeuta?igsh=MTJlYTl1ZjU3MjJ6YQ=='
    },

    footer: {
        name: 'Crislaine de Carvalho — Terapeuta Integrativa',
        subtitle: 'Teste de Identificação de Travas Mentais para mulheres com ansiedade.',
        location: 'Atendimento 100% online'
    },

    header: {
        nav: [
            { href: '#como-funciona', label: 'Como Funciona' },
            { href: '#para-quem', label: 'Para Quem' },
            { href: '#sobre', label: 'Sobre Mim' },
        ]
    },

    about: {
        name: 'Crislaine de Carvalho',
        bioShort: 'Também já vivi o cansaço emocional e a sensação de estar sempre funcionando no automático. Por muito tempo, tentei apenas suportar o que sentia, sem entender o que estava por trás das minhas emoções. Tudo começou a mudar quando parei de perguntar "como faço para aguentar?" E comecei a perguntar "o que dentro de mim precisa ser destravado?". Hoje, acompanho mulheres que desejam se entender melhor, com clareza, respeito e responsabilidade emocional.'
    }
};

export const whatsappLink = (message?: string, number?: string) => {
    const num = number || site.hero.waNumber;
    const msg = message || site.hero.waMessage;
    return `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;
};

export default site;

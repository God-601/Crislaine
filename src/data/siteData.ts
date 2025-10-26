export const site = {
    hero: {
        title:
            'Eu ajudo mulheres com ansiedade a conquistarem leveza, clareza e controle emocional através do Método LIVRE.',
        subtitle: 'Porque cuidar da mente é o primeiro passo para cuidar da vida.',
        ctaText: 'Agendar minha sessão de identificação',
        waNumber: '5579999663270',
        waMessage: 'Oi Crislaine, quero agendar minha sessão de identificação gratuita.'
    },

    identification: {
        title: 'Você sente que está sempre no modo alerta?',
        paragraphs: [
            'A mente não para, o corpo está cansado e a ansiedade parece te impedir de viver o presente. Você tenta controlar, mas algo dentro de você continua acelerado.',
            'É aqui que o Método LIVRE entra: um caminho leve e estratégico para entender e liberar o que está te travando.'
        ]
    },

    method: {
        title: 'O que é o Método LIVRE?',
        paragraphs: [
            'O Método LIVRE (Liberação Interna de Travas Mentais e Reprogramação Emocional) é um processo terapêutico online criado para ajudar mulheres a compreender, liberar e transformar padrões emocionais ligados à ansiedade.',
            'Une Terapia de Alta Performance e Aromaterapia para equilibrar mente, emoções e comportamento — de forma prática e personalizada.'
        ]
    },

    process: {
        title: 'Em 8 sessões online, você vai:',
        items: [
            'Identificar as travas emocionais que geram ansiedade.',
            'Ressignificar experiências do passado que ainda te limitam.',
            'Aprender técnicas para lidar com pensamentos acelerados.',
            'Reprogramar sua mente para o equilíbrio emocional.',
            'Viver com mais leveza, clareza e energia.'
        ],
        ctaText: 'Quero agendar minha sessão gratuita'
    },

    testimonials: [
        {
            image: 'https://i.ibb.co/Nd3rMXyL/depoimento-1-Crislaine-de-Carvalho.png',
            quote: 'Depois do Método LIVRE, a ansiedade não me domina mais. Me sinto mais calma e segura.',
        },
        {
            image: 'https://i.ibb.co/hJm0PBxQ/e2dbd9e4-7121-41a3-908b-315c98dbe748.jpg',
            quote: 'Aprendi a identificar o que me trava e hoje reajo de forma mais leve.',
        },
        {
            image: 'https://i.ibb.co/ZpLjBZjq/image.png',
            quote: 'Crislaine me ensinou que equilíbrio é um treino — e que posso conquistá-lo.',
        }
    ],

    contact: {
        finalTitle: 'Você não precisa enfrentar tudo sozinha.',
        finalText: 'A ansiedade não precisa mais controlar seus dias. Com o Método LIVRE, você aprende a transformar o que sente em clareza, autodomínio e leveza.',
        ctaText: 'Agendar minha sessão de identificação',
        waNumber: '5579999663270',
        waMessage: 'Oi Crislaine, quero agendar minha sessão de identificação gratuita.',
        phone: '+55 79 99966-3270',
        email: 'crisccterapeuta@gmail.com',
        instagram: 'https://www.instagram.com/crislaine.terapeuta?igsh=MTJlYTl1ZjU3MjJ6YQ=='
    },

    footer: {
        name: 'Crislaine de Carvalho — Terapeuta Integrativa',
        subtitle: 'Terapia de Alta Performance + Aromaterapia para mulheres com ansiedade.',
        location: 'Atendimento 100% online'
    },

    header: {
        nav: [
            { href: '#beneficios', label: 'Benefícios' },
            { href: '#abordagem', label: 'Abordagem' },
            { href: '#sobre', label: 'Sobre Mim' },
            { href: '#faq', label: 'FAQ' }
        ]
    },

    about: {
        name: 'Crislaine de Carvalho',
        bioShort: 'Hoje, minha missão é ajudar mulheres a superarem a ansiedade e encontrarem equilíbrio emocional através de uma abordagem integrativa, que une o melhor da Aromaterapia com a Terapia de Alta Performance.'
    }
};

export const whatsappLink = (message?: string, number?: string) => {
    const num = number || site.hero.waNumber;
    const msg = message || site.hero.waMessage;
    return `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;
};

export default site;

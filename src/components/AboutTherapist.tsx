
import { Award, Leaf, Brain, Star } from 'lucide-react';
import { site } from '../data/siteData';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutTherapist = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const credentials = [
    { icon: <Award />, text: 'Especialista em Terapia de Alta Performance (TAP)' },
    { icon: <Brain />, text: 'Formação em Programação Neurolinguística' },
    { icon: <Leaf />, text: 'Especialista em Aromaterapia Terapêutica' },
    { icon: <Star />, text: 'Estudos avançados em Neurociência do Comportamento' }
  ];

  const differentials = [
    'Experiência pessoal: Passei pelo mesmo caminho que você está percorrendo agora',
    'Método integrado: União única entre Alta Performance, Aromaterapia e Neurociência',
    'Personalização real: Sem protocolos engessados, cada jornada é única',
    'Base científica: Técnicas comprovadas pela neurociência do comportamento',
    'Foco na potência: Trabalhamos com suas forças, não apenas com dificuldades'
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="sobre" className="py-16 bg-amber-50 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-10"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Prazer, sou {site.about.name}
          </motion.h2>

          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <img
                  src="https://i.ibb.co/B2wHmtjM/DSC7726-Crislaine-de-Carvalho.jpg"
                  alt="Crislaine de Carvalho,  especialista em Aromaterapia e Terapia de Alta Performance"
                  className="w-full rounded-lg shadow-md"
                />
                <div className="absolute -bottom-4 -right-4 bg-emerald-500 text-white p-3 rounded-lg shadow-lg">
                  <Leaf className="h-6 w-6" />
                </div>
              </div>
            </div>

            <div className="md:w-2/3">
              <div className="prose prose-lg">
                <p className="text-gray-700 mb-4">
                  Minha jornada como terapeuta começou a partir da minha própria vivência com ansiedade. Durante 10 anos, dependia de medicamentos para controlar meus sintomas. Após perder minha mãe, enfrentei um dos momentos mais desafiadores da minha vida.
                </p>
                <p className="text-gray-700 mb-4">
                  Foi em 2019 que encontrei na Aromaterapia o alívio que não havia obtido com medicações. Após usar óleo essencial de Bergamota, experimentei uma melhora significativa em apenas 15 dias, algo que transformou minha percepção sobre bem-estar emocional.
                </p>
                <p className="text-gray-700 mb-4">
                  Comecei a aplicar os conhecimentos em mim mesma, na minha família e em outras mulheres que enfrentavam desafios semelhantes. Em 2021, iniciei atendimentos formais e, em 2024, me formei na Terapia de Alta Performance (TAP), integrando técnicas de PNL e Neurociência do Comportamento ao meu trabalho.
                </p>
                <p className="text-gray-700">
                  {site.about.bioShort}
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium text-gray-800 mb-4">Meus diferenciais</h3>
              <ul className="space-y-3">
                {differentials.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-emerald-100 p-1.5 rounded-full mr-3 mt-0.5">
                      <div className="bg-emerald-500 rounded-full w-2 h-2"></div>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium text-gray-800 mb-4">Minhas credenciais</h3>
              <ul className="space-y-4">
                {credentials.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="text-emerald-600 mr-3">
                      {item.icon}
                    </div>
                    <span className="text-gray-700">{item.text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <a
                  href="https://wa.me/5579999663270?text=Quero%20saber%20mais%20sobre%20sua%20terapia!"
                  className="inline-flex items-center px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-md shadow-sm transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Converse comigo
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutTherapist;
import { Award, Leaf, Brain, Star, ArrowRight } from 'lucide-react';
import { site } from '../data/siteData';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutTherapist = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const credentials = [
    { icon: <Award className="h-5 w-5" />, text: 'Especialista em Terapia de Alta Performance (TAP)' },
    { icon: <Brain className="h-5 w-5" />, text: 'Formação em Programação Neurolinguística' },
    { icon: <Leaf className="h-5 w-5" />, text: 'Especialista em Aromaterapia Terapêutica' },
    { icon: <Star className="h-5 w-5" />, text: 'Estudos avançados em Neurociência do Comportamento' }
  ];

  const differentials = [
    'Experiência pessoal: Passei pelo mesmo caminho que você está percorrendo agora',
    'Método integrado: União única entre Alta Performance, Aromaterapia e Neurociência',
    'Personalização real: Sem protocolos engessados, cada jornada é única',
    'Base científica: Técnicas comprovadas pela neurociência do comportamento',
    'Foco na potência: Trabalhamos com suas forças, não apenas com dificuldades'
  ];

  return (
    <section id="sobre" className="py-section bg-gray-50 overflow-hidden relative" ref={ref}>
      <div className="container-custom">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.h2
            className="font-display text-display text-black text-center mb-16 md:mb-20"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Prazer, sou <span className="text-gray-600">{site.about.name}</span>
          </motion.h2>

          <div className="relative mb-16 md:mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <motion.div
                className="order-2 md:order-1"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="space-y-6">
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Minha jornada como terapeuta começou a partir da minha própria vivência com ansiedade. Durante 10 anos, dependia de medicamentos para controlar meus sintomas. Após perder minha mãe, enfrentei um dos momentos mais desafiadores da minha vida.
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Foi em 2019 que encontrei na Aromaterapia o alívio que não havia obtido com medicações. Após usar óleo essencial de Bergamota, <span className="font-semibold text-black">experimentei uma melhora significativa em apenas 15 dias</span>, algo que transformou minha percepção sobre bem-estar emocional.
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Comecei a aplicar os conhecimentos em mim mesma, na minha família e em outras mulheres que enfrentavam desafios semelhantes. <span className="font-semibold text-black">Em 2021, iniciei atendimentos formais e, em 2024, me formei na Terapia de Alta Performance (TAP)</span>, integrando técnicas de PNL e Neurociência do Comportamento ao meu trabalho.
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    {site.about.bioShort}
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="order-1 md:order-2"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="relative">
                  <img
                    src="https://i.ibb.co/B2wHmtjM/DSC7726-Crislaine-de-Carvalho.jpg"
                    alt="Crislaine de Carvalho - Especialista em Terapia de Alta Performance e Aromaterapia"
                    className="w-full aspect-[3/4] object-cover object-[center_15%] rounded-3xl shadow-xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <motion.div
              className="bg-white p-8 md:p-10 rounded-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="font-display text-title text-black mb-8">Meus diferenciais</h3>
              <ul className="space-y-5">
                {differentials.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="text-black mt-1 flex-shrink-0">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="bg-white p-8 md:p-10 rounded-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="font-display text-title text-black mb-8">Minhas credenciais</h3>
              <ul className="space-y-5 mb-8">
                {credentials.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="text-black flex-shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <span className="text-lg text-gray-700">{item.text}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/5579999663270?text=Quero%20saber%20mais%20sobre%20sua%20terapia!"
                className="btn btn-primary inline-flex items-center gap-2 group w-full justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Converse comigo
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutTherapist;
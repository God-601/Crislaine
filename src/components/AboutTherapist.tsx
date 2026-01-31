
import { Award, Leaf, Brain, Star } from 'lucide-react';
import { site } from '../data/siteData';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from './Button';

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
    <section id="sobre" className="py-24 bg-amber-50 overflow-hidden relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-16"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Prazer, sou <span className="text-emerald-600">{site.about.name}</span>
          </motion.h2>

          <div className="relative mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
              <motion.div
                className="order-2 md:order-1"
                variants={fadeInUp}
                transition={{ delay: 0.4 }}
              >
                <div className="prose prose-lg">
                  <p className="text-gray-800 mb-6 text-lg leading-relaxed font-medium">
                    Minha jornada como terapeuta começou a partir da minha própria vivência com ansiedade. Durante 10 anos, dependia de medicamentos para controlar meus sintomas. Após perder minha mãe, enfrentei um dos momentos mais desafiadores da minha vida.
                  </p>
                  <p className="text-gray-700 mb-6 text-base leading-relaxed">
                    Foi em 2019 que encontrei na Aromaterapia o alívio que não havia obtido com medicações. Após usar óleo essencial de Bergamota, <span className="font-semibold text-gray-800">experimentei uma melhora significativa em apenas 15 dias</span>, algo que transformou minha percepção sobre bem-estar emocional.
                  </p>
                  <p className="text-gray-700 mb-6 text-base leading-relaxed">
                    Comecei a aplicar os conhecimentos em mim mesma, na minha família e em outras mulheres que enfrentavam desafios semelhantes. <span className="font-semibold text-gray-800">Em 2021, iniciei atendimentos formais e, em 2024, me formei na Terapia de Alta Performance (TAP)</span>, integrando técnicas de PNL e Neurociência do Comportamento ao meu trabalho.
                  </p>
                  <p className="text-gray-700 text-base leading-relaxed">
                    {site.about.bioShort}
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="order-1 md:order-2 md:sticky md:top-24"
                variants={fadeInUp}
                transition={{ delay: 0.3 }}
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-emerald-50 to-amber-50/50 rounded-2xl transform -rotate-2"></div>
                  <div className="relative">
                    <img
                      src="https://i.ibb.co/B2wHmtjM/DSC7726-Crislaine-de-Carvalho.jpg"
                      alt="Crislaine de Carvalho - Especialista em Terapia de Alta Performance e Aromaterapia"
                      className="w-full aspect-[3/4] object-cover object-[center_15%] rounded-2xl shadow-xl"
                    />
                    <div className="absolute -bottom-3 -right-3 bg-emerald-500 text-white p-3 rounded-xl shadow-lg">
                      <Leaf className="h-6 w-6" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium text-gray-800 mb-4">Meus diferenciais</h3>
              <ul className="space-y-3">
                {differentials.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="text-emerald-600 mr-3 mt-0.5 flex-shrink-0">
                      <svg className="h-5 w-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-800 font-normal">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium text-gray-800 mb-4">Minhas credenciais</h3>
              <ul className="space-y-4">
                {credentials.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="text-emerald-600 mr-3 flex-shrink-0">
                      <svg className="h-5 w-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-800">{item.text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button
                  text="Converse comigo"
                  href="https://wa.me/5579999663270?text=Quero%20saber%20mais%20sobre%20sua%20terapia!"
                  variant="primary"
                  showArrow={false}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutTherapist;
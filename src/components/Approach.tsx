import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BrainCircuit, Droplets, LineChart } from 'lucide-react';

const Approach = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const approaches = [
    {
      icon: <BrainCircuit className="h-8 w-8" />,
      title: 'Mapeamento personalizado',
      description: 'Através do Teste de Travas Mentais, identificamos os bloqueios emocionais que podem estar limitando seu bem-estar'
    },
    {
      icon: <LineChart className="h-8 w-8" />,
      title: 'Sessões integrativas e personalizadas',
      description: 'Encontros individualizados que combinam técnicas de Alta Performance com abordagens da Neurociência'
    },
    {
      icon: <Droplets className="h-8 w-8" />,
      title: 'Apoio contínuo',
      description: 'Seleção conjunta de óleos essenciais específicos para suas necessidades emocionais'
    }
  ];

  return (
    <section id="abordagem" className="py-section bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-center mb-16 md:mb-20">
            <motion.h2
              className="font-display text-display text-black mb-6"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Minha abordagem integrativa
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Desenvolvi um método que une o poder da Aromaterapia com as técnicas avançadas da Terapia de Alta Performance (TAP), Programação Neurolinguística e Neurociência do Comportamento
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
            {approaches.map((item, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-50 p-8 rounded-2xl hover:bg-gray-100 transition-all duration-300 flex flex-col group"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
              >
                <div className="mb-6 text-black">
                  {item.icon}
                </div>
                <h3 className="font-display text-xl text-black mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed flex-1">{item.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="bg-gray-50 p-8 md:p-12 lg:p-16 rounded-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              <h3 className="font-display text-title text-black text-center mb-8 md:mb-12">
                Uma abordagem centrada em você
              </h3>
              <div className="space-y-6 max-w-3xl mx-auto">
                <p className="text-xl text-gray-600 leading-relaxed">
                  Cada pessoa é única, e sua jornada de transformação também deve ser. Por isso, ao invés de seguir protocolos rígidos, desenvolvo um plano personalizado que considera suas necessidades específicas, história pessoal e objetivos.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed">
                  A integração entre Aromaterapia e técnicas avançadas de Neurociência permite acessar tanto o sistema límbico (responsável pelas emoções) quanto o córtex pré-frontal (responsável pelas decisões), criando uma transformação completa e duradoura.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Approach;
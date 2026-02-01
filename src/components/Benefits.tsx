import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

const Benefits = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const benefits = [
    {
      title: 'Paz interior e equilíbrio emocional',
      description: 'Encontre o equilíbrio necessário para enfrentar o dia a dia com mais serenidade'
    },
    {
      title: 'Noites de sono reparador',
      description: 'Desperte com mais energia após noites de sono verdadeiramente reparadoras'
    },
    {
      title: 'Autoconfiança renovada',
      description: 'Desenvolva a confiança necessária para enfrentar desafios e superar obstáculos'
    },
    {
      title: 'Clareza mental',
      description: 'Obtenha a clareza necessária para tomar decisões importantes com segurança'
    },
    {
      title: 'Uma vida com mais leveza',
      description: 'Aprenda a viver com mais leveza, mesmo em meio às responsabilidades diárias'
    }
  ];

  return (
    <section id="beneficios" className="py-section bg-gray-50">
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
              O que você pode conquistar
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Resultados que transformam toda a sua experiência de vida
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
              >
                <h3 className="font-display text-xl text-black mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href="https://wa.me/5579999663270?text=Quero%20saber%20mais%20sobre%20sua%20terapia!"
              className="btn btn-primary inline-flex items-center gap-2 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero mais equilíbrio na minha vida
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
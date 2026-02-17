import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FAQ = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Preciso ter câmera ligada?',
      answer: 'Sim. A conexão visual é importante para o trabalho, pois muitas informações são captadas pela linguagem não verbal. Mas fique tranquila, o ambiente é acolhedor e sem julgamentos.'
    },
    {
      question: 'E depois da sessão, sou obrigada a continuar?',
      answer: 'Não. Ao final, se houver alinhamento, explico como funciona o processo estruturado do Método LIVRE. O próximo passo só acontece se você sentir que faz sentido.'
    },
    {
      question: 'Quanto custa o processo depois?',
      answer: 'Os valores variam conforme o formato do pacote escolhido. Posso explicar ao final, sem pressão e com transparência.'
    },
    {
      question: 'Funciona online mesmo?',
      answer: 'Sim! Já atendi mulheres de várias cidades. Basta um local calmo e conexão estável.'
    },
    {
      question: 'O que é o Método LIVRE?',
      answer: 'É o meu método exclusivo que une Terapia de Alta Performance Mental (PNL e Neurociência) e Aromaterapia (prática integrativa que utiliza óleos essenciais a nível físico, mental e emocional). Essa combinação permite um destrave emocional estruturado, trabalhando tanto a mente quanto as emoções de forma integrada para resultados mais profundos e duradouros.'
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-section bg-white" ref={ref}>
      <div className="container-custom">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.h2
            className="font-display text-display text-black text-center mb-12 sm:mb-16 md:mb-20 px-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Perguntas frequentes
          </motion.h2>

          <div className="space-y-2 sm:space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border border-gray-200 rounded-lg sm:rounded-2xl overflow-hidden transition-all bg-white hover:border-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <button
                  className="flex items-center justify-between w-full p-4 sm:p-6 md:p-8 text-left hover:bg-gray-50 focus:outline-none transition-colors"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="text-base sm:text-lg md:text-xl font-medium text-black pr-4">{faq.question}</span>
                  {openIndex === index ? (
                    <Minus className="h-5 w-5 text-black flex-shrink-0" />
                  ) : (
                    <Plus className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                  <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8 pt-0 border-t border-gray-100">
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed pt-4">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
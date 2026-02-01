import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    {
      question: 'Como funcionam as sessões?',
      answer: 'Realizamos encontros semanais por videochamada, com duração aproximada de 1 hora.'
    },
    {
      question: 'Por quanto tempo preciso fazer terapia?',
      answer: 'O processo completo tem duração média de 3 meses, mas cada pessoa tem seu próprio ritmo.'
    },
    {
      question: 'Como é feito o investimento?',
      answer: 'Trabalhamos com pacotes mensais personalizados conforme suas necessidades. Conversamos sobre valores no primeiro contato pelo WhatsApp.'
    },
    {
      question: 'Preciso ter conhecimento prévio sobre óleos essenciais?',
      answer: 'Não é necessário. Vou te guiar em todo o processo de escolha e utilização.'
    },
    {
      question: 'Os óleos complementam outros tratamentos?',
      answer: 'Sim, a aromaterapia atua como complemento terapêutico. Não recomendo a interrupção de nenhum tratamento médico em andamento.'
    }
  ];
  
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="h2 text-center mb-16">
            Perguntas frequentes
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-beige rounded-2xl overflow-hidden transition-all bg-white hover:border-sage"
              >
                <button
                  className="flex items-center justify-between w-full p-6 text-left hover:bg-cream/50 focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="text-dark font-display text-lg">{faq.question}</span>
                  {openIndex === index ? (
                    <Minus className="h-5 w-5 text-sage flex-shrink-0 ml-4" />
                  ) : (
                    <Plus className="h-5 w-5 text-sage flex-shrink-0 ml-4" />
                  )}
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 border-t border-beige">
                    <p className="text-charcoal leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
import React from 'react';
import { Sparkles } from 'lucide-react';
import Button from './Button';

const Benefits = () => {
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
    <section id="beneficios" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="h2 mb-4">
              O que você pode conquistar
            </h2>
            <p className="text-charcoal text-lg">
              Resultados que transformam toda a sua experiência de vida
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-cream p-8 rounded-2xl border border-beige hover:border-sage transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <Sparkles className="h-6 w-6 text-sage flex-shrink-0 mt-1" />
                  <h3 className="font-display text-lg text-dark">{benefit.title}</h3>
                </div>
                <p className="text-charcoal leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              text="Quero mais equilíbrio na minha vida"
              href="https://wa.me/5579999663270?text=Quero%20saber%20mais%20sobre%20sua%20terapia!"
              variant="primary"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
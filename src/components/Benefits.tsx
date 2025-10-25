import React from 'react';
import { Sparkles } from 'lucide-react';

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
    <section id="beneficios" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-3">
            O que você pode conquistar:
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Resultados que transformam toda a sua experiência de vida
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray transition-all hover:shadow-md"
              >
                <div className="flex items-center mb-3">
                  <Sparkles className="h-5 w-5 text-emerald-500 mr-2" />
                  <h3 className="font-medium text-lg text-gray-800">{benefit.title}</h3>
                </div>
                <p className="text-gray-600 pl-7">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://wa.me/5579999663270?text=Quero%20saber%20mais%20sobre%20sua%20terapia!"
              className="inline-flex items-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-md shadow-md transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero mais equilíbrio na minha vida
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
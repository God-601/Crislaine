import React from 'react';
import { BrainCircuit, Droplets, LineChart } from 'lucide-react';

const Approach = () => {
  const approaches = [
    {
      icon: <BrainCircuit className="h-8 w-8 text-sage" />,
      title: 'Mapeamento personalizado',
      description: 'Através do Teste de Travas Mentais, identificamos os bloqueios emocionais que podem estar limitando seu bem-estar'
    },
    {
      icon: <LineChart className="h-8 w-8 text-sage" />,
      title: 'Sessões integrativas e personalizadas',
      description: 'Encontros individualizados que combinam técnicas de Alta Performance com abordagens da Neurociência'
    },
    {
      icon: <Droplets className="h-8 w-8 text-sage" />,
      title: 'Apoio contínuo',
      description: 'Seleção conjunta de óleos essenciais específicos para suas necessidades emocionais'
    }
  ];

  return (
    <section id="abordagem" className="py-20 md:py-28 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="h2 mb-6">
              Minha abordagem integrativa
            </h2>
            <p className="text-charcoal text-lg leading-relaxed">
              Desenvolvi um método que une o poder da Aromaterapia com as técnicas avançadas da Terapia de Alta Performance (TAP), Programação Neurolinguística e Neurociência do Comportamento
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {approaches.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl border border-beige hover:border-sage transition-all hover:shadow-lg flex flex-col"
              >
                <div className="mb-6">
                  {item.icon}
                </div>
                <h3 className="font-display text-lg text-dark mb-4">{item.title}</h3>
                <p className="text-charcoal leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-white p-8 md:p-12 rounded-2xl border border-beige shadow-sm">
            <div>
              <h3 className="h3 text-center text-dark mb-8">
                Uma abordagem centrada em você
              </h3>
              <div className="space-y-6">
                <p className="text-charcoal text-lg leading-relaxed">
                  Cada pessoa é única, e sua jornada de transformação também deve ser. Por isso, ao invés de seguir protocolos rígidos, desenvolvo um plano personalizado que considera suas necessidades específicas, história pessoal e objetivos.
                </p>
                <p className="text-charcoal text-lg leading-relaxed">
                  A integração entre Aromaterapia e técnicas avançadas de Neurociência permite acessar tanto o sistema límbico (responsável pelas emoções) quanto o córtex pré-frontal (responsável pelas decisões), criando uma transformação completa e duradoura.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
import React from 'react';
import { BrainCircuit, Droplets, LineChart } from 'lucide-react';

const Approach = () => {
  const approaches = [
    {
      icon: <BrainCircuit className="h-8 w-8 text-sky-500" />,
      title: 'Mapeamento personalizado',
      description: 'Através do Teste de Travas Mentais, identificamos os bloqueios emocionais que podem estar limitando seu bem-estar'
    },
    {
      icon: <LineChart className="h-8 w-8 text-emerald-500" />,
      title: 'Sessões integrativas e personalizadas',
      description: 'Encontros individualizados que combinam técnicas de Alta Performance com abordagens da Neurociência'
    },
    {
      icon: <Droplets className="h-8 w-8 text-amber-500" />,
      title: 'Apoio contínuo',
      description: 'Seleção conjunta de óleos essenciais específicos para suas necessidades emocionais'
    }
  ];

  return (
    <section id="abordagem" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-3">
            Minha abordagem integrativa
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Desenvolvi um método que une o poder da Aromaterapia com as técnicas avançadas da Terapia de Alta Performance (TAP), Programação Neurolinguística e Neurociência do Comportamento:
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {approaches.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-sm border border-gray transition-all hover:shadow-md flex flex-col items-center text-center"
              >
                <div className="bg-white rounded-full p-3 shadow-sm mb-4">
                  {item.icon}
                </div>
                <h3 className="font-medium text-lg text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-white p-8 rounded-lg shadow-md border border-gray">
            <div className="text-center">
              <h3 className="text-xl font-medium text-gray-800 mb-4">
                Uma abordagem centrada em você
              </h3>
              <p className="text-gray-600 mb-4">
                Cada pessoa é única, e sua jornada de transformação também deve ser. Por isso, ao invés de seguir protocolos rígidos, desenvolvo um plano personalizado que considera suas necessidades específicas, história pessoal e objetivos.
              </p>
              <p className="text-gray-600">
                A integração entre Aromaterapia e técnicas avançadas de Neurociência permite acessar tanto o sistema límbico (responsável pelas emoções) quanto o córtex pré-frontal (responsável pelas decisões), criando uma transformação completa e duradoura.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
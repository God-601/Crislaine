import { site } from '../data/siteData';

const ProblemIdentification = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-verde-escuro mb-6">
            {site.identification.title}
          </h2>
          {site.identification.paragraphs.map((p, i) => (
            <p key={i} className="text-gray-700 mb-4 max-w-2xl mx-auto">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemIdentification;
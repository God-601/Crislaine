import { site, whatsappLink } from '../data/siteData';

const ContactSection = () => {
  return (
    <section className="py-16 bg-bege-claro">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-verde-escuro mb-4">
            Você não precisa enfrentar tudo sozinha.
          </h2>
          <p className="text-preto-suave mb-8 max-w-2xl mx-auto">
            A ansiedade não precisa mais controlar seus dias. Com o Método LIVRE, você aprende a transformar o que sente em clareza, autodomínio e leveza.
          </p>

          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            É um processo de libertação interna - e o primeiro passo é simples: agendar sua sessão de identificação gratuita.
          </p>

          <a
            href={whatsappLink(site.contact.waMessage, site.contact.waNumber)}
            className="inline-flex items-center px-8 py-4 bg-verde-escuro hover:opacity-95 text-white font-medium rounded-2xl shadow-md transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            {site.contact.ctaText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
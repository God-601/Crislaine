import { site, whatsappLink } from '../data/siteData';
import Button from './Button';

const ContactSection = () => {
  return (
    <section className="py-16 bg-bege-claro">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-verde-escuro mb-4">
            Você não precisa enfrentar tudo sozinha.
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto font-normal leading-relaxed">
            A ansiedade não precisa mais controlar seus dias. Com o Método LIVRE, você aprende a transformar o que sente em clareza, autodomínio e leveza.
          </p>

          <p className="text-gray-700 mb-8 max-w-2xl mx-auto font-normal leading-relaxed">
            É um processo de libertação interna - e o primeiro passo é simples: agendar sua sessão de identificação gratuita.
          </p>

          <Button
            text={site.contact.ctaText}
            href={whatsappLink(site.contact.waMessage, site.contact.waNumber)}
            variant="primary"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
import { site, whatsappLink } from '../data/siteData';
import Button from './Button';

const ContactSection = () => {
  return (
    <section className="py-20 md:py-28 bg-beige">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="h2 text-center mb-8">
            Você não precisa enfrentar tudo sozinha.
          </h2>
          <div className="space-y-6 mb-12">
            <p className="text-charcoal text-lg leading-relaxed">
              A ansiedade não precisa mais controlar seus dias. Com o Método LIVRE, você aprende a transformar o que sente em clareza, autodomínio e leveza.
            </p>

            <p className="text-charcoal text-lg leading-relaxed">
              É um processo de libertação interna - e o primeiro passo é simples: agendar sua sessão de identificação gratuita.
            </p>
          </div>

          <div className="flex justify-center">
            <Button
              text={site.contact.ctaText}
              href={whatsappLink(site.contact.waMessage, site.contact.waNumber)}
              variant="primary"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
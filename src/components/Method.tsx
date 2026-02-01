import { site } from '../data/siteData';

const Method = () => {
    return (
        <section className="py-20 md:py-28 bg-cream">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <h2 className="h2 text-center mb-12">{site.method.title}</h2>
                    <div className="space-y-6">
                        {site.method.paragraphs.map((p, i) => (
                            <p key={i} className="text-charcoal text-lg leading-relaxed">
                                {p}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Method;

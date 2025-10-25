import { site } from '../data/siteData';

const Method = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold text-verde-escuro mb-4">{site.method.title}</h2>
                    {site.method.paragraphs.map((p, i) => (
                        <p key={i} className="text-gray-700 mb-4">
                            {p}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Method;

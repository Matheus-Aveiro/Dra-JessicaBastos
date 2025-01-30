const services = [
    {
        title: 'Tratamento Facial',
        description:
            'Rejuvenescimento e cuidados faciais personalizados para cada tipo de pele.',
    },
    {
        title: 'Tratamento Corporal',
        description:
            'Protocolos para modelagem corporal, com segurança e eficácia.',
    },
    {
        title: 'Depilação a Laser',
        description: 'Tecnologia de ponta para depilação duradoura e indolor.',
    },
];

const Services = () => {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
                <div
                    key={index}
                    className="bg-tertiaryColor shadow-lg p-6 rounded-lg text-center"
                >
                    <h3 className="text-xl font-semibold text-primaryTextColor mb-4">
                        {service.title}
                    </h3>
                    <p className="text-primaryTextColor">
                        {service.description}
                    </p>
                </div>
            ))}
        </section>
    );
};

export default Services;

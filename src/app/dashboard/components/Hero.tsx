import Image from 'next/image';

const Hero = () => {
    return (
        <section className="mb-16 text-center">
            <h2 className="text-4xl font-semibold mb-4 text-primaryTextColor">
                Transforme sua beleza com segurança e excelência
            </h2>
            <p className="text-lg primaryTextColor mb-8">
                Na nossa clínica, cuidamos da sua estética com os mais avançados
                tratamentos de biomedicina estética.
            </p>
            <Image
                src="https://pages.greatpages.com.br/www.daphinegigliodermato.com/1732155696/imagens/desktop/905581_1_172730699566f49cf364081.jpg"
                alt="Imagem da Clínica"
                width={1200}
                height={800}
                className="rounded-lg"
            />
        </section>
    );
};

export default Hero;

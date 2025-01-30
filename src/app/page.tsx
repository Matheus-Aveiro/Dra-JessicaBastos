import Hero from './dashboard/components/Hero';
import Services from './dashboard/components/Services';
import WhatsAppButton from './dashboard/components/WhatsAppButton';

export default function Home() {
    return (
        <main className="flex-1 flex flex-col items-center">
            <section className="w-screen pt-8 bg-primaryBackgroundColor">
                <div className="w-full max-w-5xl mx-auto">
                    <Hero />
                    <Services />
                </div>
            </section>
            <section className="w-screen pt-8 bg-secondaryBackgroundColor">
                <div className="w-full max-w-5xl mx-auto">
                    <Hero />
                    <Services />
                </div>
            </section>
            <section className="w-screen pt-8 bg-primaryBackgroundColor">
                <div className="w-full max-w-5xl mx-auto">
                    <Hero />
                    <Services />
                </div>
            </section>

            <WhatsAppButton />
        </main>
    );
}

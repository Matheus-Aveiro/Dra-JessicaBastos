import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/5553981067380?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-all"
        >
            <FaWhatsapp size={28} />
        </a>
    );
};

export default WhatsAppButton;

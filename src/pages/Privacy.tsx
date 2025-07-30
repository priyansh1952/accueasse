import React from 'react';

const Privacy = () => {
    return (
        <section className="py-20 px-6 max-w-5xl mx-auto bg-white text-gray-800">
            <h1 className="text-4xl font-bold mb-8 text-blue-700">Privacy & Usage Notice</h1>

            <h2 className="text-2xl font-semibold mt-10 mb-3">Information Collection</h2>
            <p className="mb-6">
                We collect personal information only when you voluntarily provide it through forms or services on this website. Providing personal data is always optional unless explicitly required to fulfill a service request.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-3">Data Automatically Collected</h2>
            <p className="mb-6">
                During your visit, we may automatically collect non-identifiable technical details such as your IP address, browser type, operating system, and browsing behavior. This data is used strictly for analytics and performance improvements.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-3">Use of Cookies</h2>
            <p className="mb-6">
                Cookies are used solely for necessary interactive features and are not intended to collect personal information. These session-based cookies are temporary and expire after your visit. You can disable cookies via your browser settings, although this may affect site functionality.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-3">Email Communications</h2>
            <p className="mb-6">
                When contacting us via email, any personal information shared will be used only to respond to your inquiry. If necessary, your message may be referred to a relevant party. Communications containing threats or illegal content will be forwarded to appropriate authorities.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-3">Informational Use</h2>
            <p className="mb-6">
                The information provided on this website is intended for general purposes only. It should not be considered as a substitute for professional advice, consultation, or services.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-3">Disclaimer</h2>
            <p className="mb-6">
                While we aim to ensure the accuracy and relevance of the content, we do not guarantee its completeness or timeliness. Your use of the site is at your own discretion and risk.
            </p>
        </section>
    );
};

export default Privacy;

import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Kirim form ke EmailJS
        emailjs.sendForm(
            'service_f6li81c',  // Service ID
            'template_ru4xypx',  // Template ID
            form.current,        // Referensi form
            'Jiajzvq2q4Xz54L9j'  // User ID
        )
        .then(() => {
            alert("Pesan telah dikirim!");
            form.current.reset(); // Reset form setelah berhasil
        })
        .catch((error) => {
            console.error('Error sending email:', error);
            alert("Gagal mengirim pesan. Silakan coba lagi.");
        })
        .finally(() => {
            setLoading(false);  // Mengatur loading ke false setelah selesai
        });
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-5">
            <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Hubungi Kami</h2>
                <form ref={form} onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label htmlFor="name" className="block text-gray-600">Nama</label>
                        <input
                            type="text"
                            id="name"
                            name="from_name"  // Pastikan nama input sesuai dengan placeholder di template
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-600">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="from_email"  // Pastikan nama input sesuai dengan placeholder di template
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-gray-600">Pesan</label>
                        <textarea
                            id="message"
                            name="message"  // Pastikan nama input sesuai dengan placeholder di template
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className={`w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={loading}
                    >
                        {loading ? 'Mengirim...' : 'Kirim'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;

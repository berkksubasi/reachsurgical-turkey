'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTranslations } from 'next-intl';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormError {
  field: string;
  message: string;
}

const ContactPage = () => {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({
    promoCode: '',
    fullName: '',
    email: '',
    phone: '',
    country: '',
    interests: {
      surgicalStapling: false,
      ultrasonicSurgery: false
    },
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      interests: {
        ...prev.interests,
        [name]: checked
      }
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Bir hata oluştu');
      }

      setSuccess(true);
      setFormData({
        promoCode: '',
        fullName: '',
        email: '',
        phone: '',
        country: '',
        interests: {
          surgicalStapling: false,
          ultrasonicSurgery: false
        },
        message: ''
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Bir hata oluştu');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
    <Header />
    <div className="flex flex-col md:flex-row">
      {/* Sol taraf - Doktor resmi */}
      <div className="w-full md:w-1/2 relative h-[300px] md:h-screen">
        <Image 
          src="/images/contacts.avif" 
          alt="Medical Professional" 
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      {/* Sağ taraf - Form */}
      <div className="w-full md:w-1/2 p-8 md:p-16 bg-white">
        <h1 className="text-4xl font-bold text-[#0a3b5c] mb-8">{t('title')}</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="promoCode" className="block text-sm font-medium text-gray-700">{t('promoCode')}</label>
            <input
              type="text"
              id="promoCode"
              name="promoCode"
              value={formData.promoCode}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">{t('fullName')}</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">{t('email')}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">{t('phone')}</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">{t('country')}</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          <div className="mb-4">
            <p className="block text-sm font-medium text-gray-700 mb-2">{t('interests')}</p>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="surgicalStapling"
                  name="surgicalStapling"
                  checked={formData.interests.surgicalStapling}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <label htmlFor="surgicalStapling" className="ml-2 block text-sm text-gray-700">
                  {t('surgicalStapling')}
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="ultrasonicSurgery"
                  name="ultrasonicSurgery"
                  checked={formData.interests.ultrasonicSurgery}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <label htmlFor="ultrasonicSurgery" className="ml-2 block text-sm text-gray-700">
                  {t('ultrasonicSurgery')}
                </label>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">{t('message')}</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#0a3b5c] hover:bg-[#072a42] text-white font-bold py-3 px-4 rounded"
          >
            {t('submit')}
          </button>
        </form>
      </div>
    </div>
    <Footer />
    </>
    );
    };

export default ContactPage; 
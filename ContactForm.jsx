import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function ContactForm({ onClose }) {
  const [formData, setFormData] = useState({
    type: 'partnership',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div
        className="bg-white rounded-lg max-w-md w-full p-8 shadow-lg relative"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600"
        >
          <X size={24} />
        </button>

        {submitted ? (
          <div className="text-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: '#E1F4EE' }}
            >
              <span className="text-3xl">✓</span>
            </div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#3D4654' }}>
              Thanks for reaching out.
            </h2>
            <p style={{ color: '#6B7280', marginBottom: '24px' }}>
              We'll come back to you within two business days.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2 rounded font-semibold text-white"
              style={{ backgroundColor: '#3B60E4' }}
            >
              Close
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#3D4654' }}>
              Let's talk.
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: '#3D4654' }}
                >
                  I'm reaching out about
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded border"
                  style={{
                    borderColor: '#DCE3F7',
                    color: '#3D4654'
                  }}
                >
                  <option value="partnership">Partnership</option>
                  <option value="investment">Investment</option>
                  <option value="press">Press</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: '#3D4654' }}
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 rounded border"
                  style={{
                    borderColor: '#DCE3F7',
                    color: '#3D4654'
                  }}
                />
              </div>

              <div>
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: '#3D4654' }}
                >
                  Anything else
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more..."
                  rows={4}
                  className="w-full px-4 py-3 rounded border resize-none"
                  style={{
                    borderColor: '#DCE3F7',
                    color: '#3D4654'
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded font-semibold text-white transition-opacity"
                style={{
                  backgroundColor: '#3B60E4',
                  opacity: loading ? 0.7 : 1
                }}
              >
                {loading ? 'Sending...' : 'Send'}
              </button>

              <p
                className="text-xs text-center"
                style={{ color: '#6B7280' }}
              >
                We'll respond within two business days.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

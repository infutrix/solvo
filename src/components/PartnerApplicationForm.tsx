import React, { useState } from "react";
import { Send } from "lucide-react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  hasLicense: string;
  licenseType: string;
  experience: string;
}

const PartnerApplicationForm = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    hasLicense: "",
    licenseType: "",
    experience: "",
  });

  // const [cvFile, setCvFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0] || null;
  //   setCvFile(file);
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-lg text-center">
        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xl">✓</span>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Application Submitted!
        </h3>
        <p className="text-gray-600 mb-6">
          Thank you for applying to become a Solvo delivery partner. Our HR team
          will review your application and contact you within 3-5 business days.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              fullName: "",
              email: "",
              phone: "",
              city: "",
              hasLicense: "",
              licenseType: "",
              experience: "",
            });
            // setCvFile(null);
          }}
          className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded-lg transition-colors duration-200"
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter your email address"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
              placeholder="+971 XX XXX XXXX"
            />
          </div>

          <div>
            <label
              htmlFor="city"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Current City in UAE *
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
              placeholder="e.g., Dubai, Abu Dhabi"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Do you have a valid UAE driving license? *
          </label>
          <div className="flex space-x-6">
            <label className="flex items-center">
              <input
                type="radio"
                name="hasLicense"
                value="yes"
                checked={formData.hasLicense === "yes"}
                onChange={handleInputChange}
                required
                className="mr-2 text-orange-500 focus:ring-orange-500"
              />
              <span className="text-gray-700">Yes</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="hasLicense"
                value="no"
                checked={formData.hasLicense === "no"}
                onChange={handleInputChange}
                required
                className="mr-2 text-orange-500 focus:ring-orange-500"
              />
              <span className="text-gray-700">No</span>
            </label>
          </div>
        </div>

        {formData.hasLicense === "yes" && (
          <div>
            <label
              htmlFor="licenseType"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              License Type *
            </label>
            <select
              id="licenseType"
              name="licenseType"
              value={formData.licenseType}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
            >
              <option value="">Select license type</option>
              <option value="motorcycle">Motorcycle</option>
              <option value="light-motor-vehicle">Light Motor Vehicle</option>
            </select>
          </div>
        )}

        <div>
          <label
            htmlFor="experience"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Tell us briefly about your delivery experience
          </label>
          <textarea
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
            placeholder="Describe your previous delivery or driving experience..."
          />
        </div>

        {/* <div>
          <label htmlFor="cv" className="block text-sm font-semibold text-gray-700 mb-2">
            Upload Your CV (Optional)
          </label>
          <div className="relative">
            <input
              type="file"
              id="cv"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
              className="hidden"
            />
            <label
              htmlFor="cv"
              className="w-full border-2 border-dashed border-gray-300 hover:border-orange-400 p-6 rounded-lg cursor-pointer transition-colors duration-200 flex flex-col items-center justify-center group"
            >
              <Upload className="h-8 w-8 text-gray-400 group-hover:text-orange-400 mb-2 transition-colors duration-200" />
              <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-200">
                {cvFile ? cvFile.name : 'Click to upload CV (PDF, DOC, DOCX)'}
              </span>
            </label>
          </div>
        </div> */}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-orange-400 hover:bg-orange-500 disabled:bg-gray-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <>
              <Send className="h-5 w-5" />
              <span>Submit Application</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default PartnerApplicationForm;

import React from "react";
import {
  Users,
  Award,
  MapPin,
  TrendingUp,
  Shield,
  Heart,
  Clock,
  Target,
} from "lucide-react";

const AboutUs = () => {
  const stats = [
    { number: "2019", label: "Founded" },
    { number: "500+", label: "Active Partners" },
    { number: "50+", label: "Business Clients" },
    { number: "7", label: "Emirates Covered" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Trust & Reliability",
      description:
        "We build lasting relationships through consistent, dependable service and transparent communication.",
    },
    {
      icon: Heart,
      title: "People First",
      description:
        "Our success comes from treating both our partners and clients with respect, fairness, and genuine care.",
    },
    {
      icon: Target,
      title: "Excellence in Execution",
      description:
        "We maintain the highest standards in training, service delivery, and operational efficiency.",
    },
    {
      icon: TrendingUp,
      title: "Innovation & Growth",
      description:
        "We continuously evolve our services and technology to meet the changing needs of the UAE market.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-800 text-white py-20 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover opacity-20 bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600)",
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
            Pioneering Delivery Excellence
            <span className="text-orange-400"> Across the UAE</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-white max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            Since 2019, Solvo has been at the forefront of transforming how
            businesses approach delivery logistics. We're not just a service
            provider – we're your strategic partner in growth.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2 drop-shadow-lg">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-white drop-shadow-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Our Story: Built on UAE Values
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Solvo was born from a simple observation: businesses across
                  the UAE were struggling with the complexities of managing
                  their own delivery fleets. From recruitment challenges to
                  training costs, from vehicle maintenance to regulatory
                  compliance – the overhead was overwhelming.
                </p>
                <p>
                  Our founders, with deep roots in the UAE's business community,
                  recognized an opportunity to create something different. Not
                  just another delivery service, but a true partnership model
                  that would allow businesses to focus on what they do best
                  while we handle the logistics.
                </p>
                <p>
                  Today, we're proud to be the trusted delivery partner for over
                  50 businesses across all seven emirates, from bustling Dubai
                  restaurants to Abu Dhabi pharmacies, from Sharjah e-commerce
                  stores to Ajman grocery chains.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="UAE business landscape"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-400 p-6 rounded-lg shadow-lg text-white">
                <div className="text-2xl font-bold">6 Years</div>
                <div className="text-sm">of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These principles guide every decision we make and every
              relationship we build
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 group"
              >
                <div className="bg-blue-100 group-hover:bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-colors duration-200">
                  <value.icon className="h-8 w-8 text-blue-700 group-hover:text-orange-500 transition-colors duration-200" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Mission */}
            <div className="relative">
              <div className="bg-blue-50 p-8 rounded-xl">
                <div className="bg-blue-700 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  To empower businesses across the UAE by providing scalable,
                  professional delivery solutions that eliminate operational
                  complexity while creating meaningful employment opportunities
                  for skilled delivery professionals.
                </p>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <img
                    src="https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Professional delivery service"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="relative">
              <div className="bg-orange-50 p-8 rounded-xl">
                <div className="bg-orange-400 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Our Vision
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  To become the Middle East's most trusted delivery partner
                  network, setting the gold standard for professional logistics
                  services while fostering economic growth and employment
                  opportunities throughout the region.
                </p>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <img
                    src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="UAE business growth"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                What Makes Solvo Different?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Partnership, Not Just Service
                    </h4>
                    <p className="text-gray-600">
                      We don't just provide riders – we become an extension of
                      your team, understanding your brand and values.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Rapid Deployment
                    </h4>
                    <p className="text-gray-600">
                      Get your delivery operations running within 48 hours of
                      partnership agreement.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Local Expertise
                    </h4>
                    <p className="text-gray-600">
                      Deep understanding of UAE regulations, routes, and
                      cultural nuances across all emirates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Professional delivery partner"
                className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200"
              />
              <img
                src="https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Modern delivery operations"
                className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 mt-8"
              />
              <img
                src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Healthcare delivery"
                className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 -mt-8"
              />
              <img
                src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Team collaboration"
                className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-700 to-blue-800 rounded-2xl p-12 text-white text-center relative overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200)",
              }}
            ></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Commitment to the UAE
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed max-w-4xl mx-auto mb-8">
                We're committed to contributing to the UAE's vision of becoming
                a global logistics hub. Through our services, we support local
                businesses in their growth while providing stable, dignified
                employment opportunities for residents across all emirates.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">
                    Community Impact
                  </h4>
                  <p className="text-blue-100 text-sm">
                    Creating jobs and supporting local economic growth
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">
                    Quality Assurance
                  </h4>
                  <p className="text-blue-100 text-sm">
                    Maintaining the highest standards in every delivery
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">
                    Innovation Focus
                  </h4>
                  <p className="text-blue-100 text-sm">
                    Continuously improving through technology and training
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Partner with Solvo?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto">
            Whether you're a business looking to optimize your delivery
            operations or a professional seeking a rewarding career opportunity,
            we're here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/for-businesses#quote"
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Partner with Us
            </a>
            <a
              href="/become-partner"
              className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Join Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

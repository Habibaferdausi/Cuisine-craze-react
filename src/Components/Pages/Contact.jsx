import React from "react";

const Contact = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center bg-transparent relative rounded flex items-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80)`,
          height: "300px",
        }}
      >
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>

        <div className="text-center rounded absolute inset-0 flex justify-center items-center">
          <h1 className="text-white text-2xl lg:text-5xl lg:p-4 font-semibold">
            Contact Us
          </h1>
        </div>
      </div>

      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 md:pr-8">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <div className="px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                <div className="max-w-md mx-auto">
                  <div className="flex items-center space-x-5">
                    <div className="h-14 w-14 bg-yellow-500 rounded-full flex flex-shrink-0 justify-center items-center text-white text-2xl font-mono">
                      C
                    </div>
                    <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                      <h2 className="leading-relaxed">Contact Us</h2>
                      <p className="text-sm text-gray-500 font-normal leading-relaxed">
                        Fill in the form below to send us a message.
                      </p>
                    </div>
                  </div>
                  <div className="divide-y divide-gray-200">
                    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                      <div className="flex flex-col">
                        <label htmlFor="name" className="leading-loose">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="px-4 py-2 border focus:ring-indigo-500 focus:border-indigo-500 mt-2 rounded-md"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="email" className="leading-loose">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="px-4 py-2 border focus:ring-indigo-500 focus:border-indigo-500 mt-2 rounded-md"
                          placeholder="john.doe@example.com"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="message" className="leading-loose">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows="4"
                          className="px-4 py-2 border focus:ring-indigo-500 focus:border-indigo-500 mt-2 rounded-md"
                          placeholder="Enter your message here"
                        ></textarea>
                      </div>
                    </div>
                    <div className="pt-4 flex items-center space-x-4">
                      <button className="bg-yellow-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <div className="px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                <div className="max-w-md mx-auto">
                  <div className="flex items-center space-x-5">
                    <div className="h-14 w-14 bg-yellow-500 rounded-full flex flex-shrink-0 justify-center items-center text-white text-2xl font-mono">
                      O
                    </div>
                    <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                      <h2 className="leading-relaxed">Opening Hours</h2>
                      <p className="text-sm text-gray-500 font-normal leading-relaxed">
                        We are open from Monday to Friday.
                      </p>
                    </div>
                  </div>
                  <div className="divide-y divide-gray-200">
                    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                      <div>
                        <p className="font-semibold">Monday - Friday:</p>
                        <p>9:00 AM - 6:00 PM</p>
                      </div>
                      <div>
                        <p className="font-semibold">Saturday - Sunday:</p>
                        <p>Closed</p>
                      </div>
                      <div>
                        <p className="font-semibold">Contact Number:</p>
                        <p>+1 123-456-7890</p>
                      </div>
                      <div>
                        <p className="font-semibold">Address:</p>
                        <p>123 Street, City, Country</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <div className="relative">
                  <div className="h-64">
                    {/* Replace the map with your preferred map integration */}
                    {/* You can embed a map from Google Maps, Mapbox, or any other map service */}
                    {/* Example code for embedding a Google Map */}
                    <iframe
                      title="Contact Map"
                      className="w-full h-full"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.102934855554!2d-122.08624678497464!3d37.42290217963624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580aae212b573%3A0x9895c4e34c1f0fdd!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1631099730644!5m2!1sen!2sus"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="absolute bottom-0 left-0 ml-4 mb-4 bg-white px-4 py-2 rounded-lg shadow">
                    <h3 className="text-lg font-medium text-gray-900">
                      Our Address
                    </h3>
                    <p className="text-gray-700">123 Street, City, Country</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

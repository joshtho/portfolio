import React, { useState } from "react";
import { Send, Phone, MapPin, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
   return (
    
    <main
      className="pt-20 lg:pt-[0rem] bg-[#04081A]
 text-white min-h-screen"
    >
      <section className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-2xl">
          <div className="gap-12 items-center">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Get in Touch
                </h2>
                
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-500/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-green-400 cursor-pointer" onClick={() => window.open("mailto:joshua.thompson0010@gmail.com")} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-400">joshua.thompson0010@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-pink-500/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-pink-400 cursor-pointer" onClick={() => window.open("https://maps.app.goo.gl/sF1n9kKRTUTQ9oEn7")} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-400">Denton, Texas</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-purple-600/10 p-3 rounded-lg">
                    <FaGithub className="w-6 h-6 text-purple-500 cursor-pointer" onClick={() => window.open("https://github.com/joshtho")} />
                  </div>
                  <div>
                    <h3 className="font-semibold">GitHub</h3>
                    <p className="text-gray-400">https://github.com/joshtho</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600/10 p-3 rounded-lg">
                    <FaLinkedin className="w-6 h-6 text-blue-500 cursor-pointer" onClick={() => window.open("https://www.linkedin.com/in/joshua-thompson0010")} />
                  </div>
                  <div>
                    <h3 className="font-semibold">LinkedIn</h3>
                    <p className="text-gray-400">https://www.linkedin.com/in/joshua-thompson0010</p>
                  </div>
                </div>

              </div>
            </div>
          </div> 
        </div>
      </section>
    </main>
  );
}

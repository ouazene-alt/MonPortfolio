
import React from "react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-black" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Contact</h2>
        <div className="space-y-4 text-white">
          <p>Email : <a href="mailto:ouazene.celine06@gmail.com" className="text-blue-400">ouazene.celine06@gmail.com</a></p>
          <p>Téléphone : <a href="tel:+33759337693" className="text-blue-400">07 59 33 76 93</a></p>
          <p>LinkedIn : <a href="https://www.linkedin.com/in/celine-ouazene-352616193" className="text-blue-400">linkedin.com/in/celine-ouazene</a></p>
          <p>GitHub : <a href="https://github.com/ouazene-alt" className="text-blue-400">github.com/ouazene-alt</a></p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

// Contact Section
function ContactSection() {
  return (
    <section className="py-20 px-10 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
      <form className="max-w-xl mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none"
        />
        <textarea
          placeholder="Your Message"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none h-32"
        />
        <button className="w-full bg-blue-500 text-white py-3 rounded-lg shadow-md">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default ContactSection;
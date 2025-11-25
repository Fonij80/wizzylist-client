import { BackBtn } from "@/components/ui/extra";

export const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      <BackBtn />
      <h1 className="text-3xl font-bold mb-2 text-center">Contact Us</h1>
      <p className="text-center text-gray-500 mb-10">
        Have a question, feedback, or just want to say hi? We'd love to hear
        from you!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-1">📧 Email</h2>
            <p>
              <a
                href="mailto:support@wizzylist.com"
                className="text-blue-600 underline"
              >
                wizzylist@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-1">📍 Address</h2>
            <p>WizzyList HQ, Tehran, Iran</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6 bg-white p-6 rounded-lg shadow-md">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Foroozan"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Your Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

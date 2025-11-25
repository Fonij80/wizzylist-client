import { BackBtn } from "@/components/ui/extra";

export const Privacy = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
      <BackBtn />
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        At <strong>WizzyList</strong>, we care about your privacy. This policy
        explains what information we collect, how we use it, and your rights
        regarding your data.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. What We Collect</h2>
      <p className="mb-4">
        We collect only the information needed to provide and improve our
        service:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Your name or nickname (optional)</li>
        <li>Your wishlist content (items, links, notes)</li>
        <li>Basic technical data (browser type, IP, device info)</li>
        <li>Email (only if you sign up)</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        2. How We Use Your Info
      </h2>
      <p className="mb-4">We use your data to:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Let you create and share wishlists</li>
        <li>Provide a personalized user experience</li>
        <li>Send reminders or updates (if enabled)</li>
        <li>Fix bugs and improve performance</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. Sharing Your Data</h2>
      <p className="mb-4">
        We do <strong>not</strong> sell or share your personal data with
        advertisers or third parties. Public wishlists can be viewed by anyone
        with the link — private lists are visible only to you.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. Cookies</h2>
      <p className="mb-4">
        WizzyList uses cookies to keep you logged in and to analyze usage for
        improving the experience. You can disable cookies in your browser, but
        some features may not work correctly.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">5. Your Rights</h2>
      <p className="mb-4">You can request to:</p>
      <ul className="list-disc list-inside mb-4">
        <li>View your stored data</li>
        <li>Delete your account and wishlist</li>
        <li>Stop receiving any emails from us</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">6. Data Security</h2>
      <p className="mb-4">
        We use modern encryption, secure servers, and access controls to keep
        your data safe. Still, no system is 100% secure — so use WizzyList
        responsibly and don’t include sensitive information in wishlists.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        7. Changes to This Policy
      </h2>
      <p className="mb-4">
        We may update this policy as we improve WizzyList. If we make major
        changes, we’ll notify users by email or on the site.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">8. Contact Us</h2>
      <p className="mb-4">
        If you have any questions or concerns, feel free to email us at{" "}
        <a
          href="mailto:support@wizzylist.com"
          className="text-blue-600 underline"
        >
          wizzylist@gmail.com.com
        </a>
        .
      </p>

      <p className="text-sm text-gray-500 mt-8">Last updated: July 23, 2025</p>
    </div>
  );
};

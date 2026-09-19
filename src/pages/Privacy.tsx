import LegalShell from '../components/LegalShell'
import { WHATSAPP_DISPLAY } from '../components/WhatsAppButton'

export default function Privacy() {
  return (
    <LegalShell
      kicker="Legal"
      title="Privacy Policy"
      updated="September 19, 2026"
      path="/privacy"
      description="Privacy Policy for Paws & Purpose — how we collect and use information, Google AdSense cookies, GDPR and CCPA rights."
    >
      <p>
        Paws &amp; Purpose ("we", "us", "our") operates this website. This Privacy Policy explains
        what information we collect, how we use it, and the rights you have — including under the
        EU and UK General Data Protection Regulation (GDPR) and the California Consumer Privacy
        Act (CCPA).
      </p>

      <h2>1. Information We Collect</h2>
      <h3>Information you give us directly</h3>
      <ul>
        <li>When you contact us by WhatsApp, phone, or email: your name, contact details, and the contents of your message.</li>
        <li>When you use our free tools (dog age calculator, cost estimator, food checker): the values you enter are processed entirely in your browser and are never sent to or stored on our servers.</li>
      </ul>
      <h3>Information collected automatically</h3>
      <ul>
        <li>Log data: IP address, browser type, pages visited, and timestamps (standard web server logs).</li>
        <li>Cookies and similar technologies: see Section 4 below.</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>To operate, maintain, and improve the website and its content</li>
        <li>To respond to your messages and questions</li>
        <li>To understand how readers use the site (aggregate analytics)</li>
        <li>To display advertising, including personalized advertising where you have consented</li>
        <li>To comply with legal obligations</li>
      </ul>

      <h2>3. Google AdSense and Third-Party Advertising</h2>
      <p>
        We use Google AdSense to display advertisements. Google and its partners use cookies to
        serve ads based on your prior visits to this and other websites.
      </p>
      <ul>
        <li>Third-party vendors, including Google, use cookies to serve ads based on your prior visits to this website or other websites.</li>
        <li>Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to this site and/or other sites on the Internet.</li>
        <li>You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-terracotta underline">Google Ads Settings</a>.</li>
        <li>You can also opt out of third-party vendors' use of cookies for personalized advertising at <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-terracotta underline">www.aboutads.info/choices</a>.</li>
      </ul>

      <h2>4. Cookies</h2>
      <p>Cookies are small text files stored on your device. We use:</p>
      <ul>
        <li><strong>Essential cookies</strong> — required for the site to function (e.g., remembering your cookie consent choice).</li>
        <li><strong>Advertising cookies</strong> — set by Google AdSense and its partners to personalize and measure ads. These are only activated after you give consent via our cookie banner.</li>
      </ul>
      <p>
        You can control or delete cookies through your browser settings at any time. Refusing
        non-essential cookies will not affect your ability to read our articles.
      </p>

      <h2>5. Legal Bases for Processing (EU/UK Visitors)</h2>
      <ul>
        <li><strong>Consent</strong> — for non-essential cookies and personalized advertising (you may withdraw consent at any time via the cookie settings).</li>
        <li><strong>Legitimate interests</strong> — to operate and improve the website and respond to inquiries.</li>
        <li><strong>Legal obligation</strong> — where processing is required by law.</li>
      </ul>

      <h2>6. Your Rights (GDPR / UK GDPR)</h2>
      <p>If you are in the EU, EEA, or UK, you have the right to:</p>
      <ul>
        <li>Access the personal data we hold about you</li>
        <li>Request correction or deletion of your data</li>
        <li>Object to or restrict processing</li>
        <li>Data portability</li>
        <li>Withdraw consent at any time (without affecting prior lawful processing)</li>
        <li>Lodge a complaint with your local data protection authority</li>
      </ul>
      <p>To exercise any of these rights, contact us using the details in Section 10.</p>

      <h2>7. Data Retention & Security</h2>
      <p>
        We keep personal data only as long as necessary for the purposes described above.
        Messages you send us are retained only as long as needed to handle your inquiry. We apply
        reasonable technical and organizational measures to protect your information.
      </p>

      <h2>8. Children's Privacy</h2>
      <p>
        This website is not directed at children under 13 (or under 16 in the EU/UK), and we do
        not knowingly collect personal data from children. If you believe a child has provided us
        personal data, contact us and we will delete it.
      </p>

      <h2>9. International Data Transfers</h2>
      <p>
        This website is operated from Pakistan. By using the site, you understand that your
        information may be processed in Pakistan and by our service providers (such as Google) in
        other countries, under appropriate safeguards.
      </p>

      <h2>10. Contact Us</h2>
      <p>
        Data controller: <strong>Syed Farjaad Raza Rizvi</strong>, Karachi, Pakistan.
        For any privacy question or request, contact us via WhatsApp at{' '}
        <strong>{WHATSAPP_DISPLAY}</strong> or through the contact options on our About page.
      </p>

      <h2>11. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The "last updated" date at the top
        reflects the most recent revision. Continued use of the site after changes means you
        accept the updated policy.
      </p>
    </LegalShell>
  )
}

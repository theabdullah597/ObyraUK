import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

const LegalPageLayout = ({ title, lastUpdated, children }) => {
  return (
    <div className="bg-slate-50">
      <section className="bg-slate-900 text-white py-20 md:py-24">
        <div className="container-custom">
          <p className="text-indigo-200 font-semibold mb-3">Legal</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-slate-300">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl p-8 md:p-10 shadow-sm">
            <div className="max-w-none">{children}</div>
            <div className="mt-10 pt-6 border-t border-slate-200 text-sm text-slate-600 flex items-start gap-2">
              <Mail size={16} className="mt-0.5 text-indigo-600" />
              <p>
                Questions about this policy? Contact us at{" "}
                <a
                  href="mailto:hello@obyra.co.uk"
                  className="text-indigo-700 hover:text-indigo-800"
                >
                  hello@obyra.co.uk
                </a>{" "}
                or visit our{" "}
                <Link
                  to="/contact"
                  className="text-indigo-700 hover:text-indigo-800"
                >
                  contact page
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const PrivacyPolicy = () => {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated="22 April 2026">
      <h2 className="text-2xl font-bold mb-3">1. Information We Collect</h2>
      <p className="text-slate-600 mb-6">
        Obyra collects information you provide directly through forms, project
        enquiries, and email communication. This may include your name, company,
        email address, phone number, and project details.
      </p>

      <h2 className="text-2xl font-bold mb-3">2. How We Use Information</h2>
      <p className="text-slate-600 mb-6">
        We use your information to respond to enquiries, prepare proposals,
        deliver software development services, improve website performance, and
        communicate relevant service updates.
      </p>

      <h2 className="text-2xl font-bold mb-3">3. Data Sharing</h2>
      <p className="text-slate-600 mb-6">
        We do not sell personal data. We may share limited data with trusted
        service providers required for project delivery, hosting, analytics, and
        communication, under appropriate confidentiality and security
        obligations.
      </p>

      <h2 className="text-2xl font-bold mb-3">
        4. Data Security and Retention
      </h2>
      <p className="text-slate-600 mb-6">
        We use reasonable technical and organisational safeguards to protect
        data. Information is retained only as long as needed for business,
        legal, and contractual purposes.
      </p>

      <h2 className="text-2xl font-bold mb-3">5. Your Rights</h2>
      <p className="text-slate-600">
        You may request access, correction, or deletion of your personal
        information where applicable. To exercise these rights, contact us using
        the details below.
      </p>
    </LegalPageLayout>
  );
};

export const TermsOfService = () => {
  return (
    <LegalPageLayout title="Terms of Service" lastUpdated="22 April 2026">
      <h2 className="text-2xl font-bold mb-3">1. Scope of Services</h2>
      <p className="text-slate-600 mb-6">
        Obyra provides software development and related consulting services for
        web, mobile, and digital products. Service scope, deliverables, and
        timelines are defined in project proposals or signed agreements.
      </p>

      <h2 className="text-2xl font-bold mb-3">2. Client Responsibilities</h2>
      <p className="text-slate-600 mb-6">
        Clients are responsible for providing accurate requirements, timely
        feedback, approvals, and any third-party access needed for project
        delivery.
      </p>

      <h2 className="text-2xl font-bold mb-3">
        3. Payments and Commercial Terms
      </h2>
      <p className="text-slate-600 mb-6">
        Fees, billing milestones, and payment schedules are detailed in
        individual contracts. Late payments may affect project timelines and
        support commitments.
      </p>

      <h2 className="text-2xl font-bold mb-3">4. Intellectual Property</h2>
      <p className="text-slate-600 mb-6">
        Ownership and licensing of source code, assets, and deliverables are
        defined in project agreements. Unless otherwise specified, pre-existing
        tools and frameworks remain the property of their respective owners.
      </p>

      <h2 className="text-2xl font-bold mb-3">5. Limitation of Liability</h2>
      <p className="text-slate-600">
        To the maximum extent permitted by law, Obyra is not liable for indirect
        or consequential losses. Total liability is limited as set out in the
        governing client agreement.
      </p>
    </LegalPageLayout>
  );
};

export const CookiePolicy = () => {
  return (
    <LegalPageLayout title="Cookie Policy" lastUpdated="22 April 2026">
      <h2 className="text-2xl font-bold mb-3">1. What Are Cookies</h2>
      <p className="text-slate-600 mb-6">
        Cookies are small text files stored on your device to help websites
        remember preferences and improve user experience.
      </p>

      <h2 className="text-2xl font-bold mb-3">2. How We Use Cookies</h2>
      <p className="text-slate-600 mb-6">
        We use cookies and similar technologies to understand site performance,
        analyze visitor behavior, and improve navigation and content relevance.
      </p>

      <h2 className="text-2xl font-bold mb-3">3. Types of Cookies</h2>
      <p className="text-slate-600 mb-6">
        Our website may use essential cookies, analytics cookies, and
        functionality cookies. Essential cookies are required for basic site
        operation.
      </p>

      <h2 className="text-2xl font-bold mb-3">4. Managing Cookies</h2>
      <p className="text-slate-600 mb-6">
        You can manage or disable cookies through your browser settings.
        Disabling some cookies may impact certain website features.
      </p>

      <h2 className="text-2xl font-bold mb-3">5. Policy Updates</h2>
      <p className="text-slate-600">
        We may update this Cookie Policy periodically. The latest version will
        always be available on this page.
      </p>
    </LegalPageLayout>
  );
};

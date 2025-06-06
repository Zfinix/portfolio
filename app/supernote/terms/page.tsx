import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Supernote Terms and Conditions',
  description: 'Terms and Conditions for the Supernote app - the rules and guidelines for using our service.',
};


export default function SupernoteTermsPage() {

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl text-white">
      <h1 className="text-3xl font-bold mb-8">Supernote Terms and Conditions</h1>

      <div className="prose prose-invert max-w-none">
        <p className="mb-4">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
        <p className="mb-4">Welcome to <strong>Supernote</strong>! These Terms and Conditions govern your use of the Supernote mobile application and related services.</p>
        <p className="mb-4">By creating an account or using Supernote, you confirm that you accept these Terms and agree to comply with them. If you do not agree to these Terms, you must not use our Service.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Description of Service</h2>
        <p className="mb-4">Supernote is an AI-powered note-taking application that allows users to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Upload and process documents (PDFs, Word, Google Docs)</li>
          <li className="mb-2">Generate AI-powered notes and summaries from videos and audio</li>
          <li className="mb-2">Create quizzes and study materials</li>
          <li className="mb-2">Sync content across multiple devices</li>
          <li className="mb-2">Organize and manage personal notes</li>
          <li className="mb-2">Process voice recordings</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Accounts</h2>
        <p className="mb-4"><strong>Account Creation Requirements:</strong></p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">You must be at least 13 years old to create an account</li>
          <li className="mb-2">You must provide accurate and complete information</li>
          <li className="mb-2">You are responsible for maintaining account security</li>
          <li className="mb-2">You must not share your account credentials</li>
        </ul>
        <p className="mb-4"><strong>Account Responsibilities:</strong> You are responsible for all activities under your account. Notify us immediately of any unauthorized use.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Acceptable Use</h2>
        <p className="mb-4">You agree <strong>NOT</strong> to use the Service to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Upload illegal, harmful, or infringing content</li>
          <li className="mb-2">Violate any laws or regulations</li>
          <li className="mb-2">Harass, abuse, or harm others</li>
          <li className="mb-2">Distribute malware or viruses</li>
          <li className="mb-2">Attempt to hack or compromise the Service</li>
          <li className="mb-2">Use the Service for commercial purposes without permission</li>
          <li className="mb-2">Upload copyrighted material without proper rights</li>
          <li className="mb-2">Spam or send unsolicited communications</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Content and Intellectual Property</h2>
        <p className="mb-4"><strong>Your Content:</strong> You retain ownership of content you upload. You grant us a license to process your content to provide the Service. You represent that you have the right to upload and use your content.</p>
        <p className="mb-4"><strong>Our Content:</strong> The Supernote app, AI features, and related technology are our property. You may not copy, modify, or distribute our software. Our trademarks and logos are protected.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. AI and Third-Party Services</h2>
        <p className="mb-4">Supernote uses third-party AI services (such as OpenAI, Google) to process your content. By using AI features, you acknowledge that:</p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Your content may be processed by these third-party services</li>
          <li className="mb-2">We do not control third-party AI responses</li>
          <li className="mb-2">AI-generated content may not always be accurate</li>
          <li className="mb-2">You should review AI-generated content before relying on it</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Privacy</h2>
        <p className="mb-4">Your privacy is important to us. Please review our <a href="/supernote/privacy" className="text-white hover:text-gray-300">Privacy Policy</a>, which explains how we collect, use, and protect your information.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Subscription and Payments</h2>
        <p className="mb-4">Some features may require a premium subscription. Subscription fees are charged in advance and prices are subject to change with notice.</p>
        <p className="mb-4">Refunds are handled according to App Store/Google Play policies. Contact us for refund requests or billing issues.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">9. Termination</h2>
        <p className="mb-4">You may delete your account at any time. We may suspend or terminate accounts for Terms violations. Upon termination, your right to use the Service ceases immediately.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">10. Disclaimers</h2>
        <p className="mb-4">THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">11. Limitation of Liability</h2>
        <p className="mb-4">TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">12. Contact Us</h2>
        <p className="mb-4">If you have questions about these Terms, contact us at:</p>
        <p className="mb-4"><strong>Email:</strong> support@supernote.app</p>
        <p className="mb-4"><strong>Website:</strong> <a href="https://supernote.app" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">supernote.app</a></p>
        <p className="mb-4"><strong>App:</strong> Supernote</p>
      </div>

      <div className="mt-12 mb-4">
        <a href="/" className="text-white hover:text-gray-300">
          ← Back to Home
        </a>
      </div>
    </div>
  );
} 
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SuperNote Terms of Service - User Agreement & Guidelines',
  description: 'Comprehensive terms of service for SuperNote app - user rights, responsibilities, AI usage guidelines, and legal agreements for our note-taking service.',
};

export default function SupernoteTermsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl text-white">
      <h1 className="text-3xl font-bold mb-8">SuperNote Terms of Service</h1>

      <div className="prose prose-invert max-w-none">
        <p className="mb-4"><strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        <p className="mb-6">These terms govern your use of SuperNote. Please read them carefully as they contain important information about your rights and responsibilities.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Quick Overview</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>SuperNote is an AI-powered note-taking app for personal and educational use</li>
          <li>You retain ownership of your content while granting us limited processing rights</li>
          <li>AI features use third-party services (OpenAI, Google) with privacy protections</li>
          <li>Premium features require subscription with clear refund policies</li>
          <li>We have zero tolerance for illegal or harmful content</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance & Agreement</h2>
        <p className="mb-4">Welcome to SuperNote! By downloading, installing, or using our application, you agree to be bound by these Terms of Service ("Terms").</p>
        
        <p className="mb-4"><strong>What This Means:</strong></p>
        <ul className="list-disc pl-6 mb-4">
          <li>These Terms form a legally binding agreement between you and SuperNote</li>
          <li>If you disagree with any part, you must discontinue use immediately</li>
          <li>Continued use after updates constitutes acceptance of new terms</li>
          <li>You must be legally capable of entering into binding agreements</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Service Description & Features</h2>
        
        <p className="mb-4"><strong>Core Features:</strong></p>
        <ul className="list-disc pl-6 mb-4">
          <li>AI-powered note generation and summaries</li>
          <li>Document processing (PDF, Word, Google Docs)</li>
          <li>Video content analysis (YouTube, TikTok)</li>
          <li>Voice recording and transcription</li>
          <li>Interactive quiz creation</li>
          <li>Cross-device synchronization</li>
        </ul>
        
        <p className="mb-4"><strong>AI-Powered Tools:</strong></p>
        <ul className="list-disc pl-6 mb-4">
          <li>Smart content summarization</li>
          <li>Automatic quiz generation</li>
          <li>Text-to-speech conversion</li>
          <li>Content organization and tagging</li>
          <li>Study plan recommendations</li>
          <li>Progress tracking and analytics</li>
        </ul>

        <p className="mb-4"><strong>Service Limitations:</strong></p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>AI Accuracy:</strong> AI-generated content may contain errors or inaccuracies</li>
          <li><strong>Availability:</strong> Service may be temporarily unavailable for maintenance</li>
          <li><strong>Third-Party Dependencies:</strong> Some features rely on external AI services</li>
          <li><strong>Usage Limits:</strong> Fair use policies apply to prevent system abuse</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Accounts & Eligibility</h2>
        
        <p className="mb-4"><strong>Eligibility Criteria:</strong></p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Age Requirement:</strong> Must be at least 13 years old (16 in EU)</li>
          <li><strong>Legal Capacity:</strong> Must have legal authority to enter agreements</li>
          <li><strong>Jurisdiction:</strong> Not prohibited from using our services in your location</li>
          <li><strong>Compliance:</strong> Agree to follow all applicable laws and regulations</li>
        </ul>
        
        <p className="mb-4"><strong>Account Security:</strong></p>
        <ul className="list-disc pl-6 mb-4">
          <li>Provide accurate and complete registration information</li>
          <li>Maintain the security and confidentiality of your credentials</li>
          <li>Notify us immediately of any unauthorized access</li>
          <li>You're responsible for all activities under your account</li>
          <li>One account per person - no account sharing or selling</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Acceptable Use Policy</h2>
        
        <p className="mb-4">You agree NOT to use SuperNote for:</p>
        
        <p className="mb-4"><strong>Legal Violations:</strong></p>
        <ul className="list-disc pl-6 mb-4">
          <li>Illegal content or activities</li>
          <li>Copyright or trademark infringement</li>
          <li>Privacy violations or unauthorized data collection</li>
          <li>Fraud, scams, or deceptive practices</li>
        </ul>
        
        <p className="mb-4"><strong>Security & Abuse:</strong></p>
        <ul className="list-disc pl-6 mb-4">
          <li>Hacking, cracking, or system exploitation</li>
          <li>Malware, viruses, or harmful code</li>
          <li>Spam or unsolicited communications</li>
          <li>Denial of service or network attacks</li>
        </ul>
        
        <p className="mb-4"><strong>Harmful Content:</strong></p>
        <ul className="list-disc pl-6 mb-4">
          <li>Harassment, bullying, or threatening behavior</li>
          <li>Hate speech or discriminatory content</li>
          <li>Violence, self-harm, or dangerous activities</li>
          <li>Adult content or sexually explicit material</li>
        </ul>
        
        <p className="mb-4"><strong>Commercial Misuse:</strong></p>
        <ul className="list-disc pl-6 mb-4">
          <li>Unauthorized commercial use or resale</li>
          <li>Competing services or reverse engineering</li>
          <li>Automated access without permission</li>
          <li>Circumventing usage limits or restrictions</li>
        </ul>

        <p className="mb-4"><strong>Enforcement Actions:</strong></p>
        <p className="mb-3">Violations may result in:</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Warning:</strong> First-time minor violations</li>
          <li><strong>Content Removal:</strong> Deletion of violating content</li>
          <li><strong>Account Suspension:</strong> Temporary access restriction</li>
          <li><strong>Account Termination:</strong> Permanent ban for serious violations</li>
          <li><strong>Legal Action:</strong> Law enforcement involvement when appropriate</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Content & Intellectual Property</h2>
        
        <p className="mb-4"><strong>Your Content Rights:</strong></p>
        <p className="mb-4">You Retain Ownership Of:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Original notes and documents you create</li>
          <li>Files and media you upload</li>
          <li>Personal information and data</li>
          <li>Creative works and intellectual property</li>
        </ul>
        
        <p className="mb-4">License You Grant Us:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Process content for AI features</li>
          <li>Store and sync across your devices</li>
          <li>Backup and maintain data security</li>
          <li>Provide customer support</li>
        </ul>
        
        <p className="mb-4"><strong>Our Content Rights:</strong></p>
        <p className="mb-4">SuperNote Owns:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>SuperNote application and software</li>
          <li>AI algorithms and technology</li>
          <li>User interface and design</li>
          <li>Trademarks, logos, and branding</li>
        </ul>
        
        <p className="mb-4">You May Not:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Copy, modify, or distribute our software</li>
          <li>Reverse engineer or decompile our code</li>
          <li>Use our trademarks without permission</li>
          <li>Create derivative works</li>
        </ul>

        <p className="mb-4"><strong>Content Responsibility & DMCA:</strong></p>
        <p className="mb-4">Your Representations:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>You own or have rights to all content you upload</li>
          <li>Your content doesn't infringe third-party rights</li>
          <li>You're authorized to grant the licenses described above</li>
          <li>Your content complies with applicable laws</li>
        </ul>
        
        <p className="mb-4">DMCA & Copyright Claims:</p>
        <p className="mb-2">To report copyright infringement, contact us at:</p>
        <ul className="mb-4">
          <li><strong>Email:</strong> <a href="mailto:legal@supernote.app" className="text-blue-400 hover:text-blue-300">legal@supernote.app</a></li>
          <li><strong>Subject:</strong> "DMCA Takedown Request"</li>
          <li><strong>Include:</strong> Detailed description, proof of ownership, contact information</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. AI Services & Third-Party Integrations</h2>
        
        <p className="mb-4">SuperNote uses third-party AI services to enhance your experience:</p>
        
        <p className="mb-4"><strong>AI Providers:</strong></p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>OpenAI:</strong> Text generation and summarization</li>
          <li><strong>Google AI:</strong> Document analysis and processing</li>
          <li><strong>ElevenLabs:</strong> Text-to-speech conversion</li>
          <li><strong>Deepgram:</strong> Audio transcription services</li>
        </ul>
        
        <p className="mb-4"><strong>Important Disclaimers:</strong></p>
        <ul className="list-disc pl-6 mb-4">
          <li>AI responses may contain errors or inaccuracies</li>
          <li>We don't control third-party AI behavior</li>
          <li>AI content should be reviewed before use</li>
          <li>No guarantee of AI availability or performance</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Subscriptions & Payments</h2>
        
        <p className="mb-4"><strong>Free vs Premium:</strong></p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Free:</strong> Basic note-taking and limited AI features</li>
          <li><strong>Premium:</strong> Unlimited AI processing, advanced features</li>
          <li><strong>Pricing:</strong> Displayed in-app and subject to change</li>
          <li><strong>Trials:</strong> Free trial periods may be offered</li>
        </ul>
        
        <p className="mb-4"><strong>Billing & Renewals:</strong></p>
        <ul className="list-disc pl-6 mb-4">
          <li>Subscriptions auto-renew unless cancelled</li>
          <li>Billing handled by App Store/Google Play</li>
          <li>Cancellation takes effect at next billing cycle</li>
          <li>No refunds for partial billing periods</li>
        </ul>

        <p className="mb-4"><strong>Refund Policy:</strong></p>
        <p className="mb-4">Refunds are processed according to platform policies:</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>App Store:</strong> Apple's refund policy applies</li>
          <li><strong>Google Play:</strong> Google's refund policy applies</li>
          <li><strong>Direct Billing:</strong> Contact us within 30 days for refund requests</li>
          <li><strong>Pro-rated Refunds:</strong> Not available for partial periods</li>
        </ul>
        <p className="mb-4">
          <strong>Refund Requests:</strong> Contact <a href="mailto:billing@supernote.app" className="text-blue-400 hover:text-blue-300">billing@supernote.app</a> with your order details.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Privacy & Data Protection</h2>
        
        <p className="mb-4">Your privacy is fundamental to our service. Our comprehensive <a href="/supernote/privacy" className="text-blue-400 hover:text-blue-300">Privacy Policy</a> details how we:</p>
        
        <p className="mb-4"><strong>Data Collection:</strong></p>
        <ul className="list-disc pl-6 mb-4">
          <li>What information we collect</li>
          <li>How we use your data</li>
          <li>When we share information</li>
          <li>Your control over data</li>
        </ul>
        
        <p className="mb-4"><strong>Data Protection:</strong></p>
        <ul className="list-disc pl-6 mb-4">
          <li>Encryption and security measures</li>
          <li>Data retention policies</li>
          <li>International transfer safeguards</li>
          <li>Your rights and choices</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">9. Service Availability & Modifications</h2>
        
        <p className="mb-4"><strong>App Updates:</strong></p>
        <ul className="list-disc pl-6 mb-4">
          <li>We may update features, functionality, and user interface</li>
          <li>Updates may be automatic or require manual installation</li>
          <li>Continued use constitutes acceptance of updates</li>
          <li>Some updates may require newer device specifications</li>
        </ul>
        
        <p className="mb-4"><strong>Service Availability:</strong></p>
        <ul className="list-disc pl-6 mb-4">
          <li>We strive for 99.9% uptime but don't guarantee continuous availability</li>
          <li>Planned maintenance will be announced when possible</li>
          <li>Emergency maintenance may occur without notice</li>
          <li>Third-party service outages may affect functionality</li>
        </ul>
        
        <p className="mb-4"><strong>Feature Changes:</strong></p>
        <ul className="list-disc pl-6 mb-4">
          <li>Features may be added, modified, or removed</li>
          <li>Major changes will be communicated in advance</li>
          <li>Legacy features may be deprecated with notice</li>
          <li>Premium features may change subscription tiers</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">10. Account Termination</h2>
        
        <p className="mb-4"><strong>Voluntary Termination:</strong></p>
        <ul className="list-disc pl-6 mb-4">
          <li>Delete your account anytime in app settings</li>
          <li>Export your data before deletion</li>
          <li>Subscription cancellation required separately</li>
          <li>Data deletion follows our privacy policy</li>
        </ul>
        
        <p className="mb-4"><strong>Involuntary Termination:</strong></p>
        <ul className="list-disc pl-6 mb-4">
          <li>Terms violations or prohibited activities</li>
          <li>Suspected fraud or security threats</li>
          <li>Extended periods of inactivity</li>
          <li>Legal or regulatory requirements</li>
        </ul>
        
        <p className="mb-4"><strong>Effect of Termination:</strong></p>
        <ul className="list-disc pl-6 mb-4">
          <li>Immediate loss of access to account and content</li>
          <li>Data deletion according to privacy policy</li>
          <li>No refunds for remaining subscription periods</li>
          <li>Survival of certain terms (intellectual property, indemnification)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">11. Legal Disclaimers & Limitations</h2>
        
        <p className="mb-4">THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND.</p>
        
        <p className="mb-4"><strong>We Disclaim All Warranties Including:</strong></p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Merchantability:</strong> Fitness for commercial use</li>
          <li><strong>Fitness for Purpose:</strong> Suitability for your specific needs</li>
          <li><strong>Non-Infringement:</strong> Freedom from third-party claims</li>
          <li><strong>Accuracy:</strong> Correctness of AI-generated content</li>
          <li><strong>Reliability:</strong> Uninterrupted or error-free operation</li>
        </ul>

        <p className="mb-4">TO THE MAXIMUM EXTENT PERMITTED BY LAW, SUPERNOTE SHALL NOT BE LIABLE FOR:</p>
        
        <p className="mb-4"><strong>Types of Damages:</strong></p>
        <ul className="list-disc pl-6 mb-4">
          <li>Indirect or consequential damages</li>
          <li>Loss of profits or revenue</li>
          <li>Loss of data or content</li>
          <li>Business interruption</li>
        </ul>
        
        <p className="mb-4"><strong>Damage Caps:</strong></p>
        <ul className="list-disc pl-6 mb-4">
          <li>Total liability limited to $100 USD</li>
          <li>Or amount paid in last 12 months</li>
          <li>Whichever is greater</li>
          <li>Some jurisdictions may not allow limitations</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">12. Indemnification</h2>
        
        <p className="mb-4">You agree to defend, indemnify, and hold harmless SuperNote from claims arising from:</p>
        
        <ul className="list-disc pl-6 mb-4">
          <li>Your use or misuse of the Service</li>
          <li>Your violation of these Terms</li>
          <li>Your violation of third-party rights</li>
          <li>Content you upload or share</li>
          <li>Your negligent or wrongful conduct</li>
        </ul>
        
        <p className="mb-4"><strong>Coverage includes:</strong> Legal fees, court costs, and settlement amounts.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">13. Governing Law & Disputes</h2>
        
        <p className="mb-4"><strong>Governing Law:</strong></p>
        <ul className="list-disc pl-6 mb-4">
          <li>These Terms are governed by the laws of Delaware, USA</li>
          <li>Federal laws apply where applicable</li>
          <li>Excludes conflict of law provisions</li>
          <li>Some local consumer protection laws may still apply</li>
        </ul>
        
        <p className="mb-4"><strong>Dispute Resolution:</strong></p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Informal Resolution:</strong> Contact us first to resolve disputes</li>
          <li><strong>Arbitration:</strong> Binding arbitration for unresolved disputes</li>
          <li><strong>Class Action Waiver:</strong> Individual disputes only</li>
          <li><strong>Small Claims Court:</strong> Allowed for qualifying disputes</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">14. Updates & Changes</h2>
        
        <p className="mb-4">We may update these Terms to reflect changes in our service, legal requirements, or business practices.</p>
        
        <p className="mb-4"><strong>How We Notify You:</strong></p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Material Changes:</strong> Email notification + in-app notice</li>
          <li><strong>Minor Changes:</strong> Updated "Last Modified" date</li>
          <li><strong>Notice Period:</strong> 30 days before material changes take effect</li>
          <li><strong>Continued Use:</strong> Constitutes acceptance of new terms</li>
        </ul>
        
        <p className="mb-4">
          <strong>Disagreement:</strong> If you disagree with changes, you may terminate your account before they take effect.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">15. Contact & Support</h2>
        
        <p className="mb-4"><strong>General Support:</strong></p>
        <ul className="mb-4">
          <li><strong>Email:</strong> <a href="mailto:support@supernote.app" className="text-blue-400 hover:text-blue-300">support@supernote.app</a></li>
          <li><strong>Response Time:</strong> Within 24-48 hours</li>
          <li><strong>In-App Help:</strong> Settings → Help & Support</li>
          <li><strong>FAQ:</strong> <a href="https://supernote.app/help" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">supernote.app/help</a></li>
        </ul>
        
        <p className="mb-4"><strong>Legal & Business:</strong></p>
        <ul className="mb-4">
          <li><strong>Legal Issues:</strong> <a href="mailto:legal@supernote.app" className="text-blue-400 hover:text-blue-300">legal@supernote.app</a></li>
          <li><strong>Billing Questions:</strong> <a href="mailto:billing@supernote.app" className="text-blue-400 hover:text-blue-300">billing@supernote.app</a></li>
          <li><strong>Business Inquiries:</strong> <a href="mailto:business@supernote.app" className="text-blue-400 hover:text-blue-300">business@supernote.app</a></li>
          <li><strong>Privacy Questions:</strong> <a href="mailto:privacy@supernote.app" className="text-blue-400 hover:text-blue-300">privacy@supernote.app</a></li>
        </ul>
        
        <p className="mb-4"><strong>Business Information:</strong></p>
        <ul className="mb-4">
          <li><strong>Company:</strong> SuperNote Technologies, Inc.</li>
          <li><strong>Website:</strong> <a href="https://supernote.app" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">supernote.app</a></li>
          <li><strong>Business Hours:</strong> Monday-Friday, 9 AM - 6 PM EST</li>
        </ul>

        <p className="mb-4">
          Thank you for choosing SuperNote! We're committed to providing a secure, powerful, and user-friendly note-taking experience.
          These terms help ensure a positive environment for all users.
        </p>
        <p className="mb-4">
          Questions about these terms? We're here to help - just reach out anytime.
        </p>
      </div>

      <div className="mt-12 mb-4">
        <a href="/" className="text-white hover:text-gray-300">
          ← Back to Home
        </a>
      </div>
    </div>
  );
} 
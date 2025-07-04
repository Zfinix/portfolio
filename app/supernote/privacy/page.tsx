import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'SuperNote Privacy Policy - How We Protect Your Data',
    description: 'Comprehensive privacy policy for SuperNote app - transparent information about data collection, AI processing, user rights, and data protection measures.',
};

export default function SupernotePrivacyPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl text-white">
            <h1 className="text-3xl font-bold mb-8">SuperNote Privacy Policy</h1>
            
            <div className="prose prose-invert max-w-none">
                <p className="mb-4"><strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                <p className="mb-6">This Privacy Policy explains how SuperNote collects, uses, and protects your information when you use our AI-powered note-taking application.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Quick Summary</h2>
                <ul className="list-disc pl-6 mb-6">
                    <li>We collect minimal data needed to provide our AI-powered features</li>
                    <li>Your notes and content remain private and are processed securely</li>
                    <li>We use encryption and security measures to protect your data</li>
                    <li>You have full control over your data and can delete it anytime</li>
                    <li>We comply with GDPR, CCPA, and other privacy regulations</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
                
                <p className="mb-4"><strong>Account Information:</strong></p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Email address for account creation and communication</li>
                    <li>Name (optional) for personalization</li>
                    <li>Profile picture (optional)</li>
                    <li>Authentication credentials (encrypted)</li>
                </ul>

                <p className="mb-4"><strong>Content You Create:</strong></p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Notes, documents, and text content you input</li>
                    <li>Voice recordings and audio files you upload</li>
                    <li>Videos and multimedia content you process</li>
                    <li>Files and documents you import (PDFs, Word docs, etc.)</li>
                    <li>Quiz questions and study materials you generate</li>
                </ul>

                <p className="mb-4"><strong>Usage Information:</strong></p>
                <ul className="list-disc pl-6 mb-4">
                    <li>How you use the app (features accessed, time spent)</li>
                    <li>Device information (OS version, device type)</li>
                    <li>App performance data and crash reports</li>
                    <li>Preferences and settings you configure</li>
                </ul>

                <p className="mb-4"><strong>Technical Data:</strong></p>
                <ul className="list-disc pl-6 mb-4">
                    <li>IP address (anonymized for analytics)</li>
                    <li>Session data and authentication tokens</li>
                    <li>App version and update information</li>
                    <li>Error logs and diagnostic data</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
                
                <p className="mb-4"><strong>Core Service Delivery:</strong></p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Process your content through AI to generate notes and summaries</li>
                    <li>Sync your data across your devices</li>
                    <li>Provide transcription and text-to-speech services</li>
                    <li>Generate quizzes and study materials from your content</li>
                    <li>Backup and restore your data</li>
                </ul>

                <p className="mb-4"><strong>AI Processing:</strong></p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Send content to AI providers (OpenAI, Google, ElevenLabs) for processing</li>
                    <li>Analyze documents and media to extract key information</li>
                    <li>Generate summaries, notes, and quiz questions</li>
                    <li>Improve transcription accuracy over time</li>
                </ul>

                <p className="mb-4"><strong>Product Improvement:</strong></p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Analyze usage patterns to improve features</li>
                    <li>Fix bugs and enhance performance</li>
                    <li>Develop new AI capabilities</li>
                    <li>Optimize user experience</li>
                </ul>

                <p className="mb-4"><strong>Communication:</strong></p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Send important service updates</li>
                    <li>Provide customer support</li>
                    <li>Notify about new features (with your consent)</li>
                    <li>Send security alerts when necessary</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">3. AI Processing & Third-Party Services</h2>
                
                <p className="mb-4">SuperNote uses third-party AI services to enhance your experience. Here's how we protect your data during AI processing:</p>

                <p className="mb-4"><strong>AI Service Providers:</strong></p>
                <ul className="list-disc pl-6 mb-4">
                    <li><strong>OpenAI:</strong> Text generation, summarization, and content analysis</li>
                    <li><strong>Google AI:</strong> Document processing and natural language understanding</li>
                    <li><strong>ElevenLabs:</strong> Text-to-speech conversion</li>
                    <li><strong>Deepgram:</strong> Audio transcription services</li>
                    <li><strong>Anthropic:</strong> Advanced text processing and analysis</li>
                </ul>

                <p className="mb-4"><strong>Data Protection During AI Processing:</strong></p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Data is encrypted in transit to AI providers</li>
                    <li>We use enterprise-grade API access with enhanced privacy</li>
                    <li>Personal identifiers are removed before processing when possible</li>
                    <li>AI providers are contractually bound to protect your data</li>
                    <li>Processed data is not used to train third-party AI models</li>
                </ul>

                <p className="mb-4"><strong>What Data We Share with AI Services:</strong></p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Content you explicitly request to be processed (notes, documents, audio)</li>
                    <li>Context necessary for accurate AI responses</li>
                    <li>No personal account information or unnecessary metadata</li>
                    <li>No data from other users or unrelated content</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security & Protection</h2>
                
                <p className="mb-4"><strong>Encryption:</strong></p>
                <ul className="list-disc pl-6 mb-4">
                    <li>All data encrypted in transit using TLS 1.3</li>
                    <li>Data encrypted at rest using AES-256</li>
                    <li>Database encryption with rotating keys</li>
                    <li>End-to-end encryption for sensitive content</li>
                </ul>

                <p className="mb-4"><strong>Access Controls:</strong></p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Multi-factor authentication for admin access</li>
                    <li>Principle of least privilege for staff</li>
                    <li>Regular access reviews and audit logs</li>
                    <li>Secure development practices</li>
                </ul>

                <p className="mb-4"><strong>Infrastructure Security:</strong></p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Cloud infrastructure with enterprise-grade security</li>
                    <li>Regular security audits and penetration testing</li>
                    <li>Automated vulnerability scanning</li>
                    <li>Incident response and monitoring systems</li>
                </ul>

                <p className="mb-4"><strong>Data Backup & Recovery:</strong></p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Automated daily backups with encryption</li>
                    <li>Geographic distribution of backup data</li>
                    <li>Regular backup integrity testing</li>
                    <li>Disaster recovery procedures</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Sharing & Disclosure</h2>
                
                <p className="mb-4">We do not sell your personal data. We only share data in these limited circumstances:</p>

                <p className="mb-4"><strong>Service Providers:</strong></p>
                <ul className="list-disc pl-6 mb-4">
                    <li>AI processing services (OpenAI, Google, etc.) for core functionality</li>
                    <li>Cloud hosting providers (with data processing agreements)</li>
                    <li>Analytics services (with data minimization)</li>
                    <li>Customer support platforms (only support-related data)</li>
                </ul>

                <p className="mb-4"><strong>Legal Requirements:</strong></p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Court orders or legal process</li>
                    <li>Compliance with applicable laws</li>
                    <li>Protection of our legal rights</li>
                    <li>Prevention of illegal activities</li>
                </ul>

                <p className="mb-4"><strong>Business Transfers:</strong></p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Mergers or acquisitions (with continued privacy protection)</li>
                    <li>Asset sales (data protection obligations transfer)</li>
                    <li>Corporate restructuring</li>
                </ul>

                <p className="mb-4"><strong>With Your Consent:</strong></p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Sharing with third-party integrations you enable</li>
                    <li>Participation in research studies (anonymized)</li>
                    <li>Testimonials or case studies (with explicit permission)</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">6. Data Retention</h2>
                
                <p className="mb-4"><strong>Account Data:</strong></p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Retained while your account is active</li>
                    <li>Deleted within 30 days of account deletion</li>
                    <li>Some data may be retained for legal compliance (anonymized)</li>
                </ul>

                <p className="mb-4"><strong>Content Data:</strong></p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Notes and documents retained while account is active</li>
                    <li>Immediately deleted when you delete specific content</li>
                    <li>Backups purged within 90 days of deletion</li>
                </ul>

                <p className="mb-4"><strong>Analytics Data:</strong></p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Aggregated usage data retained for 2 years</li>
                    <li>Individual usage data deleted after 1 year</li>
                    <li>Error logs and diagnostics deleted after 6 months</li>
                </ul>

                <p className="mb-4"><strong>Legal & Security Data:</strong></p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Security logs retained for 1 year</li>
                    <li>Legal compliance records as required by law</li>
                    <li>Fraud prevention data for legitimate business purposes</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">7. Your Privacy Rights</h2>
                
                <p className="mb-4"><strong>Access & Portability:</strong></p>
                <ul className="list-disc pl-6 mb-4">
                    <li>View all data we have about you</li>
                    <li>Download your data in portable formats</li>
                    <li>Export notes, documents, and content</li>
                    <li>Receive data transfer within 30 days</li>
                </ul>

                <p className="mb-4"><strong>Correction & Updates:</strong></p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Edit your profile and account information</li>
                    <li>Update preferences and settings</li>
                    <li>Correct inaccurate personal data</li>
                    <li>Request data corrections</li>
                </ul>

                <p className="mb-4"><strong>Deletion & Removal:</strong></p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Delete specific notes or content</li>
                    <li>Delete your entire account and all data</li>
                    <li>Request removal of specific information</li>
                    <li>Opt out of data processing (where legally required)</li>
                </ul>

                <p className="mb-4"><strong>Control & Preferences:</strong></p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Control email notifications and communications</li>
                    <li>Manage data sharing preferences</li>
                    <li>Opt out of analytics (where possible)</li>
                    <li>Choose AI processing preferences</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">8. Regional Privacy Rights</h2>
                
                <p className="mb-4"><strong>GDPR Rights (EU/UK):</strong></p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Right to be informed about data processing</li>
                    <li>Right of access to your personal data</li>
                    <li>Right to rectification of inaccurate data</li>
                    <li>Right to erasure ("right to be forgotten")</li>
                    <li>Right to restrict processing in certain circumstances</li>
                    <li>Right to data portability</li>
                    <li>Right to object to processing</li>
                    <li>Rights related to automated decision making</li>
                </ul>

                <p className="mb-4"><strong>CCPA Rights (California):</strong></p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Right to know what personal information is collected</li>
                    <li>Right to delete personal information</li>
                    <li>Right to opt-out of sale (we don't sell data)</li>
                    <li>Right to non-discrimination for exercising privacy rights</li>
                </ul>

                <p className="mb-4"><strong>Other Regional Rights:</strong></p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Compliance with applicable local privacy laws</li>
                    <li>Data localization where required</li>
                    <li>Specific consent mechanisms as needed</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">9. Children's Privacy</h2>
                
                <p className="mb-4">SuperNote is not intended for children under 13 (or 16 in the EU). We do not knowingly collect personal information from children.</p>

                <p className="mb-4"><strong>If we discover we have collected information from a child:</strong></p>
                <ul className="list-disc pl-6 mb-4">
                    <li>We will delete the information immediately</li>
                    <li>We will notify parents/guardians if possible</li>
                    <li>We will terminate the account</li>
                    <li>We will review our processes to prevent future occurrences</li>
                </ul>

                <p className="mb-4"><strong>Parents and guardians:</strong></p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Can contact us to review any information we may have</li>
                    <li>Can request deletion of their child's information</li>
                    <li>Can refuse further collection or use of information</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">10. International Data Transfers</h2>
                
                <p className="mb-4">SuperNote operates globally and may transfer data internationally. We ensure adequate protection through:</p>

                <p className="mb-4"><strong>Transfer Mechanisms:</strong></p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Standard Contractual Clauses (SCCs) for EU transfers</li>
                    <li>Adequacy decisions where available</li>
                    <li>Binding Corporate Rules for internal transfers</li>
                    <li>Explicit consent where required</li>
                </ul>

                <p className="mb-4"><strong>Data Protection Measures:</strong></p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Technical safeguards (encryption, access controls)</li>
                    <li>Organizational measures (policies, training)</li>
                    <li>Legal protections (contracts, compliance)</li>
                    <li>Regular assessments of transfer risks</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">11. Cookies & Tracking</h2>
                
                <p className="mb-4"><strong>Essential Cookies:</strong></p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Authentication and session management</li>
                    <li>Security and fraud prevention</li>
                    <li>Core app functionality</li>
                    <li>User preferences and settings</li>
                </ul>

                <p className="mb-4"><strong>Analytics Cookies:</strong></p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Usage statistics (anonymized)</li>
                    <li>Performance monitoring</li>
                    <li>Feature usage analysis</li>
                    <li>Error tracking and debugging</li>
                </ul>

                <p className="mb-4"><strong>Cookie Management:</strong></p>
                <ul className="list-disc pl-6 mb-4">
                    <li>You can control cookies through browser settings</li>
                    <li>Essential cookies cannot be disabled without affecting functionality</li>
                    <li>Analytics cookies can be opted out</li>
                    <li>We respect Do Not Track signals where possible</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">12. Privacy Policy Updates</h2>
                
                <p className="mb-4">We may update this Privacy Policy to reflect changes in our practices or legal requirements.</p>

                <p className="mb-4"><strong>How we notify you of changes:</strong></p>
                <ul className="list-disc pl-6 mb-4">
                    <li><strong>Material Changes:</strong> Email notification 30 days in advance</li>
                    <li><strong>Minor Changes:</strong> Updated "Last Modified" date</li>
                    <li><strong>In-App Notice:</strong> Notification within the app</li>
                    <li><strong>Website Notice:</strong> Banner on our website</li>
                </ul>

                <p className="mb-4"><strong>Your choices after changes:</strong></p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Continue using the service (indicates acceptance)</li>
                    <li>Delete your account if you disagree with changes</li>
                    <li>Contact us with questions or concerns</li>
                    <li>Exercise your data rights before policy takes effect</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">13. Contact Us</h2>
                
                <p className="mb-4"><strong>Privacy-Related Questions:</strong></p>
                <ul className="mb-4">
                    <li><strong>Email:</strong> <a href="mailto:privacy@supernote.app" className="text-blue-400 hover:text-blue-300">privacy@supernote.app</a></li>
                    <li><strong>Response Time:</strong> Within 72 hours</li>
                    <li><strong>Data Protection Officer:</strong> <a href="mailto:dpo@supernote.app" className="text-blue-400 hover:text-blue-300">dpo@supernote.app</a></li>
                </ul>

                <p className="mb-4"><strong>General Support:</strong></p>
                <ul className="mb-4">
                    <li><strong>Email:</strong> <a href="mailto:support@supernote.app" className="text-blue-400 hover:text-blue-300">support@supernote.app</a></li>
                    <li><strong>In-App Help:</strong> Settings → Help & Privacy</li>
                    <li><strong>Website:</strong> <a href="https://supernote.app/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">supernote.app/privacy</a></li>
                </ul>

                <p className="mb-4"><strong>Legal & Compliance:</strong></p>
                <ul className="mb-4">
                    <li><strong>Legal Team:</strong> <a href="mailto:legal@supernote.app" className="text-blue-400 hover:text-blue-300">legal@supernote.app</a></li>
                    <li><strong>Compliance:</strong> <a href="mailto:compliance@supernote.app" className="text-blue-400 hover:text-blue-300">compliance@supernote.app</a></li>
                    <li><strong>Security Issues:</strong> <a href="mailto:security@supernote.app" className="text-blue-400 hover:text-blue-300">security@supernote.app</a></li>
                </ul>

                {/* <p className="mb-4"><strong>Mailing Address:</strong></p>
                <p className="mb-4">
                    SuperNote Technologies, Inc.<br/>
                    Privacy Department<br/>
                    [Address to be added]<br/>
                    [City, State, ZIP]<br/>
                    United States
                </p> */}

                <p className="mb-4">
                    We're committed to protecting your privacy and will respond to all privacy-related inquiries promptly. 
                    Your trust is important to us, and we're here to address any concerns you may have about how we handle your data.
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
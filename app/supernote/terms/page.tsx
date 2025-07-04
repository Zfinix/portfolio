import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SuperNote Terms of Service - User Agreement & Guidelines',
  description: 'Comprehensive terms of service for SuperNote app - user rights, responsibilities, AI usage guidelines, and legal agreements for our note-taking service.',
};

export default function SupernoteTermsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl text-white">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">SuperNote Terms of Service</h1>

      <div className="prose prose-invert max-w-none">
        <div className="bg-gray-800/50 p-6 rounded-lg mb-8">
          <p className="text-lg mb-2"><strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          <p className="text-sm text-gray-300">These terms govern your use of SuperNote. Please read them carefully as they contain important information about your rights and responsibilities.</p>
        </div>

        <div className="bg-green-900/20 border-l-4 border-green-400 p-6 mb-8">
          <h2 className="text-xl font-semibold mb-3">📋 Quick Overview</h2>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>SuperNote is an AI-powered note-taking app for personal and educational use</li>
            <li>You retain ownership of your content while granting us limited processing rights</li>
            <li>AI features use third-party services (OpenAI, Google) with privacy protections</li>
            <li>Premium features require subscription with clear refund policies</li>
            <li>We have zero tolerance for illegal or harmful content</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-6 border-b border-gray-600 pb-2">1. Acceptance & Agreement</h2>
        
        <div className="bg-gray-800/30 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-3">📝 Your Agreement</h3>
          <p className="mb-4">Welcome to <strong>SuperNote</strong>! By downloading, installing, or using our application, you agree to be bound by these Terms of Service ("Terms").</p>
          
          <h4 className="font-semibold mb-2">What This Means:</h4>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li>These Terms form a legally binding agreement between you and SuperNote</li>
            <li>If you disagree with any part, you must discontinue use immediately</li>
            <li>Continued use after updates constitutes acceptance of new terms</li>
            <li>You must be legally capable of entering into binding agreements</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-6 border-b border-gray-600 pb-2">2. Service Description & Features</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-900/20 border border-blue-500/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">🎯 Core Features</h3>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>AI-powered note generation and summaries</li>
              <li>Document processing (PDF, Word, Google Docs)</li>
              <li>Video content analysis (YouTube, TikTok)</li>
              <li>Voice recording and transcription</li>
              <li>Interactive quiz creation</li>
              <li>Cross-device synchronization</li>
            </ul>
          </div>
          
          <div className="bg-purple-900/20 border border-purple-500/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">🔮 AI-Powered Tools</h3>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Smart content summarization</li>
              <li>Automatic quiz generation</li>
              <li>Text-to-speech conversion</li>
              <li>Content organization and tagging</li>
              <li>Study plan recommendations</li>
              <li>Progress tracking and analytics</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-900/20 border-l-4 border-yellow-400 p-6 mb-8">
          <h3 className="text-lg font-semibold mb-3">⚠️ Service Limitations</h3>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li><strong>AI Accuracy:</strong> AI-generated content may contain errors or inaccuracies</li>
            <li><strong>Availability:</strong> Service may be temporarily unavailable for maintenance</li>
            <li><strong>Third-Party Dependencies:</strong> Some features rely on external AI services</li>
            <li><strong>Usage Limits:</strong> Fair use policies apply to prevent system abuse</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-6 border-b border-gray-600 pb-2">3. User Accounts & Eligibility</h2>
        
        <div className="bg-gray-800/30 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-4">👤 Account Requirements</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">📋 Eligibility Criteria</h4>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li><strong>Age Requirement:</strong> Must be at least 13 years old (16 in EU)</li>
                <li><strong>Legal Capacity:</strong> Must have legal authority to enter agreements</li>
                <li><strong>Jurisdiction:</strong> Not prohibited from using our services in your location</li>
                <li><strong>Compliance:</strong> Agree to follow all applicable laws and regulations</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">🔐 Account Security</h4>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Provide accurate and complete registration information</li>
                <li>Maintain the security and confidentiality of your credentials</li>
                <li>Notify us immediately of any unauthorized access</li>
                <li>You're responsible for all activities under your account</li>
                <li>One account per person - no account sharing or selling</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-6 border-b border-gray-600 pb-2">4. Acceptable Use Policy</h2>
        
        <div className="bg-red-900/20 border border-red-500/30 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-3">🚫 Prohibited Activities</h3>
          <p className="mb-4">You agree <strong>NOT</strong> to use SuperNote for:</p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">⚖️ Legal Violations</h4>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Illegal content or activities</li>
                <li>Copyright or trademark infringement</li>
                <li>Privacy violations or unauthorized data collection</li>
                <li>Fraud, scams, or deceptive practices</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">🛡️ Security & Abuse</h4>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Hacking, cracking, or system exploitation</li>
                <li>Malware, viruses, or harmful code</li>
                <li>Spam or unsolicited communications</li>
                <li>Denial of service or network attacks</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">👥 Harmful Content</h4>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Harassment, bullying, or threatening behavior</li>
                <li>Hate speech or discriminatory content</li>
                <li>Violence, self-harm, or dangerous activities</li>
                <li>Adult content or sexually explicit material</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">🏢 Commercial Misuse</h4>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Unauthorized commercial use or resale</li>
                <li>Competing services or reverse engineering</li>
                <li>Automated access without permission</li>
                <li>Circumventing usage limits or restrictions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-orange-900/20 border-l-4 border-orange-400 p-6 mb-8">
          <h3 className="text-lg font-semibold mb-3">⚡ Enforcement Actions</h3>
          <p className="mb-3">Violations may result in:</p>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li><strong>Warning:</strong> First-time minor violations</li>
            <li><strong>Content Removal:</strong> Deletion of violating content</li>
            <li><strong>Account Suspension:</strong> Temporary access restriction</li>
            <li><strong>Account Termination:</strong> Permanent ban for serious violations</li>
            <li><strong>Legal Action:</strong> Law enforcement involvement when appropriate</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-6 border-b border-gray-600 pb-2">5. Content & Intellectual Property</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-green-900/20 border border-green-500/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">📄 Your Content Rights</h3>
            <h4 className="font-semibold mb-2">✅ You Retain Ownership Of:</h4>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Original notes and documents you create</li>
              <li>Files and media you upload</li>
              <li>Personal information and data</li>
              <li>Creative works and intellectual property</li>
            </ul>
            
            <h4 className="font-semibold mb-2 mt-4">📝 License You Grant Us:</h4>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Process content for AI features</li>
              <li>Store and sync across your devices</li>
              <li>Backup and maintain data security</li>
              <li>Provide customer support</li>
            </ul>
          </div>
          
          <div className="bg-blue-900/20 border border-blue-500/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">🏢 Our Content Rights</h3>
            <h4 className="font-semibold mb-2">🔒 SuperNote Owns:</h4>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>SuperNote application and software</li>
              <li>AI algorithms and technology</li>
              <li>User interface and design</li>
              <li>Trademarks, logos, and branding</li>
            </ul>
            
            <h4 className="font-semibold mb-2 mt-4">🚫 You May Not:</h4>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Copy, modify, or distribute our software</li>
              <li>Reverse engineer or decompile our code</li>
              <li>Use our trademarks without permission</li>
              <li>Create derivative works</li>
            </ul>
          </div>
        </div>

        <div className="bg-purple-900/20 p-6 rounded-lg mb-8">
          <h3 className="text-lg font-semibold mb-3">⚖️ Content Responsibility & DMCA</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">📋 Your Representations</h4>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>You own or have rights to all content you upload</li>
                <li>Your content doesn't infringe third-party rights</li>
                <li>You're authorized to grant the licenses described above</li>
                <li>Your content complies with applicable laws</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">📞 DMCA & Copyright Claims</h4>
              <p className="text-sm mb-2">To report copyright infringement, contact us at:</p>
              <ul className="space-y-1 text-sm">
                <li><strong>Email:</strong> <a href="mailto:legal@supernote.app" className="text-blue-400 hover:text-blue-300">legal@supernote.app</a></li>
                <li><strong>Subject:</strong> "DMCA Takedown Request"</li>
                <li><strong>Include:</strong> Detailed description, proof of ownership, contact information</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-6 border-b border-gray-600 pb-2">6. AI Services & Third-Party Integrations</h2>
        
        <div className="bg-yellow-900/20 border-l-4 border-yellow-400 p-6 mb-6">
          <h3 className="text-lg font-semibold mb-3">🤖 AI Processing & Limitations</h3>
          <p className="mb-4">SuperNote uses third-party AI services to enhance your experience:</p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">🔧 AI Providers</h4>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li><strong>OpenAI:</strong> Text generation and summarization</li>
                <li><strong>Google AI:</strong> Document analysis and processing</li>
                <li><strong>ElevenLabs:</strong> Text-to-speech conversion</li>
                <li><strong>Deepgram:</strong> Audio transcription services</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">⚠️ Important Disclaimers</h4>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>AI responses may contain errors or inaccuracies</li>
                <li>We don't control third-party AI behavior</li>
                <li>AI content should be reviewed before use</li>
                <li>No guarantee of AI availability or performance</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-6 border-b border-gray-600 pb-2">7. Subscriptions & Payments</h2>
        
        <div className="bg-gray-800/30 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-4">💳 Premium Features & Billing</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">🎁 Free vs Premium</h4>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li><strong>Free:</strong> Basic note-taking and limited AI features</li>
                <li><strong>Premium:</strong> Unlimited AI processing, advanced features</li>
                <li><strong>Pricing:</strong> Displayed in-app and subject to change</li>
                <li><strong>Trials:</strong> Free trial periods may be offered</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">🔄 Billing & Renewals</h4>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Subscriptions auto-renew unless cancelled</li>
                <li>Billing handled by App Store/Google Play</li>
                <li>Cancellation takes effect at next billing cycle</li>
                <li>No refunds for partial billing periods</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-green-900/20 border border-green-500/30 p-6 rounded-lg mb-8">
          <h3 className="text-lg font-semibold mb-3">🔄 Refund Policy</h3>
          <div className="space-y-3">
            <p className="text-sm">Refunds are processed according to platform policies:</p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li><strong>App Store:</strong> Apple's refund policy applies</li>
              <li><strong>Google Play:</strong> Google's refund policy applies</li>
              <li><strong>Direct Billing:</strong> Contact us within 30 days for refund requests</li>
              <li><strong>Pro-rated Refunds:</strong> Not available for partial periods</li>
            </ul>
            <p className="text-sm mt-3">
              <strong>Refund Requests:</strong> Contact <a href="mailto:billing@supernote.app" className="text-blue-400 hover:text-blue-300">billing@supernote.app</a> with your order details.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-6 border-b border-gray-600 pb-2">8. Privacy & Data Protection</h2>
        
        <div className="bg-blue-900/20 p-6 rounded-lg mb-8">
          <h3 className="text-lg font-semibold mb-3">🛡️ Your Privacy Matters</h3>
          <p className="mb-4">Your privacy is fundamental to our service. Our comprehensive <a href="/supernote/privacy" className="text-blue-400 hover:text-blue-300 font-semibold">Privacy Policy</a> details how we:</p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">📊 Data Collection</h4>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>What information we collect</li>
                <li>How we use your data</li>
                <li>When we share information</li>
                <li>Your control over data</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">🔒 Data Protection</h4>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Encryption and security measures</li>
                <li>Data retention policies</li>
                <li>International transfer safeguards</li>
                <li>Your rights and choices</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-6 border-b border-gray-600 pb-2">9. Service Availability & Modifications</h2>
        
        <div className="bg-gray-800/30 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-4">🔧 Service Changes & Updates</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">📱 App Updates</h4>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>We may update features, functionality, and user interface</li>
                <li>Updates may be automatic or require manual installation</li>
                <li>Continued use constitutes acceptance of updates</li>
                <li>Some updates may require newer device specifications</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">⏱️ Service Availability</h4>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>We strive for 99.9% uptime but don't guarantee continuous availability</li>
                <li>Planned maintenance will be announced when possible</li>
                <li>Emergency maintenance may occur without notice</li>
                <li>Third-party service outages may affect functionality</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">🔄 Feature Changes</h4>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Features may be added, modified, or removed</li>
                <li>Major changes will be communicated in advance</li>
                <li>Legacy features may be deprecated with notice</li>
                <li>Premium features may change subscription tiers</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-6 border-b border-gray-600 pb-2">10. Account Termination</h2>
        
        <div className="bg-orange-900/20 p-6 rounded-lg mb-8">
          <h3 className="text-lg font-semibold mb-3">🚪 Ending Your Account</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">👤 Voluntary Termination</h4>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Delete your account anytime in app settings</li>
                <li>Export your data before deletion</li>
                <li>Subscription cancellation required separately</li>
                <li>Data deletion follows our privacy policy</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">⚖️ Involuntary Termination</h4>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Terms violations or prohibited activities</li>
                <li>Suspected fraud or security threats</li>
                <li>Extended periods of inactivity</li>
                <li>Legal or regulatory requirements</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-600">
            <h4 className="font-semibold mb-2">📋 Effect of Termination</h4>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Immediate loss of access to account and content</li>
              <li>Data deletion according to privacy policy</li>
              <li>No refunds for remaining subscription periods</li>
              <li>Survival of certain terms (intellectual property, indemnification)</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-6 border-b border-gray-600 pb-2">11. Legal Disclaimers & Limitations</h2>
        
        <div className="bg-red-900/20 border border-red-500/30 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-3">⚠️ Service Disclaimers</h3>
          <div className="space-y-3">
            <p className="text-sm font-semibold">THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND.</p>
            
            <h4 className="font-semibold mb-2">🚫 We Disclaim All Warranties Including:</h4>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li><strong>Merchantability:</strong> Fitness for commercial use</li>
              <li><strong>Fitness for Purpose:</strong> Suitability for your specific needs</li>
              <li><strong>Non-Infringement:</strong> Freedom from third-party claims</li>
              <li><strong>Accuracy:</strong> Correctness of AI-generated content</li>
              <li><strong>Reliability:</strong> Uninterrupted or error-free operation</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-800/30 p-6 rounded-lg mb-8">
          <h3 className="text-lg font-semibold mb-3">🛡️ Limitation of Liability</h3>
          <div className="space-y-3">
            <p className="text-sm font-semibold">TO THE MAXIMUM EXTENT PERMITTED BY LAW, SUPERNOTE SHALL NOT BE LIABLE FOR:</p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">💰 Types of Damages</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Indirect or consequential damages</li>
                  <li>Loss of profits or revenue</li>
                  <li>Loss of data or content</li>
                  <li>Business interruption</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">🔢 Damage Caps</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Total liability limited to $100 USD</li>
                  <li>Or amount paid in last 12 months</li>
                  <li>Whichever is greater</li>
                  <li>Some jurisdictions may not allow limitations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-6 border-b border-gray-600 pb-2">12. Indemnification</h2>
        
        <div className="bg-purple-900/20 p-6 rounded-lg mb-8">
          <h3 className="text-lg font-semibold mb-3">🛡️ Your Indemnification Obligation</h3>
          <p className="mb-4">You agree to defend, indemnify, and hold harmless SuperNote from claims arising from:</p>
          
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li>Your use or misuse of the Service</li>
            <li>Your violation of these Terms</li>
            <li>Your violation of third-party rights</li>
            <li>Content you upload or share</li>
            <li>Your negligent or wrongful conduct</li>
          </ul>
          
          <p className="text-sm mt-4"><strong>Coverage includes:</strong> Legal fees, court costs, and settlement amounts.</p>
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-6 border-b border-gray-600 pb-2">13. Governing Law & Disputes</h2>
        
        <div className="bg-gray-800/30 p-6 rounded-lg mb-8">
          <h3 className="text-lg font-semibold mb-4">⚖️ Legal Framework</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">🌍 Governing Law</h4>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>These Terms are governed by the laws of Delaware, USA</li>
                <li>Federal laws apply where applicable</li>
                <li>Excludes conflict of law provisions</li>
                <li>Some local consumer protection laws may still apply</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">🤝 Dispute Resolution</h4>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li><strong>Informal Resolution:</strong> Contact us first to resolve disputes</li>
                <li><strong>Arbitration:</strong> Binding arbitration for unresolved disputes</li>
                <li><strong>Class Action Waiver:</strong> Individual disputes only</li>
                <li><strong>Small Claims Court:</strong> Allowed for qualifying disputes</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-6 border-b border-gray-600 pb-2">14. Updates & Changes</h2>
        
        <div className="bg-blue-900/20 p-6 rounded-lg mb-8">
          <h3 className="text-lg font-semibold mb-3">📄 Terms Updates</h3>
          <p className="mb-4">We may update these Terms to reflect changes in our service, legal requirements, or business practices.</p>
          
          <div className="space-y-3">
            <h4 className="font-semibold mb-2">📢 How We Notify You</h4>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li><strong>Material Changes:</strong> Email notification + in-app notice</li>
              <li><strong>Minor Changes:</strong> Updated "Last Modified" date</li>
              <li><strong>Notice Period:</strong> 30 days before material changes take effect</li>
              <li><strong>Continued Use:</strong> Constitutes acceptance of new terms</li>
            </ul>
            
            <p className="text-sm mt-4">
              <strong>Disagreement:</strong> If you disagree with changes, you may terminate your account before they take effect.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-6 border-b border-gray-600 pb-2">15. Contact & Support</h2>
        
        <div className="bg-green-900/20 border border-green-500/30 p-6 rounded-lg mb-8">
          <h3 className="text-lg font-semibold mb-4">📞 Get Help & Support</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">📧 General Support</h4>
              <ul className="space-y-1 text-sm">
                <li><strong>Email:</strong> <a href="mailto:support@supernote.app" className="text-blue-400 hover:text-blue-300">support@supernote.app</a></li>
                <li><strong>Response Time:</strong> Within 24-48 hours</li>
                <li><strong>In-App Help:</strong> Settings → Help & Support</li>
                <li><strong>FAQ:</strong> <a href="https://supernote.app/help" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">supernote.app/help</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">⚖️ Legal & Business</h4>
              <ul className="space-y-1 text-sm">
                <li><strong>Legal Issues:</strong> <a href="mailto:legal@supernote.app" className="text-blue-400 hover:text-blue-300">legal@supernote.app</a></li>
                <li><strong>Billing Questions:</strong> <a href="mailto:billing@supernote.app" className="text-blue-400 hover:text-blue-300">billing@supernote.app</a></li>
                <li><strong>Business Inquiries:</strong> <a href="mailto:business@supernote.app" className="text-blue-400 hover:text-blue-300">business@supernote.app</a></li>
                <li><strong>Privacy Questions:</strong> <a href="mailto:privacy@supernote.app" className="text-blue-400 hover:text-blue-300">privacy@supernote.app</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-600">
            <h4 className="font-semibold mb-2">🏢 Business Information</h4>
            <div className="text-sm space-y-1">
              <p><strong>Company:</strong> SuperNote Technologies, Inc.</p>
              <p><strong>Website:</strong> <a href="https://supernote.app" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">supernote.app</a></p>
              <p><strong>Business Hours:</strong> Monday-Friday, 9 AM - 6 PM EST</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-lg text-center">
          <h3 className="text-lg font-semibold mb-3">🤝 Thank You</h3>
          <p className="text-sm text-gray-300 mb-4">
            Thank you for choosing SuperNote! We're committed to providing a secure, powerful, and user-friendly note-taking experience.
            These terms help ensure a positive environment for all users.
          </p>
          <p className="text-xs text-gray-400">
            Questions about these terms? We're here to help - just reach out anytime.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <a href="/" className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-white font-medium transition-colors">
          ← Back to Home
        </a>
      </div>
    </div>
  );
} 
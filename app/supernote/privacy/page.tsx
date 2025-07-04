import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'SuperNote Privacy Policy - How We Protect Your Data',
    description: 'Comprehensive privacy policy for SuperNote app - transparent information about data collection, AI processing, user rights, and data protection measures.',
};

export default function SupernotePrivacyPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl text-white">
            <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">SuperNote Privacy Policy</h1>
            
            <div className="prose prose-invert max-w-none">
                <div className="bg-gray-800/50 p-6 rounded-lg mb-8">
                    <p className="text-lg mb-2"><strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                    <p className="text-sm text-gray-300">We believe in transparency. This policy explains exactly how we handle your data when you use SuperNote.</p>
                </div>
                
                <div className="bg-blue-900/20 border-l-4 border-blue-400 p-6 mb-8">
                    <h2 className="text-xl font-semibold mb-3">📖 Quick Summary</h2>
                    <ul className="list-disc pl-6 space-y-2 text-sm">
                        <li>We use your data solely to provide SuperNote's AI-powered features</li>
                        <li>Your notes and documents are encrypted and securely stored</li>
                        <li>We never sell your personal data to third parties</li>
                        <li>You have full control over your data and can delete it anytime</li>
                        <li>AI processing is done securely with trusted providers (OpenAI, Google)</li>
                    </ul>
                </div>

                <h2 className="text-2xl font-semibold mt-12 mb-6 border-b border-gray-600 pb-2">1. Introduction & Scope</h2>
                <p className="mb-4">Welcome to <strong>SuperNote</strong>! We're committed to protecting your privacy and being transparent about how we collect, use, and safeguard your information.</p>
                <p className="mb-4">This Privacy Policy applies to:</p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>The SuperNote mobile application (iOS and Android)</li>
                    <li>Our website at supernote.app</li>
                    <li>All related services and features</li>
                </ul>
                <p className="mb-4">By using SuperNote, you agree to this Privacy Policy. If you disagree with any part, please don't use our services.</p>
                
                <h2 className="text-2xl font-semibold mt-12 mb-6 border-b border-gray-600 pb-2">2. Information We Collect</h2>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">📝 Information You Provide Directly</h3>
                <div className="bg-gray-800/30 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold mb-3">Account Information:</h4>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                        <li><strong>Authentication Data:</strong> Email address, name (from Google/Apple/email sign-in)</li>
                        <li><strong>Profile Information:</strong> Display name, profile preferences</li>
                        <li><strong>Account Settings:</strong> App preferences, notification settings</li>
                    </ul>
                    
                    <h4 className="font-semibold mb-3">Content You Create:</h4>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                        <li><strong>Documents:</strong> PDFs, Word documents, Google Docs, text files</li>
                        <li><strong>Media Content:</strong> Video URLs (YouTube, TikTok), audio recordings</li>
                        <li><strong>Notes & Text:</strong> Written notes, AI-generated summaries, quiz responses</li>
                        <li><strong>Organizational Data:</strong> Folders, tags, note organization</li>
                    </ul>
                    
                    <h4 className="font-semibold mb-3">Communication:</h4>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Support requests and feedback</li>
                        <li>Survey responses and user research participation</li>
                        <li>Community contributions (if applicable)</li>
                    </ul>
                </div>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">📊 Automatically Collected Information</h3>
                <div className="bg-gray-800/30 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold mb-3">Device & Technical Information:</h4>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                        <li>Device model, operating system, app version</li>
                        <li>Unique device identifiers (advertising ID, device ID)</li>
                        <li>Network information (IP address, connection type)</li>
                        <li>Browser type and version (for web features)</li>
                    </ul>
                    
                    <h4 className="font-semibold mb-3">Usage Analytics:</h4>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                        <li>Features used and frequency of use</li>
                        <li>Time spent in different sections of the app</li>
                        <li>User interaction patterns and navigation flows</li>
                        <li>Performance metrics and loading times</li>
                    </ul>
                    
                    <h4 className="font-semibold mb-3">Error & Diagnostic Data:</h4>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Crash reports and error logs</li>
                        <li>Performance diagnostics</li>
                        <li>Feature usage success/failure rates</li>
                    </ul>
                </div>

                <h2 className="text-2xl font-semibold mt-12 mb-6 border-b border-gray-600 pb-2">3. How We Use Your Information</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-green-900/20 border border-green-500/30 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold mb-3">🎯 Core App Functions</h3>
                        <ul className="list-disc pl-6 space-y-1 text-sm">
                            <li>Generate AI-powered notes and summaries</li>
                            <li>Create interactive quizzes from content</li>
                            <li>Sync content across your devices</li>
                            <li>Organize and search your notes</li>
                            <li>Provide personalized features</li>
                        </ul>
                    </div>
                    
                    <div className="bg-blue-900/20 border border-blue-500/30 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold mb-3">🛠 Service Improvement</h3>
                        <ul className="list-disc pl-6 space-y-1 text-sm">
                            <li>Analyze usage patterns to improve features</li>
                            <li>Fix bugs and optimize performance</li>
                            <li>Develop new AI capabilities</li>
                            <li>Conduct A/B testing for better UX</li>
                            <li>Prevent abuse and ensure security</li>
                        </ul>
                    </div>
                    
                    <div className="bg-purple-900/20 border border-purple-500/30 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold mb-3">💬 Communication</h3>
                        <ul className="list-disc pl-6 space-y-1 text-sm">
                            <li>Provide customer support</li>
                            <li>Send important app updates</li>
                            <li>Notify about new features</li>
                            <li>Share tips and best practices</li>
                            <li>Respond to feedback and inquiries</li>
                        </ul>
                    </div>
                    
                    <div className="bg-orange-900/20 border border-orange-500/30 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold mb-3">🔒 Security & Legal</h3>
                        <ul className="list-disc pl-6 space-y-1 text-sm">
                            <li>Detect and prevent fraud</li>
                            <li>Enforce our terms of service</li>
                            <li>Comply with legal obligations</li>
                            <li>Protect user safety and privacy</li>
                            <li>Respond to legal requests</li>
                        </ul>
                    </div>
                </div>

                <h2 className="text-2xl font-semibold mt-12 mb-6 border-b border-gray-600 pb-2">4. AI Processing & Third-Party Services</h2>
                
                <div className="bg-yellow-900/20 border-l-4 border-yellow-400 p-6 mb-6">
                    <h3 className="text-lg font-semibold mb-3">🤖 How AI Processing Works</h3>
                    <p className="mb-4">When you use SuperNote's AI features, your content may be securely processed by these trusted AI providers:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li><strong>OpenAI (GPT models):</strong> For text summarization, note generation, and quiz creation</li>
                        <li><strong>Google AI:</strong> For document analysis and content understanding</li>
                        <li><strong>ElevenLabs:</strong> For text-to-speech features (if enabled)</li>
                        <li><strong>Deepgram:</strong> For audio transcription services</li>
                    </ul>
                    
                    <div className="bg-gray-800/50 p-4 rounded mt-4">
                        <h4 className="font-semibold mb-2">🛡️ AI Data Protection:</h4>
                        <ul className="list-disc pl-6 space-y-1 text-sm">
                            <li>Data is encrypted during transmission (TLS 1.3)</li>
                            <li>We don't use your data to train third-party AI models</li>
                            <li>AI providers process data temporarily and don't store it</li>
                            <li>Content is anonymized before AI processing when possible</li>
                            <li>You can opt out of AI features anytime in settings</li>
                        </ul>
                    </div>
                </div>

                <h2 className="text-2xl font-semibold mt-12 mb-6 border-b border-gray-600 pb-2">5. Data Sharing & Disclosure</h2>
                
                <div className="bg-red-900/20 border border-red-500/30 p-6 rounded-lg mb-6">
                    <h3 className="text-lg font-semibold mb-3">❌ We DO NOT:</h3>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Sell your personal data to anyone</li>
                        <li>Share your notes or documents with other users</li>
                        <li>Use your data for advertising targeting</li>
                        <li>Provide data to data brokers or marketers</li>
                    </ul>
                </div>
                
                <div className="bg-gray-800/30 p-6 rounded-lg mb-6">
                    <h3 className="text-lg font-semibold mb-3">✅ We MAY share data with:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Cloud Infrastructure:</strong> Supabase (database), AWS/Google Cloud (hosting)</li>
                        <li><strong>AI Processing:</strong> OpenAI, Google AI (temporary processing only)</li>
                        <li><strong>Analytics:</strong> Aggregate usage data with privacy-focused tools</li>
                        <li><strong>Payment Processing:</strong> Stripe, App Store, Google Play (subscription data)</li>
                        <li><strong>Customer Support:</strong> Zendesk or similar (support conversations only)</li>
                        <li><strong>Legal Requirements:</strong> Law enforcement (only when legally required)</li>
                    </ul>
                </div>

                <h2 className="text-2xl font-semibold mt-12 mb-6 border-b border-gray-600 pb-2">6. Data Security</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-800/30 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold mb-3">🔐 Encryption</h3>
                        <ul className="list-disc pl-6 space-y-1 text-sm">
                            <li>AES-256 encryption at rest</li>
                            <li>TLS 1.3 for data in transit</li>
                            <li>End-to-end encryption for sensitive notes</li>
                            <li>Encrypted database backups</li>
                        </ul>
                    </div>
                    
                    <div className="bg-gray-800/30 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold mb-3">🔒 Access Control</h3>
                        <ul className="list-disc pl-6 space-y-1 text-sm">
                            <li>Multi-factor authentication for staff</li>
                            <li>Role-based access permissions</li>
                            <li>Regular access audits</li>
                            <li>Principle of least privilege</li>
                        </ul>
                    </div>
                    
                    <div className="bg-gray-800/30 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold mb-3">🛡️ Infrastructure</h3>
                        <ul className="list-disc pl-6 space-y-1 text-sm">
                            <li>SOC 2 compliant cloud providers</li>
                            <li>Regular security audits</li>
                            <li>Automated threat detection</li>
                            <li>Secure development practices</li>
                        </ul>
                    </div>
                    
                    <div className="bg-gray-800/30 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold mb-3">📋 Monitoring</h3>
                        <ul className="list-disc pl-6 space-y-1 text-sm">
                            <li>24/7 security monitoring</li>
                            <li>Incident response procedures</li>
                            <li>Regular vulnerability scanning</li>
                            <li>Employee security training</li>
                        </ul>
                    </div>
                </div>
                
                <div className="bg-red-900/20 border-l-4 border-red-400 p-6 mb-8">
                    <p className="text-sm"><strong>Important:</strong> While we implement industry-standard security measures, no system is 100% secure. We continuously work to protect your data and will notify you of any significant security incidents as required by law.</p>
                </div>

                <h2 className="text-2xl font-semibold mt-12 mb-6 border-b border-gray-600 pb-2">7. Your Privacy Rights</h2>
                
                <div className="bg-blue-900/20 p-6 rounded-lg mb-6">
                    <h3 className="text-lg font-semibold mb-4">🌍 Universal Rights (All Users)</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h4 className="font-semibold mb-2">📋 Access & Portability</h4>
                            <ul className="list-disc pl-6 space-y-1 text-sm">
                                <li>View all data we have about you</li>
                                <li>Export your notes and documents</li>
                                <li>Receive data in machine-readable format</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="font-semibold mb-2">✏️ Correction & Updates</h4>
                            <ul className="list-disc pl-6 space-y-1 text-sm">
                                <li>Update your account information</li>
                                <li>Correct inaccurate data</li>
                                <li>Modify privacy preferences</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="font-semibold mb-2">🗑️ Deletion</h4>
                            <ul className="list-disc pl-6 space-y-1 text-sm">
                                <li>Delete individual notes or documents</li>
                                <li>Request full account deletion</li>
                                <li>Remove data from AI processing</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="font-semibold mb-2">⚙️ Control</h4>
                            <ul className="list-disc pl-6 space-y-1 text-sm">
                                <li>Opt out of analytics collection</li>
                                <li>Disable AI processing features</li>
                                <li>Control notification preferences</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="bg-purple-900/20 p-6 rounded-lg mb-6">
                    <h3 className="text-lg font-semibold mb-3">📍 Additional Rights by Region</h3>
                    
                    <h4 className="font-semibold mb-2">🇪🇺 GDPR (European Users)</h4>
                    <ul className="list-disc pl-6 mb-4 space-y-1 text-sm">
                        <li>Right to object to processing for legitimate interests</li>
                        <li>Right to restrict processing in certain circumstances</li>
                        <li>Right to lodge complaints with supervisory authorities</li>
                        <li>Explicit consent for AI processing (can be withdrawn anytime)</li>
                    </ul>
                    
                    <h4 className="font-semibold mb-2">🇺🇸 CCPA (California Users)</h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Right to know what personal information is collected</li>
                        <li>Right to opt-out of sale (we don't sell data)</li>
                        <li>Right to non-discrimination for exercising CCPA rights</li>
                        <li>Enhanced deletion and access rights</li>
                    </ul>
                </div>
                
                <div className="bg-green-900/20 border border-green-500/30 p-6 rounded-lg mb-8">
                    <h3 className="text-lg font-semibold mb-3">📞 How to Exercise Your Rights</h3>
                    <p className="mb-3">To exercise any of these rights, contact us at:</p>
                    <ul className="space-y-2">
                        <li><strong>Email:</strong> <a href="mailto:privacy@supernote.app" className="text-blue-400 hover:text-blue-300">privacy@supernote.app</a></li>
                        <li><strong>In-App:</strong> Settings → Privacy → Data Rights</li>
                        <li><strong>Response Time:</strong> Within 30 days (or as required by local law)</li>
                    </ul>
                </div>

                <h2 className="text-2xl font-semibold mt-12 mb-6 border-b border-gray-600 pb-2">8. Data Retention</h2>
                
                <div className="bg-gray-800/30 p-6 rounded-lg mb-6">
                    <h3 className="text-lg font-semibold mb-4">⏰ How Long We Keep Your Data</h3>
                    
                    <div className="space-y-4">
                        <div>
                            <h4 className="font-semibold mb-2">📝 Active Account Data</h4>
                            <p className="text-sm mb-2">Retained as long as your account is active or as needed to provide services.</p>
                            <ul className="list-disc pl-6 space-y-1 text-sm">
                                <li>Notes and documents: Until you delete them or close your account</li>
                                <li>Account information: Until account closure + 30 days</li>
                                <li>Usage analytics: 24 months (aggregated/anonymized)</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="font-semibold mb-2">🗑️ After Account Deletion</h4>
                            <ul className="list-disc pl-6 space-y-1 text-sm">
                                <li>Personal data: Deleted within 30 days</li>
                                <li>Backup copies: Deleted within 90 days</li>
                                <li>Legal/fraud prevention: Up to 7 years (anonymized)</li>
                                <li>Aggregated analytics: May be retained (non-identifiable)</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="font-semibold mb-2">📋 Legal Requirements</h4>
                            <p className="text-sm">Some data may be retained longer for:</p>
                            <ul className="list-disc pl-6 space-y-1 text-sm">
                                <li>Tax and accounting purposes (7 years)</li>
                                <li>Legal disputes or investigations</li>
                                <li>Regulatory compliance requirements</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <h2 className="text-2xl font-semibold mt-12 mb-6 border-b border-gray-600 pb-2">9. Children's Privacy</h2>
                
                <div className="bg-yellow-900/20 border-l-4 border-yellow-400 p-6 mb-8">
                    <h3 className="text-lg font-semibold mb-3">👶 Age Requirements</h3>
                    <p className="mb-4">SuperNote is not intended for children under 13 years old (or 16 in the EU). We do not knowingly collect personal information from children under these ages.</p>
                    
                    <h4 className="font-semibold mb-2">If we discover a child's account:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>We immediately delete their personal information</li>
                        <li>We remove their account from our systems</li>
                        <li>We notify the child to stop using our services</li>
                        <li>Parents can contact us to request information deletion</li>
                    </ul>
                    
                    <p className="text-sm mt-4"><strong>Parents:</strong> If you believe your child has created an account, please contact us immediately at <a href="mailto:privacy@supernote.app" className="text-blue-400">privacy@supernote.app</a></p>
                </div>

                <h2 className="text-2xl font-semibold mt-12 mb-6 border-b border-gray-600 pb-2">10. International Data Transfers</h2>
                
                <div className="bg-gray-800/30 p-6 rounded-lg mb-8">
                    <h3 className="text-lg font-semibold mb-4">🌐 Global Operations</h3>
                    <p className="mb-4">SuperNote operates globally, and your data may be processed in:</p>
                    
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                        <li><strong>Primary Location:</strong> United States (AWS US-East)</li>
                        <li><strong>Backup Locations:</strong> EU (for EU users), Canada</li>
                        <li><strong>AI Processing:</strong> US and EU data centers (encrypted)</li>
                    </ul>
                    
                    <h4 className="font-semibold mb-2">🛡️ Transfer Safeguards:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Standard Contractual Clauses (SCCs) for EU data</li>
                        <li>Adequacy decisions where available</li>
                        <li>Data Processing Agreements with all vendors</li>
                        <li>Regular compliance audits</li>
                    </ul>
                </div>

                <h2 className="text-2xl font-semibold mt-12 mb-6 border-b border-gray-600 pb-2">11. Cookies & Tracking</h2>
                
                <div className="bg-gray-800/30 p-6 rounded-lg mb-8">
                    <h3 className="text-lg font-semibold mb-4">🍪 How We Use Cookies</h3>
                    
                    <div className="space-y-4">
                        <div>
                            <h4 className="font-semibold mb-2">Essential Cookies (Always Active)</h4>
                            <ul className="list-disc pl-6 space-y-1 text-sm">
                                <li>Authentication and session management</li>
                                <li>Security and fraud prevention</li>
                                <li>Core app functionality</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="font-semibold mb-2">Analytics Cookies (Opt-in)</h4>
                            <ul className="list-disc pl-6 space-y-1 text-sm">
                                <li>Usage patterns and feature adoption</li>
                                <li>Performance monitoring</li>
                                <li>Error tracking and debugging</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="font-semibold mb-2">Preference Cookies</h4>
                            <ul className="list-disc pl-6 space-y-1 text-sm">
                                <li>UI customization settings</li>
                                <li>Language and region preferences</li>
                                <li>Accessibility options</li>
                            </ul>
                        </div>
                    </div>
                    
                    <p className="text-sm mt-4"><strong>Control:</strong> You can manage cookie preferences in Settings → Privacy → Cookies or through your browser settings.</p>
                </div>

                <h2 className="text-2xl font-semibold mt-12 mb-6 border-b border-gray-600 pb-2">12. Changes to This Privacy Policy</h2>
                
                <div className="bg-blue-900/20 p-6 rounded-lg mb-8">
                    <h3 className="text-lg font-semibold mb-3">📄 Policy Updates</h3>
                    <p className="mb-4">We may update this Privacy Policy to reflect changes in our practices, services, or legal requirements. When we do:</p>
                    
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                        <li><strong>Minor Changes:</strong> Updated "Last Modified" date</li>
                        <li><strong>Material Changes:</strong> Email notification + in-app notice</li>
                        <li><strong>Continued Use:</strong> Constitutes acceptance of new terms</li>
                        <li><strong>Objection:</strong> You can delete your account if you disagree</li>
                    </ul>
                    
                    <p className="text-sm"><strong>Version History:</strong> Previous versions available upon request for transparency.</p>
                </div>

                <h2 className="text-2xl font-semibold mt-12 mb-6 border-b border-gray-600 pb-2">13. Contact Information</h2>
                
                <div className="bg-green-900/20 border border-green-500/30 p-6 rounded-lg mb-8">
                    <h3 className="text-lg font-semibold mb-4">📞 Get in Touch</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold mb-2">General Inquiries</h4>
                            <ul className="space-y-1 text-sm">
                                <li><strong>Email:</strong> <a href="mailto:support@supernote.app" className="text-blue-400 hover:text-blue-300">support@supernote.app</a></li>
                                <li><strong>Website:</strong> <a href="https://supernote.app" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">supernote.app</a></li>
                                <li><strong>In-App:</strong> Settings → Help & Support</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="font-semibold mb-2">Privacy-Specific</h4>
                            <ul className="space-y-1 text-sm">
                                <li><strong>Privacy Officer:</strong> <a href="mailto:privacy@supernote.app" className="text-blue-400 hover:text-blue-300">privacy@supernote.app</a></li>
                                <li><strong>Data Requests:</strong> Settings → Privacy → Data Rights</li>
                                <li><strong>GDPR Complaints:</strong> Your local supervisory authority</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-gray-600">
                        <p className="text-sm text-gray-300">
                            <strong>Response Times:</strong> General inquiries (24-48 hours), Privacy requests (within 30 days), Security issues (immediate priority)
                        </p>
                    </div>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-lg text-center">
                    <h3 className="text-lg font-semibold mb-3">🤝 Our Commitment</h3>
                    <p className="text-sm text-gray-300 mb-4">
                        We're committed to protecting your privacy and being transparent about our data practices. 
                        This policy reflects our values of trust, security, and user empowerment.
                    </p>
                    <p className="text-xs text-gray-400">
                        Thank you for trusting SuperNote with your data. We don't take that responsibility lightly.
                    </p>
                </div>
            </div>
            
            <div className="mt-12 text-center">
                <a href="/" className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-colors">
                    ← Back to Home
                </a>
            </div>
        </div>
    );
} 
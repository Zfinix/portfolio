import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Supernote Privacy Policy',
    description: 'Privacy Policy for the Supernote app - how we collect, use, and protect your information.',
};

export default function SupernotePrivacyPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl text-white">
            <h1 className="text-3xl font-bold mb-8">Supernote Privacy Policy</h1>
            
            <div className="prose prose-invert max-w-none">
                <p className="mb-4">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
                <p className="mb-4">Welcome to <strong>Supernote</strong>! We care about your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use the Supernote app and services.</p>
                <p className="mb-4">By using Supernote, you agree to the terms of this Privacy Policy.</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
                <p className="mb-4">We may collect several types of information from and about users of our app, including:</p>
                
                <p className="mb-4"><strong>Information You Provide:</strong></p>
                <ul className="list-disc pl-6 mb-4">
                    <li className="mb-2">Account Information: Name, email address, authentication credentials (Google/Apple login)</li>
                    <li className="mb-2">Content You Upload: Documents (PDFs, Word, Google Docs), video URLs (YouTube, TikTok), voice recordings, text notes</li>
                    <li className="mb-2">Support Requests and communications with our team</li>
                </ul>
                
                <p className="mb-4"><strong>Automatically Collected Information:</strong></p>
                <ul className="list-disc pl-6 mb-4">
                    <li className="mb-2">Device Information: Device model, OS version, app version, device identifiers</li>
                    <li className="mb-2">Usage Data: Features used, time spent in the app, interaction events</li>
                    <li className="mb-2">Crash Reports & Diagnostics for improving app performance</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
                <p className="mb-4">We use the information we collect about you for various purposes, including to:</p>
                <ul className="list-disc pl-6 mb-4">
                    <li className="mb-2">Provide, personalize, and improve the Supernote app</li>
                    <li className="mb-2">Generate AI-powered notes, summaries, and quizzes</li>
                    <li className="mb-2">Sync content across devices</li>
                    <li className="mb-2">Provide customer support</li>
                    <li className="mb-2">Communicate updates and features</li>
                    <li className="mb-2">Monitor usage and improve performance</li>
                    <li className="mb-2">Ensure security and prevent misuse</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">4. AI & Data Processing</h2>
                <p className="mb-4">When using AI features, text from documents, videos, voice, and notes may be securely sent to third-party AI services (such as OpenAI or Google) for processing. We do not use your data to train third-party models. Data is encrypted in transit and at rest.</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Sharing</h2>
                <p className="mb-4">We do not sell your data. We may share it only with:</p>
                <ul className="list-disc pl-6 mb-4">
                    <li className="mb-2">Cloud providers for secure hosting</li>
                    <li className="mb-2">AI API providers for processing</li>
                    <li className="mb-2">Analytics tools (aggregated/anonymized)</li>
                    <li className="mb-2">Crash reporting tools</li>
                    <li className="mb-2">Legal authorities if required by law</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">6. Data Security</h2>
                <p className="mb-4">We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, accessed, altered, or disclosed in an unauthorized way. Our security measures include:</p>
                <ul className="list-disc pl-6 mb-4">
                    <li className="mb-2">Encryption in transit (HTTPS)</li>
                    <li className="mb-2">Encryption at rest</li>
                    <li className="mb-2">Regular security updates</li>
                    <li className="mb-2">Restricted system access</li>
                </ul>
                <p className="mb-4">However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">7. Your Rights</h2>
                <p className="mb-4">You may have rights to access, correct, delete, or export your data. Contact us at <strong>support@supernote.app</strong> to exercise these rights.</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">8. Data Retention</h2>
                <p className="mb-4">We retain data as long as your account is active or until you request deletion. You can delete notes at any time or contact support to delete your account.</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">9. Children's Privacy</h2>
                <p className="mb-4">Supernote is not intended for children under 13. We do not knowingly collect personally identifiable information from children under 13. If we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers.</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">10. International Users</h2>
                <p className="mb-4">Your data may be processed and stored in <strong>[Insert Hosting Country]</strong>. By using Supernote, you consent to this transfer and processing of your information.</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">11. Changes to This Privacy Policy</h2>
                <p className="mb-4">We may update our Privacy Policy from time to time. We will notify users of significant changes via email or in-app notification and update the "Last Updated" date at the top of this policy.</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">12. Contact Us</h2>
                <p className="mb-4">If you have any questions about this Privacy Policy, please contact us at:</p>
                <p className="mb-4"><strong>Email:</strong> support@supernote.app</p>
                <p className="mb-4"><strong>Website:</strong> <a href="https://supernote.app" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white-300">supernote.app</a></p>
                <p className="mb-4"><strong>App:</strong> Supernote</p>
            </div>
            
            <div className="mt-12 mb-4">
                <a href="/" className="text-white hover:text-white-300">
                    ← Back to Home
                </a>
            </div>
        </div>
    );
} 
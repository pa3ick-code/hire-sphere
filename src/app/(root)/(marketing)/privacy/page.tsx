import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy - Prepfluss',
    description: 'Read our Privacy Policy.',
};

export default function PrivacyPage() {
    return (
        <div className="container mx-auto px-4 py-24 md:px-6 max-w-3xl prose dark:prose-invert">
            <h1>Privacy Policy</h1>
            <p>Last updated: {new Date().toLocaleDateString()}</p>

            <h2>1. Introduction</h2>
            <p>Welcome to Prepfluss. We respect your privacy and are committed to protecting your personal data.</p>

            <h2>2. Data We Collect</h2>
            <p>We collect information you provide directly to us, such as when you create an account, upload a resume, or record interview responses.</p>

            <h2>3. How We Use Your Data</h2>
            <p>We use your data to provide and improve our services, analyze your interview performance, and communicate with you.</p>

            <h2>4. Audio Data</h2>
            <p>Your audio recordings are processed to generate transcripts and feedback. We do not use your audio data for purposes other than providing the service to you.</p>

            <h2>5. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at support@prepfluss.com.</p>
        </div>
    );
}

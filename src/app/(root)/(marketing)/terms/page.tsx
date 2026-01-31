import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service - Prepfluss',
    description: 'Read our Terms of Service.',
};

export default function TermsPage() {
    return (
        <div className="container mx-auto px-4 py-24 md:px-6 max-w-3xl prose dark:prose-invert">
            <h1>Terms of Service</h1>
            <p>Last updated: {new Date().toLocaleDateString()}</p>

            <h2>1. Acceptance of Terms</h2>
            <p>By accessing or using Prepfluss, you agree to be bound by these Terms of Service.</p>

            <h2>2. Description of Service</h2>
            <p>Prepfluss provides an AI-powered interview coaching platform to help users practice for job interviews.</p>

            <h2>3. User Accounts</h2>
            <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>

            <h2>4. Acceptable Use</h2>
            <p>You agree not to misuse the service or help anyone else do so. You must not upload content that is illegal, harmful, or offensive.</p>

            <h2>5. Termination</h2>
            <p>We may terminate or suspend your access to the service immediately, without prior notice or liability, for any reason.</p>
        </div>
    );
}

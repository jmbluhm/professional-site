import type { Metadata } from 'next'
import { Container } from '@/components/Container'

export const metadata: Metadata = {
  title: 'Flow',
  description: 'A streamlined approach to building and shipping web applications. Optimized for flexibility, visibility, and low ongoing cost.',
}

export default function FlowPage() {
  return (
    <Container>
      <article className="prose prose-zinc dark:prose-invert max-w-none">
        <header className="mb-12">
          <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100 mb-4">
            Building & Deploying Web Apps: A Practical Guide
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-3">
            A streamlined approach to building and shipping web applications using VS Code, Claude Code, Vercel, and modern tooling—no Lovable required.
          </p>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Optimized for flexibility, visibility, and low ongoing cost.
          </p>
        </header>

        <div className="border-t border-zinc-200 dark:border-zinc-800 my-12" />

        <section className="mb-16">
          <h2 className="text-2xl font-medium text-zinc-900 dark:text-zinc-100 mb-8">
            Part 1: The Stack & Flow
          </h2>

          <div className="mb-12">
            <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 mb-4">
              What I Use and Why
            </h3>
            <p className="text-zinc-700 dark:text-zinc-300 mb-4">
              This is my stack for building web apps quickly without sacrificing control or code quality. Each tool has a specific job, and together they create a workflow that goes from idea to live production app in hours, not days.
            </p>

            <h4 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-4 mt-8">
              The Core Stack:
            </h4>

            <div className="space-y-4 mb-8">
              <div>
                <h5 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-2">
                  VS Code + Claude Code
                </h5>
                <p className="text-sm text-zinc-700 dark:text-zinc-300">
                  VS Code is the editor, Claude Code is the AI pair programmer that lives inside it. I use a Claude Pro or Max subscription to power it. The combination means I can describe what I want in plain English and get working code, then iterate rapidly. It's like having a senior developer who never gets tired and knows every framework.
                </p>
              </div>

              <div>
                <h5 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-2">
                  Supabase
                </h5>
                <p className="text-sm text-zinc-700 dark:text-zinc-300">
                  My database and backend. It's PostgreSQL under the hood, but it gives me auth, real-time subscriptions, storage, and edge functions without configuring servers. I set it up once per project, design my schema in SQL, and I'm done. No separate auth service, no separate storage solution, no separate API layer to build.
                </p>
              </div>

              <div>
                <h5 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-2">
                  GitHub
                </h5>
                <p className="text-sm text-zinc-700 dark:text-zinc-300">
                  Version control and the bridge between my local machine and production. Every project lives in a repo. Every commit is tracked. Every change has history.
                </p>
              </div>

              <div>
                <h5 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-2">
                  Vercel
                </h5>
                <p className="text-sm text-zinc-700 dark:text-zinc-300">
                  Where things get deployed. It connects directly to GitHub, watches my repo, and automatically deploys every push to main. It handles SSL, gives me a global CDN, manages environment variables, and creates preview URLs for every branch. No server configuration, no DevOps headaches.
                </p>
              </div>

              <div>
                <h5 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-2">
                  GoDaddy
                </h5>
                <p className="text-sm text-zinc-700 dark:text-zinc-300">
                  (or any DNS provider) is where I buy domains. Once I have a domain, I point it at Vercel with a few DNS records and I'm done.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 mb-4">
              The Flow: How I Actually Build
            </h3>

            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-3">
                  Step 1: Build It Locally
                </h4>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-3">
                  I create a new project directory, initialize it with my framework of choice (usually Next.js or Vite), and fire up Claude Code. From there, it's an iterative conversation with the AI:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-sm text-zinc-700 dark:text-zinc-300 mb-3">
                  <li>"Build me a landing page with a hero section and pricing table"</li>
                  <li>"Add authentication with Supabase"</li>
                  <li>"Create a dashboard that shows user activity"</li>
                </ul>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-3">
                  I test everything locally as I go. The dev server runs on localhost, and I can see changes in real-time. When something works, I commit it to git. When I'm ready for the next feature, I ask Claude Code to build it.
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 italic">
                  The key insight here: I'm not writing every line of code myself, but I'm directing the architecture. I decide what gets built and review what Claude Code produces. It's a collaboration.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-3">
                  Step 2: Set Up the Database
                </h4>
                <p className="text-sm text-zinc-700 dark:text-zinc-300">
                  While building, I create a Supabase project, grab the API credentials, and add them to my <code className="text-xs bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">.env.local</code> file. I design my database schema using SQL in Supabase's editor—tables, relationships, indexes, Row Level Security policies.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-3">
                  Step 3: Push to GitHub
                </h4>
                <p className="text-sm text-zinc-700 dark:text-zinc-300">
                  When the app works locally, I push my code to a GitHub repo. This is standard git workflow: initialize the repo if I haven't already, add a <code className="text-xs bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">.gitignore</code> to exclude sensitive files and dependencies, commit everything, and push to a new GitHub repository.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-3">
                  Step 4: Deploy on Vercel
                </h4>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-3">
                  I log into Vercel with my GitHub account, click "New Project," and select the repo I just pushed. Vercel auto-detects my framework, suggests build settings, and I add my environment variables (the Supabase credentials). Then I click deploy.
                </p>
                <p className="text-sm text-zinc-700 dark:text-zinc-300">
                  Three minutes later, my app is live on a <code className="text-xs bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">*.vercel.app</code> domain. Every subsequent push to main automatically triggers a new deployment.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-3">
                  Step 5: Add a Custom Domain
                </h4>
                <p className="text-sm text-zinc-700 dark:text-zinc-300">
                  If I want a real domain (not just <code className="text-xs bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">myapp.vercel.app</code>), I buy one on GoDaddy, then add it in Vercel's domain settings. Vercel tells me exactly which DNS records to create. I copy those records into GoDaddy's DNS manager, wait 10-60 minutes for DNS propagation, and the site is live on my custom domain with automatic SSL.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 mb-4">
              What This Gives Me
            </h3>
            <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-4">
              I have complete control over my code. Unlike no-code or low-code tools, I can see every line, modify anything, and switch frameworks if I want. But I'm not writing boilerplate or fighting with deployment configurations.
            </p>
            <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-4">
              I get professional infrastructure: global CDN, automatic SSL, preview deployments for testing, real-time database with built-in auth, and automatic scaling. The same infrastructure that big companies use, but without needing a DevOps team.
            </p>
            <p className="text-sm text-zinc-700 dark:text-zinc-300">
              Most importantly, I ship fast. The bottleneck is no longer "how do I deploy this?" or "how do I set up auth?" It's just "what do I want to build?"
            </p>
          </div>
        </section>

        <div className="border-t border-zinc-200 dark:border-zinc-800 my-12" />

        <section className="mb-16">
          <h2 className="text-2xl font-medium text-zinc-900 dark:text-zinc-100 mb-8">
            Part 2: The Nitty Gritty
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8">
            This section provides step-by-step technical instructions for implementing the stack described above. Follow these when you're ready to actually set things up.
          </p>

          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 mb-4">
                1. Build It
              </h3>

              <h4 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-3">
                Initial Setup
              </h4>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-3">
                <strong>Prerequisites:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-1 text-sm text-zinc-700 dark:text-zinc-300 mb-4">
                <li>VS Code installed</li>
                <li>Node.js and npm/pnpm installed</li>
                <li>Claude Pro or Max subscription</li>
                <li>Git configured locally</li>
              </ul>

              <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-4 mb-4">
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-2">Install Claude Code:</p>
                <pre className="text-xs text-zinc-900 dark:text-zinc-100">
npm install -g @anthropic-ai/claude-code
{'\n\n'}# Or with pnpm{'\n'}
pnpm install -g @anthropic-ai/claude-code
                </pre>
              </div>

              <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-4 mb-4">
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-2">Set up your project:</p>
                <pre className="text-xs text-zinc-900 dark:text-zinc-100">
mkdir my-app && cd my-app
{'\n\n'}# Initialize your project (example with Next.js){'\n'}
npx create-next-app@latest .
{'\n\n'}# Or with Vite for a lighter alternative{'\n'}
npm create vite@latest . -- --template react-ts
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 mb-4">
                2. Set Up Your Database (Supabase)
              </h3>

              <h4 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-3">
                Create Your Supabase Project
              </h4>
              <ol className="list-decimal pl-6 space-y-2 text-sm text-zinc-700 dark:text-zinc-300 mb-4">
                <li>
                  Sign up at{' '}
                  <a
                    href="https://supabase.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-zinc-900 dark:hover:text-zinc-100"
                  >
                    supabase.com
                  </a>
                </li>
                <li>Use GitHub login for seamless integration</li>
                <li>Create a new project and choose a database password</li>
                <li>Select your region (choose closest to your users)</li>
              </ol>

              <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-4 mb-4">
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-2">Install Supabase client:</p>
                <pre className="text-xs text-zinc-900 dark:text-zinc-100">
npm install @supabase/supabase-js
                </pre>
              </div>

              <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-4 mb-4">
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-2">Create .env.local:</p>
                <pre className="text-xs text-zinc-900 dark:text-zinc-100">
NEXT_PUBLIC_SUPABASE_URL=your-project-url{'\n'}
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key{'\n'}
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 mb-4">
                3. Push to GitHub
              </h3>

              <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-4 mb-4">
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-2">Initialize Git Repository:</p>
                <pre className="text-xs text-zinc-900 dark:text-zinc-100">
git init
{'\n\n'}# Make your first commit{'\n'}
git add .{'\n'}
git commit -m "Initial commit"
{'\n\n'}# Push to GitHub{'\n'}
git remote add origin https://github.com/yourusername/your-repo.git{'\n'}
git branch -M main{'\n'}
git push -u origin main
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 mb-4">
                4. Deploy on Vercel
              </h3>

              <ol className="list-decimal pl-6 space-y-2 text-sm text-zinc-700 dark:text-zinc-300 mb-4">
                <li>
                  Go to{' '}
                  <a
                    href="https://vercel.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-zinc-900 dark:hover:text-zinc-100"
                  >
                    vercel.com
                  </a>{' '}
                  and sign in with GitHub
                </li>
                <li>Click "Add New Project"</li>
                <li>Import your GitHub repository</li>
                <li>Vercel auto-detects your framework</li>
                <li>Add environment variables from your .env.local</li>
                <li>Click Deploy</li>
              </ol>

              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                Your app is now live at <code className="text-xs bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">your-project.vercel.app</code>!
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 mb-4">
                5. Set Up Custom Domain
              </h3>

              <ol className="list-decimal pl-6 space-y-2 text-sm text-zinc-700 dark:text-zinc-300 mb-4">
                <li>
                  Purchase domain on{' '}
                  <a
                    href="https://godaddy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-zinc-900 dark:hover:text-zinc-100"
                  >
                    GoDaddy
                  </a>
                </li>
                <li>In Vercel: Settings → Domains → Add your domain</li>
                <li>Vercel provides DNS records to add</li>
                <li>Add records in GoDaddy's DNS manager</li>
                <li>Wait 10-60 minutes for DNS propagation</li>
              </ol>

              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                Vercel will automatically provision SSL certificates. Once verified, your site is live on your custom domain!
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 mb-4">
                6. Ongoing Development
              </h3>

              <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-3">
                Every push to your <code className="text-xs bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">main</code> branch automatically triggers a Vercel deployment:
              </p>

              <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-4 mb-4">
                <pre className="text-xs text-zinc-900 dark:text-zinc-100">
git add .{'\n'}
git commit -m "Add new feature"{'\n'}
git push
{'\n\n'}# Vercel automatically builds and deploys
                </pre>
              </div>

              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                Every pull request gets its own preview URL. Test changes before merging to production.
              </p>
            </div>
          </div>
        </section>

        <div className="border-t border-zinc-200 dark:border-zinc-800 my-12" />

        <section className="mb-16">
          <h2 className="text-2xl font-medium text-zinc-900 dark:text-zinc-100 mb-6">
            Summary: Your Stack in Action
          </h2>

          <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300 mb-6">
            <p><strong>Build:</strong> VS Code + Claude Code + Node.js</p>
            <p><strong>Database:</strong> Supabase (PostgreSQL + Auth + Storage)</p>
            <p><strong>Version Control:</strong> Git + GitHub</p>
            <p><strong>Hosting:</strong> Vercel (with automatic deployments)</p>
            <p><strong>Domain:</strong> GoDaddy (or any DNS provider)</p>
          </div>

          <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-4">
              This stack gives you:
            </h3>
            <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li>✅ AI-assisted development workflow</li>
              <li>✅ Powerful PostgreSQL database with real-time subscriptions</li>
              <li>✅ Automatic deployments on every push</li>
              <li>✅ Free SSL certificates</li>
              <li>✅ Global CDN</li>
              <li>✅ Preview URLs for every PR</li>
              <li>✅ Serverless functions out of the box</li>
              <li>✅ Professional deployment infrastructure</li>
            </ul>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 italic">
            No Lovable required. Just clean, maintainable code you fully control.
          </p>
        </section>
      </article>
    </Container>
  )
}

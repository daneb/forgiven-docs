/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Terminal, Cpu, Keyboard, Search, FileCode2, Command, Github, BookOpen, Sparkles, Zap, Box, Activity, ArrowRight, Network, Shield, Minimize } from 'lucide-react';
import { cn } from './lib/utils';
import { DocsPage } from './pages/DocsPage';

function Logo() {
  return (
    <div className="flex items-center gap-3 group">
      <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500 shadow-lg shadow-indigo-500/25 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
        <div className="absolute inset-[1px] rounded-[11px] bg-gray-950/80 backdrop-blur-sm z-0"></div>
        <Terminal className="h-5 w-5 text-indigo-400 z-10" strokeWidth={2.5} />
        <div className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full bg-green-400 border-2 border-gray-950 z-20 shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
      </div>
      <span className="text-2xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">forgiven</span>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-800/60 bg-gray-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <Logo />
        </Link>
        <div className="flex items-center gap-6">
          <a href="#features" className="text-sm font-medium text-gray-400 hover:text-gray-100 transition-colors">Features</a>
          <Link to="/docs" className="text-sm font-medium text-gray-400 hover:text-gray-100 transition-colors">Docs</Link>
          <a href="https://github.com/daneb/forgiven" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-gray-100 transition-colors">
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-gray-950 to-gray-950"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-sm text-indigo-300 mb-8"
          >
            <Sparkles className="h-4 w-4" />
            <span>The AI-first terminal-based IDE</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl mb-6"
          >
            Code at the speed of <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">thought.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-400 mb-10 leading-relaxed"
          >
            Forgiven is a modern, modal terminal editor designed for the AI era. 
            Featuring Vim keybindings, Emacs-style navigation, and deep integration with GitHub Copilot and Ollama.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/docs" className="inline-flex h-12 items-center justify-center rounded-lg bg-indigo-600 px-8 text-sm font-medium text-white hover:bg-indigo-500 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-950">
              Read the Docs
            </Link>
            <a href="https://github.com/daneb/forgiven" target="_blank" rel="noreferrer" className="inline-flex h-12 items-center justify-center rounded-lg border border-gray-700 bg-gray-800/50 px-8 text-sm font-medium text-white hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-950">
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 relative mx-auto max-w-5xl"
        >
          <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-2 shadow-2xl backdrop-blur-sm">
            <div className="rounded-lg border border-gray-800 bg-[#0d1117] overflow-hidden">
              <div className="flex h-8 items-center border-b border-gray-800 bg-[#161b22] px-4">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="mx-auto text-xs text-gray-500 font-mono">~/projects/forgiven/src/main.rs</div>
              </div>
              <div className="p-4 font-mono text-sm leading-relaxed text-gray-300 overflow-x-auto">
                <div className="flex">
                  <div className="text-gray-600 select-none pr-4 text-right w-12">1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10</div>
                  <div>
                    <span className="text-purple-400">use</span> std::sync::Arc;<br/>
                    <span className="text-purple-400">use</span> forgiven_core::editor::Editor;<br/>
                    <span className="text-purple-400">use</span> forgiven_ai::copilot::CopilotClient;<br/>
                    <br/>
                    <span className="text-purple-400">fn</span> <span className="text-blue-400">main</span>() -{'>'} <span className="text-yellow-300">Result</span>&lt;(), Box&lt;<span className="text-purple-400">dyn</span> std::error::Error&gt;&gt; {'{'}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500">// Initialize the AI-native editor</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">let</span> <span className="text-purple-400">mut</span> editor = Editor::new();<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;editor.enable_vim_bindings(<span className="text-indigo-400">true</span>);<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;editor.set_leader_key(<span className="text-green-300">"SPC"</span>);<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<br/>
                  </div>
                </div>
                <div className="mt-4 border-t border-gray-800 pt-2 flex justify-between text-xs text-gray-500">
                  <div className="flex gap-4">
                    <span className="bg-indigo-500/20 text-indigo-300 px-2 rounded">NORMAL</span>
                    <span>src/main.rs</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="flex items-center gap-1"><Sparkles className="h-3 w-3 text-yellow-500" /> Copilot: Ready</span>
                    <span>utf-8</span>
                    <span>Rust</span>
                    <span>10:4</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const features = [
  {
    name: 'AI Native',
    description: 'Built from the ground up with AI in mind. Seamlessly interact with language models directly from your buffer.',
    icon: Cpu,
  },
  {
    name: 'Copilot Empowered',
    description: 'Deep integration with GitHub Copilot for intelligent code completions and suggestions as you type.',
    icon: Sparkles,
  },
  {
    name: 'Ollama Support',
    description: 'Run open-source models locally with Ollama. Keep your code private while still leveraging powerful AI assistance.',
    icon: Box,
  },
  {
    name: 'Spec-Driven Development (SDD)',
    description: 'First-class support for Spec-Driven Development, allowing you to generate and validate code against specifications.',
    icon: Zap,
  },
  {
    name: 'Auto-Janitor & Caveman Mode',
    description: 'Rolling history compression and strict agent brevity constraints prevent context exhaustion and token waste.',
    icon: Minimize,
  },
  {
    name: 'Model Context Protocol',
    description: 'Seamlessly connect to external tools, local datasets, and APIs using the open Model Context Protocol (MCP) standard.',
    icon: Network,
  },
  {
    name: 'Vim Keybindings',
    description: 'Modal editing at its finest. Navigate and edit text with the speed and precision of Vim.',
    icon: Keyboard,
  },
  {
    name: 'Emacs-style Navigation',
    description: 'Spacemacs-style leader key (SPC) system for intuitive, discoverable command execution without complex chords.',
    icon: Command,
  },
  {
    name: 'Zero Telemetry',
    description: 'Your code is your business. Forgiven tracks nothing, logs nothing, and sends absolutely zero telemetry data.',
    icon: Shield,
  },
];

function Features() {
  return (
    <section id="features" className="py-24 bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Everything you need, nothing you don't</h2>
          <p className="mt-4 text-lg text-gray-400">A carefully curated set of features designed for maximum productivity.</p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl border border-gray-800 bg-gray-900/50 p-8 hover:bg-gray-800/50 transition-colors"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">{feature.name}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DocsTeaser() {
  return (
    <section className="py-24 bg-gray-900/30 border-y border-gray-800/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Ready to dive deeper?</h2>
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          Explore the full editor reference, including modal editing, tree-sitter text objects, and a comprehensive keybinding guide.
        </p>
        <Link to="/docs" className="inline-flex h-12 items-center justify-center rounded-lg bg-indigo-600 px-8 text-sm font-medium text-white hover:bg-indigo-500 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-950">
          Browse Documentation <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-950 py-12 border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Terminal className="h-5 w-5 text-indigo-500" />
          <span className="text-lg font-bold text-gray-100">forgiven</span>
        </div>
        <p className="text-sm text-gray-500">
          An AI-first terminal-based IDE. Open source on GitHub.
        </p>
        <div className="flex gap-4">
          <a href="https://github.com/daneb/forgiven" className="text-gray-500 hover:text-gray-300 transition-colors">
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-50 selection:bg-indigo-500/30 font-sans">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <DocsTeaser />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/docs" element={<DocsPage />} />
      </Routes>
    </Router>
  );
}


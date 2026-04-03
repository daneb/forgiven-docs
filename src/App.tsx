/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Terminal, Cpu, Keyboard, Search, FileCode2, Command, Github, BookOpen, Sparkles, Zap, Box, Activity } from 'lucide-react';
import { cn } from './lib/utils';

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
          <a href="#docs" className="text-sm font-medium text-gray-400 hover:text-gray-100 transition-colors">Docs</a>
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
            <a href="#docs" className="inline-flex h-12 items-center justify-center rounded-lg bg-indigo-600 px-8 text-sm font-medium text-white hover:bg-indigo-500 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-950">
              Get Started
            </a>
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
    name: 'Model & Token Management',
    description: 'Real-time token tracking and seamless switching between different AI models and providers on the fly.',
    icon: Activity,
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

function Docs() {
  return (
    <section id="docs" className="py-24 bg-gray-900/30 border-y border-gray-800/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <h2 className="text-2xl font-bold text-white mb-6">Documentation</h2>
              <nav className="space-y-2">
                <a href="#quick-start" className="block px-3 py-2 text-sm font-medium text-indigo-400 bg-indigo-500/10 rounded-md">Quick Start</a>
                <a href="#configuration" className="block px-3 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-md transition-colors">Configuration</a>
                <a href="#keybindings" className="block px-3 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-md transition-colors">Keybindings</a>
                <a href="#architecture" className="block px-3 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-md transition-colors">Architecture</a>
                <a href="#project-structure" className="block px-3 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-md transition-colors">Project Structure</a>
              </nav>
            </div>
          </div>
          
          <div className="lg:col-span-8 prose prose-invert prose-indigo max-w-none">
            <div id="quick-start" className="mb-16">
              <h3 className="text-3xl font-bold text-white mb-4">Quick Start</h3>
              <p className="text-gray-300 mb-4">Get up and running with Forgiven in seconds.</p>
              <div className="bg-[#0d1117] rounded-lg border border-gray-800 p-4 font-mono text-sm text-gray-300 mb-6">
                <span className="text-gray-500"># Clone the repository</span><br/>
                git clone https://github.com/daneb/forgiven.git<br/>
                cd forgiven<br/><br/>
                <span className="text-gray-500"># Build and run</span><br/>
                cargo run --release
              </div>
            </div>

            <div id="configuration" className="mb-16">
              <h3 className="text-3xl font-bold text-white mb-4">Configuration</h3>
              <p className="text-gray-300 mb-4">Forgiven is highly configurable. You can set up context management and optional runtime dependencies.</p>
              
              <h4 className="text-xl font-semibold text-white mb-3 mt-8">Context Management</h4>
              <p className="text-gray-300 mb-4">Forgiven uses a context management system to provide relevant information to the AI models. You can configure which files and directories are included in the context.</p>
              
              <h4 className="text-xl font-semibold text-white mb-3 mt-8">Optional Runtime Dependencies</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li><strong className="text-indigo-300">Ollama:</strong> Required for local model support.</li>
                <li><strong className="text-indigo-300">GitHub Copilot CLI:</strong> Required for Copilot integration.</li>
                <li><strong className="text-indigo-300">Language Servers:</strong> Install the appropriate LSP servers for your languages (e.g., <code className="bg-gray-800 px-1 py-0.5 rounded text-sm">rust-analyzer</code>, <code className="bg-gray-800 px-1 py-0.5 rounded text-sm">tsserver</code>).</li>
              </ul>
            </div>

            <div id="keybindings" className="mb-16">
              <h3 className="text-3xl font-bold text-white mb-4">Keybinding Reference</h3>
              <p className="text-gray-300 mb-6">Forgiven uses a modal editing system inspired by Vim, with an Emacs/Spacemacs style leader key for global commands.</p>
              
              <h4 className="text-xl font-semibold text-white mb-3">Global (Leader Key)</h4>
              <div className="bg-gray-900/50 rounded-lg border border-gray-800 overflow-hidden mb-8">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-800/50 text-gray-300">
                    <tr>
                      <th className="px-4 py-3 font-medium">Key</th>
                      <th className="px-4 py-3 font-medium">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800 text-gray-400">
                    <tr>
                      <td className="px-4 py-3 font-mono text-indigo-300">SPC f f</td>
                      <td className="px-4 py-3">Open file explorer</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-indigo-300">SPC s g</td>
                      <td className="px-4 py-3">Project-wide search</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-indigo-300">SPC a</td>
                      <td className="px-4 py-3">Toggle AI Agent panel</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-indigo-300">SPC m p</td>
                      <td className="px-4 py-3">Markdown preview</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4 className="text-xl font-semibold text-white mb-3">Normal Mode</h4>
              <div className="bg-gray-900/50 rounded-lg border border-gray-800 overflow-hidden">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-800/50 text-gray-300">
                    <tr>
                      <th className="px-4 py-3 font-medium">Key</th>
                      <th className="px-4 py-3 font-medium">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800 text-gray-400">
                    <tr>
                      <td className="px-4 py-3 font-mono text-indigo-300">h, j, k, l</td>
                      <td className="px-4 py-3">Move cursor (left, down, up, right)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-indigo-300">i</td>
                      <td className="px-4 py-3">Enter Insert mode</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-indigo-300">v</td>
                      <td className="px-4 py-3">Enter Visual mode</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-indigo-300">/</td>
                      <td className="px-4 py-3">In-file search</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4 className="text-xl font-semibold text-white mb-3 mt-8">Insert Mode</h4>
              <div className="bg-gray-900/50 rounded-lg border border-gray-800 overflow-hidden">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-800/50 text-gray-300">
                    <tr>
                      <th className="px-4 py-3 font-medium">Key</th>
                      <th className="px-4 py-3 font-medium">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800 text-gray-400">
                    <tr>
                      <td className="px-4 py-3 font-mono text-indigo-300">Esc / Ctrl+c</td>
                      <td className="px-4 py-3">Return to Normal mode</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-indigo-300">Tab</td>
                      <td className="px-4 py-3">Accept Copilot suggestion</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4 className="text-xl font-semibold text-white mb-3 mt-8">File Explorer (SPC f f)</h4>
              <div className="bg-gray-900/50 rounded-lg border border-gray-800 overflow-hidden mb-8">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-800/50 text-gray-300">
                    <tr>
                      <th className="px-4 py-3 font-medium">Key</th>
                      <th className="px-4 py-3 font-medium">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800 text-gray-400">
                    <tr>
                      <td className="px-4 py-3 font-mono text-indigo-300">Enter / l</td>
                      <td className="px-4 py-3">Open file / Expand directory</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-indigo-300">h</td>
                      <td className="px-4 py-3">Collapse directory / Go to parent</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-indigo-300">a / d / r</td>
                      <td className="px-4 py-3">Add / Delete / Rename file</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div id="architecture" className="mb-16">
              <h3 className="text-3xl font-bold text-white mb-4">Architecture</h3>
              <p className="text-gray-300 mb-4">Forgiven is built with Rust for maximum performance and safety. The architecture is designed around a core editor engine with pluggable modules for AI integration, language servers, and UI.</p>
              
              <div className="bg-gray-900/50 rounded-lg border border-gray-800 p-6 mt-6">
                <h4 className="text-lg font-semibold text-white mb-4">Core Components</h4>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-indigo-500 shrink-0"></div>
                    <div>
                      <strong className="text-white block">Editor Engine</strong>
                      Handles buffer management, cursor movement, and modal state (Normal, Insert, Visual).
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-purple-500 shrink-0"></div>
                    <div>
                      <strong className="text-white block">AI Subsystem</strong>
                      Manages communication with Copilot and Ollama, handles prompt generation and response parsing.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-green-500 shrink-0"></div>
                    <div>
                      <strong className="text-white block">LSP Client</strong>
                      Communicates with language servers for diagnostics, completions, and go-to-definition.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-yellow-500 shrink-0"></div>
                    <div>
                      <strong className="text-white block">Terminal UI</strong>
                      Renders the interface using Crossterm and Ratatui for a rich, responsive terminal experience.
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div id="project-structure" className="mb-16">
              <h3 className="text-3xl font-bold text-white mb-4">Project Structure</h3>
              <p className="text-gray-300 mb-4">Forgiven is organized into several modular crates to maintain separation of concerns:</p>
              <div className="bg-[#0d1117] rounded-lg border border-gray-800 p-4 font-mono text-sm text-gray-300 mb-6">
                <div className="text-indigo-400 font-bold mb-2">forgiven/</div>
                <div className="pl-4 border-l border-gray-800 ml-2 space-y-1">
                  <div>├── <span className="text-blue-300">core/</span> <span className="text-gray-500"># Editor engine, buffer management, modes</span></div>
                  <div>├── <span className="text-blue-300">ai/</span> <span className="text-gray-500"># Copilot, Ollama, token tracking, model switching</span></div>
                  <div>├── <span className="text-blue-300">ui/</span> <span className="text-gray-500"># Terminal rendering (Ratatui), components</span></div>
                  <div>├── <span className="text-blue-300">lsp/</span> <span className="text-gray-500"># Language Server Protocol client</span></div>
                  <div>└── <span className="text-blue-300">cli/</span> <span className="text-gray-500"># Command-line interface and entry point</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
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

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-950 text-gray-50 selection:bg-indigo-500/30 font-sans">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <Docs />
        </main>
        <Footer />
      </div>
    </Router>
  );
}


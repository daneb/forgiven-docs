import { useState, useEffect } from 'react';
import { MarkdownRenderer } from '../components/MarkdownRenderer';
import { Menu, X, ChevronRight, Github, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import GithubSlugger from 'github-slugger';

interface Heading {
  id: string;
  text: string;
  level: number;
}

export function DocsPage() {
  const [content, setContent] = useState<string>('');
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://raw.githubusercontent.com/daneb/forgiven/master/README.md')
      .then(res => res.text())
      .then(text => {
        setContent(text);
        
        // Extract headings for sidebar
        const slugger = new GithubSlugger();
        const headingRegex = /^(#{2,3})\s+(.+)$/gm;
        const extracted: Heading[] = [];
        let match;
        
        while ((match = headingRegex.exec(text)) !== null) {
          const level = match[1].length;
          // Remove links or markdown formatting from heading text for the sidebar
          const rawText = match[2].replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/[`*]/g, '');
          const id = slugger.slug(rawText);
          extracted.push({ id, text: rawText, level });
        }
        
        setHeadings(extracted);
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch README", err);
        setContent("# Error\nFailed to load documentation. Please try again later.");
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-50 font-sans flex flex-col">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full border-b border-gray-800/60 bg-gray-950/80 backdrop-blur-md shrink-0">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 -ml-2 text-gray-400 hover:text-white rounded-md hover:bg-gray-800"
            >
              {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            <Link to="/" className="flex items-center gap-2">
              <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/20">
                <Terminal className="h-4 w-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-100 hidden sm:block">forgiven</span>
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/" className="text-sm font-medium text-gray-400 hover:text-gray-100 transition-colors">Home</Link>
            <a href="https://github.com/daneb/forgiven" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-gray-100 transition-colors">
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </div>
      </nav>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside 
          className={`
            fixed inset-y-0 left-0 z-40 w-72 bg-gray-950 border-r border-gray-800 pt-16 transform transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 lg:pt-0 overflow-y-auto
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          `}
        >
          <div className="p-6">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">On this page</h3>
            <nav className="space-y-1">
              {headings.map((heading, index) => (
                <a
                  key={`${heading.id}-${index}`}
                  href={`#${heading.id}`}
                  onClick={() => setSidebarOpen(false)}
                  className={`
                    block py-1.5 text-sm transition-colors hover:text-indigo-400
                    ${heading.level === 2 ? 'text-gray-300 font-medium mt-3' : 'text-gray-500 pl-4'}
                  `}
                >
                  {heading.text}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-gray-950">
          <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
            {isLoading ? (
              <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-500"></div>
              </div>
            ) : (
              <MarkdownRenderer content={content} />
            )}
          </div>
        </main>
      </div>
      
      {/* Mobile sidebar overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black/50 lg:hidden backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}

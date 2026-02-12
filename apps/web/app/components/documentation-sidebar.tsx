'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CodeXml, Github, Mail } from 'lucide-react';

interface SidebarItem {
  title: string;
  href: string;
}

interface SidebarSection {
  key: string;
  title: string;
  items: SidebarItem[];
}

const sections: SidebarSection[] = [
  {
    key: 'getting-started',
    title: 'Getting Started',
    items: [
      { title: 'Introduction', href: '/docs' },
      { title: 'CLI Commands', href: '/docs/cli' },
    ],
  },
  {
    key: 'guides',
    title: 'Guides',
    items: [
      { title: 'NextJs', href: '/docs/guides/nextjs' },
      { title: 'BetterAuth', href: '/docs/guides/betterauth' },
      { title: 'Neon Database', href: '/docs/guides/neon' },
      { title: 'Dodo Payments', href: '/docs/guides/dodo-payments' },
      { title: 'Resend Email Service', href: '/docs/guides/resend' },
      { title: 'Deployment', href: '/docs/guides/deployment' },
      { title: 'Project Structure', href: '/docs/guides/project-structure' },
      { title: 'Environment Variables', href: '/docs/guides/environment-variables' },
      { title: 'Troubleshooting', href: '/docs/guides/troubleshooting' },
    ],
  },
];

const DocumentationSidebar = () => {
  const pathname = usePathname();

  // Helper to normalize paths (remove trailing slash except for root)
  const normalizePath = (path: string) => {
    if (path === '/') return path;
    return path.replace(/\/$/, '');
  };

  // No expand/collapse logic, always show all items

  return (
    <aside className="w-48 min-w-48 sticky top-0 border-r border-neutral-800 backdrop-blur-sm">
      <div className="pr-4 py-2 flex flex-col h-[calc(100vh-52px)]">
        <nav className="space-y-6 flex-1 overflow-y-auto no-scrollbar">
          {(() => {
            // Find the most specific match for the current path among all items
            const currentPath = normalizePath(pathname);
            let activeSectionKey: SidebarSection['key'] | null = null;
            let activeItemIndex = -1;
            let maxMatchLength = -1;
            sections.forEach(section => {
              section.items.forEach((item, idx) => {
                const itemPath = normalizePath(item.href);
                if (
                  currentPath === itemPath ||
                  currentPath.startsWith(itemPath + '/')
                ) {
                  if (itemPath.length > maxMatchLength) {
                    maxMatchLength = itemPath.length;
                    activeSectionKey = section.key;
                    activeItemIndex = idx;
                  }
                }
              });
            });
            
            return sections.map(section => (
              <div key={section.key} className="space-y-2">
                <div className="flex items-center w-full text-left select-none cursor-default">
                  <h3 className="text-xs text-neutral-400">
                    {section.title}
                  </h3>
                </div>
                <ul id={`section-${section.key}`} className="space-y-2">
                  {section.items.map((item, idx) => {
                    const isActive: boolean =
                      section.key === activeSectionKey && idx === activeItemIndex;
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          prefetch={false}
                          title={item.title}
                          className={`flex rounded transition-colors text-sm text-neutral-500 px-1.5 py-0.5 truncate ${
                            isActive
                              ? 'border w-full rounded  bg-neutral-900 border-neutral-800'
                              : 'hover:bg-neutral-800/50'
                          }`}
                        >
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ));
          })()}
        </nav>

        <div className="mt-2 py-4 border-t border-neutral-800">
           <div className="flex items-center w-full text-left select-none cursor-default mb-2">
              <h3 className="text-xs text-neutral-400">
                    Resources
              </h3>
            </div>
       

          <ul className="space-y-2">
            <li>
              <a
                href="https://github.com/ayushtomar/builtstack"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-1.5 py-0.5 rounded text-sm text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/50 transition-colors"
              >
                <Github color="#a1a1a1" size={14} />
                <p className='leading-relaxed'>
                  GitHub
                </p>
              </a>
            </li>

            <li>
              <Link
                href="/examples"
                className="flex items-center gap-2 px-1.5 py-0.5 rounded text-sm text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/50 transition-colors"
              >
                <CodeXml color="#a1a1a1" size={14} />
                <p className='leading-relaxed'>
                  Examples
                </p>
              </Link>
            </li>

            <li>
              <a
                href="mailto:support@builtstack.dev"
                className="flex items-center gap-2 px-1.5 py-0.5 rounded text-sm text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/50 transition-colors"
              >
                <Mail color="#a1a1a1" size={14} />
                <p className='leading-relaxed'>
                  Support
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default DocumentationSidebar;

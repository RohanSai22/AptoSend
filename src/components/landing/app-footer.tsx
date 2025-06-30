
'use client';

import * as React from 'react';
import { WalletCards } from 'lucide-react';

const FooterLinks = ({
  title,
  links,
}: {
  title: string;
  links: string[];
}) => (
  <div>
    <h4 className="font-semibold mb-4">{title}</h4>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link}>
          <a
            href="#"
            className="text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);


export function AppFooter() {
    return (
         <footer className="py-12 border-t bg-card/50">
            <div className="container max-w-screen-2xl grid grid-cols-2 md:grid-cols-5 gap-8 mx-auto px-4">
            <div className="col-span-2 md:col-span-1">
                <div className="flex items-center gap-2">
                <WalletCards className="h-7 w-7 text-primary" />
                <span className="font-bold text-lg">AptoSend</span>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                © {new Date().getFullYear()} AptoSend Inc. <br /> All rights
                reserved.
                </p>
            </div>
            <FooterLinks
                title="Product"
                links={['Features', 'Security', 'Pricing', 'API']}
            />
            <FooterLinks
                title="Company"
                links={['About Us', 'Careers', 'Blog', 'Press']}
            />
            <FooterLinks
                title="Support"
                links={['Help Center', 'Contact Us', 'Status']}
            />
            <FooterLinks
                title="Legal"
                links={['Terms of Service', 'Privacy Policy']}
            />
            </div>
      </footer>
    );
}

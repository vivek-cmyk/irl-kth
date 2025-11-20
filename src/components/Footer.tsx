import { ExternalLink } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-border bg-muted/20 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-6 text-center">
          {/* Main Attribution */}
          <div className="space-y-2">
            <h2 className="text-sm font-semibold text-foreground">
              Innovation Readiness Level (IRL) Framework
            </h2>
            <p className="text-sm text-muted-foreground">
              © KTH Royal Institute of Technology
            </p>
          </div>

          {/* License Section */}
          <div className="flex flex-col items-center space-y-3 text-sm">
            <a
              href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 120 42"
                className="h-6 w-auto"
                aria-hidden="true"
              >
                <g fill="currentColor">
                  {/* CC */}
                  <circle cx="21" cy="21" r="20" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M21,10.5c-5.8,0-10.5,4.7-10.5,10.5s4.7,10.5,10.5,10.5s10.5-4.7,10.5-10.5S26.8,10.5,21,10.5z M21,29 c-4.1,0-7.5-3.4-7.5-7.5s3.4-7.5,7.5-7.5s7.5,3.4,7.5,7.5S25.1,29,21,29z M17.5,21c0,1.9,1.6,3.5,3.5,3.5c0.8,0,1.5-0.3,2.1-0.7 l0.9,1.5c-0.9,0.7-2,1.1-3,1.1c-2.8,0-5-2.2-5-5s2.2-5,5-5c1.1,0,2.1,0.4,3,1.1l-0.9,1.5c-0.6-0.5-1.3-0.7-2.1-0.7 C19.1,17.5,17.5,19.1,17.5,21z"/>
                  {/* BY */}
                  <circle cx="51" cy="21" r="20" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="51" cy="17" r="2.5"/>
                  <path d="M51,20c-2,0-3.5,1.5-3.5,3.5V29h7v-5.5C54.5,21.5,53,20,51,20z"/>
                  {/* NC */}
                  <circle cx="81" cy="21" r="20" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M81,13c-4.4,0-8,3.6-8,8s3.6,8,8,8s8-3.6,8-8S85.4,13,81,13z M81,26c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S83.8,26,81,26z"/>
                  <line x1="75" y1="27" x2="87" y2="15" stroke="currentColor" strokeWidth="2"/>
                  {/* SA */}
                  <circle cx="111" cy="21" r="20" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M111,13l-5,8h10L111,13z M106,23h10v2h-10V23z"/>
                </g>
              </svg>
              <span>Licensed under Creative Commons BY-NC-SA 4.0</span>
              <ExternalLink className="h-3 w-3" />
            </a>

            <div className="flex items-center gap-2 text-xs text-muted-foreground flex-wrap justify-center">
              <span>Non-commercial use</span>
              <span>•</span>
              <span>Share-alike</span>
              <span>•</span>
              <a
                href="https://kthinnovationreadinesslevel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-foreground transition-colors underline"
              >
                Source
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Trademark Notice */}
          <p className="text-xs text-muted-foreground max-w-2xl">
            "Innovation Readiness Level" and "IRL" are trademarks of KTH Royal Institute of Technology.
          </p>
        </div>
      </div>
    </footer>
  );
};

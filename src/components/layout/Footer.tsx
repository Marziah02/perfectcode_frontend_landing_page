import { Link } from "react-router-dom";
import {
  FaDiscord,
  FaReddit,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const footerLinks = {
  company: [
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Brand Media Hub", href: "#" },
  ],
  product: [
    { name: "Pricing", href: "/pricing" },
    { name: "Features", href: "#" },
    { name: "Showcase", href: "/showcase" },
    { name: "Use Cases", href: "/use-cases" },
    { name: "Changelog", href: "#" },
  ],
  resources: [
    { name: "Blog", href: "#" },
    { name: "Videos", href: "#" },
    { name: "Tutorials", href: "#" },
    { name: "Templates", href: "#" },
    { name: "Documentation", href: "#" },
  ],

  legal: [
    { name: "DPA", href: "#" },
    { name: "Cookies", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Platform Rules", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
  community: [
    { icon: FaReddit, name: "Reddit", href: "#" },
    { icon: FaDiscord, name: "Discord", href: "#" },
    { icon: FaLinkedin, name: "LinkedIn", href: "#" },
    { icon: FaYoutube, name: "YouTube", href: "#" },
    { icon: FaInstagram, name: "Instagram", href: "#" },
    { icon: FaTwitter, name: "X (Twitter)", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-slate-border bg-slate-zone">
      <div className="container mx-auto px-6 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 ">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-14 h-14 rounded-lg  flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">
                  <img
                    className="h-full w-14"
                    src="/images/perfectcodelogo.svg"
                    alt="footer."
                  />
                </span>
              </div>
              <span className="font-semibold text-3xl text-foreground">
                PerfectCode <span className="gradient-text">AI</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-base font-normal leading-5 font-Poppins">
              AI App Builder. From Idea to Live App.
            </p>
            {/* <p className="text-muted-foreground text-sm mt-4">
              support@perfectcode.ai
            </p> */}
            <div className="flex items-center gap-2 text-zinc-400 text-base font-normal leading-5 font-Poppins mt-6">
              {/* <img src="/images/call.svg" alt="call" className="h-4 w-4" />
              <a
                href="tel:+447553796307"
                className="hover:text-[#4F46E5] text-zinc-400 text-base font-normal leading-5 font-Poppins"
              >
                +44 7553 796307
              </a> */}
            </div>
            <div className="flex items-center gap-3 text-white/80 mt-3">
              <img
                src="/images/mail_outline.svg"
                alt="mail"
                className="h-4 w-4"
              />
              <a
                href="mailto:info@dialogsyai.com"
                className="text-muted-foreground hover:text-foreground text-base font-normal leading-5 font-Poppins"
              >
                hello@perfectcode.ai
              </a>
            </div>
            <div className="flex items-center gap-3 text-white/80 mt-3">
              <img
                src="/images/mail_outline.svg"
                alt="mail"
                className="h-4 w-4"
              />
              <a
                href="mailto:info@dialogsyai.com"
                className="text-muted-foreground hover:text-foreground text-base font-normal leading-5 font-Poppins"
              >
                support@perfectcode.ai
              </a>
            </div>
            {/* <div className="mt-10 flex items-center justify-start gap-4">
              <img src="/images/soc.svg" alt="SOC 2" className="h-16 w-16" />
              <img
                src="/images/iso.svg"
                alt="ISO 27001"
                className="h-16 w-16"
              />
              <img src="/images/gdp.svg" alt="gdp" className="h-16 w-16" />
            </div> */}
            <div className="bg-[#24273F] inline-flex items-center p-2 pr-5 rounded-md font-sans mt-6">
              <div className="bg-[#FF6154] flex items-center justify-center w-9 h-9 rounded-full text-white font-bold text-2xl mr-2">
                P
              </div>
              <div className=" text-white">
                <p className="uppercase text-[8px] font-bold">FEATURED ON</p>
                <p className="text-xl font-bold mt-[-5px]">Product Hunt</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 xl:gap-10 gap-6">
            {/* Company */}
            <div className="">
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product */}
            <div className="">
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            {/* <div className="w-44">
              <h4 className="font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div> */}

            {/* Legal */}
            <div className="">
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Community */}
            <div className="">
              <h4 className="font-semibold text-foreground mb-4">Community</h4>
              <ul className="space-y-2">
                {footerLinks.community.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground text-sm transition-colors flex items-center gap-2"
                    >
                      <link.icon className="" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 PerfectCode.ai — A product of 10x Galaxy Ltd (UK). All rights
            reserved.
          </p>
          {/* <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div> */}
        </div>
      </div>
      <div className="text-center pt-10 w-full container mx-auto px-6">
        <section className="text-center w-full">
          <img
            className="h-full w-auto opacity-10"
            src="/images/footeroutline.svg"
            alt="footer."
          />
        </section>
      </div>
    </footer>
  );
}

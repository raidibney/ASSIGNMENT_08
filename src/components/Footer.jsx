
import Link from "next/link";
import Image from "next/image";

import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; 

const Footer = () => {
  return (
    <footer className="relative mt-24">
      <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

  
      <div className="absolute inset-0 -z-10 bg-white dark:bg-[#0a0a0b]" />

     
      <div
        className="absolute inset-0 -z-10 bg-linear-to-tr 
        from-blue-500/5 via-transparent to-purple-500/5 
        dark:from-blue-500/10 dark:to-purple-500/10 blur-3xl"
      />

     
      <div className="max-w-7xl mx-auto px-6 py-16">
      
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
  
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="EduStream logo"
                width={32}
                height={32}
                className="dark:brightness-200"
              />
              <h2 className="text-xl font-semibold tracking-tight text-black dark:text-white">
                Skillsphere
              </h2>
            </div>

            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 max-w-xs">
              Empowering learners worldwide with industry-led courses in Tech, Design, and Marketing.
            </p>
            
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <p>Email: support@skillsphere.com</p>
              <p>Phone: +1 (555) 000-LEARN</p>
            </div>
          </div>

         
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
              Explore
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/courses/web-dev" className="hover:text-blue-500 transition">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/courses/design" className="hover:text-blue-500 transition">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/courses/marketing" className="hover:text-blue-500 transition">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

       
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
              Connect With Us
            </h3>
            <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-blue-600 transition group">
                  <span className="p-2 rounded-lg bg-gray-100 dark:bg-white/5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <FaLinkedinIn size={16} />
                  </span>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-black dark:hover:text-white transition group">
                  <span className="p-2 rounded-lg bg-gray-100 dark:bg-white/5 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors">
                    <FaXTwitter size={16} />
                  </span>
                  Twitter / X
                </a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-blue-700 transition group">
                  <span className="p-2 rounded-lg bg-gray-100 dark:bg-white/5 group-hover:bg-blue-700 group-hover:text-white transition-colors">
                    <FaFacebookF size={16} />
                  </span>
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-red-500 transition group">
                  <span className="p-2 rounded-lg bg-gray-100 dark:bg-white/5 group-hover:bg-red-500 group-hover:text-white transition-colors">
                    <FaYoutube size={16} />
                  </span>
                  YouTube
                </a>
              </li>
            </ul>
          </div>

        
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-black dark:text-white">
              Ready to grow?
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              Join 50,000+ students mastering new skills.
            </p>

            <Link
              href="/all-photos"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full 
              bg-blue-600 text-white dark:bg-white dark:text-black 
              text-sm font-medium transition-all duration-200 
              hover:scale-[1.02] hover:shadow-lg"
            >
              Start Learning
            </Link>
          </div>
        </div>

     
        <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

      
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Skillsphere Inc. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-black dark:hover:text-white transition underline-offset-4 hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-black dark:hover:text-white transition underline-offset-4 hover:underline"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

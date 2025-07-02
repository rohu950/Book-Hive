import React from 'react';

function Footer() {
  return (
    <footer className="bg-base-200 text-base-content p-10 rounded shadow-md transition-all dark:bg-gray-900 dark:text-gray-200">
      <div className="flex flex-col items-center space-y-6">
        
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press Kit</a>
        </nav>

        {/* Social Media Icons */}
        <div className="flex gap-6">
          {/* Twitter (Bird Logo) */}
          <a href="#" aria-label="Twitter" className="hover:text-sky-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 
                9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.384 4.482 
                13.945 13.945 0 0 1-10.124-5.138 4.822 4.822 0 0 0-.666 2.475 
                4.92 4.92 0 0 0 2.188 4.1 4.902 4.902 0 0 1-2.229-.616v.062 
                a4.927 4.927 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.224.084 
                4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.104 
                c-.395 0-.787-.023-1.175-.069a13.978 13.978 0 0 0 7.548 2.212 
                c9.057 0 14.01-7.496 14.01-13.986 0-.213-.004-.426-.014-.637A10.012 
                10.012 0 0 0 24 4.557z" />
            </svg>
          </a>

          {/* Facebook */}
          <a href="#" aria-label="Facebook" className="hover:text-blue-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.594 0 0 .594 0 1.325v21.351C0 23.406.594 24 
              1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 
              1.894-4.788 4.659-4.788 1.325 0 2.464.099 
              2.794.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 
              1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116C23.406 
              24 24 23.406 24 22.675V1.325C24 .594 23.406 0 
              22.675 0z" />
            </svg>
          </a>

          {/* YouTube */}
          <a href="#" aria-label="YouTube" className="hover:text-red-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.487 
              3.45.028 5.804 0 12c.028 6.196.487 8.55 
              4.385 8.816 3.599.245 11.626.246 15.23 0 
              3.897-.266 4.356-2.62 4.385-8.816-.029-6.196-.488-8.55-4.385-8.816zM9 
              15.999v-8l8 3.993-8 4.007z" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <aside className="text-sm text-center opacity-80">
          <p>
            &copy; {new Date().getFullYear()} All rights reserved by <span className="font-semibold">ACME Industries Ltd</span>
          </p>
        </aside>
      </div>
    </footer>
  );
}

export default Footer;

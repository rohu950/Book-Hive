import React from 'react';

function Footer() {
  return (
    <footer className="bg-base-200 text-base-content dark:bg-slate-900 dark:text-white px-6 py-10">
      <div className="flex flex-col items-center space-y-6">
        
        {/* Top Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-lg font-medium">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-6">
          {/* Twitter Bird */}
          <a href="#" aria-label="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-current">
              <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 
                9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.384 4.482A13.944 
                13.944 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.574 4.903 4.903 
                0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 
                0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.419 9.867 9.867 0 0 1-6.102 
                2.104c-.395 0-.779-.023-1.158-.067a13.945 13.945 0 0 0 7.548 2.212c9.142 
                0 14.307-7.721 13.995-14.646A9.935 9.935 0 0 0 24 4.557z" />
            </svg>
          </a>

          {/* YouTube */}
          <a href="#" aria-label="YouTube">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-current">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 
                0-3.897.266-4.356 2.62-4.385 8.816.029 
                6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 
                15.23 0 3.897-.266 4.356-2.62 
                4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 
                12.816v-8l8 3.993-8 4.007z" />
            </svg>
          </a>

          {/* Facebook */}
          <a href="#" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-current">
              <path d="M9 8H6v4h3v12h5V12h3.642l.358-4H14V6.333C14 
                5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 
                9 4.615V8z" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm pt-4">
          <p>© {new Date().getFullYear()} All rights reserved by ACME Industries Ltd</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

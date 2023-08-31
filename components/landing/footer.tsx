import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="max-w-6xl mx-auto px-6">
        <div className="py-6 border-t border-gray-100 text-center flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-600 text-sm">
            Powered by{' '}
            <a
              href="https://github.com/brettzky10"
              title="Learn more about how this site was made"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-0.5 text-gray-300 hover:text-sky-700"
            >
              NextJS
            </a>
            , Built by{" "}
            <a
              href="/contact"
              title="Follow the creator on Github"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-0.5 text-gray-300 hover:text-sky-700"
            >
              Brett Linseman
            </a>
          </p>
          <nav className="flex items-center justify-end space-x-3 md:space-x-6">
            <Link href="https://github.com/brettzky10">
              <div className="text-gray-300 hover:text-sky-700 p-1 transition text-sm">
                Github
              </div>
            </Link>
          </nav>
        </div>
      </footer>
  )
}

export default Footer
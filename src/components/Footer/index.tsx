import React from "react";
import Link from "next/link";

interface FooterProps {
  landing?: boolean;
}

function Footer(props: FooterProps) {
  const { landing } = props;

  return (
    <div className="w-full h-1/5 py-12 bg-[#BEBEBE]">
      <div className="w-full h-full flex flex-col md:flex-row items-center justify-center space-y-12 md:space-y-0 md:space-x-96 text-center px-10">
        <p className="text-lg">Made with ❤️ by FH.</p>
        <div
          id="social_media"
          className="flex flex-row justify-between space-x-5 lg:space-x-10"
        >
          {landing && (
            <Link href="/">
              <i className="bi-house-fill text-xl text-gray-800"></i>
            </Link>
          )}
          <Link href="https://github.com/fehernandez12" target="_blank">
            <i className="bi-github text-xl text-gray-800"></i>
          </Link>
          <Link
            href="https://www.linkedin.com/in/felipee-hernandezb/"
            target="_blank"
          >
            <i className="bi-linkedin text-xl text-gray-800"></i>
          </Link>
          <Link href="https://www.instagram.com/defffeater/" target="_blank">
            <i className="bi-instagram text-xl text-gray-800"></i>
          </Link>
          <Link href="https://twitter.com/rae_ein" target="_blank">
            <i className="bi-twitter text-xl text-gray-800"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export { Footer };

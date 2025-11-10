import Image from "next/image";
import logo from "../public/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Logo and Firm Name */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src={logo}
            alt="Amas & Rhod Law logo"
            width={100}
            height={100}
            className="object-contain"
          />
          <h3 className="mt-4 text-2xl font-bold font-garamond tracking-wider leading-tight text-center md:text-left">
            Amas & Rhod Law
          </h3>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col space-y-2">
          <h4 className="text-2xl font-garamond mb-4">Contact Details</h4>
          <address className="not-italic text-lg">
            Emerge Hub No 4 Ayanboye street,
            <br />
            faramobi Ajike street Anthony village,
            <br />
            Lagos, Nigeria.
          </address>
          <p className="mt-4 text-lg">
            Phone:{" "}
            <a href="tel:+2348134642665" className="hover:underline">
              +234 813 464 2665, <br /> +234 913 756 5593
            </a>
          </p>
          <p className="text-lg">
            Email:{" "}
            <a
              href="mailto:info@amasandrhodlaw.com"
              className="hover:underline"
            >
              info@amasandrhodlaw.com, admin@amasandrhodlaw.com
            </a>
          </p>
        </div>

        {/* Office Hours */}
        <div className="flex flex-col space-y-2">
          <h4 className="text-2xl font-garamond mb-4">Office Hours</h4>
          <div className="text-lg">
            <p>Monday to Friday: 9:00 AM – 6:00 PM</p>
            <p>
              Saturdays and Sundays: Closed(Open to retainer clients in
              emergency Only)
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section: Socials and Accessibility */}
      <div className="max-w-6xl mx-auto mt-12 border-t border-gray-500 pt-8 text-center md:text-left">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Social Links */}
          <div>
            <h4 className="text-xl font-garamond mb-4 md:mb-2">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-6 text-2xl">
              <a
                href="https://www.linkedin.com/company/amasandrhodlaw/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-gray-300 focus:text-gray-300"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://x.com/amasandrhodlaw?s=21"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-gray-300 focus:text-gray-300"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/amasandrhodlaw?igsh=MXM4ZDJsY3liZjVmaQ=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-gray-300 focus:text-gray-300"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Whatsapp"
                className="hover:text-gray-300 focus:text-gray-300"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* policy */}
          <div className="mt-6 md:mt-0">
            <a
              href="/policy"
              className="text-lg hover:underline focus:underline"
            >
              Legal Policies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

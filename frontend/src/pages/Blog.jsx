import React from "react";
import { Helmet } from "react-helmet";
const Blog = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <div className="overflow-auto transition-shadow duration-300 bg-white rounded">
          <a aria-label="Article">
            <img
              src="data:image/png;base64,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"
              className="object-contain w-full h-64 rounded"
              alt=""
            />
          </a>
          <div className="py-5">
            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
              10 Nov 2022
            </p>
            <a
              aria-label="Article"
              className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p className="text-2xl font-bold leading-5">
                Difference between SQL and NoSQL?
              </p>
            </a>
            <p className="mb-4 text-gray-700">
              A SQL Database follows a table like structure which can have an
              unlimited number of rows and every data present inside the
              database is properly structured with Predefined Schemas, it is
              basically used to manipulate Relational Databases Management
              Systems.
            </p>
            <p className="mb-4 text-blue-700">
              A NoSQL Database is a Distributed Database where the data is very
              unstructured with Dynamic Schema. Unlike SQL it cannot have
              unlimited rows but it follows a Standard Schema Definition and can
              store all sorts of data models with large distributed data in the
              form of key-value pairs, graph databases, documents or wide-column
              stores.
            </p>
            <div className="flex space-x-4">
              <a
                aria-label="Likes"
                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
              >
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                  >
                    <polyline
                      points="6 23 1 23 1 12 6 12"
                      fill="none"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </div>
                <p className="font-semibold">7.4K</p>
              </a>
              <a
                aria-label="Comments"
                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
              >
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                  >
                    <polyline
                      points="23 5 23 18 19 18 19 22 13 18 12 18"
                      fill="none"
                      strokeMiterlimit="10"
                    />
                    <polygon
                      points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </div>
                <p className="font-semibold">81</p>
              </a>
            </div>
          </div>
        </div>

        <div className="overflow-auto transition-shadow duration-300 bg-white rounded">
          <a aria-label="Article">
            <img
              src="https://i.ytimg.com/vi/K6pwjJ5h0Gg/maxresdefault.jpg"
              className="object-contain w-full h-64 rounded"
              alt=""
            />
          </a>
          <div className="py-5">
            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
              9 Nov 2022
            </p>
            <a
              aria-label="Article"
              className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p className="text-2xl font-bold ">
                What is JWT, and how does it work?
              </p>
            </a>
            <p className="mb-4 text-gray-700">
              JSON Web Token (JWT) is an open standard (RFC 7519) for securely
              transmitting information between parties as JSON object. It is
              compact, readable and digitally signed using a private key/ or a
              public key pair by the Identity Provider(IdP). So the integrity
              and authenticity of the token can be verified by other parties
              involved. The purpose of using JWT is not to hide data but to
              ensure the authenticity of the data. JWT is signed and encoded,
              not encrypted. JWT is a token based stateless authentication
              mechanism. Since it is a client-side based stateless session,
              server doesn't have to completely rely on a datastore(database) to
              save session information.
            </p>
            <p className="mb-4 text-blue-700">
              Basically the identity provider(IdP) generates a JWT certifying
              user identity and Resource server decodes and verifies the
              authenticity of the token using secret salt / public key. User
              sign-in using username and password or google/facebook.
              Authentication server verifies the credentials and issues a jwt
              signed using either a secret salt or a private key. User's Client
              uses the JWT to access protected resources by passing the JWT in
              HTTP Authorization header. Resource server then verifies the
              authenticity of the token using the secret salt/ public key.
            </p>

            <div className="flex space-x-4">
              <a
                aria-label="Likes"
                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
              >
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                  >
                    <polyline
                      points="6 23 1 23 1 12 6 12"
                      fill="none"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </div>
                <p className="font-semibold">72.5K</p>
              </a>
              <a
                aria-label="Comments"
                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
              >
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                  >
                    <polyline
                      points="23 5 23 18 19 18 19 22 13 18 12 18"
                      fill="none"
                      strokeMiterlimit="10"
                    />
                    <polygon
                      points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </div>
                <p className="font-semibold">238</p>
              </a>
            </div>
          </div>
        </div>

        <div className="overflow-auto transition-shadow duration-300 bg-white rounded">
          <a aria-label="Article">
            <img
              src="https://cdn.educba.com/academy/wp-content/uploads/2018/07/Java-Script-vs-Node-JS-1.png"
              className="object-contain w-full h-64 rounded"
              alt=""
            />
          </a>
          <div className="py-5">
            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
              11 Nov 2022
            </p>
            <a
              aria-label="Article"
              className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p className="text-2xl font-bold ">
                What is the difference between javascript and NodeJS?
              </p>
            </a>
            <p className="mb-4 text-gray-700">
              Javascript is a Scripting language. It is mostly abbreviated as
              JS. It can be said that Javascript is the updated version of the
              ECMA script. Javascript is a high-level programming language that
              uses the concept of Oops but it is based on prototype inheritance.
            </p>
            <p className="mb-4 text-blue-700">
              NodeJS is a cross-platform and opensource Javascript runtime
              environment that allows the javascript to be run on the
              server-side. Nodejs allows Javascript code to run outside the
              browser. Nodejs comes with a lot of modules and mostly used in web
              development.
            </p>
            <div className="flex space-x-4">
              <a
                aria-label="Likes"
                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
              >
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                  >
                    <polyline
                      points="6 23 1 23 1 12 6 12"
                      fill="none"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </div>
                <p className="font-semibold">45.5K</p>
              </a>
              <a
                aria-label="Comments"
                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
              >
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                  >
                    <polyline
                      points="23 5 23 18 19 18 19 22 13 18 12 18"
                      fill="none"
                      strokeMiterlimit="10"
                    />
                    <polygon
                      points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </div>
                <p className="font-semibold">38</p>
              </a>
            </div>
          </div>
        </div>

        <div className=" mt-3 overflow-auto transition-shadow duration-300 bg-white rounded">
          <a aria-label="Article">
            <img
              src="data:image/jpeg;base64,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"
              className="object-contain w-full h-64 rounded"
              alt=""
            />
          </a>
          <div className="py-5">
            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
              8 Nov 2022
            </p>
            <a
              aria-label="Article"
              className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p className="text-2xl font-bold ">
                How does NodeJS handle multiple requests at the same time?
              </p>
            </a>
            <p className="mb-4 text-gray-700">
              NodeJS receives multiple client requests and places them into
              EventQueue. NodeJS is built with the concept of event-driven
              architecture. NodeJS has its own EventLoop which is an infinite
              loop that receives requests and processes them. EventLoop is the
              listener for the EventQueue. If NodeJS can process the request
              without I/O blocking then the event loop would itself process the
              request and sends the response back to the client by itself. But,
              it is possible to process multiple requests parallelly using the
              NodeJS cluster module or worker_threads module.
            </p>
            <div className="flex space-x-4">
              <a
                aria-label="Likes"
                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
              >
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                  >
                    <polyline
                      points="6 23 1 23 1 12 6 12"
                      fill="none"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </div>
                <p className="font-semibold">4.5K</p>
              </a>
              <a
                aria-label="Comments"
                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
              >
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                  >
                    <polyline
                      points="23 5 23 18 19 18 19 22 13 18 12 18"
                      fill="none"
                      strokeMiterlimit="10"
                    />
                    <polygon
                      points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </div>
                <p className="font-semibold">377</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

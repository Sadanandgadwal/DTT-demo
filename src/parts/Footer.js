/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import BrandIcon from 'parts/BrandIcon';
import Button from 'elements/Button';

export default function Footer() {
  return (
    <div className="bg-gray-50 border-t border-gray-200 pb-6">
      <div className="container flex-col mx-auto ">
        <div className="flex flex-col sm:flex-row mt-8 justify-center">
          <div className="w-1/3 flex-col ml-16 mr-8">
            <BrandIcon />
            <p className="w-full text-lg text-gray-600 font-light">
              Growing Your Business
              {' '}
              <br />
              Is Our Calling
            </p>
          </div>
          <div className="w-1/3 mt-0 ml-16 mr-0 sm:ml-0 sm:mr-5">
            <h1 className="text-lg text-theme-blue pt-4 pb-2">
              Office
            </h1>
            <p className="text-lg text-gray-600 font-light">
            Mail Id: devindrappa@digital-think.in
            </p>
            <p className="text-lg text-gray-600 font-light">
            Address: No 12, Muneshwara Block, Avalahalli, 3rd Cross, Bengaluru Urban, Karnataka 560027
            </p>
            <p className="text-lg text-gray-600 font-light">
            Contact No:  +91 9449726429
            </p>
          </div>
          <div className="w-1/3 ml-16 sm:ml-0 mt-0">
            <h1 className="text-lg text-theme-blue pt-4 pb-2">
              Social
            </h1>
            <Button href="https://www.instagram.com/racmathafidz/" type="link" target="_blank" className="flex text-lg text-gray-600 font-light hover:underline" isExternal>
              Instagram
            </Button>
            <Button href="https://www.linkedin.com/in/racmat-hafidz-89982a156/" type="link" target="_blank" className="flex text-lg text-gray-600 font-light hover:underline" isExternal>
              LinkedIn
            </Button>
            <Button href="https://github.com/racmathafidz" type="link" target="_blank" className="flex text-lg text-gray-600 font-light hover:underline" isExternal>
              Github
            </Button>
          </div>
        </div>
        <div className="flex-col text-center mt-7">
          <p className="text-lg text-gray-600 font-light">
            Copyright 2023 - All rights reserved -  Digital Think Technologies LLP
          </p>
          
        </div>
      </div>
    </div>
  );
}

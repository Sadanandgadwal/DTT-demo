/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import companylogo from "../assets/images/DDT-T1.png"
import Button from 'elements/Button';

export default function BrandIcon() {
  return (
    <Button
      className=""
      type="link"
      href="/"
    >
      {/* <p className="text-theme-blue text-4xl"> */}
        {/* Digital Think Technologies LLP */}
        {/* <span className="text-theme-purple"></span> */}
      {/* </p> */}
      <img src={companylogo} alt='Digital Think Technologies LLP' class="h-12 w-auto"/>
    </Button>
  );
}

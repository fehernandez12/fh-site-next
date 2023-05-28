import * as React from "react";
import { SVGProps } from "react";
const LoadingSpinner = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={24}
    height={30}
    enableBackground={"new 0 0 50 50"}
    {...props}
  >
    <path fill="#BEBEBE" d="M0 10h4v10H0z" opacity={0.2}>
      <animate
        attributeName="opacity"
        attributeType="XML"
        begin="0s"
        dur="0.6s"
        repeatCount="indefinite"
        values="0.2; 1; .2"
      />
      <animate
        attributeName="height"
        attributeType="XML"
        begin="0s"
        dur="0.6s"
        repeatCount="indefinite"
        values="10; 20; 10"
      />
      <animate
        attributeName="y"
        attributeType="XML"
        begin="0s"
        dur="0.6s"
        repeatCount="indefinite"
        values="10; 5; 10"
      />
    </path>
    <path fill="#BEBEBE" d="M8 10h4v10H8z" opacity={0.2}>
      <animate
        attributeName="opacity"
        attributeType="XML"
        begin="0.15s"
        dur="0.6s"
        repeatCount="indefinite"
        values="0.2; 1; .2"
      />
      <animate
        attributeName="height"
        attributeType="XML"
        begin="0.15s"
        dur="0.6s"
        repeatCount="indefinite"
        values="10; 20; 10"
      />
      <animate
        attributeName="y"
        attributeType="XML"
        begin="0.15s"
        dur="0.6s"
        repeatCount="indefinite"
        values="10; 5; 10"
      />
    </path>
    <path fill="#BEBEBE" d="M16 10h4v10h-4z" opacity={0.2}>
      <animate
        attributeName="opacity"
        attributeType="XML"
        begin="0.3s"
        dur="0.6s"
        repeatCount="indefinite"
        values="0.2; 1; .2"
      />
      <animate
        attributeName="height"
        attributeType="XML"
        begin="0.3s"
        dur="0.6s"
        repeatCount="indefinite"
        values="10; 20; 10"
      />
      <animate
        attributeName="y"
        attributeType="XML"
        begin="0.3s"
        dur="0.6s"
        repeatCount="indefinite"
        values="10; 5; 10"
      />
    </path>
  </svg>
);

export { LoadingSpinner };

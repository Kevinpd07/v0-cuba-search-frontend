"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const NoticiaIcon = ({ className }: { className?: string }) => (
  <div className={`w-15 h-15 ${className}`}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 348.46 338.05"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g id="Capa_2" data-name="Capa 2">
        <g id="Capa_1-2" data-name="Capa 1">
          <path
            d="M76.57,7V280.44a34.9,34.9,0,0,1-69.8,0V59.38h69.8"
            stroke="#005280"
            strokeWidth={13.53}
          />
          <line
            x1="105.69"
            y1="49.98"
            x2="288.32"
            y2="49.98"
            stroke="#c51625"
            strokeWidth={13.53}
          />
          <line
            x1="105.69"
            y1="131.39"
            x2="167.64"
            y2="131.39"
            stroke="#c51625"
            strokeWidth={13}
          />
          <line
            x1="105.69"
            y1="90.68"
            x2="288.32"
            y2="90.68"
            stroke="#c51625"
            strokeWidth={13.53}
          />
          <line
            x1="105.69"
            y1="172.09"
            x2="159.24"
            y2="172.09"
            stroke="#c51625"
            strokeWidth={13}
          />
          <line
            x1="105.69"
            y1="212.79"
            x2="176.72"
            y2="212.79"
            stroke="#c51625"
            strokeWidth={13}
          />
          <line
            x1="105.69"
            y1="253.48"
            x2="213.02"
            y2="253.48"
            stroke="#c51625"
            strokeWidth={13}
          />
          <path
            d="M211.94,123.24A51.08,51.08,0,1,1,193.25,193a51.08,51.08,0,0,1,18.69-69.77Z"
            stroke="#005280"
            strokeWidth={13.53}
          />
          <line
            x1="263.02"
            y1="211.71"
            x2="278.24"
            y2="238.08"
            stroke="#005280"
            strokeWidth={13.53}
          />
          <polygon
            points="312.78 331.29 341.69 314.61 292.69 229.74 263.79 246.42 312.78 331.29 312.78 331.29"
            stroke="#c51625"
            strokeWidth={13.53}
          />
          <polygon
            points="326.71 227.32 326.71 7.02 326.16 226.37 326.71 227.32"
            stroke="#005280"
            strokeWidth={13.53}
          />
          <polygon
            points="326.16 6.75 76.84 6.75 325.09 7.3 326.16 6.75"
            stroke="#005280"
            strokeWidth={13.5}
          />
          <polygon
            points="267.31 313.87 41.67 315.34 268.16 315.34 267.31 313.87"
            stroke="#005280"
            strokeWidth={13.53}
          />
        </g>
      </g>
    </svg>
  </div>
);

const EducacionIcon = ({ className }: { className?: string }) => (
  <div className={`w-15 h-15 ${className}`}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 392 390.14">
      <g id="Capa_2" data-name="Capa 2">
        <g id="Capa_1-2" data-name="Capa 1">
          <path
            d="M282.24,374.54V351.13a7.84,7.84,0,0,0-15.68,0v23.41h-47V351.13a7.84,7.84,0,0,0-15.68,0v23.41h-47V351.13a7.84,7.84,0,0,0-15.68,0v23.41h-47V351.13a7.84,7.84,0,0,0-15.68,0v23.41H15.68V26.64l349.55,347.9Zm107.46,2.28L13.38,2.29A7.84,7.84,0,0,0,0,7.81V382.34a7.82,7.82,0,0,0,7.84,7.8H384.16a7.8,7.8,0,0,0,5.54-13.32Z"
            fill="#025da4"
          />
          <path
            d="M94.08,213.91l83,82.6h-83Zm-7.84,98.2H196a7.8,7.8,0,0,0,5.54-13.32L91.78,189.56a7.84,7.84,0,0,0-13.38,5.51V304.31A7.81,7.81,0,0,0,86.24,312.11Z"
            fill="#c51625"
          />
          <path
            d="M200.52,41.31l15,14.89L182.22,89.3l-15-14.88L159,33ZM361,210.68a23.18,23.18,0,0,1-6.9,16.55c-8.88,8.86-24.36,8.83-33.25,0l-16.63-16.55,33.26-33.1,16.63,16.55A23.21,23.21,0,0,1,361,210.68Zm-34.61-44.13L293.1,199.64l-99.79-99.31,33.26-33.1Zm-174-86.76a7.88,7.88,0,0,0,2.14,4L309.72,238.26a39.32,39.32,0,0,0,55.43,0,38.86,38.86,0,0,0,0-55.17L209.93,28.61a7.78,7.78,0,0,0-4-2.13l-55.42-11a7.85,7.85,0,0,0-7.08,2.14,7.72,7.72,0,0,0-2.14,7Z"
            fill="#c51625"
          />
        </g>
      </g>
    </svg>
  </div>
);

const GobiernoIcon = ({ className }: { className?: string }) => (
  <div className={`w-15 h-15 ${className}`}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 752.95 607.88"
      className="w-full h-full"
    >
      <g id="Capa_2" data-name="Capa 2">
        <g id="Capa_1-2" data-name="Capa 1">
          <path
            d="M217.37,539.14V408.19a9.83,9.83,0,0,1,19.65,0v131a9.83,9.83,0,0,1-19.65,0Z"
            fill="#c51625"
          />
          <path
            d="M316.9,539.14V408.19a9.82,9.82,0,1,1,19.64,0v131a9.82,9.82,0,1,1-19.64,0Z"
            fill="#c51625"
          />
          <path
            d="M416.41,539.14V408.19a9.82,9.82,0,1,1,19.64,0v131a9.82,9.82,0,1,1-19.64,0Z"
            fill="#c51625"
          />
          <path
            d="M515.93,539.14V408.19a9.82,9.82,0,0,1,19.64,0v131a9.82,9.82,0,0,1-19.64,0Z"
            fill="#c51625"
          />
          <path
            d="M386.3,135.39v-24a0,0,0,0,1,.05,0h121a9.87,9.87,0,0,0,9.87-9.88V23a9.87,9.87,0,0,0-9.87-9.88h-121a0,0,0,0,1-.05-.05V10.21A10.08,10.08,0,0,0,377.09,0a9.83,9.83,0,0,0-10.44,9.8V135.39Zm0-102.6a0,0,0,0,1,.05,0h111.2a0,0,0,0,1,.05,0V91.61a0,0,0,0,1-.05,0H386.35a0,0,0,0,1-.05,0Z"
            fill="#025da4"
          />
          <path
            d="M59.24,567.33,59,424.61a0,0,0,0,1,0-.05H96.94V404.91H49.22a9.77,9.77,0,0,0-3.59.62,9.9,9.9,0,0,0-6.35,9.23l.32,152.57Z"
            fill="#025da4"
          />
          <path
            d="M656,424.56h38a0,0,0,0,1,0,.05l-.29,142.72h19.64l.31-152.57a9.89,9.89,0,0,0-6.34-9.23,9.77,9.77,0,0,0-3.59-.62H656Z"
            fill="#025da4"
          />
          <path
            d="M205.92,318.53c14.54-81,85.39-142.77,170.55-142.77s156,61.73,170.56,142.77h19.88c-14.25-88.7-89-157.26-180.57-161.92a156.17,156.17,0,0,0-19.73,0C275.05,161.27,200.29,229.83,186,318.53Z"
            fill="#025da4"
          />
          <path
            d="M752.93,597.45a10.08,10.08,0,0,0-10.19-9.21H635.15a0,0,0,0,1,0,0V359.13a.05.05,0,0,1,0-.05h15.93a10.08,10.08,0,0,0,10.19-9.21,9.83,9.83,0,0,0-9.81-10.43H101.87a10.08,10.08,0,0,0-10.19,9.21,9.83,9.83,0,0,0,9.8,10.43H117.8a.05.05,0,0,1,0,.05V588.19a0,0,0,0,1,0,0H10.21A10.08,10.08,0,0,0,0,597.45a9.82,9.82,0,0,0,9.8,10.43H743.13A9.82,9.82,0,0,0,752.93,597.45Zm-137.48-9.26a0,0,0,0,1-.05,0H137.55a.06.06,0,0,1-.06,0V359.13a.06.06,0,0,1,.06-.05H615.4a.05.05,0,0,1,.05.05Z"
            fill="#025da4"
          />
        </g>
      </g>
    </svg>
  </div>
);

const SaludIcon = ({ className }: { className?: string }) => (
  <div className={`w-15 h-15 ${className}`}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 595.65 452.84"
      className="w-full h-full"
      fill="none"
      strokeLinejoin="round"
    >
      <g>
        <g>
          <path
            d="M268.31,419.09a152.32,152.32,0,0,1-11.65-11.34c-6.2-5.44-6.34-11.7-1.47-17.24,3.56-4.4,8.31-8.08,13.12-11.86V356.29c-.76-.88-1.75-1.81-2.4-2.74-3.54-4.61-2.78-11,.53-16,.54-.81,1.31-1.51,1.87-2.23V303.59c-2.29-2.51-4.75-5-6.84-7.77s-4.47-6.11-6.45-9c-1.36-2.38-.94-2.77-.65-2.93.56-1.6,7.52-5.87,13.94-8.28V249.65c-8.82-3.58-17.48-6.89-25.46-10.72-6.7-3.11-13.1-6.83-17.08-10.41-2-1.81-6-9.52-.91-13.71,4.41-1.76,11.94-.73,16.49.72l.09-.23c9.16,1.27,17.34-2.57,19.12-12,1.58-9.52-2.43-16.05-11.34-17.55v-.31c-10.78-1.81-20.31-2.3-32.68,1.74a33.82,33.82,0,0,0-16.4,12.14A34.61,34.61,0,0,0,194.22,217a68.48,68.48,0,0,0,.15,7.79c.22,2.39,1.41,7.36,2.91,9.84a36.78,36.78,0,0,0,11.4,13.25c8.32,6,16.41,9.27,24.38,12.3,5,1.89,9.9,3.34,14.83,4.92-3.62,2.84-8,6.18-10.64,12.71-2.77,7,.34,14.67,3.59,18.48,2.69,3.16,5,6,7.95,9.21A180.88,180.88,0,0,0,264,320.21a59.67,59.67,0,0,0-8.37,11.9C251.4,340,250.8,351.32,257.5,359a65,65,0,0,0,10.3,9.94c-.34.31-.62.57-.9.88-5.72,5.33-12,10.41-16.72,17.4-2.24,3.46-4.16,7.81-3.51,12.57s4.33,8.29,7,10.67a173.12,173.12,0,0,0,14.65,12.06Z"
            stroke="#c51625"
            strokeWidth={5.74}
          />
          <path
            d="M395.28,198.63a35.71,35.71,0,0,0-16.75-11.91c-12.44-3.88-21.83-3.18-32.73-1.27l.09.31c-8.94,1.66-12.76,8.26-11.09,17.63,2,9.5,10.1,13.18,19.35,11.73v.25c4.64-1.44,12.11-2.64,16.58-.88,5,4.15,1.35,11.91-.74,13.72-3.9,3.83-10.24,7.3-16.8,10.56-7.64,3.81-15.9,7.23-24.39,10.72v25.94c6.4,2.33,12.9,6.26,13.53,7.79.28.15.67.64-.66,2.92-1.89,3-4.27,6.45-6.25,9.14S331,300.43,328.8,303v32.15c.74.88,1.67,1.76,2.32,2.61,3.31,5,4.3,11.36.91,16a35.27,35.27,0,0,1-3.23,3.83v19.83c5.26,3.88,10.47,7.77,14.32,12.48,5.09,5.54,5,11.8-1.08,17.18a162.4,162.4,0,0,1-13.24,13.26v3.1a194.37,194.37,0,0,0,16.3-13.72c2.6-2.32,6.22-5.95,6.79-10.71s-1.42-9.06-3.74-12.53c-4.92-6.83-11.2-11.85-17-17.24-.17-.05-.34-.26-.51-.41a68.53,68.53,0,0,0,9.76-9.74c6.65-7.76,5.86-18.94,1.42-26.89a62,62,0,0,0-8.88-12.09,176.19,176.19,0,0,0,15.3-15.37c2.88-3.19,5.18-6,7.83-9.37,3.14-3.73,6.26-11.5,3.31-18.48-2.54-6.19-6.67-9.37-10.24-12.07,4.76-1.6,9.4-3,14.2-4.91,7.93-3.11,16-6.53,24.11-12.64a38.43,38.43,0,0,0,11.25-13.4,28,28,0,0,0,2.55-9.84,44.48,44.48,0,0,0,.17-7.77A34.88,34.88,0,0,0,395.28,198.63Z"
            stroke="#c51625"
            strokeWidth={5.74}
          />
          <path
            d="M591.46,91.2a10.16,10.16,0,0,0,1.19-1.47c-82.49,0-199.71-45.43-199.71-45.43s-30.28-18.39-53.48,4.33c-16.92,16.72-29.65,29.22-36.32,35.84V55.05c12.1-2.49,21.24-12.76,21.24-25.49a26.58,26.58,0,0,0-53.15,0c0,12.82,9.28,23,21.33,25.49V84.53c-6.68-6.51-19.44-19.07-36.49-35.9-22.95-22.72-53.36-4.33-53.36-4.33S85.43,89.73,3,89.73A6.32,6.32,0,0,0,4.27,91.2c25,1.59,79.44,2.55,133.72-13.43,0,0-51.43,24.8-132.73,14.56,8,8.15,40.51,32.25,127.21,3.31,17.8-5.91,17.8-5.91,6,0,0,0-34.93,20.74-93.83,26.62,0,0,1.73,4.42,8.23,8.66,16-.59,65.86-4.47,114.17-29.31,0,0-42.8,32.53-113.6,29.59,14.2,8.66,49.62,15.79,136-19.94,0,0,10.86-3,3.28,1.47S130.18,140.65,87.1,143.88c0,0,5.15,4.41,16.21,7.52,23.2-4,68.74-13.69,111.2-34.51,0,0-38.53,26.45-109.22,35,20.65,5,59.94,5.83,125.32-26,0,0,8.2-1.67,1.92,1.47-6.08,3.31-47.89,26.17-84,29.73-2.83.37,9.34,4.42,28.35,4.61,16.09-3.81,44.58-12.58,70.89-31.14,0,0-22.35,22.63-64.45,30.95,21.73-.85,50.47-7,76.89-28.18,0,0,21.39,14.23,32.31,19.1V238.3h0v28.35h0v30.6h0V332h0v22.89h0v24.44h0v44.19h0v3.74h0v11h0v.16h0v11.49h10.58V152.45c11-4.95,32.25-19.1,32.25-19.1,26.42,21.16,55.11,27.33,76.84,28.18-41.94-8.32-64.4-30.95-64.4-30.95,26.37,18.56,54.78,27.33,70.91,31.14,19.12-.19,31.11-4.24,28.34-4.61-36-3.56-77.86-26.42-84-29.73-6.17-3.14,2-1.47,2-1.47,65.36,31.83,104.74,31,125.22,26-70.61-8.57-109.1-35-109.1-35,42.34,20.82,87.94,30.52,111.13,34.51,11.15-3.11,16.18-7.52,16.18-7.52-43-3.23-97.7-26.74-105.4-31.15s3.23-1.47,3.23-1.47C492.57,147,528,139.86,542.19,131.2c-70.67,2.94-113.44-29.59-113.44-29.59,48.26,24.84,98,28.72,114,29.31,6.62-4.24,8.32-8.66,8.32-8.66-58.9-5.88-93.86-26.62-93.86-26.62-11.66-5.91-11.66-5.91,5.94,0,86.79,28.94,119.26,4.84,127.35-3.31-81.41,10.24-132.9-14.56-132.9-14.56C512,93.75,566.34,92.79,591.46,91.2Z"
            stroke="#005280"
            strokeWidth={6}
          />
        </g>
      </g>
    </svg>
  </div>
);

const TurismoIcon = ({ className }: { className?: string }) => (
  <div className={`w-15 h-15 ${className}`}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 773.89 648.23"
      className="w-full h-full"
      fill="none"
      strokeLinejoin="round"
    >
      <g>
        <g>
          <path
            d="M501.9,630.43C452.19,618,422,655.33,339.76,636s-166.24,28.38-175.62,0,65.88-9.81,105.2-37.5,82.57-25.82,82.57-25.82A50.94,50.94,0,0,1,364,569.52c0-1.62,0-3.28-.06-5q-.16-3.25-.35-6.7c-.24-4.59-.5-9.43-.76-14.47-1-10-1.75-21-3.52-32.44-.39-2.88-.79-5.79-1.19-8.75s-1-5.89-1.55-8.9c-1.09-6-2.07-12.17-3.54-18.34s-2.61-12.55-4.38-18.84-3.22-12.79-5.26-19.15q-1.44-4.81-2.9-9.66c-1-3.23-2.15-6.39-3.22-9.61s-2.21-6.43-3.31-9.65l-3.66-9.55c-4.82-12.78-10.43-25.26-16.15-37.49-6-12.08-12.07-23.94-18.64-35-6.42-11.21-13.21-21.7-19.84-31.55s-13.37-18.85-19.78-27L270.13,255c7.47,7.77,15.3,16.47,23.28,25.94s16.08,19.75,23.95,30.79c8,10.93,15.66,22.7,23.24,34.82,7.32,12.26,14.57,24.89,21,37.94l4.9,9.77,4.56,9.92c1.49,3.32,3.08,6.59,4.47,9.94s2.77,6.68,4.14,10c2.86,6.62,5.23,13.36,7.7,20S392,457.42,394.17,464s4,13.06,5.81,19.44c.88,3.2,1.83,6.35,2.64,9.49l2.25,9.34c3.16,12.28,5.19,24.07,7.36,34.94.72,4.67,1.4,9.17,2.07,13.49,1.36-6.39,2.8-13.14,4.74-20.09.59-2.24,1.19-4.52,1.79-6.82s1.38-4.58,2.08-6.91c1.43-4.66,2.8-9.43,4.55-14.17s3.27-9.63,5.25-14.44,3.75-9.73,5.94-14.54l3.19-7.28c1.07-2.43,2.29-4.8,3.43-7.21l3.49-7.21,3.73-7.09c4.95-9.47,10.46-18.62,16-27.5,5.74-8.77,11.51-17.29,17.56-25.19s12.09-15.35,18-22.21l12.79,10.14c-5,7.12-10.15,14.71-15,22.83s-9.62,16.64-14.2,25.41c-4.38,8.88-8.68,17.95-12.4,27.25l-2.82,6.95-2.58,7c-.83,2.34-1.74,4.65-2.5,7s-1.52,4.7-2.28,7c-1.59,4.64-2.82,9.35-4.14,14s-2.38,9.24-3.5,13.75-2,9-2.86,13.4c-.43,2.19-.9,4.35-1.27,6.5s-.68,4.29-1,6.39c-1.47,8.38-2.18,16.4-3.07,23.74-.26,3.69-.52,7.23-.77,10.6,0,.53-.08,1-.11,1.57,17,3.13,31.95,7.43,40.92,12.57,27.76,15.91,48.5-1.59,101.84,23S551.6,642.85,501.9,630.43Z"
            stroke="#005280"
            strokeWidth={6}
          />
          <path
            d="M225.36,207.53l25.89,27.05-11.48,11.63-23.6-24.71-9.55-5.41s9.35,50.7,8,52.27-22.27-21.31-22.27-21.31l14.22,56.26L182.06,284l24.56,62.61-25.09-13.57L214.67,391,192,377.92,220.46,426C129,381.69,164.12,275.17,164.12,275.17L156,255.1,139.2,302.8l-4.59-45.4L105.36,332l-3.13-48L81.71,352.86l-6.09-31.81L61.74,379.32c-30.58-97.21,58.75-143.83,58.75-143.83v-21.4l-48.7,36L82.4,224.58l-47,35.32,3.93-13.15L3,278.56c50-103,134.71-86.38,134.71-86.38l6.21-19.94L97,182.91l9.39-13.77-44.89,9.09,16.72-16.72L33.51,174.57c69-57.79,139.56-1.62,139.56-1.62S117.5,67.9,192.56,3l-10,35.79,14.08-5.74L176.32,92.53,197.19,77.4l-10.44,60L194.87,159S216.15,34.48,327.45,10.81L279.1,40.88l25.56,2.61L252,77.92l36.89-6L234.29,115v19.52S317.66,51.1,412.38,94.77l-59.72,3.5,25.57,10.43-72,7.31,31.83,11.44-63.48,10,40.55,11.4-67.56,12.08-2.84,11.36s153.22-25.8,179.1,56l-55-33.48s18.49,30.41,17.88,29.79-55.45-37.09-55.45-37.09l12.4,28-50.48-25.9,22.43,28.57-56.87-28.57s11.44,29.82,10.44,26.51-39.13-21.3-39.13-21.3Z"
            stroke="#c51625"
            strokeWidth={6}
          />
          <path
            d="M548.53,317.76l-25.89,27.05,11.47,11.63,23.61-24.71,9.55-5.41s-9.35,50.7-8,52.26,22.26-21.3,22.26-21.3l-14.21,56.26,24.56-19.31-24.56,62.61,25.08-13.56-33.13,57.91,22.7-13-28.49,48.06c91.51-44.29,56.33-150.82,56.33-150.82l8.16-20.06L634.69,413l4.58-45.39,29.26,74.6,3.13-48,20.52,68.85,6.09-31.8,13.88,58.27c30.57-97.22-58.75-143.84-58.75-143.84v-21.4l48.7,36-10.62-25.51,47,35.32L734.57,357l36.32,31.82c-50-103-134.71-86.38-134.71-86.38L630,282.47l46.9,10.67-9.39-13.77,44.89,9.09-16.71-16.72,44.72,13.06c-69-57.79-139.56-1.62-139.56-1.62s55.57-105-19.49-169.95l10,35.79-14.09-5.74,20.35,59.48L576.7,187.63l10.43,60L579,269.23S557.74,144.71,446.44,121l48.35,30.06-25.57,2.61,52.7,34.44L485,182.09l54.58,43.1v19.53s-68.89-51.41-100.59-35l28.65,16.49-31.83,11.45,63.48,9.95L458.76,259l67.56,12.08,2.84,11.37s-133-4.25-158.88,31.75l34.77-9.2,37.56-7.31-12.39,28,50.48-25.9-22.43,28.57,56.86-28.57s-11.43,29.82-10.43,26.51S543.83,305,543.83,305Z"
            stroke="#c51625"
            strokeWidth={6}
          />
        </g>
      </g>
    </svg>
  </div>
);

const CulturaIcon = ({ className }: { className?: string }) => (
  <div className={`w-15 h-15 ${className}`}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 291.64 356.86"
      className="w-full h-full"
    >
      <g id="Capa_2" data-name="Capa 2">
        <g id="Capa_1-2" data-name="Capa 1">
          <path
            d="M231.6,305.87c-25.2,0-42.89-16.53-42.89-25.49s17.69-25.49,42.89-25.49,42.89,16.54,42.89,25.49S256.8,305.87,231.6,305.87ZM60,339.86c-25.2,0-42.88-16.53-42.88-25.49S34.84,288.88,60,288.88s42.89,16.54,42.89,25.49S85.25,339.86,60,339.86ZM288.5,1.92A8.65,8.65,0,0,0,281.38.16l-171.55,34a8.5,8.5,0,0,0-6.9,8.33V285.93a73.16,73.16,0,0,0-42.89-14c-30.86,0-60,20.64-60,42.48s29.18,42.49,60,42.49,60.05-20.65,60.05-42.49V49.44l154.4-30.58V252a73.21,73.21,0,0,0-42.89-14c-30.87,0-60,20.65-60,42.48s29.18,42.49,60,42.49,60-20.65,60-42.49V8.49A8.49,8.49,0,0,0,288.5,1.92Z"
            fill="#025da4"
          />
          <path
            d="M60,339.86c-25.2,0-42.88-16.53-42.88-25.49S34.84,288.88,60,288.88s42.89,16.54,42.89,25.49S85.25,339.86,60,339.86Zm42.89-53.93a73.16,73.16,0,0,0-42.89-14c-30.86,0-60,20.64-60,42.48s29.18,42.49,60,42.49,60.05-20.65,60.05-42.49C120.09,306.86,113.92,293.15,102.93,285.93Z"
            fill="#c51625"
          />
          <path
            d="M231.6,305.87c-25.2,0-42.89-16.53-42.89-25.49s17.69-25.49,42.89-25.49,42.89,16.54,42.89,25.49S256.8,305.87,231.6,305.87ZM274.49,252a73.21,73.21,0,0,0-42.89-14c-30.87,0-60,20.65-60,42.48s29.18,42.49,60,42.49,60-20.65,60-42.49C291.64,272.87,285.47,259.17,274.49,252Z"
            fill="#c51625"
          />
        </g>
      </g>
    </svg>
  </div>
);

const categories = [
  { icon: NoticiaIcon, label: "Noticias", color: "text-primary" },
  { icon: EducacionIcon, label: "Educación", color: "text-secondary" },
  { icon: GobiernoIcon, label: "Gobierno", color: "text-accent" },
  { icon: SaludIcon, label: "Salud", color: "text-primary" },
  { icon: TurismoIcon, label: "Turismo", color: "text-secondary" },
  { icon: CulturaIcon, label: "Cultura", color: "text-accent" },
];

const categoryData: Record<
  string,
  {
    title: string;
    items: { text: string; url: string }[];
  }
> = {
  Noticias: {
    title: "Noticias Recientes",
    items: [
      {
        text: "Nuevas regulaciones para el sector energético",
        url: "https://www.granma.cu",
      },
      {
        text: "Avances en la infraestructura de transporte público",
        url: "https://www.cubadebate.cu",
      },
      {
        text: "Eventos climáticos y medidas de prevención",
        url: "https://www.acn.cu",
      },
      {
        text: "Actualizaciones en el mercado laboral",
        url: "https://www.trabajadores.cu",
      },
    ],
  },
  Educación: {
    title: "Noticias de Educación",
    items: [
      {
        text: "Nuevas becas disponibles para universidades públicas",
        url: "https://www.uh.cu",
      },
      {
        text: "Programa de alfabetización digital en zonas rurales",
        url: "https://www.mined.gob.cu",
      },
      {
        text: "Reforma curricular 2026 implementada",
        url: "https://www.cubadebate.cu",
      },
      {
        text: "Convocatoria para intercambios estudiantiles",
        url: "https://www.uh.cu",
      },
    ],
  },
  Gobierno: {
    title: "Información Gubernamental",
    items: [
      {
        text: "Anuncio de nuevo plan de vivienda social",
        url: "https://www.gob.cu",
      },
      {
        text: "Actualización de trámites en línea disponibles",
        url: "https://www.gob.cu",
      },
      {
        text: "Presupuesto anual del sector público 2026",
        url: "https://www.cubadebate.cu",
      },
      {
        text: "Iniciativa de gobierno abierto y transparencia",
        url: "https://www.gob.cu",
      },
    ],
  },
  Salud: {
    title: "Noticias de Salud",
    items: [
      {
        text: "Campaña nacional de vacunación iniciada",
        url: "https://www.salud.gob.cu",
      },
      {
        text: "Nuevo hospital inaugurado en provincia occidental",
        url: "https://www.acn.cu",
      },
      {
        text: "Programa de salud mental en centros educativos",
        url: "https://www.salud.gob.cu",
      },
      {
        text: "Resultados del informe de calidad hospitalaria",
        url: "https://www.granma.cu",
      },
    ],
  },
  Turismo: {
    title: "Información Turística",
    items: [
      {
        text: "Festival de verano en Varadero - agenda completa",
        url: "https://www.cubatravel.tur.cu",
      },
      {
        text: "Nuevas rutas aéreas internacionales anunciadas",
        url: "https://www.granma.cu",
      },
      {
        text: "Guía de patrimonio cultural para visitantes",
        url: "https://www.cubatravel.tur.cu",
      },
      {
        text: "Promociones en hoteles para temporada alta",
        url: "https://www.acn.cu",
      },
    ],
  },
  Cultura: {
    title: "Eventos Culturales",
    items: [
      {
        text: "Feria Internacional del Libro - programa oficial",
        url: "https://www.cubadebate.cu",
      },
      {
        text: "Concierto sinfónico en el Teatro Nacional",
        url: "https://www.granma.cu",
      },
      {
        text: "Exposición de arte contemporáneo inaugurada",
        url: "https://www.cubadebate.cu",
      },
      {
        text: "Taller de danza folclórica para todas las edades",
        url: "https://www.acn.cu",
      },
    ],
  },
};

export function QuickCategories() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-3xl mx-auto mt-12"
      >
        {categories.map((category, index) => (
          <motion.button
            key={category.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 + index * 0.1 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(category.label)}
            className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
          >
            <category.icon
              className={`w-8 h-8 ${category.color} group-hover:scale-110 transition-transform`}
            />
            <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
              {category.label}
            </span>
          </motion.button>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCategory(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border border-border rounded-2xl shadow-2xl w-full max-w-lg mx-4 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-foreground">
                  {categoryData[selectedCategory]?.title}
                </h2>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="p-1 rounded-lg hover:bg-muted transition-colors"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>

              <ul className="space-y-3">
                {categoryData[selectedCategory]?.items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                    >
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0 group-hover:scale-125 transition-transform" />
                      <span className="text-sm text-foreground leading-relaxed group-hover:text-primary transition-colors">
                        {item.text}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

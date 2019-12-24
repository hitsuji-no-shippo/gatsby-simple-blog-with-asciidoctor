import React from "react";
import PropTypes from 'prop-types';

const SunIcon = ({fill}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16pt"
      height="16pt"
      viewBox="0 0 16 16"
      fill={fill}
    >
      <path
        fillRule="evenodd"
        d="M5.074 15.063l-1.12-3.016-3.017-1.121L2.274 8 .937 5.074l3.016-1.12L5.074.936 8 2.274 10.926.937l1.12 3.016 3.017 1.121L13.726 8l1.335 2.926-3.015 1.12-1.121 3.017L8 13.726zM8 12.258l2.176.996.836-2.242 2.242-.836L12.258 8l.996-2.176-2.242-.836-.836-2.242L8 3.742l-2.176-.996-.836 2.242-2.242.836L3.742 8l-.996 2.176 2.242.836.836 2.242zm0-.926a3.333 3.333 0 11.001-6.665A3.333 3.333 0 018 11.332zM8 10a1.999 1.999 0 100-4 1.999 1.999 0 100 4zm0 0"
        />
    </svg>
  );
}

SunIcon.propTypes = {
  fill: PropTypes.string.isRequired,
}

export default SunIcon;
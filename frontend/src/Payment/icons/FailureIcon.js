const FailureIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="100"
      width="100"
      viewBox="0 0 48 48"
      aria-hidden="true"
    >
      <circle fill="#FF0000" cx="24" cy="24" r="22" />
      <path
        fill="none"
        stroke="#FFF"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M14 14L34 34M14 34L34 14"
      />
    </svg>
  );
};

export default FailureIcon;

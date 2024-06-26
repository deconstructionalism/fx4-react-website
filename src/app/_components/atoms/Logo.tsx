interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  // JSX

  return (
    <svg className={className} x="0px" y="0px" viewBox="0 0 1156.6 773.3">
      <g fill="black">
        <path d="M365.2,147.9V61.7H131.1H45v86.2v92.5v86v178.7h86V326.4h234.1v-86H131.1v-92.5H365.2z" />
        <path d="M1025.4,61.7v178.7H877.5V61.7h-86v178.7v34.7v51.3h233.9v178.7h86.2V61.7L1025.4,61.7L1025.4,61.7z" />
        <path d="M363.2,557.6H210.8v-52.8h151.9v-50.7H210.8H154v50.7v52.8v50.7v103.3h56.8V608.3h152.5L363.2,557.6z" />
        <path d="M557.1,638.5v-37.1h-108v-36h107.6v-37.1H449.1h-41.4v37.1v36v37.1v36v37.1h41.4h108v-37.1h-108v-36H557.1z" />
        <path
          d="M754.8,638v-37.3h-0.4h-41.4h-66.8v-36.2h108.2v-37.3H646.2h-41.5v37.3v36.2v31.4v6.1h108.4v36.2H604.7v37.3h150.1v-37.3
		h-0.4v-36.2h0.4V638z"
        />
        <path d="M1001.4,452.7h-77.1h-56.9h-75.9v51h75.9v208h56.9v-208h77.1V452.7z" />
        <path d="M754.8,62.9h-102L581,192l-71.8-129H403.6l124.6,223.8L407.4,504h101.8l70-125.7l70,125.7h105.6L632,283.4L754.8,62.9z" />
      </g>
    </svg>
  );
};

export default Logo;

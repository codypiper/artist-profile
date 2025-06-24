interface HamburgerProps {
  isOpen: boolean;
  toggle: () => void;
  label: string;
}

const Hamburger: React.FC<HamburgerProps> = ({ isOpen, toggle, label }) => (
  <button
    type="button"
    onClick={toggle}
    aria-label={label}
    aria-expanded={isOpen}
    aria-controls="mobile-nav"
    className="hover:drop-shadow-glow flex h-6 w-6 cursor-pointer flex-col items-center justify-center gap-[7px] transition duration-300"
  >
    <span
      className={`block h-px w-full origin-center transform bg-white transition duration-300 ease-in-out ${
        isOpen ? "translate-y-1 rotate-45" : ""
      }`}
    />
    <span
      className={`block h-px w-full origin-center transform bg-white transition duration-300 ease-in-out ${
        isOpen ? "-translate-y-1 -rotate-45" : ""
      }`}
    />
  </button>
);

export default Hamburger;

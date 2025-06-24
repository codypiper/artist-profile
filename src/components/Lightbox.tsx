import Image from "next/image";
import LightboxComponent, {
  type LightboxExternalProps,
  type RenderSlideProps,
} from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

const renderSlide = ({ slide, rect }: RenderSlideProps) => (
  <div className="relative flex h-full w-full items-center justify-center">
    <Image
      src={slide.src}
      alt={slide.alt || ""}
      loading="eager"
      width={slide.width}
      height={slide.height}
      className="object-contain"
      style={{ maxWidth: rect.width, maxHeight: rect.height }}
    />
  </div>
);

const Lightbox: React.FC<LightboxExternalProps> = (props) => (
  <LightboxComponent
    render={{ slide: renderSlide }}
    plugins={[Zoom]}
    {...props}
  />
);

export default Lightbox;

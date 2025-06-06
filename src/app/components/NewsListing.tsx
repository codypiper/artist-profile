interface NewsListingProps {
  heading: string;
  children: React.ReactNode;
}

const NewsListing = ({ heading, children }: NewsListingProps) => (
  <li className="after:border-white/dim mx-6 flex flex-col items-center gap-3 pt-10 after:mt-7 after:w-96 after:border-b">
    <h2 className="drop-shadow-dark text-center text-2xl font-semibold">
      {heading}
    </h2>
    {children}
  </li>
);

export default NewsListing;

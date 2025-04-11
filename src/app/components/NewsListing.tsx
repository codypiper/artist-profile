interface NewsListingProps {
  heading: string;
  content: React.ReactNode;
}

const NewsListing = ({ heading, content }: NewsListingProps) => (
  <li className="mx-6 flex flex-col items-center gap-3 pt-10 italic after:mt-7 after:w-96 after:border-b after:border-dim">
    <h2 className="text-center text-2xl font-semibold drop-shadow-dark">
      {heading}
    </h2>
    {content}
  </li>
);

export default NewsListing;

import { SelectedPage } from "./constants/selectedPage";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  // Explicitly type the event
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setSelectedPage(lowerCasePage);
  };

  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-primary-500" : ""
      } py-2 font-semibold transition duration-500 hover:underline hover:underline-offset-8`}
      href={`#${lowerCasePage}`}
      onClick={handleClick} // Use the typed handleClick
    >
      {page}
    </AnchorLink>
  );
};

export default Link;

import Footer from "components/footer/Footer";
import Header, { HeaderProps } from "components/header/Header";
import { PropsWithChildren } from "react";

const BaseLayout = ({
  search = false,
  children,
}: PropsWithChildren<HeaderProps>) => {
  return (
    <>
      <Header search={search} />
      {children}
      <Footer />
    </>
  );
};

export default BaseLayout;

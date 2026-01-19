import { ProductProvider } from "./ProductContext";
import { TeamProvider } from "./TeamContext";

const AppProvider = ({ children }) => {
  return (
    <ProductProvider>
      <TeamProvider>{children}</TeamProvider>
    </ProductProvider>
  );
};

export default AppProvider;

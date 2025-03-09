import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Navigate } from "react-router-dom"; // Added for navigation handling
import { SIMPLE_DELAYS } from "src/Data/globalVariables";
import { productsData } from "src/Data/productsData";
import { updateLoadingState } from "src/Features/loadingSlice";
import useScrollOnMount from "src/Hooks/App/useScrollOnMount";
import useUpdateLoadingOnSamePage from "src/Hooks/App/useUpdateLoadingOnSamePage";
import useGetSearchParam from "src/Hooks/Helper/useGetSearchParam";
import PagesHistory from "../Shared/MiniComponents/PagesHistory/PagesHistory";
import ProductDetails from "./ProductDetails/ProductDetails"; // Ensure correct import
import s from "./ProductDetailsPage.module.scss";
import RelatedItemsSection from "./RelatedItemsSection/RelatedItemsSection";

const ProductDetailsPage = () => {
  const { t } = useTranslation();
  const PRODUCT_NAME = useGetSearchParam("product")?.trim().toLowerCase(); // Ensure trimmed & lowercase

  console.log("🔍 Searching for Product:", PRODUCT_NAME);

  // Find the product in the database
  const PRODUCT_DATA = productsData.find(
    (product) => product?.name?.trim().toLowerCase() === PRODUCT_NAME
  );

  // If no product found, navigate to "Not Found" page
  if (!PRODUCT_DATA) {
    console.error("❌ Product not found:", PRODUCT_NAME);
    return <Navigate to="/product-not-found" />;
  }

  console.log("✅ Product found:", PRODUCT_DATA);

  // Format product category key for translation
  const productCategory = PRODUCT_DATA?.category?.toLowerCase();
  const productCategoryTrans = t(`categoriesData.${productCategory}`, productCategory);

  // Format product name key for translation
  const productNameKey = PRODUCT_DATA?.name.replace(/\s+/g, "").toLowerCase();
  const productNameTrans = t(`products.${productNameKey}.shortName`, PRODUCT_DATA?.shortName);

  console.log("🔹 Translation Key Used:", `products.${productNameKey}.shortName`);
  console.log("📝 Translated Product Name:", productNameTrans);

  // Breadcrumb navigation
  const history = [
    t("history.account"),
    productCategoryTrans,
    productNameTrans,
  ];
  const historyPaths = [
    { index: 0, path: "/profile" },
    { index: 1, path: `/category?type=${PRODUCT_DATA?.category}` },
  ];

  useUpdateLoadingOnSamePage({
    loadingKey: "loadingProductDetails",
    actionMethod: updateLoadingState,
    delays: SIMPLE_DELAYS,
    dependencies: [PRODUCT_NAME],
  });

  useScrollOnMount(200);

  return (
    <>
      <Helmet>
        <title>{productNameTrans || "Product Details"}</title>
        <meta
          name="description"
          content={PRODUCT_DATA?.description || "Explore the product details."}
        />
      </Helmet>
  
      <div className="container">
        <main className={s.detailsPage}>
          <PagesHistory history={history} historyPaths={historyPaths} />
          <ProductDetails productData={PRODUCT_DATA} />
          <RelatedItemsSection
            productType={PRODUCT_DATA?.category}
            currentProduct={PRODUCT_DATA}
          />
        </main>
      </div>
    </>
  );
};

export default ProductDetailsPage;

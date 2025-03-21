import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { updateProductsState } from "src/Features/productsSlice";
import useOnlineStatus from "src/Hooks/Helper/useOnlineStatus";
import SkeletonProductDetails from "../../Shared/SkeletonLoaders/DetailsPage/SkeletonProductDetails";
import ProductPreview from "../ProductPreview/ProductPreview";
import ProductColorsSection from "./ProductColorsSection/ProductColorsSection";
import ProductDealingControls from "./ProductDealingControls/ProductDealingControls";
import s from "./ProductDetails.module.scss";
import ProductFeatures from "./ProductFeatures/ProductFeatures";
import ProductFirstInfos from "./ProductFirstInfos/ProductFirstInfos";
import ProductSizes from "./ProductSizes/ProductSizes";

const ProductDetails = ({ productData }) => {
  console.log("Product Data in ProductDetails:", productData);

  if (!productData) return <Navigate to="/product-not-found" />;

  const { loadingProductDetails } = useSelector((state) => state.loading);
  const { previewImg, isZoomInPreviewActive } = useSelector(
    (state) => state.global
  );
  const dispatch = useDispatch();
  const zoomInImgRef = useRef();
  const isWebsiteOnline = useOnlineStatus();
  const activeClass = isZoomInPreviewActive ? s.active : "";

  function handleZoomInEffect(e) {
    const imgRect = e.target.getClientRects()[0];
    const xPosition = e.clientX - imgRect.left;
    const yPosition = e.clientY - imgRect.top;
    const positions = `-${xPosition * 2}px, -${yPosition * 2}px`;

    if (zoomInImgRef.current) {
      zoomInImgRef.current.style.transform = `translate(${positions})`;
    }
  }

  useEffect(() => {
    if (productData) {
      dispatch(updateProductsState({ key: "selectedProduct", value: productData }));
    }
  }, [productData, dispatch]);

  return (
    <>
      {!loadingProductDetails && isWebsiteOnline && (
        <section className={s.detailsSection} id="details-section">
          <ProductPreview
            productData={productData}
            handleZoomInEffect={handleZoomInEffect}
          />

          <section className={s.details}>
            <div className={`${s.zoomInPreview} ${activeClass}`}>
              <img src={previewImg} alt="product preview" ref={zoomInImgRef} />
            </div>

            <ProductFirstInfos productData={productData} />

            {/* ✅ Product Description Section */}
            {productData?.description && (
              <section className={s.productInfo}>
                <h2 className={s.items}>{productData.name}</h2>
                <p className={s.productDescription}>{productData.description}</p>
              </section>
            )}

            <div className={s.horizontalLine} />

            <ProductColorsSection productData={productData} />
            {productData?.sizes && <ProductSizes productData={productData} />}
            <ProductDealingControls productData={productData} />
            <ProductFeatures />
          </section>
        </section>
      )}

      {(loadingProductDetails || !isWebsiteOnline) && (
        <SkeletonProductDetails />
      )}
    </>
  );
};

export default ProductDetails;

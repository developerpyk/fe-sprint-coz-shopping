import "./product.css";

export default function Product(props) {
  const { information } = props
  const { title,
    sub_title: subTitle,
    image_url: imageUrl,
    brand_image_url: brandImagaUrl,
    type,
    price,
    discountPercentage,
    follower,
    brand_name: brandName } = information

  const formattedPrice = price ? Number(price).toLocaleString() : null;
  const formattedFollower = follower ? Number(follower).toLocaleString() : null;
  

  return (
  <div className="product-container">
    <div className="img-wrapper">
      <img src={imageUrl ?? brandImagaUrl} />
    </div>
    <div className={`info-wrapper &{type}-type`}>
      {type === "Product" ?
        (<>
          <div className="product-wrapper">
            <h4 className="product-title">{title}</h4>
            <p className="product-discount">{discountPercentage}%</p>
          </div>
          {formattedPrice && <p className="product-price">{formattedPrice}원</p>}
        </>
        ) : (type === "Category" || type === "Exhibition" || type === "Brand")}

      {type === "Category" ?
        (<>
          <h4 className="category-title"># {title}</h4>
        </>
        ) : (type === "Category" || type === "Exhibition" || type === "Brand")}

      {type === "Exhibition" ?
        (<>
          <h4 className="exhibition-title">{title}</h4>
          <p className="exhibition-sub-title">{subTitle}</p>
        </>
        ) : (type === "Category" || type === "Exhibition" || type === "Brand")}

      {type === "Brand" ?
        (<>
        <div className="brand-wrapper">
          <h4 className="brand-title">{brandName}</h4>
          <p className="follower">관심고객수</p>
        </div>
          {formattedFollower && <p className="follower-num">{formattedFollower}</p>}
        </>
        ) : (type === "Category" || type === "Exhibition" || type === "Brand")}

    </div>
  </div>
  )
}




const RandomProd = ({ index }) => {
    return (
        <div className="product">
            <div className="product-image">
                <img
                    src="https://www.mymed.com/image/3430/medicalarticle/800"
                    alt="product"
                />
            </div>
            <div className="product-info">
                <h3 className="text-2xl font-bold">Paracetamol {index}</h3>
                <p className="text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quod.
                </p>
                <div className="product-price">
                    <span className="text-2xl font-bold">₹ 1000</span>
                </div>
            </div>
        </div>
    );
};

const Products = () => {
    return (
        <div className="products grid grid-cols-3 gap-4">
            {[...Array(9)].map((_, index) => (
                <RandomProd index={index + 1} />
            ))}
        </div>
    );
};

export default Products;

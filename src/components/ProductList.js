function ProductList(props) {
    return (
        <div className="d-flex flex-wrap">
            {props.savedProducts.map((product, i) => {
                return (
                    <div className="row m-3" key={i}>
                        <div className="col-12 m-3">
                            <div className="card text-center">
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <a  className="btn btn-primary m-2">${product.price} pesos</a>
                                    <a  className="btn btn-danger" onClick={()=>{props.delete(i)}}>Eliminar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductList;
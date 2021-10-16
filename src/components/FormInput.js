function FormInput(props){
    const submitProduct = (e) =>{
        e.preventDefault()
        let product = document.querySelector('#product').value
        let price = document.querySelector('#price').value
        let description = document.querySelector('#description').value
        
        let newProduct = [product,price,description]
        props.addProduct(newProduct)
    }
    return(
        <div className="card w-50 p-4" >
            <h1>Agregar tu producto!</h1>
            <form method="POST" id="form" onSubmit={submitProduct}>
                <div className="row">
                <div className="col-12">
                        <label className="form-label" htmlFor="product" >Nombre del producto</label>
                        <input type="text" name="product" className="form-control" placeholder="Nombre del producto" id="product"></input>
                    </div>

                    <div className="col-12">
                        <label className="form-label" htmlFor="price" >Precio del producto</label>
                        <input type="number" name="price" className="form-control" placeholder="precio del producto" id="price"></input>
                    </div>

                    <div className="col-12">
                        <label className="form-label" htmlFor="description" >Descripcion del producto</label>
                        <input type="text" name="description" className="form-control" placeholder="Descripcion del producto" id="description"></input>
                    </div>

                    <div className="text-center m-2">
                        <button className="btn btn-info text-white w-50 " type="submit">Agregar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FormInput;
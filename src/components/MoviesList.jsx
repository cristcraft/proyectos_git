let links = {
    avenger: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBElLkDdrWHV51oKr2cr786jPZHvRGoMZuRA&usqp=CAU',
    spiderman1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA_5r6v-2cIUhbNdvt7emJNSp_PfkN7CUf3w&usqp=CAU'
}

let movies = [
    {picture: links.avenger, title: 'Avengers', sinopsis: 'El director de la Agencia SHIELD decide reclutar a un equipo para salvar al mundo de un desastre casi seguro cuando un enemigo inesperado surge como una gran amenaza para la seguridad mundial.', rating: '4.3'},
    {picture: links.spiderman1, title: 'Spiderman 1', sinopsis: 'Luego de sufrir la picadura de una araña genéticamente modificada, un estudiante de secundaria tímido y torpe adquiere increíbles capacidades como arácnido. Pronto comprenderá que su misión es utilizarlas para luchar contra el mal y defender a sus vecinos.', rating: '4.2'}
]

function MoviesList(){
    return(
        <div class="container px-4">
            <div class="row gx-5">
                <div class="col">
                    {movies.map((movie)=>{
                        return(
                            <div className="card moviesList text-center p-4">
                                <div className="img" style={{textAlign: 'center'}} >
                                    <img src={movie.picture} alt="" className="card-img-top" style={{width:50 + '%'}} />
                                </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{movie.title}</h5>
                                        <p className="card-text">{movie.sinopsis}</p>
                                        <p className="card-text btn btn-dark">{movie.rating}</p>
                                    </div>
                            </div>
                        );
                        
                    })}
                </div>
            </div>
        </div>
    )
}

export default MoviesList;
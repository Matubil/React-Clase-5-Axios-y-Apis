{/*onInfo va a ser un parametro de evento */ }
const Card = ({ titulo, imagen, descripcion, datosAdicionales, onInfo }) => {
    return (
        <div className="card w-100 h-100 shadow">
            {imagen ? <img src={imagen} alt={titulo} className="card-imd-top" /> : <></>}
            <div className="card-body">
                <h3 className="card-title">
                    {titulo}
                </h3>
                <div className="card-test text-center">
                    {descripcion && <h4>{descripcion}</h4>} {/*es como que pregunta si tiene o no descripcion */}
                    {datosAdicionales && <h5>{datosAdicionales}</h5>}
                </div>
            </div>
            {
                onInfo && <div className="card-footer text-end">
                    <button className="btn btn-primary" onClick={()=>onInfo(titulo)}>
                        Mas Informacion...
                    </button>
                </div>
            }
        </div>
    )
}

export default Card;
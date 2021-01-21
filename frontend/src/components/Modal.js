
function Modal(props) {
    console.log(props);
    return (
        <div className="modal">
            <h1>Poner en mantenimiento</h1>
            <form>
                <div>
                    <label htmlFor="name">Nombre</label>
                    <input type="text" id="name" name="name" />
                </div>
                <div>
                    <label htmlFor="edate">Fecha estimada</label>
                    <input type="text" id="edate" name="edate" />
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default Modal;
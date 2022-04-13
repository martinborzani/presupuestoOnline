class Egreso extends Dato {
    static contadoEgreso = 0;

    constructor(descripcion, valor) {
        super(descripcion, valor);
        this._id = ++Egreso.contadoEgreso;
    }

    get id() {
        return this._id;
    }

}
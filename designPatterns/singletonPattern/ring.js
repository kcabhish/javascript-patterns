let instance;

class OneRing {
    _ring;
    constructor(ring) {
        if (!!instance) {
            console.log(`There can be only one ring to rule them all, ${instance.ring}`);
            throw new Error('No Ring Of Power Can Be Created');
        }
        this._ring = ring;
        instance = this;
    }

    set ring(ring) {
        this._ring = ring;
    }
    get ring() {
        return this._ring;
    }
}

export default OneRing;
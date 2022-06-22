class Remote {
    id

    constructor(id) {
        this.id = id;
    }

    changeChannel(tv, newChannel){
        tv.changeChannel(newChannel);
    }
    changeVolume(tv, newVolume){
        tv.changeVolume(newVolume);
    }
}

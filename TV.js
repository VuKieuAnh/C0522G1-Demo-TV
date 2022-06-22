class TV {
    channel
    volume
    status

    constructor(channel, volume, status) {
        this.channel = channel;
        this.volume = volume;
        this.status = status;
    }

    changeChannel(newChannel){
        this.channel = newChannel;
    }
    changeVolume(newVolume){
        this.volume = newVolume;
    }
}

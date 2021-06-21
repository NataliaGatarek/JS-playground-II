class Tv {
    constructor(brand, channel, volume) {
        this.brand = brand;
        this.volume = volume;
        this.channel = channel;
        this.mirror_volume = this.volume;
        this.mirror_channel = this.channel;
    }
     increase_volume(amount) {
        this.volume += amount;
        (this.volume > 100) ? this.volume = 100 : this.volume = this.volume;
    }
    
    decrease_volume(amount) {
        this.volume -= amount;
        (this.volume < 0) ? this.volume = 0 : this.volume = this.volume;
    }
    set_channel(number) {
        (number > 50 || number <=0) ? this.channel = this.channel : this.channel = number;
    }
    reset(){
        this.volume = this.mirror_volume;
        this.channel = this.mirror_channel;
    }
     status() {
        return this.brand + " " + this.model + " " + " at channel " + this.channel + " and volume " +  this.volume
    }
}

window.onload = () => {
  const tv = new Tv("LG", "4", 40);
  displaytv(tv);
  addEvents(tv);
  changeChannel(tv);
};
const displaytv = (tv) => {
  const tvBrand = document.getElementById("tv-brand");
  tvBrand.innerHTML = tv.brand;
  const tvVolume = document.getElementById("tv-volume");
    tvVolume.innerHTML = tv.volume;
    const tvChannel = document.getElementById("tv-channel");
  tvChannel.innerHTML = tv.channel;
};
const addEvents = (tv) => {
  const increaseButton = document.getElementById("increase-volume");
  increaseButton.addEventListener("click", () => increase(tv));
  const decreaseButton = document.getElementById("decrease-volume");
  decreaseButton .addEventListener("click", () => decrease(tv));
  const resetButton = document.getElementById("reset");
  resetButton.addEventListener("click", () => reset(tv));
};
const changeChannel = (tv) => {
  const channelButton = document.getElementById("change-channel");
   channelButton.addEventListener("click", () => {
   channel(tv)
  } );
}
const increase = (tv) => {
  tv.increase_volume(1);
  displaytv(tv);
};
const decrease = (tv) => {
  tv.decrease_volume(1);
  displaytv(tv);
};
const channel = (tv) => {
    tv.set_channel(tv);
    displaytv(tv)
}
const reset = (tv) => {
    tv.reset(tv);
    displaytv(tv)
}

//1) Create a TV class with properties like brand, channel and volume.
//    Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
//2) Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
//3) Add a method to set the channel. Let's say the TV has only 50 channels so if you try to set channel 60 the TV will stay at the current channel.
//4) Add a method to reset TV so it goes back to channel 1 and volume 50. (Hint: consider using it from the constructor).
//5) It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75".
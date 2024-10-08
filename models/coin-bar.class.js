class CoinStatusBar extends DrawableObject{
    IMAGES_COIN = [
        'img/4. Marcadores/Purple/0_ _1.png',
        'img/4. Marcadores/Purple/20_ .png',
        'img/4. Marcadores/Purple/40_ _1.png',
        'img/4. Marcadores/Purple/60_ _1.png',
        'img/4. Marcadores/Purple/80_ _1.png',
        'img/4. Marcadores/Purple/100__1.png'        
    ];

    precentage = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES_COIN);
        this.x = 10;
        this.y = 30;
        this.height = 50;
        this.width = 180;
        this.setPrecentage(100);
    }

    setPrecentage(precentage) {
        this.precentage = precentage;
        let path = this.IMAGES_COIN[this.resolveImageIndex()]
        this.img = this.imageCache[path]
    }

    resolveImageIndex() {
        if (this.precentage == 100) {
           return 5; 
        } else if(this.precentage > 80) {
            return 4;
        } else if(this.precentage > 60) {
            return 3;
        } else if(this.precentage > 40) {
            return 2;
        } else if(this.precentage > 20) {
            return 1;
        } else {
            return 0;
        }
    } 

}
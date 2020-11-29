



class pieza{
    constructor (tipo, color, x, y, velX, velY){
        this.tipo = tipo;
        this.color = color;
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
  
        //
        this.rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        <rect x="10" y="10" width="100" height="100"/>
        this.rect.setAttributeNS(null, "x", this.x);
        this.rect.setAttributeNS(null, "y", this.y);
        this.rect.setAttributeNS(null, "fill", this.color);
        document.getElementsByTagName("svg")[0].appendChild(this.rect);
    }


//esto bien
let miVelocidadYDireccion;
class Dir_y_Vel{
  this. posX;
  this. posY;
  this. prevPosX;
  this. prevPosY;
  this. miDireccionX;
  this. miDireccionY;
  this.vel;
  this.miDireccionPolar;
  
  Dir_y_Vel(){
    this.posX=0;
    this.posY=0;
  }
  void calcularTodo (mi_X, mi_Y) {
    this.prevPosX=this.posX;
    this.prevPosY=this.posY;
    this.posX=this.mi_X;
    this.posY=this.mi_Y;

    this.miDireccionX = this.posX-this.prevPosX;
    this.miDireccionY = this.posY-this.prevPosY;
    //miDireccionPolar = degrees(atan2( posY-prevPosY, posX-prevPosX));

    vel = dist (this.posX, this.posY, this.prevPosX, this.prevPosY);
  }


//////* ESTOS SON LOS METODOS QUE DEVUELVEN ALGO *///////

this velocidad() {
    return this. vel;
  }

  this direccionX () {
    return this. miDireccionX;
  }

  this direccionY () {
    return this. miDireccionY;
  }


  /*this direccionPolar () {
    return miDireccionPolar;
  }*/
}
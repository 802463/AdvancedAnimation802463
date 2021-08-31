// JSVector -- a Javascript 2D vector class

// The class constructor
function JSVector(x = 0,y = 0){
    this.x = x;
    this.y = y;
}


// Set the magnitude of the vector,
// retaining the angle (direction).
JSVector.prototype.setMagnitude = function(magnitude){
  this.x*=Math.sqrt(magnitude);
  this.y*=Math.sqrt(magnitude);
}

// Get the magnitude of the vector using pythagorean theorem
JSVector.prototype.getMagnitude = function(){
  return Math.sqrt(this.x*this.x+this.y*this.y);
 }

// Set the angle (direction) of the vector,
// retaining the magnitude.
JSVector.prototype.setDirection = function(angle){
   let temp1 = cos(angle)*this.getMagnitude();
   let temp2 = sin(angle)*this.getMagnitude();
   this.x = temp1;
   this.y = temp2;
}

// Get the direction (angle) of the vector
JSVector.prototype.getDirection = function(){
  return Math.atan(this.y/this.x);
}

// Add another vector to this vector
JSVector.prototype.add = function(vector2){
  this.x+=vector2.x;
  this.y+=vector2.y;
}

// Subtract another vector from this vector
JSVector.prototype.sub = function(vector2){
  this.x-=vector2.x;
  this.y-=vector2.y;
}

// Class method to return a new vector that is the sum of two vectors
JSVector.addGetNew = function(vector1,vector2){
  return new JSVector(vector1.x+vector2.x,vector1.y+vector2.y);
}

// Class method to return a new vector that is the difference of two vectors
JSVector.subGetNew = function(vector1,vector2){
  return new JSVector(vector1.x-vector2.x,vector1.y-vector2.y);
}

// Multiply this vector by a scalar
JSVector.prototype.multiply = function(scalar){
  this.x*=scalar;
  this.y*=scalar;
}

// Divide this vector by a scalar
JSVector.prototype.divide = function(scalar){
  this.x/=scalar;
  this.y/=scalar;
}

// Normalize this vector so that it has a magnitude of 1
JSVector.prototype.normalize = function(){
  this.x/=getMagnitude;
  this.y/=getMagnitude;
}

// Limit the magnitude of this vector
JSVector.prototype.limit = function(limit){
  if(this.getMagnitude()>limit){
    this.setMagnitude(limit);
  }
}

// Get the distance between this vector and another one
JSVector.prototype.distance = function(vector2){
  return Math.sqrt(Math.pow(this.x-vector2.x,2),Math.pow(this.y-v2.y,2));
}

// Get square of the distance between this vector and another one
JSVector.prototype.distanceSquared = function(vector2){
  return Math.pow(this.x-vector2.x,2),Math.pow(this.y-v2.y,2)
}

// Rotate this vector by some number of radians
// using the rotation matrix |  cos   -sin  |
//                           |  sin   +cos  |
JSVector.prototype.rotate = function(angle) {
  let temp1 = Math.cos(angle)*this.x-Math.sin(angle)*this.y;
  let temp2 = Math.sin(angle)*this.x+Math.cos(angle)*this.y;
  this.x = temp1;
  this.y = temp2;
}

// Get the angle between this vector and another one
JSVector.prototype.angleBetween = function(vector2){
  return this.getDirection() - vector2.getDirection();
}

// Make a copy of this vector
JSVector.prototype.copy = function(){

}

// Override inherited toString() to describe this instance
JSVector.prototype.toString = function() {

}

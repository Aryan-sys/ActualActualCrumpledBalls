class paper{
  constructor(){
      var options={ 
          isStatic: false,
          restitution : 0.3,
          friction : 0,
          density: 1.2
      }
      this.image = loadImage("here.png");
   
      this.body = Bodies.circle(200 , 100, 60, options);
       
      World.add(world,this.body)
      
  }
  display(){
    
   var pos = this.body.position;
     push();
      translate(pos.x, pos.y);
   
      fill("blue");
     
      console.log(this.body.position.x);
      imageMode(CENTER);
      image(this.image,0,0,60,60);
      pop();
    }
  }

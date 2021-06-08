class Iron{
	constructor(x,y)
	{
	   var options = {
		'restitution': 0.8,
		'friction': 0.9,
		'density': 12,
	   }
		this.x=x;
		this.y=y;
		this.body=Bodies.circle(this.x, this.y, options)
		World.add(world, this.body);

	}
	display()
	{
			var Ironpos=this.body.position;		
			push()
			translate(Ironpos.x, Ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("black");
			pop()
    }
}
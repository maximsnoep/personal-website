/** Star class. */
class Star {
	constructor() {
	  	this.initialize()
	}

	initialize() {
		// Generate random position vector.
		this.position = new Vector(
            ((Math.random()*2)-1) * height * Math.max(width, height) * 0.5,
            ((Math.random()*2)-1) * width * Math.max(width, height) * 0.5,
            (100+(Math.random() * (Math.max(width, height) - 100)) * 1.2)
        )
        
		// Generate random color vector.
        if (Math.random() > 0.3) {
            this.color = new Vector(
                Math.random() * 50,
                100 + Math.random() * 100,
                255
            )  
        } else {
            this.color = new Vector(
                205 + Math.random() * 50,
                205 + Math.random() * 50,
                255
            )  
        }
        
        // Generate random speed value.
        this.speed = 0.1 + Math.random() * (3-0.1)
        
        // Compute starting points.
        this.xStart = this.position.x / this.position.z;
        this.yStart = this.position.y / this.position.z;
        
        // Re-initialize stars when out of bounds.
        if (Math.abs(this.xStart) > width * 0.5 || Math.abs(this.yStart) > height * 0.5 || this.position.z < 100) {
            this.initialize();
        }
	}

	update() {
        // Change new z coordinate with speed variable.
		this.position.z -= this.speed*speedMultiplier;
        
        // Re-initialize stars when out of bounds.
        if (Math.abs(this.xStart) > width * 0.5 || Math.abs(this.yStart) > height * 0.5 || this.position.z < 100) {
            this.initialize();
        }
        
        // Calculate new end and start points.
        this.xEnd = this.xStart;
		this.yEnd = this.yStart;
		this.xStart = this.position.x / this.position.z;
		this.yStart = this.position.y / this.position.z;
        
		// Update color with new alpha.
		this.alpha = map(this.position.z, 0, max(width, height), 255, 0)
	}

	display() {
        // Draw the stars.
	  	strokeWeight(2);
		stroke(this.color.x, this.color.y, this.color.z, this.alpha);
		line(this.xStart, this.yStart, this.xEnd, this.yEnd);
	}
}
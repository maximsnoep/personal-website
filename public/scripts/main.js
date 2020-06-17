p5.disableFriendlyErrors = true;

// Global variables.
let N
let stars = [];
let pressed = false
let speedMultiplier = 1

/** Initialization. */
function setup() { 
    // Compute the number of visible stars.
    N = Math.max(displayWidth, displayHeight)*0.5
    
    // Setup canvas.
	createCanvas(windowWidth, windowHeight)
    frameRate(30)
    background(0)
    translate(width/2, height/2);
    
    // Initialize list of stars.
    initializeStars()
}

/** Draw loop. */
function draw() {
    // Setup canvas.
    background(0)
    translate(width/2, height/2)
    // Update speed multiplier when needed.
    updateSpeed()
    // Update and display all stars.
    updateStars()
}

/** Initialize stars. */
function initializeStars() {
  	for (let i = 0; i < N; i++) {
		stars.push(new Star())
	}	  
}

/** Update all stars. */
function updateStars() {
  	for (let i = 0; i < N; i++) {
    	stars[i].update()
    	stars[i].display()
  	}   
}

/** Update the global speed multiplier. */
function updateSpeed() { 
    // Increase or decrease speed based on mouse/touch behavior.
    if (pressed) { 
        speedMultiplier *= 1.05
    } else { 
        speedMultiplier *= 0.8
    }
    
    // Cap speed has between 1 and 500.
	if (speedMultiplier < 1) { 
        speedMultiplier = 1 
    } else if (speedMultiplier > 500) { 
        speedMultiplier = 500 
    }
}

/** Resize canvas and re-initialize stars. */
function windowResized() { setup() }

/** Change speed of stars when mouse is pressed. */
function mousePressed() { pressed = true }

/** Change speed of stars when mouse is pressed. */
function mouseReleased() { pressed = false }

/** Change speed of stars when touch is started. */
function touchStarted() { pressed = true }

/** Change speed of stars when touch is ended. */
function touchEnded() { pressed = false }

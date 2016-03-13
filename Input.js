this.Input = function (c) {

    /*
    
    @David Zwitser
    
    To use this script you need to create a new object from wich you can get it's output.
    
    Then you need to call the update function of the script after you use its content in other scripts.
    
    So create a opbect like input = new Input() and call input.InputUpdate(); at the end of your loops
    
    ---------------------------------------------------------------------
    The functions and variables you can read from:    
    ---------------------------------------------------------------------

    Variables: 
    
    anyKey: this will be true while any key is held down
    ----------
    anyKeyDown: this is true for one frame at the moment any key is 
    ----------
    anyKeyUp: this will fire true for one frame at the moment any key is released 
    
    mouseAcceleration: this is a float that shows the acceleration of the mouse
    ----------
    mouseDelta: Shows the acceleration as a Vector2 object
    ----------
    mousePosition: Shows the position of a mouse as a Vector2
    ----------
    mouseMoving: Is true when the mouse is moving
    
    scrollWheelDelta: Shows the how much the scroll wheel has scrolled if it scrolls
    ----------
    scrolling: Turns true when the mouse is scrolling
    
    Functions: 
    
    GetMouseButton: Give a mouse button code and it will return if that button is 
    currently being held down
    ----------
    GetMouseButtonDown: Give a mouse button code and it will return if that button
    is being pressed
    ----------
    GetMouseButtonUp: Give a mouse button code and it will return if that button 
    is being released
    
    GetKey: Give a keycode and it will return if that key is being held down 
    ----------
    GetKeyDown: Give a keycode and it will return if that key is pressed
    ----------
    GetKeyUp: Give a keycode and it will return if that key is released
    
    */

    if (c == undefined) console.log("No canvas given with input")
        //Event listeners
    c.addEventListener("mousedown", mouseDown, false);
    c.addEventListener("mouseup", mouseUp, false);
    c.addEventListener("mousemove", mouseMove, false);

    c.addEventListener("mousewheel", wheelScroll, false);

    window.addEventListener("keydown", keyDown, false);
    window.addEventListener("keyup", keyUp, false);

    //Small vector 2 object
    var Vector2 = function (x, y) {
        this.x = x || 0;
        this.y = y || 0;

        this.magnitude = function () {
            return Math.sqrt((this.x * this.x) + (this.y * this.y));
        }

        this.sub = function (vec) {
            return new Vector2(this.x - vec.x, this.y - vec.y);
        }
    }

    //-------------------------------
    //The variables for calculations
    //-------------------------------

    var oldMousePos = new Vector2();
    //Mouse acceleration variables
    var moveMouseUpdate = 0,
        lastMoveMouseUpdate = 0;
    //Scrollwheel variables
    var scrollWheelUpdate = 0,
        lastScrollWheelUpdate = 0;
    //Key down variables
    var keysDown = [];
    var keysPressed = [];
    var keyDownRemovers = [];
    var amoundOfKeysPressed = 0;
    //Key up vraiables
    var keysUpped = [];
    var keyUpRemovers = [];
    //Setting the arrays to a value
    for (var i = 0; i < 222; i++) {
        keysUpped[i] = false;
        keysDown[i] = false;
        keysPressed[i] = false;
    }
    //Mouse button variables
    var mouseButtonsDown = [];

    var buttonsPressed = [];
    var buttonDownRemomovers = [];

    var buttonsUpped = [];
    var buttonsUppedRemover = [];
    //Setting the mouse button variables to a value
    for (var i = 0; i < 3; i++) {
        mouseButtonsDown[i] = false;
        buttonsPressed[i] = false;
        buttonsUpped[i] = false;
    }

    var self = this;

    //---------------------------------------------
    //The functions and variables the user can get
    //---------------------------------------------

    //The variables to read from
    //KeyBoardbuttons
    this.anyKey = false;
    this.anyKeyDown = false;
    this.anyKeyUp = false;
    //Mouse variales
    this.mouseAcceleration = 0;
    this.mouseDelta = new Vector2();
    this.mousePosition = new Vector2();
    this.mouseMoving = false;
    //Scrollwheel variales
    this.scrollWheelDelta = 0;
    this.scrolling = false;

    //Functions
    //Mouse button functions
    this.GetMouseButton = function (keycode) {
        return mouseButtonsDown[keycode];
    }

    this.GetMouseButtonDown = function (keycode) {
        return buttonsPressed[keycode];
    }

    this.GetMouseButtonUp = function (keycode) {
        return buttonsUpped[keycode];
    }

    //--------------------------------------------
    //KeyboardVariables
    this.GetKeyDown = function (keycode) {
        return keysPressed[keycode];
    }

    this.GetKey = function (keycode) {
        return keysDown[keycode];
    }

    this.GetKeyUp = function (keycode) {
        return keysUpped[keycode];
    }

    //---------------------------------------------
    //These are the event listeners
    //---------------------------------------------

    //Keyboard
    function keyDown(e) {
        if (!keysDown[e.keyCode]) {
            self.anyKeyDown = true;
            self.anyKey = true;
            keysPressed[e.keyCode] = true;
            keysDown[e.keyCode] = true;
            keyDownRemovers.push(e.keyCode);

            amoundOfKeysPressed++;
        }
    }

    function keyUp(e) {
        keysDown[e.keyCode] = false;
        amoundOfKeysPressed--;
        if (!amoundOfKeysPressed)
            self.anyKey = false;

        keysUpped[e.keyCode] = true;
        keyUpRemovers.push(e.keyCode);
        self.anyKeyUp = true;
    }

    //Mouse
    function mouseDown(e) {
        if (!mouseButtonsDown[e.button]) {
            buttonsPressed[e.button] = true;
            mouseButtonsDown[e.button] = true;
            buttonDownRemomovers.push(e.button);
        }
    }

    function mouseUp(e) {
        mouseButtonsDown[e.button] = false;
        buttonsUpped[e.button] = true;
        buttonsUppedRemover.push(e.button);
    }

    function mouseMove(e) {
        moveMouseUpdate++;

        self.mouseMoving = true;
        self.mousePosition = new Vector2(e.x, e.y);
        self.mouseAcceleration = self.mousePosition.sub(oldMousePos).magnitude();
        self.mouseDelta = self.mousePosition.sub(oldMousePos);
        oldMousePos = new Vector2(e.x, e.y);
    }

    //Scrollwheel
    function wheelScroll(e) {
        self.scrollWheelDelta = e.wheelDelta;
        self.scrolling = true;
    }

    //------------------------------------------------------------
    //This checks if a function ends and uses that to set value's
    //------------------------------------------------------------

    this.InputUpdate = function () {
        //Removing pressed keys
        if (keyDownRemovers.length > 0) {
            for (var i = keyDownRemovers.length - 1; i >= 0; i--) {

                keysPressed[keyDownRemovers[i]] = false;
                keyDownRemovers.splice(i, 1);
            }
            self.anyKeyDown = false;
        }
        //Removing upped keys
        if (keyUpRemovers.length > 0) {
            for (var i = keyUpRemovers.length - 1; i >= 0; i--) {

                keysUpped[keyUpRemovers[i]] = false;
                keyUpRemovers.splice(i, 1);
            }
            self.anyKeyUp = false;
        }

        //removing downd mousebuttons
        if (buttonDownRemomovers.length > 0) {
            for (var i = buttonDownRemomovers.length - 1; i >= 0; i--) {

                buttonsPressed[buttonDownRemomovers[i]] = false;
                buttonDownRemomovers.splice(i, 1);
            }
        }
        //Removing upped mousebuttons
        if (buttonsUppedRemover.length > 0) {
            for (var i = buttonsUppedRemover.length - 1; i >= 0; i--) {

                buttonsUpped[buttonsUppedRemover[i]] = false;
                buttonsUppedRemover.splice(i, 1);
            }
        }

        //-----------------------------------------------------

        //Checking if mouse stoped moving
        if (lastMoveMouseUpdate == moveMouseUpdate) {
            if (self.mouseMoving) {
                moveMouseUpdate = 0;
                self.mouseAcceleration = 0;
                self.mouseMoving = false;
                self.mouseDelta = new Vector2();
            }
        } else self.mouseMoving = true;
        //Checking if scroll wheel stoped scrolling
        if (lastScrollWheelUpdate == scrollWheelUpdate) {
            if (self.scrolling) {
                scrollWheelUpdate = 0;
                self.scrollWheelDelta = 0;
                self.scrolling = false;
            }
        } else self.scrolling = true;

        lastMoveMouseUpdate = moveMouseUpdate;
        lastScrollWheelUpdate = scrollWheelUpdate;
    }
}
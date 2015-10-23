function JSAlerts(params)
{
    /* Assign object methods  */
    this.parentEl = document.createElement("div");
    parentEl = this.parentEl;
    this.parentEl.className = "notification-sandbox";
    document.body.appendChild(this.parentEl);

    //Precedence of location is as follows:
    // 1. Top - Bottom  (Top has higher precedence over Bottom)
    // 2. Right - Left  (Right has higher precedence over Left)

    if (params.hasOwnProperty('top'))
    {
        //Assign top position to the parentElement
        this.parentEl.style.top = params.top;
        //Top is present. Check for left or right property
        if (params.hasOwnProperty('right'))
        {
            this.parentEl.style.right = params.right;
        }
        else if (params.hasOwnProperty('left'))
        {
            this.parentEl.style.left = params.left;
        }
        else
        {
            //In case no left or right is present, assign right : 4em
            this.parentEl.style.right = "4em";
        }
    }
    else if (params.hasOwnProperty('bottom'))
    {
        //Assign bottom position to the parentElement
        console.log("bottom is present and value is "+params.bottom)
        this.parentEl.style.bottom = params.bottom;
        //Top is present. Check for left or right property
        if (params.hasOwnProperty('right'))
        {
            this.parentEl.style.right = params.right;
        }
        else if (params.hasOwnProperty('left'))
        {
            this.parentEl.style.left = params.left;
        }
        else
        {
            //In case no left or right is present, assign right : 4em
            this.parentEl.style.right = "4em";
        }
    }
    else
    {
        //This is the case where neither top nor bottom is present in the parameters; Assign top - 2em, and right 4em as the default;
        this.parentEl.style.top = "2em";
        this.parentEl.style.right = "4em";
    }



    // The list of parameters are:
    // 1. text              -->     Could consist of any HTML text
    // 2. duration          -->     The duration for which the notification needs to be visible on screen. This excludes the animationIn and animationOut times.
    // 3. animationIn       -->     The class that is used to animate-in the notification
    // 4. animationOut      -->     The class that is used to animate-out the notification
    // 5. style             -->     The class that is used to display the notification
    // 6. autoClose         -->     true/false. Auto closes the notification. Default behavior is to autoclose when duration is mentioned. Will not autoclose in case duration isn't mentioned.
    // 7. animateInDuration -->     Duration of animation during entry
    // 8. animateOutDuration-->     Duration of animation during exit
    //
    //
    //
    //
    //

    //this.Notify = function(text, duration, animationIn, animationOut)
    this.Notify = function(parameters)
    {
        /* This method creates a notification */

        /* Assign the variables */

        /* Check for HTML text */
        if (parameters.hasOwnProperty('text'))
        {
            console.log("Has text");
            this.text = parameters.text;
        }
        else
        {
            console.log("No text found");
            this.text = "Hello from JSAlerts!";
        }
        /* Check for duration */
        if (parameters.hasOwnProperty('duration'))
        {
            console.log("Has duration");
            this.duration = parameters.duration;
        }
        else
        {
            console.log("No duration found");
            this.duration = "3000";
        }
        /* Check for animationIn */
        if (parameters.hasOwnProperty('animationIn'))
        {
            console.log("Has animationIn");
            this.animationIn = parameters.animationIn;
        }
        else
        {
            console.log("No animationIn found");
            this.animationIn = "slideIn";
        }
        /* Check for animationOut */
        if (parameters.hasOwnProperty('animationOut'))
        {
            console.log("Has animationOut");
            this.animationOut = parameters.animationOut;
        }
        else
        {
            console.log("No animationOut found");
            this.animationOut = "slideOut";
        }
        /* Check for style */
        if (parameters.hasOwnProperty('style'))
        {
            console.log("Has style and is "+parameters.style);
            this.style = parameters.style;
        }
        else
        {
            console.log("No style found");
            this.style = "red text";
        }


        // this.text = typeof text !== 'undefined' ?  text : "Hey";
        // this.duration = typeof duration !== 'undefined' ?  duration : "3000";
        // this.animationIn = typeof animationIn !== 'undefined' ?  animationIn : "slideIn";
        // this.animationOut = typeof animationOut !== 'undefined' ?  animationOut : "slideOut";
        var object = this;
        var el = document.createElement("div");
        el.innerHTML = this.text;   //Can also take HTML text as input --> this makes it simpler to extend and include HTML.
        //el.className = "frame red text slideIn";
        el.className = "frame" + " " + this.style + " " + this.animationIn;


        /* fire --> fires the notification */
        this.fire = function(resolve, reject)
        {
            //Create a promise for creation of the notification.
            console.log("Fire called")
            this.parentEl.appendChild(el);
            window.setTimeout(function()
            {
                resolve(el);
            }, this.duration);


        }
        //Wrap this in a promise
        this.p1 = new Promise
        (
            function(resolve, reject)
            {
                console.log("Creating promise")
                console.log("Object just before fire is "+object);
                var el = object.fire(resolve, reject);
            }
        )
        this.p1.then
        (
            function(el)
            {
                // console.log("Value from promise is "+el);
                // console.log("parentEl is "+parentEl);
                // console.log("child object is "+object);
                object.destroy(el);
                console.log("Died a natural death")

            }
        ).catch(function(error)
        {
            console.log("error is "+error);
        })

        return el;

    }

    this.destroy = function(el)
    {
        console.log("Destroy has been called and this is "+this)
        var object = this;
        var destroy_promise = new Promise
        (
            function(resolve, reject)
            {
                //el.className = "frame red text slideOut";
                //el.className += " slideOut";
                //console.log("animationOut is "+object.animationOut)
                el.className += " " + object.animationOut;

                window.setTimeout(function()
                {
                    resolve(el);
                }, 400);
            }
        )
        destroy_promise.then
        (
            function(el)
            {
                parentEl.removeChild(el);
            }
        )
    }








    this.Alert = function(text, duration, animationIn, animationOut)
    {
        /* This method creates a fancy Alert. Write this in v2.0 */

        /* Assign the variables */
        this.text = typeof text !== 'undefined' ?  text : "Hey";
        this.duration = typeof duration !== 'undefined' ?  duration : "0.2";
        this.animationIn = typeof animationIn !== 'undefined' ?  animationIn : "slideIn";
        this.animationOut = typeof animationOut !== 'undefined' ?  animationOut : "slideOut";
    }

}

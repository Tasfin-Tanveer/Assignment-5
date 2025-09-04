Q-1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: getElementById selects a single element by its unique 'id' attribute. It returns a single DOM element.
     
     getElementByClassName selects all elements with a specific class name. It returns a live HTML collection.
     
     querySelector selects the first element of a given CSS selector. It is static and returns a single element object.

     querySelectorAll selects all the elements that match the given CSS selector. It returns a static NodeList.


Q-2: How do you create and insert a new element into the DOM?
Ans: Creating and insert a new element into the DOM by JS is shown below step by step-

     a. create a element:
            const newDiv = document.createElement("div");

     b. add content or attribute or innerHTML:
            newDiv.textContent = "I am a web developer";
            newDiv.className = "title-text";
            newDiv.innerHTML = <p class="font-bold">I am a web developer</p>

     c. select parent element:
            const container = document.getElementById("card-container");

     d. insert element in the DOM:
            container.appendChild(newDiv);

Q-3: What is Event Bubbling and how does it work?
Ans: Event Bubbling is a JS system where an event triggered on a specific element, propagate upwards through its parental elements in the DOM hierarchy, all the way to the root of that document.

     When an event, like click, target a specific HTML element and the event is handled by any event listeners directly attached to the targeted element. Then it travels to the immediate parent and then to thats parent and so on. At each level of the hierarchy, if the event listener is attached to the ancestor element, it will also be triggered. The process continues till the event reaches the root of the document.

     For example, if we take a nested <div> element and add click listener to each, such as:

     <div id="first">
        <div id="second">
            <div id="third">Click</div>
        </div>
     </div>

     Here, if we click the #third div:
        - The click event is first handled by the listener to #third.
        - Then it bubble up to #second and triggered its click listener.
        - Lastly, it bubble up to #first and also triggered its click listener.

Q-4: What is Event Delegation in JavaScript? Why is it useful?
Ans: Event Delegation is a JS mechanism where a single event listener to multiple child's parent element instead of adding event listeners to all the child element individually and then detect which child is triggered the event using event bubbling.
     
     The Event Delegation is useful in many ways. Such as:
        - It saves memory and improve efficiency by avoiding multiple listeners. Thus the performance is boosted.
        - It handle dynamic elements and also works for the elements that are listing later on to the DOM.
        - Its codes the clean, easier to manage and maintain.

Q-5: What is the difference between preventDefault() and stopPropagation() methods?
Ans:                        preventDefault()                                stopPropagation()
            1. Prevent the default browser behavior                 1. Prevent the event from bubbling up or
               of an element.                                          down to parent or child element.
            2. It does not stop event bubbling.                     2. It does no stop default action.
            3. Stop default action like- link                       3. Parent or child listeners won't trigger.
               navigation, form submission.
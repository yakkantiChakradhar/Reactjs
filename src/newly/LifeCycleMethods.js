/* 
                                                    Life Cycle Methods
                                                    ``````````````````

1> MOUNTING phase
   ``````````````
   * constructor() function:-
     ```````````````````````
                             A special function that will get called whenever a new component is created.

                             Constructor is used for instalizing state and binding the event handlers.
                             
                             We should not use http requests in constructors, it could cause side effects.

                             While we are called our own constructor we need to use.
                             
                                    -> Super(props) it is the base call constructor.

                                    -> Constructor is also the only place where your expected to change or setState by directly overwriting this.state fields.

   * static getDerivedStateFromProps() function: -
     ``````````````````````````````````````````
        When the state of the component depends on changes in props over time.


*/
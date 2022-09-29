import React from 'react';
import SingleActivity from '../SingleActivity/SingleActivity';
import './Activities.css';
const Activities = ({ activities, record, setRecord, key }) => {
    return (
        <div className='activities'>
            <h2>Animals Themed Activities and Crafts for Children</h2>
                <div className='activity'>
                {
                    activities.map(activity => <SingleActivity
                    key={key}
                    activity={activity}
                    record={record}
                    setRecord ={setRecord}
                    
                    ></SingleActivity> )
                }
                </div>

                <div className="questions">
                    <article>
                        <h2>How does react work?</h2>
                        <p>
                        React is a javascript library for building user interfaces. It is declarative, component based library. React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.
                        <br />
                        We can write code shorter by its components. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
                        <br />
                        React can also render on the server using Node and power mobile apps using React Native.
                        </p>
                    </article>

                    <article>
                        <h2>Difference between props and state?</h2>
                        <p>
                        <b>Props</b>
                        <br />
                        The Data is passed from one component to another. It is Immutable (cannot be modified). Props can be used with state and functional components. Props are read-only.
                        <br />
                        <b>State</b>
                        <br />
                        The Data is passed within the component only.
                        It is Mutable ( can be modified).
                        State can be used only with the state components/class component (Before 16.0).
                        State is both read and write.
                        <br />
                        <b>Points to discuss</b>
                        <br />
                        Props are used to pass data from one component to another.
                        The state is a local data storage that is local to the component only and cannot be passed to other components.
                        The this.setState property is used to update the state values in the component.
                        </p>
                    </article>

                    <article>
                        <h2>Uses of useEffect </h2>
                        <p>
                        The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components. For example, beside fetching data from API end-points, useEffect is doing tasks like updating the DOM, setting up subscriptions or timers, etc can be lead to unwarranted side-effects. Since the render method is to quick to produce a side-effect one needs to use life cycle methods to observe the side effects.
                        </p>
                    </article>
                </div>
                
        </div>
    );
};

export default Activities;
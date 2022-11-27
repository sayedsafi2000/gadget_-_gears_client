import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blog = () => {
    useTitle("Blog")
    return (
        <div>
            <h2 className="text-4xl font-bold text-center mb-6 ">Question & Answer</h2>
            <div className='w-9/12 mx-auto '>
                <h2 className='text-xl font-bold text-gray-800'>1/ What are the different ways to manage a state in a React application?</h2>
                <p className='text-gray-600'>The Four Kinds of React State to Manage <br />Local state
                    Global state <br />
                    Server state <br />
                    URL state</p>
            </div>
            <div className='w-9/12 mx-auto '>
                <h2 className='text-xl font-bold text-gray-800'>2/ How does prototypical inheritance work?</h2>
                <p className='text-gray-600 w-9/12'>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object. </p>
            </div>
            <div className='w-9/12 mx-auto '>
                <h2 className='text-xl font-bold text-gray-800'>3/ What is a unit test?Why should we write unit tests?</h2>
                <p className='text-gray-600 w-9/12'>Unit Testing is a type of software testing where individual units or components of a software are tested. <br />Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently. </p>
            </div>
            <div className='w-9/12 mx-auto '>
                <h2 className='text-xl font-bold text-gray-800'>4/ React vs. Angular vs. Vue?</h2>
                <p className='text-gray-600 w-9/12'>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
            </div>
        </div>
    );
};

export default Blog;
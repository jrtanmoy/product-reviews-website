import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs-container'>
            <h3>1) What is Context API?</h3>
            <p>রিঅ্যাক্ট কনটেক্সট এপিআই হল রিঅ্যাক্টের একটি বৈশিষ্ট্য যা আমাদেরকে সম্পূর্ণ অ্যাপ বা এর কিছু অংশ জুড়ে স্টেট শেয়ার করতে দেয়। কনটেক্সট API হল রিঅ্যাক্ট অ্যাপের জন্য global ভেরিয়েবল তৈরি করার একটি উপায় যা চারপাশে পাস করা যেতে পারে। এটি "প্রপ ড্রিলিং" বা দাদা-দাদি থেকে পিতামাতা থেকে সন্তানের কাছে প্রপস পাঠানোর একটি সহজ উপায়। এই কনটেক্সট এপিআই তৈরি করার কতগুলো ধাপ আছে। যার প্রথমটি হল কনটেক্সট এপিআইটি তৈরি করা React.createContext() এর মাধ্যমে এবং এইটা এমন জায়গায় তৈরি করতে হবে যেন, যেইগুলাতে এটি ব্যবহার করবো সেইগুলার রুট ফাইল হয়। আর অবশ্যই এটি export করতে হবে। তারপর UserContext.Provider value={ } এর মাধ্যমে ভ্যালু সেট করবো। সে টা হয়ে গেলে যেই ফাইল গুলাতে ব্যবহার করবো ওই গুলাতে import ব্যবহার করবো।
            </p>
            <h3>2)What is semantic tag? </h3>
            <p>Semantic এইচটিএমএল tag এমন যেগুলি আমাদের এবং browser কে তাদের অর্থ স্পষ্টভাবে বর্ণনা করে। (header, footer এবং article)-এর মতো tag গুলো Semantic হিসাবে বিবেচনা করা হয় কারণ তারা tag টির উদ্দেশ্য এবং তাদের ভিতরে থাকা বিষয়বস্তুর ধরন সঠিকভাবে বর্ণনা করে। অপরদিকে (div, span) ইত্যাদী tag গুলা স্পষ্টভাবে কোনো অর্থ প্রকাশ করে না। কিছু Semantic tag এর উদাহরণ হল
            article,aside,details,figcaption,figure,footer,header,main,mark </p>
            <h3>3) Defference between Inline,Block or Inline-block</h3>
            <p>
                <span>
                    a)Inline: Displays an element as an inline element. Any height and width properties will have no effect. Here are a few elements that have a default inline property: span, a, img ....etc.
                </span>
                <br />
                <span>
                     b)Block: Block starts on a NEW line and takes up the full width available. So that means block elements will occupy the entire width of its parent element.
                     Here are a few elements that have a default block property: div, h1, p ....etc.
                </span>
                <br /> 
                <span>
                    c)Inline-block: It's essentially the same thing as inline, except that you can set height and width values.
                </span>   
            </p>
        </div>
    );
};

export default Blogs;
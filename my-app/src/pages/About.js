import React from 'react';
import about from "../pictures/about.JPG";
import "../style/about.scss";

function About() {
    return (
        <div className="about-main">
            <article>
                <header className="about-header">
                    <h1>About Me</h1>
                </header>
                <div className="about-content">
                    <img src={about} alt="seaside"/>
                    <h2>Welcome!</h2>
                    <p>Thank you for visiting my blog. My name is Karolina and I'm from Warsaw. I've many passions but
                        one of them are travels.</p>
                    <h2>Who am I?</h2>
                    <p>Most of all I'm a curious traveller. I love to discover new places, always try to avoid going to
                        the same place again but there are exceptions. Nature is something that gives me a real relax
                        and peace of mind so this kind of places are my favourite destination.</p>
                    <p>I'm also passionate about photography so I always travel with camera and observe world through
                        the lens. </p>
                    <h2>What can you find on the blog?</h2>
                    <p>First of all Travels. I'm sharing ideas for where to go around Warsaw during the weekend or
                        places for short and long holidays to which I've travelled. There are my memories from trips but
                        you'll also find there info of what's was worth to see, where to park, and what was the trip
                        route </p>
                    <h2>Why in English?</h2>
                    <p>You may wonder why I'm writing in English, well there are a couple of reasons. First of all I
                        really enjoy English and using it gives me a lot of fun but also challenges to improve. The
                        second reason is that there are many foreigners coming to Poland not knowing the language but
                        willing to do some sightseeing during the weekend. Lastly I've many friends abroad who
                        enjoy my pictures from travels and would like to read about those places.</p>
                </div>
            </article>
        </div>
    )
}

export default About;
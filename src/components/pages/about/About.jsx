import React from 'react';
import './about.css';

function About() {
    return (
        <div className="container">
            <div className="about-container">
                <h1>About Us</h1>
                <div className="purpose-section">
                    <h2>Our Purpose</h2>
                    <p>At TripGenie, we are driven by the belief that travel is not just about reaching a destination, but about the journey itself. Our purpose is to revolutionize the way people explore the world by providing personalized trip recommendations tailored to your unique preferences and interests.</p>
                </div>
                <div className="revolutionary-section">
                    <h2>Why We're Revolutionary</h2>
                    <p>What sets TripGenie apart is our utilization of cutting-edge AI technology, specifically ChatGPT, to curate trip suggestions in real-time. Unlike traditional travel platforms that rely on static algorithms, our AI generates dynamic recommendations with each interaction. This ensures that your travel experience is always fresh, exciting, and perfectly suited to your desires.</p>
                </div>
                <div className="tourism-section">
                    <h2>Riding the Wave of Tourism</h2>
                    <p>The tourism market is experiencing unprecedented growth, with more people seeking new adventures and cultural experiences than ever before. At TripGenie, we recognize this trend and are committed to empowering travelers with intelligent recommendations that enhance their journeys.</p>
                </div>
                <div className="team-section">
                    <h2>Meet the Team</h2>
                    <p>TripGenie was founded by a team of passionate travelers and tech enthusiasts dedicated to reshaping the future of travel. Our diverse team brings together expertise in AI, software development, and travel industry insights to create an unparalleled user experience.</p>
                    <ul>
                        <li><strong>Devorah</strong> Visionary entrepreneur with a passion for leveraging technology to simplify travel.</li>
                        <li><strong>Euvgeni</strong> AI expert and coding wizard responsible for bringing our innovative ideas to life.</li>
                        <li><strong>Limor</strong> Seasoned globetrotter with a knack for uncovering hidden gems and off-the-beaten-path destinations.</li>
                    </ul>
                </div>
                <div className="gratitude-section">
                    <h2>Gratitude and Acknowledgments</h2>
                    <p>We would like to express our deepest gratitude to our mentors Guy, Aviad, Roy and Karen who have teached us all we got to know and to prepare us for the this journey we are about to follow. Their guidance and wisdom have been invaluable in shaping us into what we are today.</p>
                </div>
            </div>
        </div>
    );
}

export default About;


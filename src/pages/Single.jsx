import React from 'react';
import { Link } from 'react-router-dom';
import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import Menu from '../components/Menu.jsx';


const Single = () => {
    return (
        <div className='single'>
            <div className="content">
                <img src="https://img.freepik.com/free-photo/double-hamburger-isolated-white-background-fresh-burger-fast-food-with-beef-cream-cheese_90220-1192.jpg?w=2000" alt="" />
            <div className="user">
                <img src="https://img.freepik.com/premium-vector/student-avatar-illustration-user-profile-icon-youth-avatar_118339-4395.jpg" alt="" />
            <div className="info">
                <span>John</span>
                <p>Posted 2 days ago</p>
            </div>
            <div className="edit">
                <Link to={`/write?edit=2`}>
                <img src={Edit} alt="" />
                </Link>
                <img src={Delete} alt="" />
            </div>
            </div>
            <h1>Lorem Ipsum: A Placeholder Text Revolution</h1>
            <p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam ante in tortor fringilla, vel pellentesque arcu faucibus. Duis vel orci auctor, congue massa vitae, placerat metus. Quisque accumsan, mauris vitae viverra commodo, justo lectus finibus urna, eu cursus turpis dui a lorem. In sodales libero at aliquam tincidunt. Vivamus id pulvinar nunc. Ut nec tellus turpis. Sed pretium justo ut tincidunt efficitur.
                </p>
                <p>This project delves into the ubiquitous use of "Lorem ipsum" as a placeholder text in design and typesetting. Lorem ipsum has become an industry-standard tool for visual mock-ups, allowing designers to focus on layout, font, and graphic elements without being distracted by the actual content. Its nonsensical yet familiar Latin words and phrases have served as a reliable filler text for centuries.
                </p>
                This exploration aims to uncover the origins of "Lorem ipsum," tracing its roots back to the classical era and its transformation into a staple of modern design. It analyzes the variations and adaptations of "Lorem ipsum" across different regions, languages, and cultures, highlighting its flexibility in accommodating diverse typographic requirements.
                <p>
                In conclusion, "Lorem ipsum" has revolutionized the world of design by providing a practical and efficient solution for early-stage visual experimentation. Its timeless presence in the creative workflow highlights its adaptability and value. Nevertheless, as design practices evolve, it is crucial to strike a balance between placeholder texts and content-driven design approaches, ensuring that the final outcome seamlessly integrates form and function.
                </p>
            </p>
            </div>
            <Menu />
        </div>
    );
}

export default Single
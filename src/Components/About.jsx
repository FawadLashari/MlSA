/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/butterfly.png";

const imageAltText = "butterfly on a flower";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm an IT student studying at Quaid-e-Awam University of Engineering, Science, & Technology. I enjoy diving into technical stuff and make lives easier with technology.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web design",
  "User experience",
  "SEO",
  "Gaming",
  "Wordpress",
  "Graphic design and Canva",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "As a Website Developer, I create engaging and user-friendly websites using WordPress, Squarespace, and other platforms. I have completed multiple projects for clients across various industries, applying my skills in UI/UX design, SEO, and project management. I also hold certifications from Udemy, Coursera, and LinkedIn in web development, user experience, and leadership. I am currently pursuing a degree in Information Technology at Quaid-e-Awam University of Engineering, Science, and Technology (QUEST) Nawabshah, where I explore diverse fields and embrace new knowledge. I am passionate about contributing to a more positive world through my work and social initiatives. I have organized and participated in blood donation camps and awareness campaigns on Thalassemia, HIV, STDs, and COVID-19. I am also a volunteer at Hope Welfare Trust Association Quest, a philanthropic organization that supports underprivileged communities. Let's connect and collaborate for meaningful change.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;

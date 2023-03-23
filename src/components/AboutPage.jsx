import { Link } from "react-router-dom";

const AboutPage = () => {
    return (
        <div className="about-page-container">
            <h2 className="about-title">About Us</h2>
            <p className="about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, minima. Dignissimos omnis perferendis praesentium. Nam voluptatum ratione dolorem porro maiores a modi, quas sequi ea mollitia eius officia ex corrupti!
                Aliquid hic accusamus animi incidunt ex soluta explicabo. Aliquam facilis, dolore asperiores amet velit dolores recusandae aut ullam ratione nemo quaerat a alias pariatur necessitatibus illo maiores, quae maxime. Consequuntur!
                Quaerat? Veritatis enim esse placeat? Eligendi dolor porro expedita quis qui eveniet earum alias! Quaerat cumque dolor dignissimos.
                Mollitia assumenda eveniet eius laboriosam est necessitatibus minus quos quam reiciendis ullam incidunt odit, tempore dolore tempora! Ut ratione eaque, mollitia nisi dignissimos explicabo, cupiditate voluptates asperiores harum odit nihil.
            </p>
            <Link classsName="about-link" to="/">Back home</Link>
        </div>
    );
}

export default AboutPage;
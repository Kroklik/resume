import {cguy} from "../utils/exports.js";

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="about-title">Обо мне</h2>
                <div className="about-content">
                    <img src={cguy} alt="About Me" className="about-image"/>
                    <p className="about-text">
                        Меня зовут Саидамир, я занимаюсь программированием на Python уже 2 года. Работаю на
                        фрилансе, специализируюсь на веб-разработке с использованием Django, React и JavaScript.
                        Также имею опыт в создании Telegram-ботов с помощью Aiogram и PyTelegramBotAPI. В
                        будущем хочу стать фулл стак разработчиком. Постоянно развиваюсь и изучаю новые
                        технологии.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
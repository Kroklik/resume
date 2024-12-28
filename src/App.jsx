import {useEffect, useState} from "react";
import {parseGithubProfile, parseUserRepos} from "./store/github/githubSlice.js";
import {useDispatch, useSelector} from "react-redux";
import {dark, light} from "./utils/exports.js";
import Repo from "./components/Repo.jsx";
import {initTheme} from "./store/theme/themeSlice.js";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";
import Loader from "./components/Loader.jsx";

function App() {
    const dispatch = useDispatch()
    const {profile, repos} = useSelector((state) => state.github)
    const {theme} = useSelector((state) => state.theme)
    const kaplyaImg = theme === 'light' ? dark : light
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => {
        dispatch(parseGithubProfile())
        dispatch(parseUserRepos())
        dispatch(initTheme())
    }, [dispatch]);

    return (
        <>
            <div className={`wrapper ${theme}`}>

                <Header menuOpen={menuOpen} kaplyaImg={kaplyaImg} setMenuOpen={setMenuOpen}></Header>

                <section className="hero">
                    <h2 className="hero-title">Добро пожаловать!</h2>
                    {profile ?
                        <a target='_blank' href={profile.html_url}
                           className="hero-button">GitHub</a> : <Loader></Loader>}

                </section>

                <About></About>

                <section id="works" className="works">
                    <div className="container">
                        <h2 className="works-title">Мои работы</h2>
                        <div className="works-grid">
                            {repos ?
                                repos.map((repo) => (
                                    <Repo repo={repo} key={repo.id}></Repo>
                                )): <Loader></Loader>}
                        </div>
                    </div>
                </section>

                <section id="skills" className="skills">
                    <div className="container">
                        <h2 className="skills-title">Мои навыки</h2>
                        <div className="skills-grid">
                            <div className="skill">Django</div>
                            <div className="skill">Python</div>
                            <div className="skill">JS</div>
                            <div className="skill">React</div>
                            <div className="skill">Redux</div>
                            <div className="skill">Git</div>
                            <div className="skill">aiogram</div>
                            <div className="skill">SQL</div>
                        </div>
                    </div>
                </section>

                <Footer></Footer>

            </div>

        </>
    )
}

export default App

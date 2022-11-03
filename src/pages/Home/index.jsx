import Layout from "../../components/Layout";
import Button from "../../components/Button";
import profile_picture from "../../assets/profile_img.jpg";
import github from "../../assets/github.svg";
import slack from "../../assets/slack.svg";

import "./style.css";

export default function Home() {
  return (
    <Layout>
      <main className="home_container">
        <div className="share_btn"></div>
        <section className="profile">
          <img src={profile_picture} alt="user profile" id="profile__img" />

          <div className="socials">
            <p>Moses Ogbopina</p>
            <a
              href="https://twitter.com/pena_mo56"
              id="twitter"
              target="_blank"
              rel="noreferrer noopener"
            >
              @ pena_mo56
            </a>
            <a
              href="https://hng9.slack.com/pena56"
              id="slack"
              target="_blank"
              rel="noreferrer noopener"
            >
              pena56
            </a>
          </div>
        </section>
        <section className="links">
          <Button
            label="Moses Ogbopina"
            id="btn_portfolio"
            url="https://pena56.com"
            subtext="Latest version of my Portfolio website"
          />
          <Button
            label="Zuri Family"
            id="btn__zuri"
            url="https://training.zuri.team/"
            subtext="Welcome to the Zuri family"
          />
          <Button
            label="Zuri's Library"
            id="books"
            url="http://books.zuri.team"
            subtext="You'll find all tech books here to help you get started in your tech journey."
          />
          <Button
            label="Python book for beginners"
            id="book__python"
            url="https://books.zuri.team/python-for-beginners?ref_id=pena56"
            subtext="Grab a copy of this comprehensive python book for beginners."
          />
          <Button
            label="Talent Hunt"
            id="pitch"
            url="https://background.zuri.team"
            subtext="Test your tech skills and watch awesome developers do awesome things."
          />
          <Button
            label="UI/UX Design Book"
            id="book__design"
            url="https://books.zuri.team/design-rules"
            subtext="Grab your copy of the best design book on UI/UX"
          />
          <Button
            label="Contact Me"
            id="contact"
            url="/contact"
            subtext="Get in touch with me"
          />
        </section>
        <section className="social_icons">
          <a
            href="https://hng9.slack.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={slack} alt="slack" />
          </a>

          <a
            href="https://github.com/pena56"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={github} alt="github" />
          </a>
        </section>
      </main>
    </Layout>
  );
}

import "./about.css";
import React from "react";

const About = () => {
  return (
    <div className="section">
      <br />
      <div className="greeting">
        <h1 className="hi">About</h1>
      </div>

      <div>
        <img
          src="https://lh3.googleusercontent.com/z2QX31FHP6ZU2xhIfW-BsnDsMz42LUdTVxIX1jhdN0N02MY4SR98KWS0t5ooAUOSj1y_1XXEM9Npvl4IwF_neWdpSxbk7fe9UTrXkLopI8QaKCA92uxXm5hOucMQNYudTLGGSmlqjD-hRPWw3KJy0H4g4t_OtfxXBG2HLnd873rswM_OdiaX3rDSXya189poMsBz0DxCOu4tLOyF_WzFaJfEbQf5FVNDa00WzwwYonJ60Y57hTHLxTg7r_txRxhTdvdDKDgmkeP9wH6hjFIV-1xGQM0-OzrJjrJ7YogksFAtAfBlaCIA4I-FC-ij1JWLc7b5HVRZ7v1bQm6MxIUNhPHmGhPoz7zlrt0Q_nw42ve557opFRAwd6nCM8YgJcWlSnfBefWVXmEnedUxBpbWVf1cmSPB2zCzAukv1jyPHYw5KxlF74CfvZ0sQeD-Obpd6F4QWnuwObW4WlWWXpr8Wz0_yMb7vyjC5YI5KPcBXYLdFbVHySAyvt5XYowDNjASJCKwfJ8J_AKa1iL-33iLA4ad3Q7gfAn5PCTNE_4y4RIaMq6xwhLyKTXHEi3uSxQKhv_kEc6DnlJzGK9kKk6uylMwtSYdrl1AzCe66z8RYVFPK7Ul38bR1Br28LKbV31K2d1H3rd9RvOxZH6KhrlpXXfhH3aBoFB3=s830-no"
          className="dPic"
          alt="display"
        />
      </div>
      <div className="about">
        <h3>Having fun with react </h3>
        <h3>Building cool web applications</h3>
        <h3>Photographer who likes working with ancient gear</h3>
        <h3>Writer of poems</h3>
      </div>
    </div>
  );
};

export default About;

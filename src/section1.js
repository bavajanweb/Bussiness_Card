import './index.css'
import img from './bavajan.jpg'
import twitter from './twitter.png'
import instagram from './instagram.png'
import discord from './discord.png'
import facebook from './facebook.png'


export default function FirstSection() {
    return (
        <div className='card'>
            <div className='container'>
                <img src={img} className='img' />
                <h1>Bavajan Shaik</h1>
                <h4>Frontend Developer</h4>
                <h6><a href='bavajan.netlify.app'>Bavajan.com</a></h6>
                <div className='buttons'>
                    <button className='email'>Email</button>
                    <button className='linkedin'>LinkedIn</button>
                </div>
                <div className='about'>
                    <h6>About</h6>
                    <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                </div>

                <div className='intrest'>
                    <h6>Intrest</h6>
                    <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                </div>

                <div className='social-icons'>
                    <img src={twitter}/>
                    <img src={facebook}/>
                    <img src={instagram}/>
                    <img src={discord}/>

                </div>
            </div>
        </div>
    )
}
import React from 'react'
import Layout from '../Components/Layout'
import Card from '../Components/Card'
import { Link } from 'react-router-dom'

function Home() {

    const latestwork = [{
        "tags": "AI",
        "title": "SpamFind",
        "ttr": "2 min exploration",
        "button": "See Concept",
        "image": "/Assets/9.JPG",
        "desc": "The Spam Finder app is a cutting-edge application that utilizes advanced Natural Language Processing (NLP) techniques to effectively detect and prevent spam messages. By analyzing user input, such as emails, social media messages, or text messages, the app employs sophisticated algorithms including sentiment analysis, keyword analysis, and linguistic analysis to determine if a message is spam. With a constantly evolving database of known spam patterns, sender profiles, and machine learning models that detect emerging spam trends, the app provides users with accurate and up-to-date protection. Through its user-friendly interface and adaptive learning capabilities that improve accuracy over time based on user feedback, the Spam Finder app not only saves users time and effort but also safeguards against potential scams, phishing attempts, and malware threats, ensuring a clean and secure digital environment for users to communicate and interact.",
        "link": "https://spamfind.streamlit.app",
        "tech": "Sklearn | Python | Streamlit"
    }, {
        "tags": "AI | Web Development",
        "title": "Personality Predictor",
        "ttr": "5 min exploration",
        "button": "See Concept",
        "image": "/Assets/1.JPG",
        "desc": `The personality predictor is designed to help you discover your personality type based on the OCEAN values model. OCEAN stands for Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism. These five dimensions are used to measure and describe human personality. To get started, simply take the quiz which consists of a series of questions that will help us determine your personality type. The quiz is based on the OCEAN values model, which has been widely used and validated by researchers in the field of personality psychology. Once you have completed the quiz, it will provide you with a report on your personality type. This report will give you a breakdown of your scores on each of the five dimensions of the OCEAN values model, as well as a description of what these scores mean and how they contribute to your overall personality. There's no data collection making it absolutely safe to use. The website is user-friendly in order to provide the best user experience possible.`,
        "link": "https://personality-prediction.netlify.app",
        "tech": "ReactJS | TailwindCSS | FastAPI"
    }, {
        "tags": "Full Stack Web Development",
        "title": "ToDo List",
        "ttr": "2 min view",
        "button": "See Concept",
        "image": "/Assets/4.JPG",
        "desc": "The Todo List App is a convenient and user-friendly application that helps you manage your tasks effectively. With its intuitive interface, you can easily add, update, and delete todos, ensuring that your task list stays organized and up to date. The app allows you to create new tasks by entering descriptions, setting due dates, assigning priorities, and adding tags for better categorization. You can also update existing tasks by modifying descriptions, changing due dates, and updating priorities and tags. When a task is completed or no longer relevant, you can effortlessly delete it from your list. The app offers filtering and sorting options, enabling you to find specific tasks based on priorities, due dates, or tags. It also provides progress tracking by allowing you to mark tasks as complete, giving you a clear overview of your accomplishments. The app ensures the security of your data with user authentication, keeping your todo list private and protected. Whether you're using it on desktop or mobile devices, the Todo List App provides a seamless and cross-platform experience, allowing you to access and manage your tasks anytime, anywhere. Stay organized, prioritize effectively, and achieve your goals efficiently with the Todo List App.",
        "link": "https://github.com/GowthamNats/todo",
        "tech": "ReactJS | TailwindCSS | NodeJS | Express | MySQL"
    }]

  return (
    <div className='w-full h-screen flex flex-col tracking-wide bg-slate-100 text-center md:text-start'>
        <Layout className='' />
        <div className='h-full pt-12 md:pt-20'>
            <div className='px-4 md:px-14 flex flex-col justify-center h-full text-gray-900'>
                <h1 className='text-lg md:text-2xl mb-3 md:mb-5'>I'm Gowtham, </h1>
                <p className='text-3xl md:text-5xl font-semibold mb-5 leading-snug'>An aspiring software engineer and jack-of-all-trades with a passion for innovation.</p>
                <h1 className='text-lg md:text-2xl mb-3 md:mb-5'>An idea is all I need.</h1>
            </div>

            <h1 className='px-4 md:px-14 text-2xl md:text-4xl pt-10 md:pt-20 font-semibold bg-slate-100'>Latest Work</h1>
            {latestwork.map((e) => (
                <div className='px-4 md:px-14 flex flex-col py-10 justify-center bg-slate-100'>
                    <Card tags={e.tags} title={e.title} ttr={e.ttr} button={e.button} image={e.image} desc={e.desc} link={e.link} tech={e.tech} />
                </div>
            ))}

            <div className='px-4 md:px-14 flex flex-col justify-center items-center h-full pt-12 md:pt-16 bg-blue-600 text-slate-100'>
                <h1 className='text-3xl md:text-5xl font-semibold mb-6 md:mb-10'>Let's work together</h1>
                <p className='text-lg md:text-2xl mb-6 md:mb-10 leading-snug'>If you have an idea or project you want to discuss, feel free to contact me.</p>
                <Link to='/contact' className='p-3 md:p-4 border-2 border-slate-100 rounded-full hover:bg-slate-100 hover:text-blue-600 transition-all duration-500'>Send me an email</Link>
            </div>
        </div>
    </div>
  )
}

export default Home
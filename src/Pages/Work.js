import React from 'react'
import Layout from '../Components/Layout'
import Card from '../Components/Card'

function Work() {

    const work = [{
        "tags": "AI | Web Development",
        "title": "Personality Predictor",
        "ttr": "2 min read",
        "button": "See Concept",
        "image": "/Assets/1.JPG",
        "desc": "The personality predictor is designed using ReactJS to help you discover your personality type based on the OCEAN values model. OCEAN stands for Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism. These five dimensions are used to measure and describe human personality. To get started, simply take the quiz which consists of a series of questions that will help us determine your personality type. The quiz is based on the OCEAN values model, which has been widely used and validated by researchers in the field of personality psychology. Once you have completed the quiz, it will provide you with a report on your personality type. This report will give you a breakdown of your scores on each of the five dimensions of the OCEAN values model, as well as a description of what these scores mean and how they contribute to your overall personality. There's no data collection making it absolutely safe to use. The website is user-friendly in order to provide the best user experience possible.",
        "link": "https://personality-prediction.netlify.app"
    }, {
        "tags": "Web Development | Mathematics",
        "title": "Calculate.io",
        "ttr": "2 min read",
        "button": "See Concept",
        "image": "/Assets/2.JPG",
        "desc": "Calculate.io is a website designed using ReactJS that provides users with a suite of mathematical tools and calculators to perform a wide range of mathematical operations. The website is designed to be user-friendly and easy to navigate, making it a useful resource for students, educators, and anyone who needs to perform complex mathematical calculations quickly and easily. With Calculate.io, users can perform a variety of standard mathematical operations, including addition, subtraction, multiplication, and division. In addition to these basic operations, the website also provides tools for more advanced mathematical calculations, such as linear equations, quadratic equations, cubic equations, trigonometry, statistics, complex numbers, matrices, vectors, mensuration, number theory, and progressions. Whether you need to solve a complex equation, analyze statistical data, or perform a variety of other mathematical calculations, Calculate.io provides the tools and resources you need to get the job done quickly and accurately. With its intuitive interface and powerful features, Calculate.io is the go-to destination for anyone who needs to perform advanced mathematical calculations.",
        "link": "https://multipurpose-calculator.netlify.app"
    }, {
        "tags": "Full Stack Web Development",
        "title": "PlaceXP's Website",
        "ttr": "2 min read",
        "button": "See Concept",
        "image": "/Assets/3.JPG",
        "desc": "PlaceXP is a one-stop solution for all your coding and technical needs. We keep track of ongoing hackathons: We understand that it's not easy to keep track of all the hackathons happening around the world. That's why we have a dedicated section on our website where we list all the ongoing hackathons along with the registration link. So, if you're a coding enthusiast, you can simply visit our website and participate in any hackathon that interests you. Interview experiences of prestigious companies: We understand that preparing for technical interviews can be daunting, especially when you're aiming for prestigious companies. That's why we have a section where we provide interview experiences of people who have cracked interviews in various prestigious companies. These experiences are shared in the form of YouTube videos, so you can watch them at your convenience and learn from their experiences. Conduct mock tests: We also provide mock tests to help you prepare for technical interviews. These tests are designed by experts and cover all the important topics that are commonly asked in technical interviews. You can take these tests on our website and get instant feedback on your performance. This will help you identify your strengths and weaknesses and work on them accordingly. At Hackathon Tracker, we are committed to helping you achieve your coding and technical goals. So, whether you're a beginner or an experienced coder, our website has something for everyone.",
        "link": "https://placexp.software"
    }
]

  return (
    <div className='w-full h-screen flex flex-col tracking-wide text-center lg:text-justify'>
        <Layout className='' />
        <div className='h-full bg-slate-100 pt-32'>
            {work.map((e) => (
                <div className='px-14 flex flex-col py-10 justify-center bg-slate-100'>
                    <Card tags={e.tags} title={e.title} ttr={e.ttr} button={e.button} image={e.image} desc={e.desc} link={e.link} />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Work
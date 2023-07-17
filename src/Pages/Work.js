import React from 'react'
import Layout from '../Components/Layout'
import Card from '../Components/Card'

function Work() {

    const work = [{
        "tags": "AI | Web Development",
        "title": "Personality Predictor",
        "ttr": "5 min exploration",
        "button": "See Concept",
        "image": "/Assets/1.JPG",
        "desc": "The personality predictor is designed using ReactJS to help you discover your personality type based on the OCEAN values model. OCEAN stands for Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism. These five dimensions are used to measure and describe human personality. To get started, simply take the quiz which consists of a series of questions that will help us determine your personality type. The quiz is based on the OCEAN values model, which has been widely used and validated by researchers in the field of personality psychology. Once you have completed the quiz, it will provide you with a report on your personality type. This report will give you a breakdown of your scores on each of the five dimensions of the OCEAN values model, as well as a description of what these scores mean and how they contribute to your overall personality. There's no data collection making it absolutely safe to use. The website is user-friendly in order to provide the best user experience possible.",
        "link": "https://personality-prediction.netlify.app",
        "tech": "ReactJS | TailwindCSS | FastAPI | TensorFlow"
    }, {
        "tags": "Web Development | Mathematics",
        "title": "Calculate.io",
        "ttr": "10 min exploration",
        "button": "See Concept",
        "image": "/Assets/2.JPG",
        "desc": "Calculate.io is a website designed using ReactJS that provides users with a suite of mathematical tools and calculators to perform a wide range of mathematical operations. The website is designed to be user-friendly and easy to navigate, making it a useful resource for students, educators, and anyone who needs to perform complex mathematical calculations quickly and easily. With Calculate.io, users can perform a variety of standard mathematical operations, including addition, subtraction, multiplication, and division. In addition to these basic operations, the website also provides tools for more advanced mathematical calculations, such as linear equations, quadratic equations, cubic equations, trigonometry, statistics, complex numbers, matrices, vectors, mensuration, number theory, and progressions. Whether you need to solve a complex equation, analyze statistical data, or perform a variety of other mathematical calculations, Calculate.io provides the tools and resources you need to get the job done quickly and accurately. With its intuitive interface and powerful features, Calculate.io is the go-to destination for anyone who needs to perform advanced mathematical calculations.",
        "link": "https://multipurpose-calculator.netlify.app",
        "tech": "ReactJS"
    }, {
        "tags": "Full Stack Web Development",
        "title": "PlaceXP's Website",
        "ttr": "3 min exploration",
        "button": "See Concept",
        "image": "/Assets/3.JPG",
        "desc": "PlaceXP is a one-stop solution for all your coding and technical needs. We keep track of ongoing hackathons: We understand that it's not easy to keep track of all the hackathons happening around the world. That's why we have a dedicated section on our website where we list all the ongoing hackathons along with the registration link. So, if you're a coding enthusiast, you can simply visit our website and participate in any hackathon that interests you. Interview experiences of prestigious companies: We understand that preparing for technical interviews can be daunting, especially when you're aiming for prestigious companies. That's why we have a section where we provide interview experiences of people who have cracked interviews in various prestigious companies. These experiences are shared in the form of YouTube videos, so you can watch them at your convenience and learn from their experiences. Conduct mock tests: We also provide mock tests to help you prepare for technical interviews. These tests are designed by experts and cover all the important topics that are commonly asked in technical interviews. You can take these tests on our website and get instant feedback on your performance. This will help you identify your strengths and weaknesses and work on them accordingly. At Hackathon Tracker, we are committed to helping you achieve your coding and technical goals. So, whether you're a beginner or an experienced coder, our website has something for everyone.",
        "link": "https://placexp.software",
        "tech": "NextJS | TailwindCSS | NodeJS | Express | MongoDB"
    }, {
        "tags": "Full Stack Web Development",
        "title": "ToDo List",
        "ttr": "2 min view",
        "button": "See Concept",
        "image": "/Assets/4.JPG",
        "desc": "The Todo List App is a convenient and user-friendly application that helps you manage your tasks effectively. With its intuitive interface, you can easily add, update, and delete todos, ensuring that your task list stays organized and up to date. The app allows you to create new tasks by entering descriptions, setting due dates, assigning priorities, and adding tags for better categorization. You can also update existing tasks by modifying descriptions, changing due dates, and updating priorities and tags. When a task is completed or no longer relevant, you can effortlessly delete it from your list. The app offers filtering and sorting options, enabling you to find specific tasks based on priorities, due dates, or tags. It also provides progress tracking by allowing you to mark tasks as complete, giving you a clear overview of your accomplishments. The app ensures the security of your data with user authentication, keeping your todo list private and protected. Whether you're using it on desktop or mobile devices, the Todo List App provides a seamless and cross-platform experience, allowing you to access and manage your tasks anytime, anywhere. Stay organized, prioritize effectively, and achieve your goals efficiently with the Todo List App.",
        "link": "https://github.com/GowthamNats/todo",
        "tech": "ReactJS | TailwindCSS | NodeJS | Express | MySQL"
    }, {
        "tags": "AI | Web Development",
        "title": "Recipify",
        "ttr": "10 min exploration",
        "button": "See Concept",
        "image": "/Assets/5.JPG",
        "desc": "Recipify is an innovative app that revolutionizes the way we explore and create recipes. By leveraging cutting-edge image recognition technology and user preferences, Recipify takes the guesswork out of cooking by generating a recipe based on the ingredients detected in a user-provided picture. With a simple snap of a photo, users can capture their ingredients and let Recipify do the rest. The app's advanced algorithm analyzes the image, identifies the ingredients present, and cross-references them with its extensive recipe database. Taking into account the user's dietary preferences, such as vegetarian, gluten-free, or dairy-free, Recipify generates a tailored recipe that showcases the detected ingredients. Whether it's a mouthwatering pasta dish, a delightful salad, or a decadent dessert, Recipify ensures that users can make the most of the ingredients they have on hand, promoting reduced food waste and creativity in the kitchen. Each recipe includes detailed step-by-step instructions, cooking times, and nutritional information, allowing users to easily follow along and prepare delicious meals. Recipify also offers the option to save favorite recipes, create personalized recipe collections, and share culinary creations with friends and family. With its intuitive interface and powerful ingredient recognition capabilities, Recipify simplifies the cooking process and inspires users to explore new flavors and culinary possibilities. Whether you're a seasoned chef looking for fresh ideas or a beginner in the kitchen seeking guidance, Recipify is the go-to app that brings out your inner chef and transforms everyday ingredients into extraordinary dishes.",
        "link": "https://github.com/GowthamNats/SmartBridge-Externship",
        "tech": "ReactJS | TailwindCSS | Flask | TensorFlow"
    }, {
        "tags": "Embedded Systems",
        "title": "Sun Tracking Solar Panel",
        "ttr": "5 min read",
        "button": "See Concept",
        "image": "/Assets/6.JPG",
        "desc": "The simple sun-tracking solar panel is an innovative device that optimizes solar energy capture by utilizing a Light Dependent Resistor (LDR) to measure ambient light levels and adjust a servo motor accordingly to minimize tracking error. This intelligent system continuously monitors the intensity of sunlight and adjusts the position of the solar panel to maximize its exposure to the sun's rays throughout the day. By accurately tracking the sun's movement, the solar panel maintains an optimal angle for efficient energy conversion, resulting in increased power generation. The LDR acts as a sensor, detecting variations in light intensity, and relaying this information to the servo motor control mechanism. The servo motor, controlled by a microcontroller or a dedicated circuit, responds to the LDR's input and ensures the solar panel aligns precisely with the sun's position. This active tracking system enhances the solar panel's performance by minimizing the loss of energy due to misalignment. With its ability to adapt to changing lighting conditions, this sun-tracking solar panel provides an efficient and sustainable solution for maximizing solar energy utilization, making it an ideal choice for renewable energy applications such as solar power plants, off-grid systems, and residential solar installations.",
        "link": "https://github.com/GowthamNats/Sun-Tracking-Solar-Panel/tree/main",
        "tech": "Arduino Programming"
    }, {
        "tags": "IoT | Web Development | AI",
        "title": "Recipe Recommendation System",
        "ttr": "10 min read",
        "button": "See Concept",
        "image": "/Assets/7.JPG",
        "desc": "Introducing a cutting-edge smart recipe recommender powered by advanced technology and seamless integration. With the innovative combination of an ESP32 Cam, a powerful machine learning (ML) model, and the Spoonacular API, this smart solution revolutionizes the way you discover and create delicious recipes. Simply capture a picture using the ESP32 Cam, and our ML model will intelligently detect the ingredients present in the image, providing accurate and precise information. The system then seamlessly connects to a dedicated website that fetches the identified ingredients and queries the extensive Spoonacular API for a wealth of recipe suggestions tailored to your culinary preferences. Whether you're a seasoned chef or a cooking enthusiast, this smart recipe recommender saves you time and effort by eliminating the need for manual ingredient input. Experience a world of culinary possibilities with this innovative solution, allowing you to explore new flavors, expand your cooking repertoire, and create mouthwatering dishes with ease. Say goodbye to recipe ruts and hello to an exciting culinary adventure with our smart recipe recommender.",
        "link": "https://github.com/GowthamNats/Recipe-Recommendation-System/tree/main",
        "tech": "Arduino Programming | ReactJS | TailwindCSS | TensorFlow | FastAPI | Spoonacular API"
    }, {
        "tags": "Web Development | API",
        "title": "Weather.io",
        "ttr": "5 min exploration",
        "button": "See Concept",
        "image": "/Assets/8.JPG",
        "desc": "Warning: Unoptimized!! The Weather.io app is a comprehensive weather application that revolutionizes how you stay informed about atmospheric conditions. By simply inputting your desired location, WeatherMaster provides you with a wealth of weather-related information at your fingertips. This intuitive app offers a wide range of features, including accurate weather forecasts, historical weather data, real-time updates on current weather conditions, air pollution parameters, and advanced geocoding functionalities. Whether you're planning a trip, curious about past weather patterns, or concerned about air quality, WeatherMaster has you covered. With its sleek and user-friendly interface, the app presents detailed forecasts with temperature, precipitation, wind speed, and humidity indicators, empowering you to make informed decisions based on up-to-date information. Additionally, WeatherMaster's comprehensive historical weather database allows you to explore past weather trends, enabling you to better understand climate patterns and plan accordingly. The app also provides valuable insights into air pollution parameters, such as pollutant levels and air quality indices, helping you make conscious choices about outdoor activities and safeguarding your health. Furthermore, WeatherMaster leverages cutting-edge geocoding technology, allowing you to search for specific locations, view maps, and access geographical coordinates seamlessly. Whether you're an outdoor enthusiast, a frequent traveler, or someone who simply wants to stay ahead of the weather, WeatherMaster is your ultimate companion. With its wealth of features and emphasis on accuracy and usability, this app ensures that you're always prepared for any weather-related situation.",
        "link": "https://weather-tracker-tech.netlify.app",
        "tech": "ReactJS | WeatherAPI"
    }, {
        "tags": "AI",
        "title": "SpamFind",
        "ttr": "2 min exploration",
        "button": "See Concept",
        "image": "/Assets/9.JPG",
        "desc": "The Spam Finder app is a cutting-edge application that utilizes advanced Natural Language Processing (NLP) techniques to effectively detect and prevent spam messages. By analyzing user input, such as emails, social media messages, or text messages, the app employs sophisticated algorithms including sentiment analysis, keyword analysis, and linguistic analysis to determine if a message is spam. With a constantly evolving database of known spam patterns, sender profiles, and machine learning models that detect emerging spam trends, the app provides users with accurate and up-to-date protection. Through its user-friendly interface and adaptive learning capabilities that improve accuracy over time based on user feedback, the Spam Finder app not only saves users time and effort but also safeguards against potential scams, phishing attempts, and malware threats, ensuring a clean and secure digital environment for users to communicate and interact.",
        "link": "https://spamfind.streamlit.app",
        "tech": "Sklearn | Python | Streamlit"
    }
]

  return (
    <div className='w-full h-screen flex flex-col tracking-wide text-center lg:text-justify'>
        <Layout className='' />
        <div className='h-full bg-slate-100 pt-32'>
            {work.map((e) => (
                <div className='px-14 flex flex-col py-10 justify-center bg-slate-100'>
                    <Card tags={e.tags} title={e.title} ttr={e.ttr} button={e.button} image={e.image} desc={e.desc} link={e.link} tech={e.tech} />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Work

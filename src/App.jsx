
import About from './components/about'
import Blog from './components/blog'
import Cuet from './components/cuet'
import Hero from './components/hero'
import Nav from './components/nav'
import Videonaki from './components/vidbg'
import ContactForm from './components/form'
import Footer from './components/footer'
import Pbar from './components/pbar'
import Social from './components/social'
import Projects from './components/projects'
const App = () => {

    return (
        <div>
            <div>            < Videonaki />
            </div>
            <div className='relative z-10'> <Nav />

                <div className='2xl:flex 2xl:justify-center 2xl:items-center'>  <Hero />                <About />

                    <Cuet /></div>
                <Blog />


                <Pbar />
                <Projects />
                <ContactForm />

                <Social />

                <Footer />


            </div>
        </div >
    )
}

export default App


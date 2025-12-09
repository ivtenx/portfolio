
import About from './components/about'
import Blog from './components/blog'
import Cuet from './components/cuet'
import Hero from './components/hero'
import Nav from './components/nav'
import Videonaki from './components/vidbg'
import ContactForm from './components/form'
import Footer from './components/footer'
const App = () => {

    return (
        <div>
            < Videonaki />
            <div> <Nav />
                <div >
                    <Hero />
                    <Cuet />
                    <About />
                    <Blog /></div>
                <ContactForm />
                <Footer />
            </div>
        </div >
    )
}

export default App
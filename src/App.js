import React from "react"
import "./App.css"
import { client } from "./client"
import Fade from "react-reveal/Fade"

// COMPONENTS
import About from "./components/About"
import Carousel from "./components/Carousel"
import ContactUs from "./components/ContactUs"
import Jobs from "./components/Jobs"
import Map from "./components/Map"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ParallaxImageOne from "./components/ParallaxImageOne"
import ParallaxImageTwo from "./components/ParallaxImageTwo"
import Welcome from "./components/Welcome"

class App extends React.Component {
  state = {
    postedJobs: [],
  }

  componentDidMount() {
    client
      .getEntries()
      .then((response) => {
        console.log(response)
        this.setState({
          postedJobs: response.items,
        })
      })
      .catch(console.error)
  }

  render() {
    return (
      <Fade>
        <div className='App'>
          <Navbar />
          <Carousel />
          <Welcome />
          <ParallaxImageOne
            image={
              "https://images.pexels.com/photos/3843352/pexels-photo-3843352.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            }
          />
          <section id='rolunk'>
            <About />
          </section>
          <ParallaxImageTwo
            image={
              "https://images.pexels.com/photos/2026451/pexels-photo-2026451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            }
          />
          <section id='munkak'>
            <Jobs jobs={this.state.postedJobs} />
          </section>
          <section id='kapcsolat'>
            <ContactUs />
          </section>
          <Map />
          <Footer />
        </div>
      </Fade>
    )
  }
}

export default App

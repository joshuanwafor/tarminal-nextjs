import { Stack, Text, CommandBar, getTheme } from '@fluentui/react'
import { } from "@fluentui/react-hooks"
import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import { AccessTime24Filled, IFluentIconsProps, Star } from "@fluentui/react-icons";
initializeIcons();

const iconStyleProps = {
  primaryFill: "purple",
  className: "iconClass"
};


export default function Home() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;500;700;800&display=swap" rel="stylesheet" />
      </Head>


      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div class="container">
          <a class="navbar-brand" href="#">Tarminal - POS</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Contact</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Help</a>
              </li>
            </ul>
            <form class="d-flex">
              <button class="btn btn-primary" type="submit">Download</button>
            </form>
          </div>
        </div>
      </nav>

      <div className="pt-4 container" />
      <div className="">
      <div class="px-4 pt-5 my-5 text-center border-bottom">
        <h1 class="display-4 fw-bold">Centered screenshot</h1>
        <div class="col-lg-6 mx-auto">
          <p class="mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <button type="button" class="btn btn-primary btn-lg px-4 me-sm-3">Download</button>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4 disabled">Use Web</button>
          </div>
        </div>
        <div class="overflow-hidden" style={{ height: "30vh" }}>
          <div class="container px-5">
            <img src="bootstrap-docs.png" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy" />
          </div>
        </div>
      </div>
      </div>



      <Features />

      <div class="bg-light py-5 my-5" style={{height:"50vh"}}>

      </div>


      <div className="container">
        <div className="row justify-content-center">
          <div className="text-center col col-10">

            <h5>
              Want new features sooner?
            </h5>

            <p>Get the Insiders build instead.</p>
            <p>
              License and Privacy Terms
            </p>

            <p>
              By downloading and using Visual Studio Code, you agree to the license terms and privacy statement. VS Code automatically sends telemetry data and crash dumps to help us improve the product. If you would prefer not to have this data sent please go see How to Disable Crash Reporting to learn how to disable it.
            </p>
          </div>
        </div>
      </div>

      <Footer />

    </div>
  )
}

function Footer() {

  return <div class="container">
    <footer class="py-3 my-4">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Features</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Pricing</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li>
      </ul>
      <p class="text-center text-muted">&copy; 2021 Company, Inc</p>
    </footer>
  </div>

}

function Features() {


  return <div class="container px-4 py-5" id="featured-3">
    <h2 class="pb-2">Features</h2>
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div class="feature col">
        <div class="feature-icon bg-primary bg-gradient">
          {/* <svg class="bi" width="1em" height="1em"><use xlink:href="#collection" /></svg> */}

        </div>
        <h2>Inventory management</h2>
        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
  
      </div>
      <div class="feature col">
        <div class="feature-icon bg-primary bg-gradient mx-auto">
          {/* <svg class="bi" width="1em" height="1em"><use xlink:href="#people-circle" /></svg> */}
        </div>
        <h2>Customer management</h2>
        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
      </div>
      <div class="feature col">
        <div class="feature-icon bg-primary bg-gradient">
          {/* <svg class="bi" width="1em" height="1em"><use xlink:href="#toggles2" /></svg> */}
        </div>
        <h2>Invoice management</h2>
        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
    
      </div>
    </div>
  </div>
}


function WhoisUsing(){
  
}
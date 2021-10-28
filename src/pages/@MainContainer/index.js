import React from 'react';

import Home from '../Home';
import Service from '../Service';
import Works from '../Works';
import About from '../About';
import Client from '../Client';
import Blog from '../Blog';
import Contact from '../Contact';
import ScrollToTop from '../../components/ScrollToTop';
import $ from 'jquery';
import { FaChevronUp } from 'react-icons/fa';

import './index.css';
// import "../../assets/js/navbar";

const openNav = () => {
  document.getElementById('myNav').style.width = '100%';
};
const closeNav = () => {
  document.getElementById('myNav').style.width = '0%';
};
const openNav_1 = () => {
  document.getElementById('myNav_1').style.height = '100%';
};
const closeNav_1 = () => {
  document.getElementById('myNav_1').style.height = '0%';
};

$(document).ready(function () {
  $(window).on('scroll', function () {
    if (window.scrollY > 800) {
      $('.topnav').addClass('topnav_fixed');
      $('.topnav').css('top', '-200px');
      $('.topnav').css('transition', '0.4s');
      $('.scrollTop').addClass('scroll_fixed');
    } else {
      $('.topnav').removeClass('topnav_fixed');
      $('.scrollTop').removeClass('scroll_fixed');
    }
  });
});

const go_Home = () => {
  $('html,body').animate(
    {
      scrollTop: $('.home').offset().top - 160,
    },
    'slow'
  );
};

const go_Service = () => {
  $('html,body').animate(
    {
      scrollTop: $('.service').offset().top - 100,
    },
    'slow'
  );
};

const go_Works = () => {
  $('html,body').animate(
    {
      scrollTop: $('.works').offset().top - 160,
    },
    'slow'
  );
};

const go_About = () => {
  $('html,body').animate(
    {
      scrollTop: $('.about').offset().top - 160,
    },
    'slow'
  );
};

const go_Client = () => {
  $('html,body').animate(
    {
      scrollTop: $('.client').offset().top + 60,
    },
    'slow'
  );
};

const go_Blog = () => {
  $('html,body').animate(
    {
      scrollTop: $('.blog').offset().top,
    },
    'slow'
  );
};
const go_Contact = () => {
  $('html,body').animate(
    {
      scrollTop: $('.contact').offset().top,
    },
    'slow'
  );
};

const scroll_top = () => {
  $('html,body').animate(
    {
      scrollTop: $('.home').offset().top,
    },
    'slow'
  );
};

const MainContainer = () => {
  return (
    <div className="maincontainer">
      <div className="Navbar">
        <div
          className="topnav d-flex align-items-center justify-content-between"
          id="myTopnav"
        >
          <a className="navbar_left">
            <h2>Gentium</h2>
          </a>
          <div className="navbar_right">
            <span></span>
            <a onClick={openNav_1}>
              <i className="fas fa-search"></i>
            </a>
            <a className="nav_btn" id="contact_navbtn" onClick={go_Contact}>
              Contact
            </a>
            <a className="nav_btn" id="blog_navbtn" onClick={go_Blog}>
              Blog
            </a>
            <a className="nav_btn" id="client_navbtn" onClick={go_Client}>
              Client
            </a>
            <a className="nav_btn" id="about_navbtn" onClick={go_About}>
              About
            </a>
            <a className="nav_btn" id="works_navbtn" onClick={go_Works}>
              Works
            </a>
            <a className="nav_btn" id="service_navbtn" onClick={go_Service}>
              Service
            </a>
            <a className="nav_btn" id="home_navbtn" onClick={go_Home}>
              Home
            </a>
            <span
              id="responsive_btn"
              className="responsive_btn"
              onClick={openNav}
            >
              &#9776;
            </span>
          </div>
        </div>
        <div id="myNav" className="overlay">
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
            &times;
          </a>
          <div className="overlay-content">
            <a href="#home" onClick={go_Home}>
              home
            </a>
            <a href="#service" onClick={go_Service}>
              service
            </a>
            <a href="#works" onClick={go_Works}>
              works
            </a>
            <a href="#about" onClick={go_About}>
              About
            </a>
            <a href="#client" onClick={go_Client}>
              client
            </a>
            <a href="#blog" onClick={go_Blog}>
              blog
            </a>
            <a href="#contact" onClick={go_Contact}>
              contact
            </a>
          </div>
        </div>
        <div id="myNav_1" className="overlay_1">
          <a
            href="javascript:void(0)"
            className="closebtn_1"
            onClick={closeNav_1}
          >
            &times;
          </a>
          <div className="overlay-content_1">
            <form
              method="get"
              className="fullscreen-searchform"
              action="https://gentium.pixerex.com/"
            >
              <input className="search_box" name="" placeholder="Search..." />
              <i className="fa fa-search fullscreen-search-icon"></i>
            </form>
          </div>
        </div>
      </div>
      <div className="Content">
        <FaChevronUp
          onClick={scroll_top}
          className="scrollTop"
          size={40}
          color={'grey'}
          style={{ display: '' }}
        />
        <Home className="home" />
        <Service className="service" />
        <Works className="works" />
        <About className="about" />
        <Client className="client" />
        <Blog className="blog" />
        <Contact className="contact" />
        {/* <ScrollToTop /> */}
      </div>
    </div>
  );
};

export default MainContainer;

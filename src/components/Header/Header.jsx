import React, { useEffect, useState } from 'react';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import Dropdown from './Dropdown';
import $ from 'jquery';
import {PrimaryNavbarV6, SecondaryNavbarV6, NavStyles, DropdownStyles, DropdownStylesSecond, CTAButton} from './HeaderStyles.jsx' ;
import { SearchWrapperStyling } from '../Search/searchStyles.jsx';
import { Paragraph } from 'aether-marketing';
// prod nav data
import navbarData from '../../../bff-data/navbar.json';
import navtopicsdropdownData from '../../../bff-data/navtopicsdropdown.json';
// fallback nav data
import navbarDataLocal from '../../../build/navbarDev.json';
import navtopicsdropdownDataLocal from '../../../build/navtopicsdropdownDev.json';

// Get Cookie for Sign In toggler
const getCookie = (a) => {
  if (typeof document !== 'undefined') {
    const b = document.cookie.match(`(^|;)\\s*${a}\\s*=\\s*([^;]+)`);
    return b ? b.pop() : '';
  }
  return false;
};

// changes button in navbar based on cookie presence
const LoginCheck = (props) => {
  const { cookie, beta, hidden } = props;

  if (!hidden) {
    return (
      <CTAButton>
        <a
          href={`https://go.postman${beta}.co/build`}
          className='button__sign-in pingdom-transactional-check__sign-in-button'
          style={{ padding: '4px 12px 4px 12px' }}
          onClick={() => {
            trackCustomEvent({
              // string - required - The object that was interacted with (e.g.video)
              category: 'lc-top-nav',
              // string - required - Type of interaction (e.g. 'play')
              action: 'Click',
              // string - optional - Useful for categorizing events (e.g. 'Spring Campaign')
              label: 'contact-sales-button-clicked',
            });
          }}
        >
         Contact Sales
        </a>
        <a
          href={`https://go.postman${beta}.co/build`}
          className={
            cookie !== 'yes'
              ? 'button__sign-in pingdom-transactional-check__sign-in-button'
              : 'd-none'
          }
          onClick={() => {
            trackCustomEvent({
              // string - required - The object that was interacted with (e.g.video)
              category: 'lc-top-nav',
              // string - required - Type of interaction (e.g. 'play')
              action: 'Click',
              // string - optional - Useful for categorizing events (e.g. 'Spring Campaign')
              label: 'sign-in-button-clicked',
            });
          }}
        >
          Sign In
        </a>
        <a
          href={`https://identity.getpostman${beta}.com/signup?continue=https%3A%2F%2Fgo.postman.co%2Fbuild`}
          className={cookie !== 'yes' ? 'button__sign-up' : 'd-none'}
          onClick={() => {
            trackCustomEvent({
              category: 'lc-top-nav',
              action: 'Click',
              label: 'sign-in-button-clicked',
            });
          }}
        >
          Sign Up for Free
        </a>
        <a
          href="https://go.postman.co/home"
          className={cookie ? 'button__sign-up ml-3' : 'd-none'}
        >
          Launch Postman
        </a>
      </CTAButton>
    );
  }
  return <></>;
};

const Header = (props) => {

  const [beta, setBeta] = useState('');
  const [cookie, setCookie] = useState('');
  const [hidden, setHidden] = useState(true);
  const [data, setData] = useState(navbarData);
  const [dataDropdown, setDataDropdown] = useState(navtopicsdropdownData);
  const [visibleHelloBar] = useState();

  useEffect(() => {
    const cookie = getCookie('getpostmanlogin');
    const beta = window.location.host.includes('postman-beta') ? '-beta' : '';

    setCookie(cookie);
    setBeta(beta);
    const navbarKeys = ['items', 'media', 'type'];
    const navtopicsdropdownKeys = ['items', 'type'];
    
    if (navbarKeys.every(key => Object.keys(navbarData).includes(key))) {
      setData(navbarData)
    } else {
      setData(navbarDataLocal)
    }


    if (navtopicsdropdownKeys.every(key => Object.keys(navtopicsdropdownData).includes(key))) {
      setDataDropdown(navtopicsdropdownData)
    } else {
      setDataDropdown(navtopicsdropdownDataLocal)
    }

    const { waitBeforeShow } = props;

    setTimeout(() => {
      setHidden(false)
    }, waitBeforeShow);

    /* Applies styling for sticky nav */
    $('#secondaryNav').on('click', () => {
      $('body').toggleClass('menu-open');
      $('.nav-primary').toggleClass('activeMenu');
      $('.nav-secondary').toggleClass('activeMenu');
    });
    // Toggles Dropdown Menu and Fade Animation
    function showBsDropdown() {
      $(this)
        .find('.dropdown-menu')
        .first()
        .stop(true, true)
        .fadeToggle(250)
      $(this)
        .find('.arrow-icon')
        .addClass('show');
    }
    $('.dropdown').on('show.bs.dropdown', showBsDropdown);

    // Unbinds Dropdown Menu and Fade Animation
    function hideBsDropdown() {
      $(this)
        .find('.dropdown-menu')
        .stop(true, true)
        .fadeToggle(250)
      $(this)
        .find('.arrow-icon')
        .removeClass('show');
    }
    $('.dropdown').on('hide.bs.dropdown', hideBsDropdown);
  }, [])

 const showTargetElement = () => {
    // Show Sign In Button if user is not logged in (mobile)
    const cookie = getCookie('getpostmanlogin');
    const signInButton = document.querySelector('.mobile-sign-in');
    if (cookie !== 'yes') {
      signInButton.classList.toggle('show');
    }
    // Global Mobile Icon Transition
    const toggler = document
      .getElementById('globalNav')
      .getAttribute('aria-expanded');
    const body = document.querySelector('body');
    const icon1 = document.getElementById('icon-wrap-one');
    // Mobile Menu is active ?
    if (toggler === 'true') {
      // Add lock CSS to body to disable scroll
      body.classList.add('lock');
      // Flip up dropdown icon
      icon1.classList.remove('open');
    }
    // Hellobar
    const messageBarAlertTop = document.getElementById(
      'message-bar-alert-top',
    ) || { style: { display: '' } };
    if (!messageBarAlertTop.style.display) {
      messageBarAlertTop.style.display = 'none';
    } else {
      messageBarAlertTop.style.display = '';
    }
  }

  const hideTargetElement = () => {
    // Hide Sign In Button if user is not logged in (mobile)
    const signInButton = document.querySelector('.mobile-sign-in');
    const cookie = getCookie('getpostmanlogin');
    if (cookie !== 'yes') {
      signInButton.classList.toggle('hide');
    }
    const toggler = document
      .getElementById('globalNav')
      .getAttribute('aria-expanded');
    const body = document.querySelector('body');
    const icon1 = document.getElementById('icon-wrap-one');
    // Mobile Menu is not active ?
    if (toggler === 'false') {
      // addlock CSS to body to enable scroll
      body.classList.add('lock');
      // Flip down dropdown icon
      icon1.classList.add('open');
    } else {
      // Remove lock CSS to body to disable scroll
      body.classList.remove('lock');
    }
    const icon2 = document.getElementById('navbar-chevron-icons');
    const togglerSecondary = document
      .getElementById('secondaryNav')
      .getAttribute('aria-expanded');
    if (togglerSecondary === 'false') {
      icon2.classList.remove('open');
    }
  }

  const toggleSecondaryNavMenu = () => {
    // LC Mobile Icon Transition
    const togglerSecondary = document
      .getElementById('secondaryNav')
      .getAttribute('aria-expanded');
    const toggleChevron = document.getElementById('navbar-chevron-icons');
    if (togglerSecondary === 'false') {
      toggleChevron.classList.add('open');
    } else {
      toggleChevron.classList.remove('open');
    }
  }

  /* eslint-enable class-methods-use-this */

  return (
    <>
      <PrimaryNavbarV6 className="navbar-v6 ">
        <NavStyles className="navbar navbar-expand-lg navbar-light nav-primary ">
          <a className="navbar-brand" href="https://www.postman.com">
            <div className="navbar-logo-container">
              <img src="https://voyager.postman.com/logo/postman-logo-icon-orange.svg" alt="Postman" width="32" height="32" />
            </div>
          </a>
          <button
            onClick={() => {
              showTargetElement();
              hideTargetElement();
            }}
            id="globalNav"
            className="mobile-sign-in navbar-toggler"
            data-test="mobileNavToggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <div
                id="icon-wrap-one"
                className="icon-bar"
                aria-expanded="false"
              >
                <span />
                <span />
                <span />
                <span />
              </div>
            </span>
          </button>
          <div
            id="navbarSupportedContent"
            className={`collapse navbar-collapse ${!visibleHelloBar ? 'noBar' : ''}`}
          >
            {/* Primary Navbar */}
            <ul className="navbar-nav mr-auto">
            {data.items.map((item) => (
                item.dropdown && item.dropdown && (
                  <li className="nav-item dropdown" key={item.title}>
                    <a
                      className="nav-link dropdown-toggle"
                      href="##"
                      id="navbarDropdownMenuLink"
                      data-toggle="dropdown"
                      aria-expanded="false"
                      key={item.title}
                    >
                      {item.title}
                      <svg
                        className="arrow-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="#6b6b6b"
                      >
                        <g>
                          <path d="M10.375,3.219,6,6.719l-4.375-3.5A1,1,0,1,0,.375,4.781l5,4a1,1,0,0,0,1.25,0l5-4a1,1,0,0,0-1.25-1.562Z" />
                        </g>
                      </svg>
                    </a>
                      <DropdownStyles
                          className="dropdown-menu dropdown-primary"
                          aria-labelledby="navbarDropdownMenuLink"
                        >
                          { item.columns && item.columns &&
                          <div className="row dropdown-col-menu">
                            { item.columns.map((col) => (
                              <div
                              className={
                                item.isWidthShort
                                  ? 'col-sm-6 col-md-6 dropdown-col'
                                  : 'col-sm-6 col-md-4 dropdown-col'
                              } key={col.title}>
                                <h6 className="dropdown-header">{col.title}</h6>
                                {col.subItemsCol.map((link) => (
                                  <a
                                    className={`${link.link ? `${link.link}` : ''} dropdown-item`}
                                    href={link.url}
                                    key={link.title}
                                  >
                                    {link.title}
                                  </a>
                                ))}
                              </div>
                            ))}
                          </div> || item.subItems.map((single) => (
                          <a
                            className={`${single.link ? 'app-cta' : ''} dropdown-item`}
                            href={single.url}
                            key={single.title}
                          >
                            {single.title}
                          </a>
                        ))}
                        </DropdownStyles>
                  </li>
                ) || (
                  <li className="nav-item" key={item.title}>
                    <a
                      className="nav-link"
                      href={item.url}
                      key={item.title}>
                      {item.title}
                    </a>
                  </li>
                )
              )
            )
          }
          </ul>
          {/* Login Check */}
            <div className="form-inline my-2 my-lg-0">
              <LoginCheck
                hidden={hidden}
                waitBeforeShow={100}
                cookie={cookie}
                beta={beta}
                className="pingdom-transactional-check__sign-in-button"
              />
            </div>
          </div>
        </NavStyles>
      </PrimaryNavbarV6>
      <SecondaryNavbarV6 className="navbar-v6 sticky ">
        <NavStyles className="navbar navbar-expand-lg navbar-light nav-secondary blurred-container">
            <DropdownStylesSecond className="dropdown position-static">
              <a
                className="nav-link navbar-brand"
                href="/"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Learning Center
                <svg
                  className="arrow-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="#212121"
                >
                  <g>
                    <path d="M10.375,3.219,6,6.719l-4.375-3.5A1,1,0,1,0,.375,4.781l5,4a1,1,0,0,0,1.25,0l5-4a1,1,0,0,0-1.25-1.562Z" />
                  </g>
                </svg>
              </a>
              <div className="dropdown-menu lc-iconic">
                <ul>
                  {dataDropdown.items.map((item) => (
                    <li key={item.title}>
                    <a href={item.url} className="dropdown-item mb-3">
                      <div className="row">
                        <div className="col-1 lc-icon">
                          <img className="d-block mx-auto" src={item.img} height="40px"/>
                        </div>
                        <div className="col-11">
                          <Paragraph className="strong mb-0" >{item.title} <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="#212121"><g><path d="M10.375,3.219,6,6.719l-4.375-3.5A1,1,0,1,0,.375,4.781l5,4a1,1,0,0,0,1.25,0l5-4a1,1,0,0,0-1.25-1.562Z"></path></g></svg></Paragraph>
                          <Paragraph className="dropdown-item-text-wrap small" >{item.body}</Paragraph>
                        </div>
                      </div>
                    </a>
                  </li>
                  ))}

                </ul>
              </div>
            </DropdownStylesSecond>
          <button
            onClick={() => {
              toggleSecondaryNavMenu();
            }}
            id="secondaryNav"
            className="mobile-sign-in navbar-toggler"
            data-test="mobileNavTogglerBottom"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContentBottom"
            aria-controls="navbarSupportedContentBottom"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <div
                id="icon-wrap-two"
                aria-expanded="false"
              >
                <svg id="navbar-chevron-icons" width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L10 10L19 1" stroke="#6B6B6B" strokwidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContentBottom"
          >
            {/* Algolia Widgets */}
            <SearchWrapperStyling className="form-inline header__search  ml-auto">
              <svg
                className="nav-search__icon"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="#6b6b6b"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.87147 9.16437C10.5768 8.30243 11 7.20063 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11C7.20063 11 8.30243 10.5768 9.16437 9.87147L9.89648 10.6036L9.64648 10.8536L13.5758 14.7829C13.8101 15.0172 14.19 15.0172 14.4243 14.7829L14.7829 14.4243C15.0172 14.19 15.0172 13.8101 14.7829 13.5758L10.8536 9.64648L10.6036 9.89648L9.87147 9.16437ZM6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z"
                />
              </svg>

              <Dropdown />
            </SearchWrapperStyling>
          </div>
        </NavStyles>
      </SecondaryNavbarV6>
    </>
  );
;}

export default Header;
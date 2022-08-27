import React, { useEffect, useState } from 'react';
import { Footer } from '../components';

function FooterContainer() {
  const [country, setCountry] = useState(localStorage.getItem('country') || null);

  const url = `https://ipgeolocation.abstractapi.com/v1/?api_key=${process.env.REACT_APP_IP_API_KEY}`;
  const httpGetAsync = (url, callback) => {
    try {
      fetch(url).then((data) => callback(data));
    } catch (err) {
      console.error("Couldn't get Country name : ", err);
    }
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState === 4 && xmlHttp.status === 200) callback(xmlHttp.responseText);
    };
    xmlHttp.open('GET', url, true); // true for asynchronous
    xmlHttp.send(null);
  };
  useEffect(() => {
    if (!localStorage.getItem('country')) {
      httpGetAsync(url, (data) => {
        data = JSON.parse(data);
        localStorage.setItem('country', data.country);
        setCountry(data.country);
      });
    }
  }, []);

  return (
    <Footer>
      <Footer.Title>Questions? Contact us.</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href="#">FAQ</Footer.Link>
          <Footer.Link href="#">Investor Relations</Footer.Link>
          <Footer.Link href="#">Privacy</Footer.Link>
          <Footer.Link href="#">Speed Test</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link href="#">Help Center</Footer.Link>
          <Footer.Link href="#">Jobs</Footer.Link>
          <Footer.Link href="#">Cookie Preferences</Footer.Link>
          <Footer.Link href="#">Legal Notices</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link href="#">Account</Footer.Link>
          <Footer.Link href="#">Ways to Watch</Footer.Link>
          <Footer.Link href="#">Corporate Information</Footer.Link>
          <Footer.Link href="#">Only on Netflix</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link href="#">Media Center</Footer.Link>
          <Footer.Link href="#">Terms of Use</Footer.Link>
          <Footer.Link href="#">Contact Us</Footer.Link>
        </Footer.Column>
        <Footer.Break />
      </Footer.Row>
      <Footer.Break />
      <Footer.Text>Netflix {country}</Footer.Text>
    </Footer>
  );
}

export default FooterContainer;

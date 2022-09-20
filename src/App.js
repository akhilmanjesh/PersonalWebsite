import logo from './logo.svg';
import './App.css';
import ar from '../src/images/AR.png'
import bi from '../src/images/BI.png'
import cf from '../src/images/CF.png'
import ha from '../src/images/HA.png'
import ne from '../src/images/NE.png'
import clickme from '../src/images/clickme.png'


function App() {
  return (
    <div className="App">
      <style>{'body { background-color: #EAECEA; }'}</style>
      <header className="App-header">
        <div class="heading"><h1 className='headingtitle'>Hi, I’m Akhil! </h1>
        <p className='aboutme'>
        I’m a software developer living in Cupertino, California. I have interests in Finance, Crypto, Automation, Lifting Weights, and Hiking. Currently attending San Jose State University. 
        </p>
        </div>
      </header>
      <body>
        <div class="cont-1">
          <div class="titlehead"><h2>Experience</h2><p className='exptxt'>I'm currently working at Better Innovations leading a majority of the frontend and backend development.  I'm currently also learning to develop smart tools in the Metaverse.</p></div>
            <div class="exps">
              <div class='exp'>
                <div class="img"><img src={bi}></img></div>
                  <div class="titles">
                    <div class="company">Better Innovations</div>
                      <div class="posdate">
                        <div>Project Manager</div>
                        <div>November 2019 - August 2022</div>
                      </div>
                  </div>
              </div>
              <div class='exp'>
                <div class="img"><img src={ne}></img></div>
                  <div class="titles">
                    <div class="company">AIN Enterprises</div>
                      <div class="posdate">
                        <div>Co-Founder</div>
                        <div>November 2020 - Apr 2022</div>
                      </div>
                  </div>
              </div>
              <div class='exp'>
                <div class="img"><img src={ha}></img></div>
                  <div class="titles">
                    <div class="company">HayhaBots Incorporated</div>
                      <div class="posdate">
                        <div>DevOps Intern</div>
                        <div>January 2021 – June 2021</div>
                      </div>
                  </div>
              </div>
              <div class='exp'>
                <div class="img"><img src={ar}></img></div>
                  <div class="titles">
                    <div class="company">AYSO Region 35</div>
                      <div class="posdate">
                        <div>Volunteer Referee</div>
                        <div>January 2014 – June 2021</div>
                      </div>
                  </div>
              </div>
              <div class='exp'>
                <div class="img"><img src={cf}></img></div>
                  <div class="titles">
                    <div class="company">Cedar Fair</div>
                      <div class="posdate">
                        <div>Sales Associate</div>
                        <div>May 2018 - August 2018</div>
                      </div>
                  </div>
              </div>
            
            </div>
          <div class="titlehead"><h2>Contact</h2></div>
          <div className="links">
            <div class="link-cont">
            <a style={{textDecoration: 'none'}} href="https://github.com/akhilmanjesh">Github</a>
            </div>
            <div class="link-cont">
              <a style={{textDecoration: 'none'}} href="https://www.linkedin.com/in/akhilmanjesh/">LinkedIn</a>
            </div>
            <div class="link-cont">
              <a style={{textDecoration: 'none'}} href="https://docs.google.com/document/d/1UpVmPeQi5e9CzXf4COJRX5qDsNsd9oLH/edit?usp=sharing&ouid=110069188922391854040&rtpof=true&sd=true">Resume</a>
            </div>
            <div class="link-cont">
            <a href="mailto:akhil.manjesh@sjsu.edu?subject=Inquiry from your website">Email</a>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;

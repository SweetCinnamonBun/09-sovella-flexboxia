
import './App.css'
import firstImg from "./assets/images/lrg_logo.png"
import secondImg from "./assets/images/vision-image.png"
import thirdImg from "./assets/images/hamburger.jpg"
import fourthImg from "./assets/images/event2.jpg"

function App() {
 

  return (
    <>
       <section className="container">
      <header className="logo">
        <figure className="logo-img">
          <img src={firstImg} alt="header image" />
        </figure>
      </header>
      <nav className="navbar">
        <ul>
          <li>Home</li>
          <li>Menus</li>
          <li>Reservation</li>
          <li>Gallery</li>
          <li>Contact</li>
        </ul>
      </nav>
      <section className="main-content">
        <article className="vision">
          <div className="beige">
            <section className="text">
              <p>
                A new neighborhood kitchen using organic and sustainable
                ingredients all locally sourced
              </p>
            </section>
            <figure className="vision-img">
              <img src={secondImg} alt="vision image" />
            </figure>
          </div>
        </article>
        <article className="boxes">
          <section className="specials">
            <div>
              <h1>Today's special</h1>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
    
                <path
                  d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                />
              </svg>
            </div>
            <figure>
              <img src={thirdImg} alt="hamburger image" />
            </figure>
          </section>
          <section className="events">
            <div>
              <h1>Today's events</h1>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path
                  d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                />
              </svg>
            </div>
            <figure>
              <img src={fourthImg} alt="event image" />
            </figure>
          </section>
          <section className="news">
            <div>
              <h1>news</h1>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path
                  d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                />
              </svg>
            </div>

            <section>
              <table>
                <tr>
                  <td className="td1"><strong>9/1</strong></td>
                  <td><p>Celebrity Guest Chef Night</p></td>
                </tr>
                <tr>
                  <td><strong>9/3</strong></td>
                  <td><p>New Menu Samplers!</p></td>
                </tr>
                <tr>
                  <td><strong>9/4</strong></td>
                  <td><p>Chef Citrus Style</p></td>
                </tr>
                <tr>
                  <td><strong>9/23</strong></td>
                  <td><p>Pork Pork and More Pork</p></td>
                </tr>
                <tr>
                  <td><strong>10/1</strong></td>
                  <td><p>Celebrity Guest Chef Night</p></td>
                </tr>
                <tr>
                  <td><strong>10/3</strong></td>
                  <td><p>New Menu Samplers!</p></td>
                </tr>
                <tr>
                  <td><strong>10/4</strong></td>
                  <td><p>Iron Chef Citrus Style</p></td>
                </tr>
              </table>
            </section>
          </section>
        </article>
      </section>
      <footer className="footer">
        <div className="footer-svg">
          <p>Citrus Cafe</p>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
              />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"
              />
            </svg>
          </div>
        </div>
        <p className="address">601 Townsend St, San Francisco, CA, 94117</p>
        <p className="phone">415-555-5555</p>
      </footer>
    </section>
    </>
  )
}

export default App

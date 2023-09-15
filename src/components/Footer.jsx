import React from "react";

const Footer = () => {
  return (
    /*<>
<footer className="panel-footer bg-secondary">
    <div className="container">
      <div className="row">
        <section id="hours" className="col-sm-4">
          <span><strong>Hours:</strong></span><br/>
          Sun-Thurs: 11:15am - 10:00pm<br/>
          Fri: 11:15am - 2:30pm<br/><br/>
          Sunday: Closed
          <hr className="visible-xs"></hr>
        </section>
            <section id="address" className="col-sm-4">
            <span>Address:</span><br />
            Plot 109 Oluosabanjo Road Portharcourt<br />
            River State, Nigeria.
            <p>Delivery Method is both Phyiscal and Remote.</p>
            <hr className="visible-xs"/>
            </section>
            <section id="testimonials" className="col-sm-4">
                <p>We are among the best web Developer Nigeria today! We engage instructing and help individuals kick-start their tech career</p>
                <p>Amazing Software! Great service!, Could not ask for more!, We  will be back again and again!</p>
            </section>
      </div>
      <div className="text-center">&copy; Copyright Stephen E Ofoegbu</div>
    </div>
</footer>

    </>*/
  

<>
<footer className="panel-footer bg-secondary">

    <div className="container text-center">
        <div className="row">
            <div className="col col-sm" id="hours">
                <span><strong>Hours:</strong></span><br/>
                Sun-Thurs: 11:15am - 10:00pm<br/>
                Fri: 11:15am - 2:30pm<br/>
                Sunday: Closed
                <hr className="visible-xs"></hr>
            </div>
            <div className="col col-sm" id="address">
                <span>Address:</span><br />
                Plot 109 Oluosabanjo Road Portharcourt<br />
                River State, Nigeria.
                <p>Delivery Method is both Phyiscal and Remote.</p>
                <hr className="visible-xs"/>
            </div>
        </div>
        <div className="row">
            <div className="col col-sm" id="testimonials">
                <p>We are among the best web Developer Nigeria today! We engage instructing and help individuals kick-start their tech career</p>
                <p>Amazing Software! Great service!, Could not ask for more!, We  will be back again and again!</p>

            </div>
        </div>
        <div className="text-center">&copy; Copyright Stephen E Ofoegbu 2023</div>
    </div>

</footer>
</>
  );
}
export default Footer;
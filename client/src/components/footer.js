const Footer = () => {

    <div id = "footer" className = "disgrid">
      <div id = "f-sectionOne" className = "disgrid">
        <div id = "f-descr" className = "padding-small">
          <h2>iSHOP</h2>
          <p className = "font-sizesml">Lorem Ispum is simply dummy text for the printing and typesetting indutry. Lorem Ispum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
        </div>
        
        <div id = "information" className = "padding-small">
          <h5>Information</h5>
          <li>
            <ul><a className = "font-sizesml" href = "#">About Us</a></ul>
            <ul><a className = "font-sizesml" href = "#">Information</a></ul>
            <ul><a className = "font-sizesml" href = "#">Privacy Policy</a></ul>
            <ul><a className = "font-sizesml" href = "#">Terms & Conditions</a></ul>
          </li>
        </div>

        <div id = "contactUs" className = "padding-small">
          <h5>Contact Us</h5>
          <p className = "font-sizesml">IShop : address@building 123</p><br/>
          <p className = "font-sizesml">Call us now : 1234567890</p><br/>
          <p className = "font-sizesml">Email : support@whatever.com</p>
        </div>
      </div>
      <div id = "f-sectionTwo" className = "disgird">
        <div id = "iconSection" className = "disflex">
          {/* <img className = "margin-left-s"src= {paypalLogo} alt = "Paypal"/>
          <img className = "margin-left-s"src= {westernUnionLogo} alt = "WesternUnion"/>
          <img className = "margin-left-s"src= {visaLogo} alt = "Visa"/>
          <img className = "margin-left-s"src= {mastercardLogo} alt = "MasterCard"/> */}
        </div>
      </div>
    </div>
}

export default Footer;
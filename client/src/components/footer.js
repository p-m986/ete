const Footer = () => {
  return(
    <div id = "footer" className = "disgrid">
      <div id = "f-sectionOne" className = "disgrid">
        <div id = "f-descr" className = "padding-small">
          <h2>iSHOP</h2>
          <p className = "  ">Lorem Ispum is simply dummy text for the printing and typesetting indutry. Lorem Ispum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
        </div>
        
        <div id = "information" className = "padding-small">
          <h5>Information</h5>
          <li>
            <ul><a className = "" href = "#">About Us</a></ul>
            <ul><a className = "" href = "#">Information</a></ul>
            <ul><a className = "" href = "#">Privacy Policy</a></ul>
            <ul><a className = "" href = "#">Terms & Conditions</a></ul>
          </li>
        </div>

        <div id = "contactUs" className = "padding-small">
          <h5>Contact Us</h5>
          <p className = "">IShop : address@building 123</p><br/>
          <p className = "">Call us now : 1234567890</p><br/>
          <p className = "">Email : support@whatever.com</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
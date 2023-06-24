import React from 'react'

function FooterEnd() {
  return (
    <>
  {/* Site footer */}
  <footer className="site-footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <h6>About</h6>
          <p className="text-justify">
            Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative to
            help the upcoming programmers with the code. Scanfcode focuses on
            providing the most efficient code or snippets as the code wants to
            be simple. We will help programmers build up concepts in different
            programming languages that include C, C++, Java, HTML, CSS,
            Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.
          </p>
        </div>
        <div className="col-xs-6 col-md-3">
          <h6>Categories</h6>
          <ul className="footer-links">
            <li>
              <a href="http://scanfcode.com/category/c-language/">C</a>
            </li>
            <li>
              <a href="http://scanfcode.com/category/front-end-development/">
                UI Design
              </a>
            </li>
            <li>
              <a href="http://scanfcode.com/category/back-end-development/">
                PHP
              </a>
            </li>
            <li>
              <a href="http://scanfcode.com/category/java-programming-language/">
                Java
              </a>
            </li>
            <li>
              <a href="http://scanfcode.com/category/android/">Android</a>
            </li>
            <li>
              <a href="http://scanfcode.com/category/templates/">Templates</a>
            </li>
          </ul>
        </div>
        <div className="col-xs-6 col-md-3">
          <h6>Quick Links</h6>
          <ul className="footer-links">
            <li>
              <a href="http://scanfcode.com/about/">About Us</a>
            </li>
            <li>
              <a href="http://scanfcode.com/contact/">Contact Us</a>
            </li>
            <li>
              <a href="http://scanfcode.com/contribute-at-scanfcode/">
                Contribute
              </a>
            </li>
            <li>
              <a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a>
            </li>
            <li>
              <a href="http://scanfcode.com/sitemap/">Sitemap</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-sm-6 col-xs-12">
          <p className="copyright-text">
            Copyright © 2017 All Rights Reserved by
            <a href="#">IRFAH ROVERS</a>.
          </p>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12">
          <ul className="social-icons">
            <li>
              <a className="facebook" href="#">
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li>
              <a className="twitter" href="#">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a className="dribbble" href="#">
                <i className="fa fa-dribbble" />
              </a>
            </li>
            <li>
              <a className="linkedin" href="#">
                <i className="fa fa-linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n.site-footer\n{\n  background-color:#0E3692;\n  padding:45px 0 20px;\n  font-size:15px;\n  line-height:24px;\n  color:#fff;\n}\n.site-footer hr\n{\n  border-top-color:#fff;\n  opacity:0.5\n}\n.site-footer hr.small\n{\n  margin:20px 0\n}\n.site-footer h6\n{\n  color:#fff;\n  font-size:16px;\n  text-transform:uppercase;\n  margin-top:5px;\n  letter-spacing:2px\n}\n.site-footer a\n{\n  color:#fff;\n}\n.site-footer a:hover\n{\n  color:#fff;\n  text-decoration:none;\n}\n.footer-links\n{\n  padding-left:0;\n  list-style:none\n}\n.footer-links li\n{\n  display:block\n}\n.footer-links a\n{\n  color:#fff\n}\n.footer-links a:active,.footer-links a:focus,.footer-links a:hover\n{\n  color:#fff;\n  text-decoration:none;\n}\n.footer-links.inline li\n{\n  display:inline-block\n}\n.site-footer .social-icons\n{\n  text-align:right\n}\n.site-footer .social-icons a\n{\n  width:40px;\n  height:40px;\n  line-height:40px;\n  margin-left:6px;\n  margin-right:0;\n  border-radius:100%;\n  background-color:#fff\n}\n.copyright-text\n{\n  margin:0\n}\n@media (max-width:991px)\n{\n  .site-footer [class^=col-]\n  {\n    margin-bottom:30px\n  }\n}\n@media (max-width:767px)\n{\n  .site-footer\n  {\n    padding-bottom:0\n  }\n  .site-footer .copyright-text,.site-footer .social-icons\n  {\n    text-align:center\n  }\n}\n.social-icons\n{\n  padding-left:0;\n  margin-bottom:0;\n  list-style:none\n}\n.social-icons li\n{\n  display:inline-block;\n  margin-bottom:4px\n}\n.social-icons li.title\n{\n  margin-right:15px;\n  text-transform:uppercase;\n  color:#fff;\n  font-weight:700;\n  font-size:13px\n}\n.social-icons a{\n  background-color:#fff;\n  color:#fff;\n  font-size:16px;\n  display:inline-block;\n  line-height:44px;\n  width:44px;\n  height:44px;\n  text-align:center;\n  margin-right:8px;\n  border-radius:100%;\n  -webkit-transition:all .2s linear;\n  -o-transition:all .2s linear;\n  transition:all .2s linear\n}\n.social-icons a:active,.social-icons a:focus,.social-icons a:hover\n{\n  color:#fff;\n  background-color:#fff\n}\n.social-icons.size-sm a\n{\n  line-height:34px;\n  height:34px;\n  width:34px;\n  font-size:14px\n}\n.social-icons a.facebook:hover\n{\n  background-color:#fff\n}\n.social-icons a.twitter:hover\n{\n  background-color:#fff\n}\n.social-icons a.linkedin:hover\n{\n  background-color:#fff\n}\n.social-icons a.dribbble:hover\n{\n  background-color:#fff\n}\n@media (max-width:767px)\n{\n  .social-icons li.title\n  {\n    display:block;\n    margin-right:0;\n    font-weight:600\n  }\n}\n"
    }}
  />
</>

  )
}

export default FooterEnd
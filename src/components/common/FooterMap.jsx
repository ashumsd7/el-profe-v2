import React from "react";

function FooterMap() {
  return (
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          class="gmap_iframe"
          width="100%"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://www.google.com/maps?q=Charawan%20Cricket%20Ground%2C%20Charawan%2C%20Uttar%20Pradesh%2C%20India&z=17&t=k&ie=UTF8&output=embed"
        ></iframe>
      </div>
    </div>
  );
}

export default FooterMap;

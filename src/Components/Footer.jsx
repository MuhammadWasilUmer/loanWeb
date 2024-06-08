import React from 'react';

function Footer() {
  let date = new Date();
  let cDate = date.toDateString();
  return(
    <div id="footer">
      <h3>{cDate}</h3>
    </div>
  )
}

export default Footer;

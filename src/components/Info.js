import React from "react"

export default function Info() {
  return (
    <div className="main">

      <div className="info">
          <img className="info--image" src={require('../images/profile.png')} alt="Profile Picture"/>
            <h2 className="info--name">John Doe</h2>
            <h6 className="info--role">Front-end Developer</h6>
            <h6 className="info--website">johndoe.website</h6>

          <button className="info--email"><i class="fa-solid fa-envelope"></i>Email</button>
      </div>

    </div>
  )
}
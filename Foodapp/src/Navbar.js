import React from 'react'

function Navbar() {
  return (
          <>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Foodzone</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#">GoTomenu</a>
              <a class="nav-link" href="#">Login</a>
              <a class="nav-link" href="#">Signup</a>
              <a class="nav-link" href="#">FoodItems</a>
            </div>
          </div>
        </div>
      </nav>
          </> 
        )
      }
      
export default Navbar

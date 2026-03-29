import React from "react";

export default function App() {
  return (
    <div style={{fontFamily:"Arial"}}>
      <header style={{background:"#000",color:"#fff",padding:"15px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
          <img src="/logo.png" height="40"/>
          <h2>iAutocare</h2>
        </div>
      </header>

      <section style={{background:"#111",color:"#fff",padding:"80px",textAlign:"center"}}>
        <h1>Quality Services From The Comfort Of Your Home</h1>
        <a href="https://wa.me/8801776126774">
          <button style={{padding:"10px 20px",marginTop:"20px"}}>Book via WhatsApp</button>
        </a>
      </section>

      <section style={{padding:"40px",textAlign:"center"}}>
        <h2>Services</h2>
        <p>Full Car Servicing | ECU Programming | Denting & Painting | Car Wash</p>
      </section>

      <section style={{padding:"40px",textAlign:"center"}}>
        <h2>Contact</h2>
        <p>Phone: 01776126774</p>
        <p>Address: 5/2/1, Rasulbag, Mohakhali, Dhaka</p>
      </section>

      <footer style={{background:"#000",color:"#fff",padding:"10px",textAlign:"center"}}>
        © 2026 iAutocare
      </footer>
    </div>
  );
}
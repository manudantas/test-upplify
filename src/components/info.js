import React from 'react'


const Info = () => (
  <div>
    <div style = {tStyle}>
        <h1><b>Manuella Dantas</b></h1>
        <h3>Developer</h3>
        <br/>
        <h3><b>Major :</b> Computer Science - UEPB</h3> 
        <h3><b>Semester :</b> 7 Semester</h3>
        <h3><b>E-mail :</b> manudantasss8@gmail.com</h3>
        <br/>
        <h4><b>Project :</b> EpidemioRim - May 2016 ~ August 2017</h4>
        <h4><b>Project :</b> AMI direcionado para saúde de pessoas idosas</h4>
        <br/>
        <h4><b>Extracurricular Activities :</b>HackFest 2017 (Winner) - PaCiente</h4>
        <h4><b>Extracurricular Activities:</b> JAVA Monitor</h4>

        <hr style = {hStyle}/>
    </div>
  </div>
)

export default Info

const tStyle = {
  height: "900px",
  paddingTop: "100px",
  paddingLeft: "10%",
  backgroundColor: "#F7F7F7"
}

const hStyle = {
  width: "90%"
}

import Card from '../components/Card'
import './Homepage.css'

import gauge from '../images/G8 Cluster.jpg'
import grill from '../images/Car grill.jpg'
import cnc from '../images/Cnc.jpg'
import cncAcc from '../images/Cnc acc.jpg'
import laser from '../images/Laser.jpg'
import shift from '../images/shift.jpg'
import carMount from '../images/Car mount.jpg'
import compress from '../images/Coompressor.jpg'
import rgb from '../images/rgb.jpg'



export default function Homepage() {



  return (
    <>

      <div className='home-container'><h1>Roberto Rodriguez</h1><h2>Projects and Work Portfolio</h2></div>
      <div className='card-stuff'>
        <Card Title={"Car Front Grill"}
          Body={"My cars grill that I 3d scanned and remade in CAD in order to replace one I had lost."}
          Image={grill}
          Location={"grill"}
          Tag1={"CAD"}
          Tag2={"3D Printing"}
        />
        <Card Title={"Gauge Pod Cluster"}
          Body={"A custom designed gauge pod cluster designed around a center console I 3D scanned."}
          Image={gauge}
          Location={"gauge"} Tag1={"CAD"}
          Tag2={"3D Printing"}
        />
        <Card Title={"CNC Machine"}
          Body={"From knowing nothing about CNC machinery to figuring out how to connect everything and use open source firmware to program it."}
          Image={cnc}
          Location={"cnc"}
          Tag1={"Wiring Schematics"}
          Tag2={"Programming"}
          Tag4={"CAD"}
        />

      </div>

      <div className="card-stuff">
        <Card Title={"RPM Shift Light"}
          Body={"Inspired by automotive racing, a prototype build of a shift light that a user can edit to their own need."}
          Image={shift}
          Location={"shift"}
          Tag1={"Programming"}
          Tag2={"Arduino"}
          Tag3={"3D Printing"}
        />

        <Card Title={"CNC Accessories"}
          Body={"Mounts and other things I had to design and 3D print in order to use the CNC machine I made."}
          Image={cncAcc}
          Location={"cncAcc"}
          Tag1={"CAD"}
          Tag2={"3D Printing"}
        />
        <Card Title={"Car Camera Stabilizer"}
          Body={"A camera mount for a car in order to stabilize footage and be able to film safely from inside a moving vehicle."}
          Image={carMount}
          Location={"carMount"}
          Tag1={"CAD"}
        />

      </div>

      <div className="card-stuff">
        <Card Title={"Laser Rotary Attachment"}
          Body={"Based on similar designs that seemed too expenesive for what they were. An attachment for the CNC to allow cylindrical objects to be Laser engraved."}
          Image={laser}
          Location={"laser"}
          Tag1={"CAD"}
          Tag2={"3D Printing"}
        />
        <Card Title={"Image Compressor"}
          Body={"An alternative to using online image compressors that limit usage. A GUI driven python script that can compress bulk images and change the file format."}
          Image={compress}
          Location={"compress"}
          Tag1={"Programming"}
          Tag2={"Python"}
          Tag3={"GUI"}
        />
        <Card Title={"RGB TubeLight"}
          Body={"My Senior undergrad project. Inspired by alternative products that go for hundreds. Fully controllable from an app communicating with a microcontroller"}
          Image={rgb}
          Location={"rgb"}
          Tag1={"Programming"}
          Tag2={"Arduino"}
          Tag3={"Flutter"}
       
        />
      </div>

      <div className="card-stuff">
        <Card Title={"Automotive Tail Lights Controller"}
          Body={"Programmable tail lights controller that can be powered through a vehicles power and create custom animations for turn signals, braking, and reverse."}

          Location={"lights"}
          Tag1={"Programming"}
          Tag2={"Arduino"}
        />
      </div>










    </>


  )
}

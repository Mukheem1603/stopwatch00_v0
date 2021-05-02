import React from 'react';
import './App.css';
import { Container } from '@material-ui/core';
import { Button } from '@material-ui/core';

const msecs = 10;
const secs = 1000;
const mins = 60*secs;
const hour = 60*mins;
let thr,uhr,tmin,umin,usec,tsec,umsec,tmsec;
class Clock extends React.Component{
  constructor(props)
  {
    super(props);
    this.state={
      unit_s:0,
      tens_s:0,
      unit_m:0,
      tens_m:0,
      unit_h:0,
      tens_h:0,
      unit_ms:0,
      tens_ms:0,
      start:true,
      stop:true,
      reset:false
    }
    // this.start = this.start.bind(this);
    this.u_sec = this.u_sec.bind(this);
    this.t_sec = this.t_sec.bind(this);
    this.u_min = this.u_min.bind(this);
    this.t_min = this.t_min.bind(this);
    this.u_hr = this.u_hr.bind(this);
    this.t_hr = this.t_hr.bind(this);
    this.u_msec = this.u_msec.bind(this);
    this.t_msec = this.t_msec.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
  }

  u_msec(){
    umsec=setInterval(()=>{
  if(this.state.unit_ms===9){
    this.setState({
      unit_ms:0
    });
  }
  else{
    this.setState({
      unit_ms:this.state.unit_ms + 1
    });
  }
},msecs);
}
t_msec(){
tmsec=setInterval(()=>{
if(this.state.tens_ms===9){
this.setState({
  tens_ms:0
});
}
else{
this.setState({
  tens_ms:this.state.tens_ms + 1
});
}
},msecs*10);
}


  u_sec(){
        usec=setInterval(()=>{
      if(this.state.unit_s===9){
        this.setState({
          unit_s:0
        });
      }
      else{
        this.setState({
          unit_s:this.state.unit_s + 1
        });
      }
    },secs);
  }
  t_sec(){
    tsec=setInterval(()=>{
  if(this.state.tens_s===5){
    this.setState({
      tens_s:0
    });
  }
  else{
    this.setState({
      tens_s:this.state.tens_s + 1
    });
  }
},secs*10);
}
u_min(){
  umin=setInterval(()=>{
if(this.state.unit_m===9){
  this.setState({
    unit_m:0
  });
}
else{
  this.setState({
    unit_m:this.state.unit_m + 1
  });
}
},mins);
}
t_min(){
  tmin=setInterval(()=>{
if(this.state.tens_m===5){
  this.setState({
    tens_m:0
  });
}

else{
  this.setState({
    tens_m:this.state.tens_m + 1
  });
}
},mins*10);
}

u_hr(){
  uhr=setInterval(()=>{
if(this.state.unit_h===9){
  this.setState({
    unit_h:0
  });
}
else if(this.state.tens_h===2 && this.state.unit_h===3){
  this.setState({
    unit_h:0,
    tens_h:0
  });
  clearInterval(thr);
  this.t_hr();
}
else{
  this.setState({
    unit_h:this.state.unit_h + 1
  });
}
},hour);
}

t_hr(){
  thr=setInterval(()=>{
if(this.state.tens_h===2 && this.state.unit_h===3){
  this.setState({
    tens_h:0
  });
}
else{
  this.setState({
    tens_h:this.state.tens_h + 1
  });
}
},hour*10);
}

//   start(){
// this.u_sec();
// this.t_sec();
// this.t_min();
// this.u_min();
// this.t_hr();
// this.u_hr();
//   }

  reset(){
    console.log("reset clicked!");
    this.setState((state) => ({       
      unit_s:0,
      tens_s:0,
      unit_m:0,
      tens_m:0,
      unit_h:0,
      tens_h:0,
      unit_ms:0,
      tens_ms:0,
      start:true,
      reset:false}));
  }
  stop(){
    this.setState({
      reset:true,
      start:false
    });
  }
  render(){
    return (
      <div>
        <Container style={{ backgroundColor: '#cfe8fc',width:'100%'}}>
        <h1>{this.state.tens_h}{this.state.unit_h}:{this.state.tens_m}{this.state.unit_m}:{this.state.tens_s}{this.state.unit_s}:{this.state.tens_ms}{this.state.unit_ms}</h1>

<br />
<Button variant="contained" color="primary" style={{display :  this.state.start ? 'inline-block' : 'none'}} id="start" onClick={()=>{this.u_sec();
this.t_sec();
this.t_min();
this.u_min();
this.t_hr();
this.u_hr();
this.u_msec();
this.t_msec();}}>Start</Button>
<Button variant="contained" style={{display :  this.state.reset ? 'inline-block' : 'none'}} id="reset" onClick={()=>{
this.reset();
}}>Reset</Button>
&nbsp;
<Button variant="contained" color="secondary" style={{display :  this.state.stop ? 'inline-block' : 'none'}} id="stop" onClick={()=>{

clearInterval(thr);
clearInterval(uhr);
clearInterval(tmin);
clearInterval(tsec);
clearInterval(tmsec);
clearInterval(umin);
clearInterval(usec);
clearInterval(umsec);
this.stop();
}}>Stop</Button>
        </Container>
  
        </div>
    );
  }
}

function App() {
  return (

<div className="main">

<Clock />
    
  </div>
  );
}

export default App;

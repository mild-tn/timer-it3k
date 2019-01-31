import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import fontTime from '../../config/fonts'
import styled from 'styled-components'
import ButtonTimer from '../Core/Button';
import ButtonEvent from '../Core/Button';
import ENV from '../../config/envConfig'
import socketIOClient from 'socket.io-client'

const socket = socketIOClient(ENV.PATH_SOCKET)

const FontTime = styled.div`
  font-size : ${fontTime.timeout};
`
let intervalTime;

let timeDefualt;

class Index extends React.Component {
  state = {
    time: {},
    seconds: 0,
    timer: 0,
    resume: {},
    message: ''
  }

  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));
    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);
    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);
    let obj = {
      "h": ('0' + hours).slice(-2),
      "m": ('0' + minutes).slice(-2),
      "s": ('0' + seconds).slice(-2)
    };
    return obj;
  }

  async componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
    this.setTime()
  }
  
  async setTime() {
    await socket.on('time',(timer) => {
      let timeLeftVar = this.secondsToTime(timer);
      timeDefualt = timer
      this.setState({
        seconds: timer,
        time: timeLeftVar
      })
      console.log(timer)
      this.startTime()
    })
  }

  startTime = (message) => {
    if (message === 'show') {
      this.timeForward()
    } else {
      this.countDown()
    }
  }

  countDown = () => {
    intervalTime = setInterval(() => {
      this.setState({
        time: this.secondsToTime(this.state.seconds - 1),
        seconds: this.state.seconds - 1,
      })
    }, 1000)
  }

  stopTimer() {
    clearInterval(intervalTime);
  }

  resume = () => {
    this.countDown()
  }

  reset = () => {
    let timeLeftVar = this.secondsToTime(timeDefualt)
    this.setState({
      seconds: timeDefualt,
      time: timeLeftVar
    })
  }

  setTimeShow(time) {
    let timeLeftVar = this.secondsToTime(time)
    this.setState({
      seconds: time,
      time: timeLeftVar,
      message: 'show',
    })
  }

  timeForward() {
    intervalTime = setInterval(() => {
      this.setState({
        time: this.secondsToTime(this.state.seconds + 1),
        seconds: this.state.seconds + 1,
      })
    }, 1000)
  }

  render() {
    return (
      <Container fluid>
        <Container>
          <Row>
            <Col className="d-flex justify-content-center">
              <FontTime>{this.state.time.h} : {this.state.time.m} : {this.state.time.s}</FontTime>
            </Col>
          </Row>
        </Container>
      </Container>
    )
  }
}

export default Index
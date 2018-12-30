class App extends React.Component{
    constructor(){
      super()
      this.t0=new Date()
      this.state={
        result1:0,
        result2:0
      }
    }
    success1(){
      console.log('兔子跑完了')
      let r1=new Date() - this.t0
      this.setState({
        result1:r1
      })
    }
    success2(){
      console.log('乌龟跑完了')
      let r2=new Date() - this.t0
      this.setState({
        result2:r2
      })
    }
    render(){
      return (
        <div className="background">
          <div className="stage">
            <Rabbit result={this.state.result1}/>
            <Tortoise result={this.state.result2}/>
          </div>
          <Trace1 success={this.success1.bind(this)}/>
          <Trace2 success={this.success2.bind(this)}/>
        </div>
      )
    }
  }
  class Rabbit extends React.Component{
    render(){
      return (
        <div>
          <div>兔子用时</div>
          <div>{this.props.result}</div>
        </div>
      )
    }
  }
  class Tortoise extends React.Component{
    render(){
      return (
        <div>
          <div>乌龟用时</div>
          <div>{this.props.result}</div>
        </div>
      )
    }
  }
  class Trace1 extends React.Component{
    constructor(){
      super()
      let n=0
      this.state={
        style:{
          transform:`translateX(0%)`
        }
      }
      let timeID=setInterval(()=>{
        n+=25
        this.setState({
          style:{
            transform:`translateX(${n}%)`
          }
        })
        if (n>=100){
          this.props.success()
          window.clearInterval(timeID)
        }
      },1000)
    }
    render(){
      return (
        <div>
          <div className="player" style={this.state.style}>兔子</div>
          <div className="trace"></div>
        </div>
      )
    }
  }
  class Trace2 extends React.Component{
    constructor(){
      super()
      let n=0
      this.state={
        style:{
          transform:`translateX(0%)`
        }
      }
      let timeID=setInterval(()=>{
        n+=20
        this.setState({
          style:{
            transform:`translateX(${n}%)`
          }
        })
        if (n>=100){
          this.props.success()
          window.clearInterval(timeID)
        }
      },1000)
    }
    render(){
      return (
        <div>
          <div className="player" style={this.state.style}>乌龟</div>
          <div className="trace"></div>
        </div>
      )
    }
  }
  ReactDOM.render(<App/>,document.querySelector('#root'))
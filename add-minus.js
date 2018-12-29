function App(){
    return (
    <div>
      app
      <Box1 name="xuanzebin1"></Box1>
      <Box2 name="xuanzebin2"></Box2>
    </div>
    )
  }
  
  
  class Box1 extends React.Component{
    constructor(props){
      super(props)
      this.state={
        number:0
      }
    }
    add(){
      this.setState((state)=>{
        return {
          number:state.number+1
        }
      })
    }
    minus(){
      this.setState((state)=>{
        return {
          number:state.number-1
        }
      })
    }
    render(){
      return (
        <div>
          {this.props.name}
          <hr/>
          <span>{this.state.number}</span>
          <button onClick={this.add.bind(this)}>+1</button>
          <button onClick={this.minus.bind(this)}>-1</button>
        </div>
      )
    }
  }
  
  class Box2 extends React.Component{
    constructor(props){
      super(props)
      this.state={
        number:0
      }
    }
    add(){
      this.setState((state)=>{
        return {
          number:state.number+2
        }
      })
    }
    minus(){
       this.setState((state)=>{
         return {
           number:state.number-2
         }
       })
    }
    render(){
      return (
        <div>
          {this.props.name}
          <hr/>
          <span>{this.state.number}</span>
          <button onClick={this.add.bind(this)}>+2</button>
          <button onClick={this.minus.bind(this)}>-2</button>
        </div>
      )
    }
  }
  
  
  function render(){
    ReactDOM.render(<App/>,document.querySelector('#root'))
  }
  render()
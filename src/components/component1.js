import React, { Component } from "react"



class Province extends Component{
        constructor(props){
        super(props)
        this.fetchData()
            

        this.state={
            unit:'c',
            celcius: null,
            farenhite: null

        }
        this.fetchData=this.fetchData.bind(this)
        this.click=this.click.bind(this)
    }

    fetchData(){
        fetch("http://dataservice.accuweather.com/currentconditions/v1/190066?apikey=eTzZFAocEbnyxSSZEoD3mV1FyzI4YYAx").then(response => {
            return response.json()
        }).then(response => {
            this.setState({
                celcius: response[0].Temperature.Metric.Value,
                farenhite: response[0].Temperature.Imperial.Value
            })
            console.log(this.state)
        })
    }

    click(u){
        this.setState({unit: u})
    }
    

    render(){
        return(
            <div className='component1-container'>
                <img src="https://ffo.gov.in/uploads/location_photos/2018/10/Sheesh-Mahal-Patiala1359-768x330.jpg" alt="fort"></img>
                <h1>I live in Patiala, Punjab.</h1>
                <h3 >Patiala is a small town of Punjab state in nothern parts of India.</h3>
                <div>
                    {this.state.celcius != null ? 
                        this.state.celcius <= 10 ? 
                            <div>
                                <img src="https://raw.githubusercontent.com/simonachkar/react-mcda5510/main/assignment/assets/cold.png" alt="cold" width={100}></img> 
                                {this.state.unit==='c' ? <p>{this.state.celcius} &#8451;</p> : <p>{this.state.farenhite} &#8457;</p>}
                            </div>
                            : this.state.celcius <= 20 ?
                                <div> 
                                    <img src="https://raw.githubusercontent.com/simonachkar/react-mcda5510/main/assignment/assets/mild.png" alt="mild" width={100}></img> 
                                    {this.state.unit==='c' ? <p>{this.state.celcius} &#8451;</p> : <p>{this.state.farenhite} &#8457;</p>}
                                </div>
                                : <div>
                                    <img src="https://raw.githubusercontent.com/simonachkar/react-mcda5510/main/assignment/assets/sunny.png" alt="sunny" width={100}></img> 
                                    {this.state.unit==='c' ? <p>{this.state.celcius} &#8451;</p> : <p>{this.state.farenhite} &#8457;</p>}
                                </div>
                        : undefined}
                </div>
                <div>
                    {this.state.unit==='c' ? <button onClick={()=>{this.click('f')}}>change to &#8457;</button> : <button onClick={()=>{this.click('c')}}>change to &#8451;</button>}
                </div>
            </div>
        )
    }
}

export default Province;
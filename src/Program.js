import React from 'react';
class Program extends React.Component {

    render() {

        return (

            <div className="programme" >
                <h1 className="title" style={{
                    color: "red",
                    size: 10

                }} > {this.props.title}</h1>
                <h1 className="content " style = {{
                   color :"green",
                   size :10          
                }}>{this.props.content}</h1>
            </div>

        );

    }

}

export default Program
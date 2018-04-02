import React from 'react';
import { calcRemainingBalance, calcTotalPayments } from './calculator';
import LineChart from 'react-linechart';
import '../../node_modules/react-linechart/dist/styles.css';

class Chart extends React.Component
{
    constructor(props) {
        super(props);
        this.buildDataset = this.buildDataset.bind(this);
    }

    buildDataset(principal, payment, interest, nth) {
        let datapoints = [], data = [];
        let date = new Date();
        let int  = interest/12; 
        let Nth = Math.ceil(nth);

        for (let i = Nth; i > -1; i--) {
            let obj = {};
            let newDate = new Date(date.setMonth(date.getMonth + i));
            if (i === 0) {
                obj["x"] = i;
                obj["y"] = principal
            } else {
                let bal = calcRemainingBalance(principal, int, payment,i); 
                
                obj["x"] = i
                obj["y"] = bal;
            }
            datapoints.push(obj);
        }

        let x = {}
        x['color'] = "steelblue";
        x['points'] = datapoints;
        data.push(x);
        return data;
    }

    showText(e) {
        let val = "Principal: $" + Number(e.y).toFixed(2) + " @time " + e.x;
        return val;
    }

    render() {
        let data = []; 
        let detail = this.props.details
            const pmts = calcTotalPayments(detail.principal, detail.interest, detail.payment);
            let f = this.buildDataset(
                detail.principal,
                detail.payment,
                detail.interest,
                pmts
            )
            data.push(f[0])
        
        return (
                <div className="col-lg-6">
                    <h1>Principals</h1>
                    <LineChart 
                        width={600}
                        height={400}
                        data={data}
                        xLabel="date"
                        yLabel='principal'
                        xMin="0"
                        xMax="10"
                        yMin="0"
                        yMax="100"
                        onPointHover={this.showText}
                    />
                </div>
        );
    }
}

export default Chart

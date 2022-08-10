import "./widgetLg.css"

export default function WidgetLg() {
const Button = ({type}) => {
    return <button className={"widgetLgButton" + type}>{type}</button>
}

  return (
    <div className="widgetLg">
       <h3 className="widgetLgTitle">Latest Transactions </h3>
       <table className="widgetLgTable">
        <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">status</th>
        </tr>
        <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <img src="photo-1659220501642.jpg" alt="" className="widgetLgImg" />
                <span className="widgetLgname">Susan carol</span>
            </td>
            <td className="widgetLgDate">2 June 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
             <Button type ="Approved"/>   
            </td>
        </tr>
        <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <img src="photo-1659220501642.jpg" alt="" className="widgetLgImg" />
                <span className="widgetLgname">Susan carol</span>
            </td>
            <td className="widgetLgDate">2 June 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
             <Button type ="Declined"/>   
            </td>
        </tr>
       </table>
    </div>
  )
}

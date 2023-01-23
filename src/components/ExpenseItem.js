import './ExpenseItem.css'

function ExpenseItem(props){
    return (
        <div>
            <div>{props.date.toISOString()}</div>
            <div>
            <p>{props.title}</p>
            <div>${props.amount}</div>
            </div>
        </div>
    )
}
export default ExpenseItem;
import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem'

function App() {
  const Expense=[
    {title:'book',amount:100,date:new Date(2021,2,21)},
    {title:'story',amount:100,date:new Date(2014,5,15)},
    {title:'pen',amount:100,date:new Date(2014,6,16)},
    {title:'pencil',amount:100,date:new Date(2014,1,19)}
  ]
  return (
    <div>
      <h2>let's get started</h2>
      <p>this is also visible</p>
      <ExpenseItem title={Expense[0].title} amount={Expense[0].amount} date={Expense[0].date}></ExpenseItem>
      <ExpenseItem title={Expense[1].title} amount={Expense[1].amount} date={Expense[1].date}></ExpenseItem>
      <ExpenseItem title={Expense[2].title} amount={Expense[2].amount} date={Expense[2].date}></ExpenseItem>
      <ExpenseItem title={Expense[3].title} amount={Expense[3].amount} date={Expense[3].date}></ExpenseItem>
    </div>
   
  );
}

export default App;

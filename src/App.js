import React,{useState} from "react";
import bgimage from "./images/Rectangle 1.png"
import logo from "./images/Ellipse 1.png"
import logo1 from "./images/Ellipse 2.png"
import { format } from "date-fns";



function App() {
  const [confirmed, setConfirmed] = useState(false);
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [date, setDate] = useState("01/23");
  const [cvc, setCvc] = useState("");
  return (
    <>
      <section>
        <div className="absolute -z-10 max-w-lg ">
          <img src={bgimage} />
        </div>
        <div className="flex"> 
          <div className="grid grid-cols-1 mt-16 ml-20">
            <article className="frontCard flex flex-col justify-between ">
              <div className="flex">
              <img src={logo} alt="logo" className="mt-2 ml-2 w-8 h-8" />
              <img src={logo1} alt="logo" className="mt-4 ml-3 w-4 h-4 " />
              </div>
               <div>
                <h2 className="text-white text-xl lg:text-3xl mb-6 tracking-widest p-2">
                {cardNumber}
                </h2>
                <ul className="flex items-center justify-between p-3">
                  <li className="text-white uppercase text-base lg:text-xl tracking-widest"> {name} </li>
                  <li className="text-white text-base lg:text-xl tracking-widest"> {format(new Date(date), "MM/yy")} </li>
                </ul>
                </div>
            </article>
            <article className="backCard relative lg:ml-20">
            <p className="absolute right-10 text-lg top-28 lg:text-xl text-white tracking-widest">
            {cvc}
              </p>
            </article>
          </div>
          
          <div className="pt-8 px-5 pb-20">
            {!confirmed && (
              <form className="flex flex-col justify-center gap-8  lg:h-screen">
                <div>
                  <label htmlFor="cardholder_name">Cardholder Name</label>
                  <br />
                  <input
                    type="text"
                    name="cardholder_name"
                    id="cardholder_name"
                    placeholder="e.g. Sarthak Teotia"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="card_number">Card Number</label>  <br/>
                  <input
                    type="text"
                    name="card_number"
                    id="card_number"
                    placeholder="e.g. 1234 5678 9101 1213"
                    required
                    maxLength={19}
                    value={cardNumber
                      .replace(/\s/g, "")
                      .replace(/(\d{4})/g, "$1 ")
                      .trim()}
                    onChange={(e) => setCardNumber(e.target.value)}
                  />
                </div>

                <article className="flex items-center justify-between gap-8">
                  <div className="flex-1">
                    <label htmlFor="expiry_date">Exp. Date (MM/YY)</label>
                    <input
                      type="month"
                      name="expiry_date"
                      id="expiry_date"
                      placeholder="MM YY"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>

                  <div className="flex-1">
                    <label htmlFor="cvc">CVC</label> <br />
                    <input
                      type="number"
                      name="cvc"
                      id="cvc"
                      placeholder="e.g. 123"
                      maxLength= {3}
                      required
                      value={cvc}
                      onChange={(e) => setCvc(e.target.value)}
                    />
                  </div>
                </article>

                <button onClick={() => setConfirmed(true)} className="btn">
                  Confirm
                </button>
              </form>
            )}
          </div>

          </div>
        </section>
      </>
  );
}

export default App;

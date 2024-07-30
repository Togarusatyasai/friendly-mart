import "./Tamato.css";

const Tamato = () => {
  return (
  
      <>
            <div className="productinfo">
                <div className="product-img">
                    <img src=" https://tse4.mm.bing.net/th?id=OIP.OBKKA27v0VUeDTRMhzG_gAHaFX&pid=Api&P=0&h=180" alt="Sorry"/>
                </div>
                <div className="product_desc">
                    <div className="product_desc1">
                        Name:Tomato <br></br>
                        Price:₹ 100/kg
                    </div>
                    <div className="product_desc2">
                        <div className="quantity">
                            Quantity : <select name="qty" >
                                <option value="1">1kg</option>
                                <option value="2">2kg</option>
                                <option value="3">3kg</option>
                                <option value="4">4kg</option>
                                <option value="5">5kg</option>
                            </select>
                        </div>
                        <div className="next">
                            <div>
                                <button>Add to Cart</button>
                            </div>
                            <div>
                                <input type='submit' value="Buy Now"></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  );

}
export default Tamato;

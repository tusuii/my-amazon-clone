import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "@mui/icons-material/CurrencyRupee";
import { Checkbox } from "@mui/material";


function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items);
              <strong>0</strong>
            </p>
            <small className="subtotal_gift">
              <input type={Checkbox} /> This contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"Text"}
        ThousandSeperator={True}
        prefic={"e"}
      />
    </div>
  );
}

export default Subtotal;

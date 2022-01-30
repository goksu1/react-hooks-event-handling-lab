import React from "react";
const KeyPad=()=> {
const passInput = () => {console.log("Entering password..."); }

return (
<div>
<input type="password"  onChange={e => passInput(e)} />

</div>

)

}
export default KeyPad;
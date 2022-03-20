import React from "react";
import { useSelector, useDispatch } from "react-redux";

// initialState'te bulunan verilere componentler üzerinden useSelector ile erişebiliyorduk.
// Şimdi de initialState'de bulunan verileri değiştirmek için kullanacağımız metodları import etmemiz gerekiyor. Hatırlarsanız bu metodları counterSlice.js dosyası üzerinde counterSlice.actions olarak export etmiştik. 
import { increment, decrease } from "../redux/counter/counterSlice";
// örneğin increment() ile counter componenti üzerinden initialState'in değerini +1 arttırdığımızda, initialState'in değeri değişmiş olacak. Bu değişen değer, önce store.js'e gönderilecek oradan da ilgili reducer'a gönderilecek. İlgili reducer ise counterSlice.js üzerinde bulunmakta. 
// Önce store.js gönderilmesinin sebebi; tüm store'u index.js üzerinde provider ile dağıtmış olmak. 


function Counter() {
  const value = useSelector((state) => state.counter.value);
  const array = useSelector((state) => state.counter.array);

// State'imizi güncelleyecek olan metodu counterSlice üzerinde tanımlamıştık.
  const dispatch = useDispatch(); 
  // State'imizin arayüzde hangi işlemin yapıldığını bilmesi gerek. 
  // Bunu da dispatch() kullanarak kullanıcının ne yapmak istediğini bildirmek için kullandık.

  return (
    <div>
      <h3>counter.jsx</h3>
      <span> value: {value}</span> <br />
      <span> array: {array[2]} </span> <br />
      <div className="div">
        <button onClick={() => dispatch(increment())}>value = arttır</button> <br />
        <button onClick={() => dispatch(decrease())}>value = azalt</button>
        {/* <p>butonlar counter componenti üzerinden dispatch metoduyla counterSlice ile iletişim kurup initialState'i reducer aracılığıyla güncelliyor</p> */}
      </div>
    </div>
  );
}

export default Counter;

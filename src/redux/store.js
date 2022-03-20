import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // buradaki counter değişkenini state'imize istediğimiz component üzerinden erişirken kullanacağız. Bu erişimi sağlerken de useSelector() adlı hook'u kullanıyor olacağız.

    // Buradaki counterReducer nereden geliyor diye sorulabilir. Bu aslında counterSlice.js dosyamızda createSlice ile oluşturup içerisinde initalState belirlediğimiz ve export ettiğimiz objeyi ifade ediyor. Biz buraya import ederken counterReducer ismini verdik. counterReducer yerine başka bir şey de kullanabilirdik.

    // Tercih edilen; farklı bir isim vermek yerine reducer'ın ismini kullanmak.
    // Böyle olduğunda dosyamız şu şekilde değişecek
    // import counter from "./counter/counterSlice";
    // reducer: { counter: counter }
    // İkisi de aynı isimde olduğundan tekrar belirtmemize gerek olmayacak.
    // reducer: { counter } bu yeterli...
  },
});

import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  // Buradaki initialState veya actions'lar ile güncellenen state verileri, state.counter.value veya state.counter.array ile uygulamanın genelinden erişilebilir olacak. Bu erişimi istediğimiz component'te useSelector() kullanarak yapacağız.
  initialState: {
    value: 10,
    array: ["a", "b", "c"],
    // initialState'deki veri tipi array veya obje ise o veri tipinin kurallarına göre erişiyor olacağız. bknz: counter componenti 7. ve 15. satır.
    title: "Bu bir başlık",
  },
  reducers: {
    // buradaki (state): initialState içerisindeki veriyi ifade etmekte. 
    // State'i güncellemek istediğimizde güncellemek için kullanacağımız metodu burada tanımlayıp, aşağıda görüldüğü gibi export edip istediğimiz Component üzerinde import ederek kullanabileceğiz.
    increment: (state) => {
      state.value += 1;
    },
    decrease: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrease } = counterSlice.actions; 
// actions için initialState'i değiştirebilen fonksiyonlar diyebiliriz...

// Bir component üzerinden müdahale ederek initialState'i güncellemek için o component üzerinde dispatch() kullanmamız gerekiyor. 
// Dispatch ile yapılan güncellemeyi initialState'imize bildiriyor.

export default counterSlice.reducer;
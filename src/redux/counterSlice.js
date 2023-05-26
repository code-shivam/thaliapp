import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
  products: [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dtr0b1iwv/image/upload/v1646126014/images/item1_zkutrl.jpg",
      name: "Chapati",
      price: "15.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis. ",
    },

    {
      id: 2,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/2/29/Gunda_Pickel_1.jpg",
      name: "Pickle",
      price: "10.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis. ",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dtr0b1iwv/image/upload/v1646126014/images/item3_bixazb.jpg",
      name: "Curd",
      price: "30.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis. ",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dtr0b1iwv/image/upload/v1646126014/images/item4_ndkmnh.jpg",
      name: "Rasogulla",
      price: "100.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis. ",
    },
    {
      id: 5,
      image:
        "https://res.cloudinary.com/dtr0b1iwv/image/upload/v1646126015/images/item5_j8v6yq.jpg",
      name: "Daal",
      price: "140.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis. ",
    },
    {
      id: 6,
      image:
        "https://res.cloudinary.com/dtr0b1iwv/image/upload/v1646126014/images/item6_qukian.jpg",
      name: "Paneer-Butter-masala",
      price: "280.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis . ",
    },
  ],
  thali: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addTothali: (state, action) => {
      state.thali.push(action.payload);
    },
    RemoveItem: (state, action) => {
      state.thali = state.thali.filter((item)=> item.id != action.payload);
      
    },
    incerementCart: (state, action) => {
      state.thali.push(action.payload);
    },
    decrementCart: (state, action) => {
      state.thali.pop(action.payload);
    },
  },
});
export const { addTothali, RemoveItem, incerementCart, decrementCart } =
  counterSlice.actions;
export default counterSlice.reducer;

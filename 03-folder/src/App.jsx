import React from "react";
import Card from "./components/card";

const App = () => {
  return (
    <div className="parent">
      <Card
        user="meet"
        age={20}
        img="https://plus.unsplash.com/premium_photo-1723526592766-15d1fd0de4a5?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <Card
        user="Sarthak"
        age={66}
        img="https://media.gettyimages.com/id/166053583/vector/flying-super-hero.jpg?s=612x612&w=gi&k=20&c=HKy_50XG-grRCp0Ht_3VwC8-9B_0TR4n_ydptQQWBKM="
      />
    </div>
  );
};

export default App;

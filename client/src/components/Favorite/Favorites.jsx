import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCards } from "../../redux/actions";
import { useEffect } from "react";
import "./Favorite.css";

export default function Favorites(props) {
  const onClose = props.onClose;
  const dispatch = useDispatch();
  var myFavorites = useSelector((state) => state.myFavorites);
  console.log(myFavorites)

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div id="fav-div">
      <div id="fav-select">
        <div id="fav-title">
          <h2>Filters</h2>
      <span id="fav-span"class="material-symbols-outlined">
filter_alt
</span>
</div>

        <div class="wrapper_id">
          <div class="option">
            <input
              value="A"
              name="btn"
              type="radio"
              class="input"
              onClick={handleOrder}
            />
            <div class="btn">
              <span class="span">Ascending</span>
            </div>{" "}
          </div>
          <div class="option">
            <input
              value="D"
              name="btn"
              type="radio"
              class="input"
              onClick={handleOrder}
            />
            <div class="btn">
              <span class="span">Descending</span>
            </div>
          </div>
        </div>

        <div class="wrapper_gender">
          <div class="option">
            <input
              value="All"
              name="btn"
              type="radio"
              class="input"
              onClick={handleFilter}
            />
            <div class="btn">
              <span class="span">All</span>
            </div>{" "}
          </div>
          <div class="option">
            <input
              value="Male"
              name="btn"
              type="radio"
              class="input"
              onClick={handleFilter}
            />
            <div class="btn">
              <span class="span">Male</span>
            </div>{" "}
          </div>
          <div class="option">
            <input
              value="Female"
              name="btn"
              type="radio"
              class="input"
              onClick={handleFilter}
            />
            <div class="btn">
              <span class="span">Female</span>
            </div>{" "}
          </div>
          <div class="option">
            <input
              value="unknown"
              name="btn"
              type="radio"
              class="input"
              onClick={handleFilter}
            />
            <div class="btn">
              <span class="span">unknown</span>
            </div>{" "}
          </div>
        </div>
      </div>
      <div id="cards-div">
        {myFavorites.map((elemento, index) => (
          <Card
            key={index}
            id={elemento.id}
            name={elemento.name}
            status={elemento.status}
            species={elemento.species}
            gender={elemento.gender}
            origin={elemento.origin.name}
            image={elemento.image}
            onClose={onClose}
          />
        ))}
      </div>
    </div>
  );
}

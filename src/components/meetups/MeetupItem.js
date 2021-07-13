import {
  useContext
} from "react";

import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import FavoritesContext from "../../store/favorites-context";

function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function removeFavorite() {
    favoritesCtx.removeFavorite(props.id);
  }

  function toggleFavoritesStatusHandler() {
    if (itemIsFavorite) {
      removeFavorite();
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address
      });
    }
  }

  async function removeMeet() {
    console.log(props.id);
    await fetch("https://react-basic-meetups-34c83-default-rtdb.firebaseio.com/meetups/" + props.id + ".json", {
      method: 'DELETE'
    }).then(response => {
      return response.json();
    }).then(data => {
      console.log(data);
    });

    props.pleaseRefresh(true);

  }

  return (<li className={classes.item}>
    <Card>
      <div className={classes.image}>
        <img src={props.image} alt={props.title}/>
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
        <div className={classes.actions}>
          <button onClick={toggleFavoritesStatusHandler}>
            {
              itemIsFavorite
                ? "- Favorite"
                : "+ Favorite"
            }
          </button>
          <button onClick={ e => {
              window.confirm("Are you sure") && removeMeet();
          }}>
            Delete
          </button>

        </div>
      </div>
    </Card>
  </li>);
}

export default MeetupItem;
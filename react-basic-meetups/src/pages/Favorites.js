import {
  useContext
} from "react";
import {
  motion
} from 'framer-motion';

import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }

  return (
    <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} transition={{duration:0.5}}>
      <section>
        <h1>My Favorites</h1>
        {content}
      </section>
    </motion.div>
  );
}

export default FavoritesPage;
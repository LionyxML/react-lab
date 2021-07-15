import {
  useState,
  useEffect
} from "react";

import {
  motion
} from 'framer-motion';

import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [pleaseRefresh, setPleaseRefresh] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
        "https://react-basic-meetups-34c83-default-rtdb.firebaseio.com/meetups.json"
      )
      .then(response => {
        return response.json();
      })
      .then(data => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key]
          };

          meetups.push(meetup);
        }

        if (meetups.length === 0) {
          setIsEmpty(true);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
        setPleaseRefresh(false);
      });
  }, [pleaseRefresh]);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  if (isEmpty) {
    return (
      <section>
        <h1>All Meetups!</h1>
        <p>You've got no meetups. Add one!</p>
      </section>
    );
  }

  return (
    <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} transition={{duration:0.5}}>
      <section>
        <h1>All Meetups!</h1>
        <MeetupList meetups={loadedMeetups} pleaseRefresh={setPleaseRefresh} />
      </section>
    </motion.div>
  );
}

export default AllMeetupsPage;

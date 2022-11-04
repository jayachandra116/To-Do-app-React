import { notificationActions } from './notification-Slice';
import { todosActions } from './todosSlice';

const FIREBASE_URL='';

export const fetchToDosData = () => {
  return async (dispatch) => {
    //console.log("Calling fetchToDosData");
    const fetchData = async () => {
      const response = await fetch(
        FIREBASE_URL
      );
      if (!response.ok) {
        throw new Error('Could not fetch todos data!');
      }
      const data = await response.json();
      //console.log({data});
      return data.items;
    };

    try {
      //console.log('Calling fetchData() function');
      const todosData = await fetchData();
      //console.log({todosData});
      dispatch(
        todosActions.replaceToDos({
          toDos: todosData || []
        })
      );
    } catch (error) {
      notificationActions.showNotification({
        status: 'error',
          title: 'Error!',
          message: 'Fetching todo data failed!',
      })
    }
  };
};

export const sendToDosData = (toDos) => {
  return async (dispatch) => {
    dispatch(
      notificationActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending todos data!',
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        FIREBASE_URL,
        {
          method: 'PUT',
          body: JSON.stringify({
            items: toDos
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Sending todos data failed.');
      }
    };

    try {
      await sendRequest();
      dispatch(
        notificationActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent todos data successfully!',
        })
      );
    } catch (error) {
      dispatch(
        notificationActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending todos data failed!',
        })
      );
    }
  };
};

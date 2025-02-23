import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { createNewEvent } from "../../util/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import { queryClient } from "../../util/http.js";
export default function NewEvent() {
  const navigate = useNavigate();

  // useMutation is a hook that allows you to perform a mutation and handle the result of that mutation. It takes an object as an argument with the following properties:
  // mutationFn: A function that performs the mutation. It should return a promise.
  // onMutate: A function that is called before the mutation is performed. It receives the mutation arguments as an argument.
  // onSuccess: A function that is called when the mutation is successful. It receives the result of the mutation as an argument.
  // onError: A function that is called when the mutation fails. It receives the error as an argument.
  // onSettled: A function that is called when the mutation is either successful or failed. It receives the result or error as an argument.
  // retry: A function that allows you to retry the mutation.
  // status: The status of the mutation (idle, loading, success, error).
  // data: The result of the mutation.
  // error: The error of the mutation.
  // isIdle: A boolean value that is true when the mutation is in an idle state.
  // isLoading: A boolean value that is true when the mutation is in a loading state.
  // isSuccess: A boolean value that is true when the mutation is successful.
  // isError: A boolean value that is true when the mutation fails.
  // reset: A function that allows you to reset the mutation.
  // mutate: A function that allows you to perform the mutation
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: createNewEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"] }); // invalidate the cache so that the new event is fetched from the server, the queryKey must match the query we want to refetch
      // another argument exact: true can be passed to invalidateQueries to only invalidate the exact queryKey,usage : queryClient.invalidateQueries({queryKey:["events"],exact:true})
      navigate("/events");
    },
  });

  function handleSubmit(formData) {
    // The mutate function is used to perform the mutation. It takes an argument that is passed to the mutation function.
    // The mutation function is the function that performs the mutation. It should return a promise.
    // event is the data that is passed to the mutation function.
    mutate({ event: formData });
  }

  return (
    <Modal onClose={() => navigate("../")}>
      <EventForm onSubmit={handleSubmit}>
        {isPending && "Submitting...."}
        {!isPending && (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Create
            </button>
          </>
        )}
      </EventForm>
      {isError && (
        <ErrorBlock
          title="An error occurred"
          message={error.info?.message || "Failed to create event."}
        />
      )}
    </Modal>
  );
}

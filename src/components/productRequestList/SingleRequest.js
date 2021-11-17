//styles
import "./request.css";

export default function SingleRequest({ request }) {
  let netComments = [];

  if (request.comments) {
    const allComments = () => {
      request.comments.map((comment) => netComments.push({ comment }));
    };
    allComments();
  }

  return (
    <div className="request">
      <div className="left">
        <div className="upvotes">
          <img src="/icon-arrow-up.svg" id="upvoteIcon" alt="" />
          <p>{request.upvotes}</p>
        </div>
        <div className="details">
          <h1>{request.title}</h1>
          <p>{request.description}</p>
          <p id="requestCat">{request.category}</p>
        </div>
      </div>

      <div className="comments">
        <p>{netComments.length}</p>
        <img src="/icon-comments.svg" id="commentIcon" alt="" />
      </div>
    </div>
  );
}

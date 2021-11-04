const ProductRequestList = ({ requests }) => {
  return (
    <div>
      <h1>Product Request List</h1>
      {requests &&
        requests.map((request) => (
          <div key={request.id}>
            <p>{request.title}</p>
            <p>{request.category}</p>
            {request.comments.map((comment) => (
              <div key={comment.id}>
                <p>{comment.content}</p>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

export default ProductRequestList;

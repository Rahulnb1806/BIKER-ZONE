import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Comment = () => {

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = event.target.name.value;
    const message = event.target.message.value;

    if (name === '' || message === '') {
      toast.warn('Please fill in all required fields');
    } else {
      const commentData = { name, message };

      fetch('http://localhost:6005/comment', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentData),
      })
        .then((res) => {
          if (res.ok) {
            toast.success('Comment submitted successfully');
            form.reset();
            window.location.href="/"
          } else {
            toast.error('Failed to submit comment');
          }
        })
        .catch(() => toast.error('Server error. Try again later.'));
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="card upload6">
        <div className="card-body upload5">
          <form onSubmit={handleSubmit}>
            <h2>Leave a Comment</h2>
            
            <div className="upload0">
              <label value="name"><b>Name</b></label>
              <input type="text" name="name" className="ms-3" placeholder="Your Name" />
            </div>

            <div className="upload1">
              <label value="message"><b>Message</b></label>
              <textarea name="message" className="ms-3 form-control" rows="4" placeholder="Your Comment"></textarea>
            </div>

            <div className="upload7 mt-3">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Comment;
